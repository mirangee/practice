export default function startGame() {

    //1. 숫자 볼 화면에 띄우기
    makeIconList();
    //2. 랜덤숫자 하나 생성

    //3. 숫자 볼에 click 이벤트 발생하면 랜덤숫자와 클릭된 숫자 비교(클릭된 횟수 저장하기)

    //4. 숫자 비교하여 결과값 도출(UP, DOWN, WIN)
    // UP 이면 UP 아이콘 움직이기, h2의 begin 숫자 수정하고, 해당 숫자 이하 숫자 볼 삭제
    // DOWN 이면 DOWN 아이콘 움직이기, h2의 end 숫자 수정하고, 해당 숫자 이상 숫자 볼 삭제
    // WIN 이면 win 클래스의 성공 문구 보여주기
    
     
}

function makeIconList() {
    const $frag = document.createDocumentFragment();
    for(let i = 1; i <= 100; i++) {
        const $numberBall = document.createElement('div');
        $numberBall.classList.add('icon');
        $numberBall.textContent = `${i}`;
        $frag.appendChild($numberBall);
    }
    $numbers.appendChild($frag);
}