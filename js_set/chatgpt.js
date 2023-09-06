const $input = document.querySelector('input') //hidden처리
const $button = document.querySelector('.gpt-answer')
const $answer = document.querySelector('.answer')
const $loader = document.querySelector(".loader");
const $waitMsg = document.querySelector(".wait-msg");

const data = [{
  "role": "system",
  "content": "assistant는 홈 트레이닝 루틴을 추천한다."
}, {
  "role": "user",
  "content": "맨몸 운동 루틴을 추천해줘"
}, {
  "role": "assistant",
  "content": "맨몸 운동 루틴을 추천해드릴게요."
}, {
  "role": "user",
  "content": "기구가 없을 때 할 수 있는 운동을 알려줘"
}, {
  "role": "assistant",
  "content": "기구가 없으시다면 맨몸 운동을 해보시는 것은 어떨까요?"
}, {
  "role": "user",
  "content": "가슴 운동"
}, {
  "role": "assistant",
  "content": "기구가 마땅치 않다면 가슴 운동으로 가장 보편적인 푸쉬업이 있습니다."
}, {
  "role": "user",
  "content": "등 운동"
}, {
"role": "assistant",
"content": "가장 효과적인 등 운동으로는 턱걸이가 있습니다. 하지만 턱걸이의 갯수가 부족하다면, 낮은 철봉에서 인버티드로우를 먼저 수행하는 것 역시 등 근육 발달에 좋은 방법입니다."
}, {
  "role": "user",
  "content": "하체 운동"
}, {
  "role": "assistant",
  "content": "대표적인 하체 운동으로는 스쿼트와 런지가 있습니다."
}, {
  "role": "user",
  "content": "어깨 운동"
}, {
  "role": "assistant",
  "content": "푸쉬업의 변형 동작으로 어깨에 강한 자극을 줄 수 있는 파이크 푸쉬업을 추천합니다."
}, {
  "role": "user",
  "content": "복근 운동"
}, {
  "role": "assistant",
  "content": "대표적인 복근 운동으로는 크런치와 리버스 크런치가 있습니다. 하복부 운동으로는 행잉레그레이즈를 추천합니다."
}, {
  "role": "user",
  "content": "하복부 운동"
}, {
  "role": "assistant",
  "content": "대표적인 하복부 운동으로는 철봉에 매달리는 행잉레그레이즈가 있습니다. 철봉이나 집에 기구가 없다면, 바닥에서 레그레이즈를 하는 것 역시 효과적인 방법입니다."
}, {
  "role": "user",
  "content": "가슴"
}, {
  "role": "assistant",
  "content": "효과적인 가슴 근육 발달을 위해 다양한 방법의 푸쉬업을 시도해 보세요."
}, {
  "role": "user",
  "content": "푸쉬업"
}, {
  "role": "assistant",
  "content": "푸쉬업은 여러 종류가 있습니다. 기본적인 클래식 푸쉬업, 다이아몬드 푸쉬업, 파이크 푸쉬업, 힌두 푸쉬업 등 여러 변형 동작이 있으니 다양하게 시도해 보시는 것을 추천합니다."
}, {
  "role": "user",
  "content": "덤벨"
}, {
  "role": "assistant",
  "content": "덤벨이 있다면 집에서도 더욱 효과적이고 다양한 운동을 할 수 있습니다."
}, {
  "role": "user",
  "content": "케틀벨"
}, {
  "role": "assistant",
  "content": "케틀벨이 있다면 집에서도 더욱 효과적이고 다양한 운동을 할 수 있습니다."
}, {
  "role": "user",
  "content": "밴드"
}, {
  "role": "assistant",
  "content": "밴드가 있다면 집에서도 더욱 효과적이고 다양한 운동을 할 수 있습니다."
}]

//chatgpt api
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`

//localstorage에서 키워드 추출, make a routine 버튼
$button.addEventListener('click', e => {
  e.preventDefault();
  const receiveLS = localStorage.getItem('workout');
  if (receiveLS) {
    const outputLS = receiveLS.toString();
    data.push({
      "role": "user",
      "content": outputLS
    });
  }
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