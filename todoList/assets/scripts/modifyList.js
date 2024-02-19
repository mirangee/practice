export {
    modifyList,
    completeModList
};

function modifyList($li) {
    //1. 수정 모드 돌입
    // $text가 input 태그로 변화 .modify-input 적용
    // 단, input 태그에 $text 내용 넣어두기
    const $newInput = document.createElement('input');
    $newInput.classList.add('modify-input');
    $newInput.value = $li.firstElementChild.lastElementChild.textContent;
    $li.firstElementChild.replaceChild($newInput, $li.firstElementChild.lastElementChild);

    // .modify .lnr-undo 가 .lnr-checkmark-circle 변화
    $li.firstElementChild.nextElementSibling.firstElementChild.classList.replace('lnr-undo', 'lnr-checkmark-circle');
}

function completeModList($li) {
    // 2. 수정 완료 시 진행
    // input 태그가 $text로 변화, input 태그에 작성된 내용 $text에 저장
    const $newText = document.createElement('span');
    $newText.classList.add('text');

    const $input = document.querySelector('.modify-input');
    $newText.textContent = $input.value;
    $li.firstElementChild.replaceChild($newText, $li.firstElementChild.lastElementChild);

    // .lnr-checkmark-circle 가 .lnr-undo 변화
    $li.firstElementChild.nextElementSibling.firstElementChild.classList.replace('lnr-checkmark-circle', 'lnr-undo');

    // todoData에 변경된 text 내용 저장
    for (let i = 0; i < todoData.length; i++) {
        const id = +$li.dataset.id;
        if (todoData[i].id === id) {
            todoData[i].text = $input.value;
        }
    }
}