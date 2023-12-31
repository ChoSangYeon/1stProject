# 1stProject
# WR(Workout Recommend)
- 운동 초보자를 위한 홈트레이닝 루틴 추천 웹서비스
## 1. 목표와 기능
### 1.1 목표
- 홈 트레이닝으로 사용자들의 건강을 도모한다.
- 스스로 운동 루틴을 정하기 힘든 초보자들 및 집에서 어떤 운동을 해야할 지 모르겠는 사람들을 위한 서비스을 제공한다.
- 입력 키워드에 따라 새로워지는 루틴을 받으며 운동에 흥미를 잃지 않을 수 있도록 한다.
### 1.2 기능
- ChatGPT API 연동으로 홈트레이닝 루틴 추천
- 개개인이 집에 구비되어 있는 장비(ex. 기구없음, 아령''kg, 푸쉬업바, 풀업바 등)나 원하는 운동부위(ex. 가슴, 등, 하체 등)를 저장하면 이에 저장된 정보에 맞춤 운동 루틴 조정

## 2. 개발 환경 및 배포 URL
### 2.1 개발환경
- HTML/CSS/JavaScript
- VSCode
### 2.2 배포 URL
- https://chosangyeon.github.io/1stProject/

## 3. 프로젝트 구조
### 3.1 도안
- 4개의 페이지 구성, 메인 페이지, 입력페이지, 출력 페이지, 설명 페이지
- oven:<br>https://ovenapp.io/project/iEJeDlLhAzj9XAIXVrW25HZ5mgEwaqvH#BghWG
![Alt text](img/wr_plan.png)
### 3.2 마인드맵
- MindMeister:<br>https://www.mindmeister.com/app/map/2930201760
![Alt text](img/mindmap.png)
### 3.3 구조
```
|   index.html
|   README.md
|
+---css_set
|       box_text.css
|       common.css
|       input_keyword.css
|       loading.css
|
+---html_set
|       01_input_keyword.html
|       02_routine.html
|       03_htu.html
|
+---img
|       armcurl.jpg
|       backImg.gif
|       delLocal.gif
|       handstand.jpg
|       hang.jpg
|       inputDel.gif
|       jump.jpg
|       kettlebell.jpg
|       loading.gif
|       loutine.gif
|       man.jpg
|       mindmap.png
|       pageChange.gif
|       saveLocal.gif
|       swing.jpg
|       wr_plan.png
|       yoga.jpg
|
\---js_set
        chatgpt.js
        input_keyword.js
```
## 4. UI
### 4.1 서비스 사용 설명 페이지를 제외한 모든 페이지들은 배경 이미지 슬라이드가 적용됩니다.<br>
![Alt text](img/backImg.gif)<br>
- 서비스 사용 설명 페이지의 경우 문단이 길어 화면 전환이 잦으면, 사용자의 가독성이 떨어질 것을 방지하기 위해 배경 이미지 하나만 넣었습니다.
- 루틴 출력 페이지의 경우는 루틴 출력에 걸리는 대기 시간에 지루함 방지를 위해서 전환 효과를 주었습니다.
- 서비스의 주된 사용자가 운동 초보자임을 가정하였을 때, 루틴을 전부 암기하기보다는 한 가지 동작을 수행하고 다시 화면을 볼 것을 가정하였고, 사용자가 서비스 이용 중 가장 오래 볼 페이지인 루틴 출력 페이지이기에 서비스 자체가 동적인 느낌을 받을 수 있도록 의도하였습니다. 
### 4.2 "start", "keyword", "how to use", "back" 버튼 클릭으로 페이지 전환이 가능합니다.<br>
![Alt text](img/pageChange.gif)<br>
- "how to use" 페이지에서 사용자가 WR이라는 웹 서비스에 대한 상세 설명을 확인 할 수 있습니다.

### 4.3 "keyword" 페이지에서 홈 트레이닝 루틴을 추천 받기 위한 키워드를 입력하고 "save" 와 "delete" 버튼 클릭을 통해 키워드를 저장 및 삭제를 할 수 있습니다.<br>
![Alt text](img/inputDel.gif)<br>
- "루틴 추천 키워드" 입력란에 운동하고 싶은 부위, 방식, 혹은 소지하고 있는 운동기구를 입력하고 "+" 버튼으로 하나씩 배열로 만들어 출력합니다. 
- 하단의 "delete" 버튼을 클릭하면 출력된 내용을 지웁니다.

### 4.4 "save", "delete" 버튼을 클릭하면 입력된 키워드가 로컬스토리지에 저장, 삭제 됩니다.<br>
![Alt text](img/saveLocal.gif)<br>
![Alt text](img/delLocal.gif)<br>
- 키워드는 로컬스토리지에 {key: "workout", value: "입력한 키워드의 배열"}로 저장됩니다.<br>
- "delet" 버튼은 사용자가 보는 화면의 키워드와 로컬스토리지도 함께 지워줍니다.

### 4.5 "start" 페이지에서 "make a routine" 버튼을 클릭하면 로컬스토리지에 저장된 키워드를 추출하여 루틴을 생성합니다.<br>
![Alt text](img/loading.gif)<br>
- 출력문을 작성하는 동안 "ChatGPT의 추천 루틴" 박스에 회전하는 로딩 표시와 메세지가 나타납니다.
- 로딩 표시와 메세지는 "make a routine" 버튼으로 동작하며, 출력문이 완료되면 다시 사라집니다. 

### 4.6 로딩이 완료되면 로딩 메세지는 사라지고 키워드를 바탕으로 홈 트레이닝 루틴이 출력됩니다.<br>
![Alt text](img/loutine.gif)<br>
- 각 루틴 별 동작 설명, 세트 수를 줄바꿈 처리로 구분하여 출력합니다.
- 추천 루틴을 받았지만, 동일한 키워드로 다른 루틴을 원할 경우 "make a routine" 버튼을 다시 클릭하면 로딩 표시와 메세지가 다시 나타나며, 새로운 추천 루틴을 출력합니다.

## 5. 후기
- 첫 개인 프로젝트를 진행하면서, 앞서 배웠던 HMTL, CSS, JS를 적용해 볼 수 있는 좋은 기회였습니다. 
- 또한 개발 공부 경험 자체가 적다보니 스스로의 기획과 JS코드 구현에 대한 능력이 미흡했던 부분을 직면할 수 있었습니다.
- 단순한 기능을 너무 어렵게 생각하여 필요 없는 코드를 만들게 되었고, 수정 과정을 거치면서 보완할 수 있었습니다.
- 기획 단계에서 개발 일정을 명세화하지 않아서 개인 일정과 함께 프로젝트 일정을 소화하기에 어려움이 있었습니다. 다음 프로젝트를 준비하게 될 때는 개발 일정과 계획 수립을 잘 세워두어야 더욱 진행에 차질이 없을 것임을 배웠습니다.