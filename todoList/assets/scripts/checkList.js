
export default function checkList($target) {    
    if($target.checked === true) {
        // input이 checked 되면 text에 .checked 추가
        $target.parentNode.classList.add('checked');
    } else {
        $target.parentNode.classList.remove('checked');
    }
    
    // todoData.done을 false <-> true로 변환
    const id = +$target.parentNode.parentNode.dataset.id;
    for(let i = 0; i < todoData.length; i++) {
        if(todoData[i].id === id) {
            todoData[i].done = !todoData[i].done; 
        }
    }
}
