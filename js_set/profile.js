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
  outputValue.innerHTML = inputData.join("&nbsp&nbsp");
}

//if문을 사용한다면? if (출력값의 길이가 > .submit-box width) {줄바꿈을 해라}
//or &nbsp로 띄우는거 말고 <br>을 사용하고, htu.html 처럼 스크롤? x -> 띄어쓰기
// 띄어쓰기하고 적당할때 줄바꿈? if문 만이 답인가
// outputValue의 배열을 localstorage에 저장 -> routine.html에서 꺼내오기