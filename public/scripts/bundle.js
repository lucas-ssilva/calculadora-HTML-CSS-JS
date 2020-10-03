"use strict";

var input = document.querySelector('#display');

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
    document.form.textview.value = eval(exp);
  } else {
    alert('Digite um valor');
  }
}
