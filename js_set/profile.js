const savedValues = [];

function displayInputValue() {
  const inputValue = document.getElementById("inputValue").value;
  savedValues.push(inputValue);
  updateOutputDiv();
  document.getElementById("inputValue").value = '';
}

function updateOutputDiv() {
  const outputDiv = document.getElementById("output-div");
  outputDiv.innerHTML = savedValues.map(value => `<span class="value">${value}</span>`).join('');
}

function deleteValue(index) {
  savedValues.splice(index, 1);
  updateOutputDiv();
}
//클릭 시 삭제되도록 구현하려고 하였으나, 동작하지 않음

//출력받은 .value를 localstorage에 저장해서, routine.html에서 chatgpt가 확인할 수 있도록하기
