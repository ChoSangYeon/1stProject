// 프로필 이미지 업로드
function setThumbnail(event) {
  const reader = new FileReader()

  reader.onload = function(event) {
    const img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    document.querySelector("div#image_container").appendChild(img);
  };
  reader.readAsDataURL(event.target.files[0]);
}

// 키워드 출력
const inputData = [];

function sendInputValue() {
  const keyWord = document.getElementById("inputValue");
  inputData.push(inputValue.value);
  keyWordOutput();
  document.getElementById("inputValue").value = '';
  console.log(inputData);
}

function keyWordOutput() {
  const outputValue = document.getElementById("outputValue");
  document.getElementById("outputValue").innerHTML = inputData;
  outputValue.innerHTML = inputData.join("&nbsp;&nbsp;");
}

// save 버튼으로 배열을 localstorage에 저장
function sendLocalStorage() {
  const sendLSButton = document.querySelector('#sendLSButton');
  sendLSButton.addEventListener('click', function() {
    const workoutArray = inputData;
    let makeValue = JSON.stringify(workoutArray);
    makeValue = inputData.toString();
    localStorage.setItem('workout', makeValue);
  });
}