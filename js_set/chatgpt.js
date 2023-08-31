const $input = document.querySelector('input')
const $button = document.querySelector('.gpt-answer')
const $answer = document.querySelector('.answer')

const data = []
data.push({
  "role": "system",
  "content": "assistant는 홈트레이닝 루틴을 추천합니다." 
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`   

$button.addEventListener('click', e => {
  e.preventDefault()
  const contents = $input.value
  data.push({
    "role": "user",
    "content": contents
  })
  $input.value = ''

  chatGPTAIP()
})

function chatGPTAIP() {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'applicatjson'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
    $answer.innerHTML = `<p>${res.choices[0].message.content}</P>`
  })
}

//profile.html에서 받은 정보로 routine.html에 띄우게 하는 것이 목표
//profile.html의 input값을 localstorage에 넘기기
//js파일 따로 있어야할 듯?

//할루시네이션 잡기
//배웠던 데이터 더 추가하는 거 연습해보기