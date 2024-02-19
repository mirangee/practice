
// + 버튼 요소 취득
const $addBtn = document.getElementById('add');

const $todoText = document.getElementById('todo-text');

// todo-data 객체를 담을 배열 선언
let todoData = [];

// 리스트업할 ul 태그 요소 취득
const $todoList = document.querySelector('.todo-list');

//checkbox 버튼
const $checkInput = document.querySelector('input[type=checkbox]');

const $label = document.querySelector('.checkbox');
const $text = document.querySelector('.text');