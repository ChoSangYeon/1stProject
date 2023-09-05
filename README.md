# 1stProject
# WR(Workout Recommend)
- 운동 초보자를 위한 홈트레이닝 루틴 추천 웹서비스
## 1. 목표와 기능
### 1.1 목표
- 홈 트레이닝으로 사용자들의 건강을 도모한다.
- 스스로 운동 루틴을 정하기 힘든 초보자들 및 집에서 어떤 운동을 해야할 지 모르겠는 사람들을 위한 서비스을 제공한다.
- 유튜브 및 운동 어플리케이션 등 홈 트레이닝 콘텐츠는 많이 있으나, 개개인의 몸과 상황, 조건에 맞는 맞춤 루틴을 추천 받기는 어렵기 때문에, 운동에 흥미를 잃어 포기하는 경우가 있다. 매번 새로워지는 운동 루틴을 제공함으로 사용자에게 서비스를 장기적으로 이용할 수 있도록 한다.
### 1.2 기능
- ChatGPT API 연동으로 홈트레이닝 루틴 추천
- 개개인이 집에 구비되어 있는 장비(ex. 기구없음, 아령''kg, 푸쉬업바, 풀업바 등)나 원하는 운동부위(ex. 가슴, 등, 하체 등)를 저장하면 이에 저장된 정보에 맞춤 운동 루틴 조정
## 2. 개발 환경 및 배포 URL
### 2.1 개발환경
- VSCode
### 2.2 배포 URL
- https://chosangyeon.github.io/1stProject/
## 3. 프로젝트 구조와 개발 일정
### 3.1 프로젝트 구조
- 초기 도안 작성<br>
![Alt text](img/wr_plan.png)<br>
- 마인드맵: MindMeister: 구현도
- https://www.mindmeister.com/app/map/2930201760
### 3.2 개발 일정(WBS)
- 2023-08-30 ~ 2023-09-06
## 4. UI
### 1. 서비스 사용 설명 페이지를 제외한 모든 페이지들은 배경 이미지 슬라이드가 적용됩니다.<br>
![Alt text](img/background.gif)<br>

### 2. "start", "profile", "how to use", "back" 버튼 클릭으로 페이지 전환이 가능합니다.<br>
![Alt text](img/button.gif)<br>

### 3. "profile" 페이지에서 홈 트레이닝 루틴을 추천 받기 위한 키워드를 입력하고 "save" 버튼 클릭을 통해 키워드를 저장할 수 있습니다.<br>
![Alt text](img/keyword.gif)<br>

### 4. "save" 버튼을 클릭하면 입력된 키워드가 로컬스토리지에 저장됩니다.<br>
![Alt text](img/localstorage.gif)<br>

### 5. "start" 페이지에서 "make a routine" 버튼을 클릭하면 로컬스토리지에 저장된 키워드를 추출하여 루틴을 생성합니다. 생성하는 동안 "WR이 출력 중입니다"라는 로딩 메세지가 화면에 나타납니다.<br>
![Alt text](img/loading.gif)<br>

### 6. 로딩이 완료되면 로딩 메세지는 사라지고 키워드를 바탕으로 홈 트레이닝 루틴이 출력됩니다.<br>
![Alt text](img/loutine.gif)<br>