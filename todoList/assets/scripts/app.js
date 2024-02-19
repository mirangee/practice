import addList from "./addList.js"; 
import checkList from "./checkList.js";



// 즉시 실행 함수
(function(){
  // 할 일 추가 버튼 이벤트 핸들러
  $addBtn.addEventListener('click', () => {
    addList();
  })

  // 할 일 체크 버튼 이벤트 핸들러
  $todoList.addEventListener('click', (e) => {
    if (!e.target.matches('input[type = checkbox]')) {
      return;
    }
    checkList(e.target);
  })

  // 할 일 삭제 버튼 이벤트 핸들러

  // 할 일 수정 버튼 이벤트 핸들러
})();