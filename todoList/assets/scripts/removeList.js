export default function removeList ($li) {
    // 해당 li 삭제(단, 애니메이션 적용되기까지 1.5s 필요)
    setTimeout(() => {
        $todoList.removeChild($li);
    },1500);

    // li 삭제 시 애니메이션 적용
    $li.classList.add('delMoving');

    // 해당 데이터 삭제
    const id = +$li.dataset.id;
    for(let i = 0; i < todoData.length; i++) {
        if(todoData[i].id === id) {
            todoData.splice(i,1);
        }
    }
}