let todoData = [];
export default function addList() {
  
  // input에 텍스트가 작성되었는지 확인
  if ($todoText.value.trim() === '') {
    alert('텍스트를 입력하세요! 추후 css 붙이기');
  } else {
    // 전역 배열 변수에 들어온 데이터를 객체 형태로 저장
    const todo = {
      id: makeId(),
      text: $todoText.value,
      done: false // checkbox 체크했는지 여부
    };

    todoData.push(todo);
    console.log(todoData);

    // 텍스트가 있으면 li 요소 생성 후 덧붙이기
    makeElements();
  }
  
}

function makeId() {
  if (todoData.length === 0) {
    return 1;
  } else {
    return +todoData[todoDate.length - 1].id + 1;
  }
}

function makeElements() {

}