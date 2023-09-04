const $input = document.querySelector('input')
const $button = document.querySelector('.gpt-answer')
const $answer = document.querySelector('.answer')

const data = []
data.push({
  "role": "system",
  "content": "assistant는 홈트레이닝 루틴을 추천합니다."
})

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

const receiveLS = localStorage.getItem('workout');

if (receiveLS) {
  const outputLS = receiveLS.toString();
  data.push({
    "role": "user",
    "content": outputLS
  });
}

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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  })
  .then(res => res.json())
  .then(res => {
    console.log(res)
    $answer.innerHTML = `<p>${res.choices[0].message.content}</p>`
  })
}