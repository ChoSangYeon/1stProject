// 키워드 입출력
const inputData = [];

function sendInputValue() {
  const inputValue = document.getElementById("inputValue");
  const keyWord = inputValue.value.trim();

  if (keyWord !== "") {
    inputData.push(keyWord);
    keyWordOutput();
    inputValue.value = '';
    console.log(inputData);
  }
}

function keyWordOutput() {
  const outputValue = document.getElementById("outputValue");
  outputValue.innerHTML = inputData.join("&nbsp;&nbsp;");
}

// save 버튼으로 배열을 localstorage에 저장
function sendLocalStorage() {
  localStorage.setItem('workout', JSON.stringify(inputData));
}

// delete 버튼으로 전체 삭제
function deleteAll() {
  localStorage.removeItem('workout');
  inputData.splice(0, inputData.length);
  keyWordOutput();
}