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

//localstorage 값 가져오기
const receiveLS = localStorage.getItem('workout');
const outputLS = receiveLS.toString(); //문장 출력
document.write(outputLS); // -> input의 역할을 할 수 있도록
console.log(outputLS); //