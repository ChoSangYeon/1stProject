// 프로필 이미지 업로드
function setThumbnail(event) {
  const reader = new FileReader()

  reader.onload = function(event) {
    const img = document.createElement("img");
    img.setAttribute("src", event.target.result);
    const imgContainer = document.querySelector("div#image_container");
    imgContainer.innerHTML = '';
    imgContainer.appendChild(img);
  };
  reader.readAsDataURL(event.target.files[0]);
}

//루틴 추천 키워드, 배열 저장
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