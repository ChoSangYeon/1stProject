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