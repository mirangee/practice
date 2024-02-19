
export default function addList() {
  // $todoText.addEventListener('keyup', e => {
  //   if (e.keyCode === 13) {
  //     alert('입력했다!');
  //   }
  // })

  // input에 텍스트가 작성되었는지 확인
  if ($todoText.value.trim() === '') {
    $todoText.style.background = 'orangered';
    $todoText.setAttribute('placeholder', '텍스트를 입력은 필수입니다');
    $todoText.focus();
  } else {
    $todoText.style.background = '';
    $todoText.setAttribute('placeholder', '할 일을 입력하세요');
    // 전역 배열 변수에 들어온 데이터를 객체 형태로 저장
    const todo = {
      id: makeId(),
      text: $todoText.value,
      done: false // checkbox 체크했는지 여부
    };

    todoData.push(todo);

    // 텍스트가 있으면 li 요소 생성 후 덧붙이기
    makeElements(todo);
  }

  // li 요소 덧붙인 후 input 비우기
  $todoText.value = '';

}

function makeId() {
  if (todoData.length === 0) {
    return 1;
  } else {
    return +todoData[todoData.length - 1].id + 1;
  }
}

function makeElements(todo) {
  // label 태그 생성
  const $label = document.createElement('label');
  $label.classList.add('checkbox');

  const $input = document.createElement('input');
  $input.setAttribute('type','checkbox');
  $label.appendChild($input);
  
  const $text = document.createElement('span');
  $text.classList.add('text');
  $text.textContent = todo.text;
  $label.appendChild($text);

  // modify div  태그 생성
  const $modDiv = document.createElement('div');
  $modDiv.classList.add('modify');

  const $undoIcon = document.createElement('span');
  $undoIcon.className = 'lnr lnr-undo';
  $modDiv.appendChild($undoIcon);

  // remove div 태그 생성
  const $removeDiv = document.createElement('div');
  $removeDiv.classList.add('remove');

  const $removeIcon = document.createElement('span');
  $removeIcon.className = 'lnr lnr-cross-circle';
  $removeDiv.appendChild($removeIcon);

   // 위 요소를 포괄하는 li 태그 생성
   const $li = document.createElement('li');
   $li.classList.add('todo-list-item');
   $li.dataset.id = todo.id;
  
   [$label, $modDiv, $removeDiv]
   .forEach( $ele => $li.appendChild($ele));

  // ul에 li 붙이기
  $todoList.appendChild($li);
}