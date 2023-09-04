//hidden처리
const $input = document.querySelector('input')
const $button = document.querySelector('.gpt-answer')
const $answer = document.querySelector('.answer')
const $loader = document.querySelector(".loader");
const $waitMsg = document.querySelector(".wait-msg");

const data = []
data.push({
  "role": "system",
  "content": "assistant는 홈트레이닝 루틴을 추천합니다."
})

//chatgpt api
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

//localstorage에서 키워드 추출
const receiveLS = localStorage.getItem('workout');

if (receiveLS) {
  const outputLS = receiveLS.toString();
  data.push({
    "role": "user",
    "content": outputLS
  });
}

//make a routine 버튼
$button.addEventListener('click', e => {
  e.preventDefault()
  const contents = $input.value
  data.push({
    "role": "user",
    "content": contents
  })
  $input.value = ''

  showLoad();

  chatGPTAIP();
})

//루틴 출력
function chatGPTAIP() {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
    $answer.innerHTML = `<pre>${res.choices[0].message.content}</pre>`

    hideLoad();
  })
}

//페이지 로딩
function showLoad() {
  if ($loader && $waitMsg) {
    $loader.style.display = "block";
    $waitMsg.style.display = "block";
  }
}
function hideLoad() {
  if ($loader && $waitMsg) {
    $loader.style.display = "none";
    $waitMsg.style.display = "none";
  }
}

//데이터를 추가해서 할루시네이션 잡기