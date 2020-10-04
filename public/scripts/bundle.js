"use strict";

var input = document.querySelector('#display');
input.value = localStorage.getItem('lastResult');

function insert(num) {
  input.value = input.value + num;
}

function c() {
  input.value = "";
}

function equal() {
  var exp = document.form.textview.value;
  console.log(exp);

  if (exp) {
    input.value = eval(exp);
    localStorage.setItem('lastResult', input.value);
  } else {
    alert('Digite um valor');
  }
}
