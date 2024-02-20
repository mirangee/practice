import addList from "./addList.js";
import checkList from "./checkList.js";
import removeList from "./removeList.js";
import {
  modifyList,
  completeModList
} from "./modifyList.js";


// 즉시 실행 함수
(function () {
  // 할 일 추가 버튼 이벤트 핸들러
  $addBtn.addEventListener('click', () => {
    addList();
  })

  // enter 눌렀을 때도 할 일 추가 이벤트 발생
  $todoText.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      $addBtn.click();
      event.preventDefault();
    }
  })

  // 할 일 체크 버튼 이벤트 핸들러
  $todoList.addEventListener('click', (e) => {
    if (!e.target.matches('input[type = checkbox]')) {
      return;
    }
    checkList(e.target);
  })

  // 할 일 삭제 버튼 이벤트 핸들러
  $todoList.addEventListener('click', (e) => {
    if (!e.target.matches('.remove .lnr-cross-circle')) {
      return;
    }
    removeList(e.target.parentNode.parentNode);
  })

  // 할 일 수정 모드 돌입 이벤트 핸들러
  $todoList.addEventListener('click', (e) => {
    if (e.target.matches('.lnr-undo')) {
      modifyList(e.target.parentNode.parentNode);
    } else if (e.target.matches('.lnr-checkmark-circle')) { // 수정 완료 이벤트 핸들러
      completeModList(e.target.parentNode.parentNode);
    } else {
      return;
    }
  })

})();