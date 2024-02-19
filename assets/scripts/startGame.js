export default function startGame() {

    //1. 숫자 볼 화면에 띄우기
    
    makeIconList();

    //2. 랜덤숫자 하나 생성
    const range = 100 // 1~range 숫자로 범위 설정
    const randomNumber = Math.round(Math.random() * (range - 1)) + 1;
    console.log(randomNumber);

    //3. 숫자 볼에 click 이벤트 리스너 생성 및 클릭된 숫자 저장(클릭된 횟수 저장하기)
    let clickCount = 0;

    const clickEventHandler = (e) => {
        if (!e.target.matches('#numbers .icon')) {
            return;
        }
        clickCount++;
        let iconNumber = +e.target.dataset.value;
        compareNumbers(iconNumber);
    }

    $numbers.addEventListener('click', clickEventHandler);

    

    //4. 숫자 비교하여 결과값 도출(UP, DOWN, WIN)
    function compareNumbers(pickedNumber) {

        if (randomNumber === pickedNumber) {
            // 1. .win 보이면서 몇 번만에 맞혔는지 보여주기
            $win.style.opacity = 1;
            $win.style.zIndex = 10;
            $chance.textContent = clickCount;

            // 2.  up, down 아이콘 움직임 멈추기
            $up.classList.remove('selected');
            $down.classList.remove('selected');

            // 3. 클릭해도 동작 안 하도록 이벤트 리스너 멈추기
            $numbers.removeEventListener('click', clickEventHandler);
            
        } else if (randomNumber > pickedNumber) {
            console.log('UP!!');
            // 1. #begin 숫자를 pickedNumber+1 로 수정
            $begin.textContent = pickedNumber + 1;

            // 2. pickedNumber 이하 숫자볼 삭제
            let numToRemove = pickedNumber; // 삭제해야할 볼 개수 저장
            const $icons = document.querySelectorAll('.icon');
            for(let $i of $icons) {
                if (numToRemove === 0) {
                    break;
                } else if ($i.dataset.value <= pickedNumber) {
                    $numbers.removeChild($i);
                    numToRemove--; // 삭제해야할 볼 개수 차감
                }
            }

            // 3. UP 아이콘 움직이기
            $up.classList.add('selected');
            $down.classList.remove('selected');

        } else {
            console.log('Down!');
            // 1. #end 숫자를 pickedNumber-1 로 수정
            $end.textContent = pickedNumber - 1;

            // 2. pickedNumber 이상 숫자볼 삭제
            let numToRemove = range - pickedNumber + 1; // 전체범위에서 자신 포함(+1하는 이유) 이상의 개수를 삭제해야 함
            const $icons = document.querySelectorAll('.icon');
            for(let $i of $icons) {
                if (numToRemove === 0) {
                    break;
                } else if ($i.dataset.value >= pickedNumber) {
                    $numbers.removeChild($i);
                    numToRemove--;
                }
            }
            
            // 3. UP 아이콘 움직이기
            $down.classList.add('selected');
            $up.classList.remove('selected');
        }
    }
}



function makeIconList() {
    const $frag = document.createDocumentFragment();
    for (let i = 1; i <= 100; i++) {
        const $numberBall = document.createElement('div');
        $numberBall.classList.add('icon');
        $numberBall.textContent = i;
        $numberBall.dataset.value = i;
        $frag.appendChild($numberBall);
    }
    $numbers.appendChild($frag);
}