const data = [{
  "이름": "최원빈",
  "이번 주 과제": `### 14차시: 쉬는시간 - CSS, GIT 갖고놀기 
  CSS 선택자
  종류와 사용법 숙지
  display: flex
  flexbox의 기본 개념 - CSS: Cascading Style Sheets | MDN
  display: grid
  Basic concepts of grid layout - CSS: Cascading Style Sheets | MDN
  position: fixed / sticky / relative / absolute
  git이란?
  git을 왜 쓸까?
  git 사용법
  merge, branch, commit, checkout, pull, push, HEAD, origin등 용어 이해
  (+ .gitignore, .env, .gitkeep, .prettierc)
  원격 git 저장소
  github
  issue / pull request를 왜 쓸까 생각해보기
  브랜치 전략 (git-flow)
  main(master), develop, feature, hotfix, release 브랜치 이해하기
  git gui
  github desktop, kraken, fork, sourcetree 등 하나 사용해보기
  (트랙장은 git-graph 사용 중, VSCode Extention이라 따로 설치할 필요 없음. 짱짱임.
  회장님은 GitKraken 특)간지남, 기능사용이 간편함 Merge gitbranch생성   )
  코드 컨벤션이란?
  1. 코드 컨벤션의 필요성(https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
  브랜치 네이밍 규칙
  다양한 문서를 돌아다니며 보편적인 명명 규칙 찾아보기 (git flow 위주)
  이게 git-flow다! 를 보여줄 수 있는 실습 리포지토리 하나 파서 보여주기
  간결한 브랜치 네이밍
  develop에서 나와서 다시 합쳐지는 서로 다른 feature들
  hotfix, release, main(master) 관리
  실습 페이지 원하는 구도로 이쁘게 만들어보기
  
  
  
  
  
  css 선택자
  
  
   
  
  구조 가상 클래스 셀렉터
  
  
  :first-child 
  셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택
  :last-child
  셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택 
  
  
  :nth-child(n)
  셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택
  :nth-last-child(n)
  셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택 
  ** n을 만약 2n이라고 지정할 경우 짝수에만 css를 적용할수있음.
  
  
  가상 요소 셀렉터
  
  
  가상 요소는 특정 부분에 스타일을 적용하기 위해 사용된다. 
  가상 요소에는 두개의 콜론 (::) 을 사용함. 
  css 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용하지 못한다. 
  특정부분이란
  요소 콘텐츠의 첫글자 또는 첫줄
  요소 콘텐츠의 앞 또는 뒤
  
  ::after
  콘텐츠의 뒤에 위치하는 공간을 선택한다.
  ::before
  콘텐츠의 앞에 위치하는 공간을 선택한다.
  
  → 가상 요소 셀렉터를 이용해서 todo의 li요소에 css 를 적용해보면, 
  
   →이런식으로 메뉴바를 설정할수있다. 
  display: flex 
  
  flex 컨테이너에 적용하는 속성들 
  
  
  display:flex
  
  
  flex  아이템들은 가로로 배치되고, height은 컨테이너의 높이만큼 늘어난다.
  
  
  flex-direction
  
  아이템들이 배치되는 방향을 결정하는 속성.
  
  
  
  flex-wrap 
  
  컨테이너가 아이템을 한줄에 다 담아서 여유공간이 없어 넘칠때 아이템 줄바꿈을 해준다. 
  
  justify-content ( = 메인축 방향 정렬)
  flex-start : 기본값 
  flex-end : 아이템들을 끝점으로 정렬
  center : 아이템들을 가운데로 정렬
  space-between : 아이템들의 사이(between)에 균일한 간격을 만듬. 
  space-around : 아이템들의 사이(between)에 space-between 보다 더 좁은 간격을 만들어줌. 
  space-evenly : 아이템들의 사이와 양 끝 
  -space 들의 차이
  
  
  align-items ( = 메인의 수직축 방향 정렬) 
  stretch (기본값) : 아이템들이 수직축 방향으로 쭉 늘어남(채워서) 
  flex-start : 아이템들을 시작점으로 정렬한다. 
  flex-end : 아이템들을 끝으로 정렬한다. 
  center : 아이템들을 가운데로 정렬한다.
  baseline : 이 아이템들을 텍스트 베이스라인 기준으로 정렬한다. 
  *baseline이란?
  
  
  
  align-content 
  → flex-wrap: wrap;이 설정된 상태에서 아이템들이 2줄 이상 들어갈때 수직축 방향 정렬을 결정하는 속성. 
  방향만 수직축이지 stretch, flex-start, flex-end, center, space-between, space-around, space-evenly의 적용되는 속성은 같다. 
  
  
  
  
  
  display: grid
  
  flex 와의 차이점? 
  → flex는 한 방향 레이아웃 시스템이고(1차원), grid는 두방향(가로세로) 레이아웃 시스템(2차원)이다. 따라서, grid를 사용하면 flex보다 더 복합적인 레이아웃 표현이 가능하다. 
  
  
  
  
  display: grid
  display: grid;를 적용하는게 시작이다. 
  
  
  
  grid의 형태 정의 
  → 컨테이너에 grid트랙의 크기를 지정해주는 속성
  grid-template-rows : 행(row)의 배치의 크기 
  grid-template-columns : 열(column)의 배치의 크기
  
  **단위 
  예) 고정 크기인 경우
  
  → 행의 배치의 크기를 200px, 200px, 500px로 지정하겠다는 뜻. 
  
  
  예) 가변 크기인 경우
  
  → 행의 배치의 크기를 ⅓, ⅓, ⅓ 으로 나누겠다는 뜻. 
  이때, fr이라는 단위는 숫자 비율대로 크기를 나눈다. 
  
  예) 둘을 섞어서 쓰는 경우
  → 이런식으로 나뉘게 된다. 
  
  
  
  실제 사용해본 예시
  → input에 입력된값과 그 옆의 버튼의 위치를 지정해주기 위해 grid를 사용해보았다. 
  
  → 결과창을 보면 59px, 59px이 동일하게 들어가고 나머지 비율을 결과라는 텍스트의 값이 먹고있는것을 볼수있다. 
  
  
  
  repeat 함수와 같이 쓰기 
  repeat함수를 쓰면 반복되는 값을 자동으로 처리할수있어 편리하다.
   형태 
  → repeat(반복횟수, 반복값)
  예) repeat(5, 1fr) = 1fr 1fr 1fr 1fr 1fr 
  
  
  
  
  minmax 함수 
  최댓값과 최솟값을 지정할수있음. 
  예) minmax(100px, auto) → 최소한 100px, 최대는 자동(auto) 늘어나게
  → minmax를 설정하지 않았을때
  
  
  → minmax를 설정하였을때 
  
  
  
  gap 을 통해 간격 만들기
  row-gap: 10px → row 방향으로 간격을 10px 줘라
  column-gap: 20px → column방향으로 간격을 20px 줘라 
  gap: 10px → row방향, column방향으로 간격을 10px 줘라
  
  
  
  grid 형태를 자동으로 정의하는 법 
  grid-template-columns, grid-template-rows 의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성.
  만약, ‘ grid-template-rows : repeat(3, minmax(100px, auto)); ‘ 를 통해 각 셀의 최소 높이를 100px로 지정하고 100px 을 넘어가면 알아서 늘어나도록 하기 위해 저 코드를 썼다. 
  근데 만약 row의 개수를 알수 없을땐 어떻게 해야할까?
  그럴때, grid-auto-rows를 쓰면 해결된다. 
  ‘ grid-auto-rows: minmax(100px, auto) ‘ 를 써주면 굳이 횟수를 지정하지 않아도 알아서 반복되어 처리해준다. 
  
  
  
  각 셀의 영역 지정
  이 속성들은 grid 아이템에 적용하는 속성이며, 각 셀의 영역을 지정해준다. 
  아래 영역과 같이 gird 라인의 번호가 매겨져있는데, 이 번호를 이용하여 column과 row 의 범위를 지정할수있다. 
  
  위의 빨간색 영역을 표현하자면 
  
  
  column방향으로 시작점 : grid-column-start: 1
  column방향으로 끝점 : grid-column-end: 3
  row방향으로 시작점 : grid-row-start: 1
  row방향으로 끝점 : grid-row-end: 2
  
  만약 이 위의 과정을 줄여서 작성하자면
  
  grid-column: 1 / 3;
  grid-row: 1 / 2;  
  
   → 이런식으로 줄여서(?)  표현할수있다. 
  
  
  
  
  (링크)
  
  정렬
  
  → 정렬 구분 기준 
  
  
  
    <아이템 그룹 정렬>
  align-content → 세로 방향으로 아이템 그룹 정렬
  justify-content → 가로 방향으로 아이템 그룹 정렬 
  
  
  <전체 아이템 정렬>
  align-items → 세로 방향으로 아이템 정렬
  justify-items → 가로 방향으로 아이템 정렬 
  place-items → align-items, justify-items를 같이 쓸수있는 속성
  
  
    <개별 아이템 정렬>
      *개별 아이템 = 한 아이템만을 지정
  align-self → 세로 방향으로 개별 아이템 정렬
  justify-self → 가로 방향으로 개별 아이템 정렬
  place-self → align-self, justify-self를 같이 쓸수있는 속성
  
  
  position . 
  css position 속성은 요소에 사용되는 위치 결정 방법을 지정한다. 
  5가지로 구분할수있는데 
  static → 기준 없음(배치 불가능/기본값)
  fixed → 뷰포트 기준으로 배치 
  relative → 요소 자기 자신을 기준으로 배치
  absolute → 부모(조상)요소를 기준으로 배치
  sticky → 스크롤 영역 기준으로 배치 
  
  
  모든 요소는 top, bottom, left, right 를 통해 최종 위치가 적용된다. 
  top: 요소의 position기준에 맞는 위쪽에서의 거리를 설정
  bottom: 요소의 position기준에 맞는 아래쪽에서의 거리를 설정
  left: 요소의 position기준에 맞는 왼쪽에서의 거리를 설정
  right: 요소의 position 기준에 맞는 오른쪽에서의 거리를 설정 
  
  
  사용법
  기준을 잡는다. (예 - position: relative; )
  이동시킨다. (예 - top: 50px; )
  
  
  
  
  static positioning 
  html은 기본적으로 static positioning(정적 배치) 가 됨. 
  정적으로 위치 지정되면 항상 페이지의 기본적인 흐름에 따라 배치됨. 
  top, bottom, left, right 속성에 의해 영향을 받지 않는다. 
  
  
  fixed
  position: fixed를 사용하면 모든 페이지의 같은 위치에 출력됨.(고정값) 
  즉, 웹페이지가 스크롤 되어도 고정 위치로 지정된 요소는 항상 같은 곳에 위치함. 
  대표적인 예로, 페이지에서 고정돼야하는 요소인 네비게이션바 , 혹은 페이지에서 나타나는 이벤트나 하단 우측에 계속해서 뜨는 이벤트 등등 페이지 스크롤에 상관없이 고정해야할 것들에게 쓰인다. 
  
  
  sticky
  사용자의 스크롤 위치를 기준으로 배치됨. 
  sticky요소는 스크롤 위치에 따라 relative와 fixed 사이를 전환하는데, 주어진 오프셋 위치가 뷰포트에 충족될때까지 상태적으로 배치된다음에 주어진 위치가 되면 고정(sticky)이 된다.
  
  relative 
  요소 자기 자신을 원래 위치( = static일때 위치) 를 기준으로 배치한다.
  원래 위치를 기준으로 top, bottom, left, right에서 얼마만큼 떨어질지 결정한다. 
  위치를 이동하면서 다른 요소에 영향을 주지 않는다. 
  문서 상 원래 위치가 그대로 유지된다.  
  
  
  absolute
  요소를 일반적인 문서 흐름에서 제거함. 
  가장 가까운 위치에 있는 조상 요소를 기준으로 배치 
  조상 요소 위치를 기준으로 top, bottom, left, right 에서 얼마만큼 떨어질지 결정한다. (음수도 가능)
  문서상 원래 위치를 잃어버린다. (아래에 잇는 div가 해당 자리를 차지함)
  
  
  부모 relative & 자식 absolute 
  부모 요소에는 relative를 주고, 자식요소에는 absolute를 주어서 많이 사용된다. 
  얘네가 특이한 점은 부모요소를 벗어나는 자식요소를 표현할수있다는것이다. 
  대표적인 예로
  
  책 이미지에 마우스를 올려놓으면 1이라는 박스가 그림을 벗어나 위로 올라가는 것을 볼수있는데, 저런걸 이 두 속성을 통해 구현해낸다. 
  
  bottom, top, right, left 와 같은 위치 값들에 -50px과 같이 마이너스 값을 주게 되면 부모 요소를 벗어나 자식 요소가 위치를 자유롭게 지정할수있게된다.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  Git 
  
  git이란?
  git을 왜 쓸까?
  git 사용법
  merge, branch, commit, checkout, pull, push, HEAD, origin등 용어 이해
  (+ .gitignore, .env, .gitkeep, .prettierc)
  
  git 이란? 
  git의 시초?
  2005년 리누스 토르발즈라는 천재 사람이 쓰던 버전 관리 도구가 갑자기 유료가 되서 2주만에 만들어낸 시스템이다. 
  지금은 전 세계적으로 모두가 쓰고있는 분산 버전 관리 시스템이다. 
  
  
  git이란? 
  소스코드 관리를 위한 형상관리 ( = 버전관리)  도구
  파일을 수정할때마다 그 데이터를 기록하여 필요할때 이전 버전으로 파일을 복구할 수 있게 해주며, 이를 분산시켜서 여러 개발자가 협업하여 프로젝트를 효율적으로 관리할수있도록 도와주는 협업 도구이다. 
  소스코드 관리 도구 중 git을 가장 많이 사용하는 이유는 로컬저장소를 이용한 빠른 퍼포먼스와 브랜치를 통한 효율적인 협업때문이다. 
  
  
  git을 왜 쓸까?
  소스코드를 주고받을 필요 없이 같은 파일을 여러명이 동시에 작업하는 병렬 개발이 가능
  만약 프로젝트를 개발하며 다른 개발자와 협업 시, 새로운 기능을 개발하는 버전, 버그를 수정하는 버전 등등 프로젝트는 여러가지 버전을 가질수있음. 이 버전들을 브랜치로 구분할 수 있으며, git은 이러한 브랜치를 메타 데이터 관리를 통해 자유롭게 움직일수있음.
  브랜치를 통해 개발 한 뒤, 합치는 merge로 개발을 진행할 수 있다.  
  신속하고 편리하다. 
  빠르고 대형 프로젝트나 이력이 많은 작업에 매우 합리적이다.
  장소에 구애받지 않고 협력 가능
  repository의 완전한 복사본을 로컬 장비에 둘 수 있다. 
  로컬 저장소가 있으니 속도도 빠르고 자신의 로컬에 부담 없이 커밋도 할 수 있으며 원격저장소가 터지더라도 로컬 저장소를 통해 복구도 가능하다. 
  
  
  git 사용법
  
  
  git의 동작법
  git은 분산 버전 관리 시스템이기 때문에 리모트 서버에 있는 소스를 수정하려면 로컬 환경으로 소스를 클론 ( = 모든 소스코드를 복사하여 사용자의 컴퓨터로 받아옴.) 이 필요하다. 
  이후 gir은 로컬 환경의 파일을 추적하고 있다가 사용자가 소스를 수정하면 그 변경 사항을 감지 
  →  사용자가 변경사항이나 반영하고 싶은 파일이나 소스코드의 라인을 고른 뒤 리모트 서버에 업로드함. 
  
  
  기본 개념
  
  
  Remote / Origin 
  remote : 리모트 서버 자체 
  
  ** 리모트 서버 ??
   → 구글 드라이브 같은 클라우드 스토리지인데, 이 서버를 제공해주는 대표적인 업체로 github, bitbucket, GitLab 과 같은 회사들이 있다. 
  이 회사들이 시스템에 필요한 리모트 서버와 git을 좀 더 편리하게 사용할 수 있는 기능들을 제공한다. 
  
  
  origin : 리모트 서버의 관례적인 이름
  git을 사용할때 어떤 리모트 서버에서 변경사항을 업로드 할 것인지 정해야하는데, 반드시 하나의 리모트 서버만 사용할 수 있는 것이 아니기 때문에 내가 사용하는 리모트 서버의 이름을 정해줘야한다. 이때 자주 쓰이는 이름이 origin이다. 
  
  
  Repository
  repository : 저장소라는 뜻으로, 리모트 서버 내에서 구분되는 프로젝트 단위이다. 
  우리가 구글 드라이브 사용할때 여러개 디렉토리 만들어서 용도에 따라 파일을 나눠서 구분하는거랑 똑같다. 
  일반적으로 한 개의 레파지토리는 하나의 프로젝트를 의미하지만 경우에 따라서 레파지토리 하나에 여러 개의 프로젝트를 구성하기도 한다. 
  레파지토리를 클론받을때는 해당 레파지토리를 가리키는 url 리 필요한데, url의 맨 마지막에 .git 이라는 확장자를 가진다. 
  url 예시) 
  
  
  Branch
  branch : 일종의 독립된 작업을 진행하기 위한 작업 공간의 개념
  git을 초기화하면 기본적으로 master 브랜치가 생긴다. 이 아이가 메인 브랜치 역할을 한다. 
  브랜치가 어떤 브랜치를 계속해서 분리시키는거고, 분리된 브랜치는 분리될 당시 부모 브랜치 상태를 그대로 가지고있다. 
  개발자는 각각의 브랜치에서 개발을 진행한 뒤 나중에 다시 master 브랜치로 변경사항을 합친다.
  
  
  
  
  `
}, {"이름" : "곽재우",
"이번 주 과제" : `BCSD_FE 14주차 곽재우

CSS 선택자
전체 선택자, *

전체 선택자는 모든 요소를 선택한다. 문서 내의 모든 요소와 일치한다.
네임스페이스 제한을 둘 수 있다.
자식 선택자에도 사용할 수 있다.
유형 선택자

유형 선택자는 노드 이름을 사용해 요소를 선택한다.
문서 내에서 선택한 모든 요소에 스타일을 적용한다.
콤마(,)로 그룹으로 선택할 수 있다.
클래스 선택자, .

dot 연산자(.)로 접근
요소의 클래스 네임을 기반으로 요소를 선택한다.
li.spacious와 같이 li 태그에서 클래스 네임이 spacious인 요소를 모두 선택할 수 있다.
ID 선택자, #

요소의 ID 값을 비교해서 동일한 ID를 가진 요소를 선택한다. (물론 ID값은 고유함)
특성 선택자

특성 선택자는 주어진 특성의 존재 여부나 그 값에 따라 요소를 선택한다.
자식 결합자


자식 결합자는 ‘>’ 오른쪽에 놓인 요소가 왼쪽에 놓은 요소의 바로 밑에 위치할 경우에만 선택한다.
가상 클래스(의사 클래스)

가상 클래스는 선택자에 추가하는 키워드로, 선택한 요소가 특별한 상태일 때만 스타일을 적용한다. 예를 들어 :hover를 사용하면 선택한 요소에 포인터를 올렸을 때만 스타일을 적용할 수 있다.
:active 가상 클래스는 사용자가 활성화한 요소(버튼 등)를 나타낸다. 활성의 기준은 마우스로 누르는 순간부터 떼는 시점까지를 의미한다.

:active 가상 클래스는 주로 <a>, <button>과 함께 사용한다.


가상 요소 선택자
선택한 요소의 일부분에만 스타일을 입힐 수 있다.
예를 들어 ::before이나 ::after로 navbar에 구분선을 추가할 때 사용할 수 있다.


display: flex
flexbox의 기본 개념 - CSS: Cascading Style Sheets | MDN
flexbox라 불리는 Flexible Box module은 flexbox 인터페이스 내의 아이템의 공간을 배분하고 강력한 정렬기능을 제공하는 1차원 레이아웃 모델이다.
1차원으로 정의되는 이유는, 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다루기 때문이다.
이는 행과 열을 함께 조절하는 그리드(grid)의 2차원 모델과는 대조된다.
주축과 교차축
flexbox를 다루려면 주축과 교차축이라는 두 개의 축에 대한 정의를 알아야 한다.
주축은 flex-direction 속성을 사용하여 지정하며 교차축은 이에 수직인 축으로 결정된다.
flex-direction은 4개의 값을 가질 수 있다. (row, row-reverse, column, column-reverse)
기본 값은 row이며, row는 요소들이 행 방향을 따르고 column은 요소들이 열 방향을 따르며 정렬된다.
flexbox를 활용하려면 flex 컨테이너가 존재해야 한다. 아이템들을 정렬하기 위해 flex 컨테이너로 아이템들을 감싸주어야 한다. flex 컨테이너를 정의하려면 아이템들을 감싸는 요소에 display : flex 속성을 주면 된다. (flex 컨테이너의 일차자식, 바로 아래에 존재하는 요소가 flex 항목이다)
display : flex
요소를 flex 컨테이너로 지정하게 되면 기본적으로 flex-direction : row, flex-wrap : nowrap으로 지정된다.
flex-wrap은 flex 컨테이너 내의 아이템들이 강제로 한 줄에 배치되게 할 것인지, 또는 가능한 영역 내에서 벗어나지 않고 여러 줄로 나누어 표현할 것인지 결정하는 속성이다. nowrap은 강제로 한 줄에 배치하는 속성이고 이와 대조되는 wrap 속성이 존재한다.
추가로 flex-direction과 flex-wrap을 합쳐서 flex-flow로 사용하고 첫 번째 값은 flex-direction, 두 번째 값은 flex-wrap을 줄 수 있다고 한다. (근데 나눠서 작성하는게 뭔가 의미도 직관적인거 같다..지극히 주관적인 생각 근데 또 한 줄에 작성하면 괜찮은거 같기도함 )
align-items
flex 컨테이너에 지정하는 속성이다.
교차축을 따라 flex 항목을 정렬한다.
초기값은 stretch이며 이 경우 항목의 높이는 flex 컨테이너 높이를 따른다. (행이 하나일때만) 즉 교차축 방향으로 컨테이너를 가득 채우게 된다.
속성
stretch (default)
center
flex-start
flex-end
justfiy-content
마찬가지로 flex 컨테이너에 지정하는 속성이다.
주축을 따라 flex 항목을 정렬한다.
초기값은 flex-start로 flex 컨테이너 시작선에서부터 정렬된다.
속성
flex-start (default)
flex-end
center
space-between : 각 항목 간 gap을 균등배분한다.

space-around : space-between에서 시작선 및 끝선과 항목간 gap도 고려한다. 이때 시작선 및 끝선과 항목간 거리와 항목과 항목 사이의 거리의 비율은 1:2이다.

space-evenly : space-around에서 비율이 1:1로 균등하게 적용하는 속성이다.

display: grid
Basic concepts of grid layout - CSS: Cascading Style Sheets | MDN
그리드 레이아웃(Grid Layout)은 페이지를 여러 주요 영역으로 나누는 데에 아주 효과적이다.
가로 행과 세로 열을 기준으로 요소를 정렬할 수 있다.
flex 컨테이너처럼 그리드(grid) 컨테이너에 display:grid 속성을 주면 그리드 컨테이너가 되고 해당 요소 바로 아래에 존재하는 요소들은 그리드 아이템이 된다.
그리드의 행과 열은 각각 grid-template-columns, grid-template-rows로 정의한다.
grid-template-columns는 세로 열 트랙을 정의한다. 

위와 같이 그리드 아이템과 컨테이너를 정의하고 grid-template-columns를 적용하면 세로 열 방향으로 너비 200px만큼 3개의 트랙을 할당해준다.

그리드 트랙을 정의하는 데 있어서 아주 편한 방법이 바로 fr이다.
fr 단위는 각 트랙의 너비(높이)를 비율로 정의할 수 있다.
grid-template-columns : 1fr 1fr 1fr 와 같이 정의하면 세로 열 트랙을 균등한 비율로 3개 만들어준다. 그리고 이것을 repeat(3, 1fr)과 같이 반복 표기법으로 간단하게 작성할 수 있다.
응용하면 다음과 같이 작성도 가능하다.

좌우 끝에는 20px씩 할당하고 중간에는 6개의 트랙을 균등한 비율로 할당해준다.






position
position 속성은 문서 상에 요소를 배치하는 방법을 지정한다.
position 속성에는 fixed / sticky / relative / absolute를 정의할 수 있으며 top, right, bottom, left 속성이 요소를 배치할 최종 위치를 결정한다.
static (default)
요소를 일반적인 문서 흐름에 따라 배치한다. 
top, right, bottom, left, z-index 속성이 아무런 영향을 주지 않는다.
relative
요소를 먼저 일반적인 문서 흐름에 따라 배치하고, 자기 자신을 기준으로 top, right, bottom, left 값에 따라 오프셋을 적용한다. 오프셋은 다른 요소에 영향을 주지는 않는다.
그래서 요소가 차지하는 공간 자체는 static일 때와 동일하다.



absolute
요소를 일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않는다.
최종 위치는 top, right, bottom, left 값이 정한다.
부모 엘리먼트 내부에 속박되지 않고 독립된 배치 문맥(positioning context)을 가지게 된다. 따라서 엘리먼트를 문서 상에서 어디든지 원하는 위치에 자유롭게 배치시킬 수 있다. (이때 부모 요소의 position이 relative로 정의되어있으면 부모 요소 범위에 한정된다)
예시
fixed
요소의 속성을 fixed로 지정해줄 경우 해당 요소는 부모 요소를 완전히 벗어나서 독립되어 브라우저 화면 상(viewport)에서 어디든지 원하는 위치에 자유롭게 배치시킬 수 있다. 특히 화면을 스크롤해도 영향을 받지 않기 때문에 스크롤에 따라 다른 요소들이 상하좌우로 움직일 때 fixed element는 위치가 변하지 않는다.
가장 대표적인 예시는 navigation bar이다.
sticky
sticky는 postition이 static으로 설정되어 있는 것처럼 부모 요소에서 공간을 차지한다.
그러다가 스크롤을 통해 뷰포트에서 일정 위치를 벗어나면 fixed 인 것처럼 고정되어 있는 모습을 표현할 수 있다.
sticky는 부모 요소의 크기를 기준으로 위치가 정해진다.
위 속성들과 마찬가지로 top, right 등의 속성의해 위치가 정해진다.
해당 요소의 height를 지정해주어야 sticky 속성이 적용된다.
기본 레이아웃 실습


git이란?
git을 왜 쓸까?
버전 관리(형상 관리)
분산 개발 가능 : git clone 명령어로 원하는 프로젝트를 내 로컬 컴퓨터로 복사 가능. 나중에 협업할 때는 클론해서 가져온 프로젝트를 수정해서 다시 merge할 수 있다고 함(나는 아직 경험하지 못했다 ㅜ)
작업 내역 관리 : git의 저장소에 푸시할 때 커밋 로그를 작성함으로써 커밋 내역을 관리하여 프로젝트 안정성을 높일 수 있다.

git 사용법
merge, branch, commit, checkout, pull, push, HEAD, origin등 용어 이해
기본적인 명령어
Add($ git add) : 파일을 로컬 저장소에 추가해야 한다. 먼저 커밋을 해야하는데, 커밋하기 전에 임시로 저장하는 명령어이다.  
커밋(commit, $ git commit -m “commit log”) : 파일을 추가하거나 변경 내용을 로컬 저장소에 저장하는 작업
상태 확인($ git status) : 저장이 완료 되었는지 상태를 확인할 수 있다.
푸시(push, $ git push origin master) : 파일을 추가하거나 변경 내용을 원격 저장소(github)에 업로드하는 작업.
로컬 저장소를 밀어(push) 원격 저장소에 반영하는 것
기본적으로 작은 작업 단위로 커밋하고, 어느정도 작업이 일단락 되었을 때 푸시를 한다고 한다.









브랜치(branch)
여러 버전 관리를 용이하게 해주는 구조
명령어
git branch : 현재 브랜치 목록을 보여준다. ( ‘*’가 붙은 것이 현재 위치한 브랜치다)
git branch “branch name” : 브랜치를 생성한다.  

git checkout “branch name” : 다른 브랜치로 이동한다.
git checkout -b “branch name” : 브랜치 만들고 바로 이동할 수 있다.
checkout 명령어로 다른 브랜치로 이동해서 위처럼 add, commit, push로 원격 저장소에 푸시할 수 있다.
그러면 깃헙 저장소(원격 저장소)에는 새로운 브랜치가 하나 생기고 거기에도 내가 푸시한 파일이 생긴다.
git pull : 원격 저장소의 파일을 내 로컬 저장소로 가져온다(땡겨온다).
실습으로 브랜치를 하나 만들어서 원격 저장소에 푸시까지 마친 상태에서 pull 명령어를 공부해봤는데 문득 그런 생각이 들었다. git clone도 원격 저장소 파일을 가져오는건데 pull이랑 뭐가 다른걸까?
clone은 기존 작업하던 파일에 관계없이 원격 저장소 파일을 그대로 가져온다. 그래서 작업 중이던 파일이 있는데 클론해버리면 직접 복구해야한다. 그래서 프로젝트 시작할 때만 clone을 사용한다.
pull은 기존 작업 내용과 pull로 가져올 파일을 비교해서 최신버전에 맞게 병합한다. 그래서 기존 작업 파일이 존재할 때 pull을 해도 기존 파일이 사라지지 않고 원격 저장소 파일과 병합된다.
.gitignore
.env
.gitkeep
.prettierc





(+ .gitignore, .env, .gitkeep, .prettierc)
원격 git 저장소
github
issue / pull request를 왜 쓸까 생각해보기
pull request
가정 : 깃헙에 내가 진행하는 프로젝트의 파일이 존재하는 flow-repo라는 이름의 원격 저장소가 존재한다. 그리고 내 로컬 저장소와 원격 저장소인 flow-repo가 연결되어(git add remote)있다. 이 상태로 혼자서 프로젝트를 진행중이다. 이때 다른 팀원이 프로젝트에 합류했다. 팀원은 내 원격 저장소인 flow-repo의 주소를 클론해서 자신의 로컬 저장소와 연결시킨다. 그리고 개발을 진행하여 변경사항을 적용하고자 한다. 마찬가지로 git 기본 명령어를 사용하여 git add → git commit → git push를 진행한다. 이때 PR(Pull Request)이 발생한다.
PR이 발생하는 이유는 flow-repo 원격 저장소는 처음에 내가 개발하던 로컬 저장소에서 파일을 푸시한 곳이다. 그런데 다른 동료 개발자가 주소를 클론해가서 변경 내용을 적용할 때 아무런 과정 없이 바로 원격 저장소에 푸시되면 안된다. 그렇게 되면 아무나 원격 저장소 주소를 클론해서 맘대로 변경사항을 적용할 수 있기 때문이다. 그러다가 코드를 다 지우고 푸시해도 막을수가 없는 것이다. 그래서 PR이 존재한다. 다른 동료가 작성한 변경 사항을 검토하고 기존 원격 저장소에 적용할 것인지 판단하고 그것을 받아들이는(Pull Request)것이 PR이며 협업에 있어서 원격 저장소의 파일을 신중하게 변경 및 관리하기 위해서 PR이 존재하는 것이다.


브랜치 전략 (git-flow) 및 네이밍 규칙
main(master), develop, feature, hotfix, release 브랜치 이해하기
master : 기준이 되는 브랜치로 제품을 배포하는 브랜치
develop : 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능을 merge 
feature : 단위 기능을 개발하는 브랜치로 develop 브랜치에서 분기하며, 기능 개발이 완료되면 develop 브랜치에 merge. 
release : 배포를 위해 master 브랜치로 보내기 전에 먼저 QA(품질검사)를 하기위한 브랜치
hotfix : master 브랜치로 배포를 했는데 버그가 생겼을 때 긴급 수정하는 브랜치 (핫픽스를 해야되는 상황이면 개발자들이 슬플 거 같다… 아마도..)
master와 develop을 중요한 메인 브랜치로 운영하고 나머지는 필요에 의해 운영한다.
우아한 형제들의 git-flow에 따르면
master 브랜치에서 develop 브랜치 분기
개발자들은 develop 브랜치에 자유롭게 커밋
기능 구현이 있는 경우 develop 브랜치에서 feature-* 브랜치를 분기
배포를 준비하기 위해 develop 브랜치에서 release-* 브랜치 분기
테스트 진행하면서 발생하는 버그 수정은 release-* 브랜치에 직접 반영
테스트 완료되면 release 브랜치를 master와 develop에 merge
커밋 메시지
feat : 새로운 기능 추가, 기존의 기능을 요구 사항에 맞추어 수정
fix : 기능에 대한 버그 수정
build : 빌드 관련 수정
chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
ci : CI 관련 설정 수정
docs : 문서(주석) 수정
style : 코드 스타일, 포맷팅에 대한 수정
refactor : 기능의 변화가 아닌 코드 리팩터링 ex) 변수 이름 변경
test : 테스트 코드 추가/수정
release : 버전 릴리스
git gui
트랙장 님의 git-graph를 사용해보기로 결정하였다.
Git-graph


마 이게 git-flow다! 를 보여줄 수 있는 실습 리포지토리 하나 파서 보여주기
프로젝트 : Simple Counter & Todo-list App
브랜치 전략 구성 : git-flow로 진행
https://github.com/jaewoogwak/git-flow/tree/develop
master, develop 브랜치를 메인 브랜치로 운영
develop 브랜치에서 개발 진행하고 컴포넌트 및 기능 단위 개발은 feature 브랜치 분기하여 개발
feature 브랜치에서 개발 완료 시 develop 브랜치에 merge
develop 브랜치에서 release 브랜치 분기하여 테스트 진행하고 이상 없으면 develop, master 브랜치에 merge


코드 컨벤션이란?
코드 컨벤션의 필요성(https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)

실습 페이지 원하는 구도로 이쁘게 만들어보기



`},
{"이름": "김하나",
  "이번 주 과제": `### 14차시: 쉬는시간 - CSS, GIT 갖고놀기 
  CSS 선택자
  종류와 사용법 숙지
  display: flex
  flexbox의 기본 개념 - CSS: Cascading Style Sheets | MDN
  display: grid
  Basic concepts of grid layout - CSS: Cascading Style Sheets | MDN
  position: fixed / sticky / relative / absolute
  git이란?
  git을 왜 쓸까?
  git 사용법
  merge, branch, commit, checkout, pull, push, HEAD, origin등 용어 이해
  (+ .gitignore, .env, .gitkeep, .prettierc)
  원격 git 저장소
  github
  issue / pull request를 왜 쓸까 생각해보기
  브랜치 전략 (git-flow)
  main(master), develop, feature, hotfix, release 브랜치 이해하기
  git gui
  github desktop, kraken, fork, sourcetree 등 하나 사용해보기
  (트랙장은 git-graph 사용 중, VSCode Extention이라 따로 설치할 필요 없음. 짱짱임.
  회장님은 GitKraken 특)간지남, 기능사용이 간편함 Merge gitbranch생성   )
  코드 컨벤션이란?
  1. 코드 컨벤션의 필요성(https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
  브랜치 네이밍 규칙
  다양한 문서를 돌아다니며 보편적인 명명 규칙 찾아보기 (git flow 위주)
  이게 git-flow다! 를 보여줄 수 있는 실습 리포지토리 하나 파서 보여주기
  간결한 브랜치 네이밍
  develop에서 나와서 다시 합쳐지는 서로 다른 feature들
  hotfix, release, main(master) 관리
  실습 페이지 원하는 구도로 이쁘게 만들어보기
  
  
  
  
  
  css 선택자
  
  
   
  
  구조 가상 클래스 셀렉터
  
  
  :first-child 
  셀렉터에 해당하는 모든 요소 중 첫번째 자식인 요소를 선택
  :last-child
  셀렉터에 해당하는 모든 요소 중 마지막 자식인 요소를 선택 
  
  
  :nth-child(n)
  셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택
  :nth-last-child(n)
  셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택 
  ** n을 만약 2n이라고 지정할 경우 짝수에만 css를 적용할수있음.
  
  
  가상 요소 셀렉터
  
  
  가상 요소는 특정 부분에 스타일을 적용하기 위해 사용된다. 
  가상 요소에는 두개의 콜론 (::) 을 사용함. 
  css 표준에 의해 미리 정의된 이름이 있기 때문에 임의의 이름을 사용하지 못한다. 
  특정부분이란
  요소 콘텐츠의 첫글자 또는 첫줄
  요소 콘텐츠의 앞 또는 뒤
  
  ::after
  콘텐츠의 뒤에 위치하는 공간을 선택한다.
  ::before
  콘텐츠의 앞에 위치하는 공간을 선택한다.
  
  → 가상 요소 셀렉터를 이용해서 todo의 li요소에 css 를 적용해보면, 
  
   →이런식으로 메뉴바를 설정할수있다. 
  display: flex 
  
  flex 컨테이너에 적용하는 속성들 
  
  
  display:flex
  
  
  flex  아이템들은 가로로 배치되고, height은 컨테이너의 높이만큼 늘어난다.
  
  
  flex-direction
  
  아이템들이 배치되는 방향을 결정하는 속성.
  
  
  
  flex-wrap 
  
  컨테이너가 아이템을 한줄에 다 담아서 여유공간이 없어 넘칠때 아이템 줄바꿈을 해준다. 
  
  justify-content ( = 메인축 방향 정렬)
  flex-start : 기본값 
  flex-end : 아이템들을 끝점으로 정렬
  center : 아이템들을 가운데로 정렬
  space-between : 아이템들의 사이(between)에 균일한 간격을 만듬. 
  space-around : 아이템들의 사이(between)에 space-between 보다 더 좁은 간격을 만들어줌. 
  space-evenly : 아이템들의 사이와 양 끝 
  -space 들의 차이
  
  
  align-items ( = 메인의 수직축 방향 정렬) 
  stretch (기본값) : 아이템들이 수직축 방향으로 쭉 늘어남(채워서) 
  flex-start : 아이템들을 시작점으로 정렬한다. 
  flex-end : 아이템들을 끝으로 정렬한다. 
  center : 아이템들을 가운데로 정렬한다.
  baseline : 이 아이템들을 텍스트 베이스라인 기준으로 정렬한다. 
  *baseline이란?
  
  
  
  align-content 
  → flex-wrap: wrap;이 설정된 상태에서 아이템들이 2줄 이상 들어갈때 수직축 방향 정렬을 결정하는 속성. 
  방향만 수직축이지 stretch, flex-start, flex-end, center, space-between, space-around, space-evenly의 적용되는 속성은 같다. 
  
  
  
  
  
  display: grid
  
  flex 와의 차이점? 
  → flex는 한 방향 레이아웃 시스템이고(1차원), grid는 두방향(가로세로) 레이아웃 시스템(2차원)이다. 따라서, grid를 사용하면 flex보다 더 복합적인 레이아웃 표현이 가능하다. 
  
  
  
  
  display: grid
  display: grid;를 적용하는게 시작이다. 
  
  
  
  grid의 형태 정의 
  → 컨테이너에 grid트랙의 크기를 지정해주는 속성
  grid-template-rows : 행(row)의 배치의 크기 
  grid-template-columns : 열(column)의 배치의 크기
  
  **단위 
  예) 고정 크기인 경우
  
  → 행의 배치의 크기를 200px, 200px, 500px로 지정하겠다는 뜻. 
  
  
  예) 가변 크기인 경우
  
  → 행의 배치의 크기를 ⅓, ⅓, ⅓ 으로 나누겠다는 뜻. 
  이때, fr이라는 단위는 숫자 비율대로 크기를 나눈다. 
  
  예) 둘을 섞어서 쓰는 경우
  → 이런식으로 나뉘게 된다. 
  
  
  
  실제 사용해본 예시
  → input에 입력된값과 그 옆의 버튼의 위치를 지정해주기 위해 grid를 사용해보았다. 
  
  → 결과창을 보면 59px, 59px이 동일하게 들어가고 나머지 비율을 결과라는 텍스트의 값이 먹고있는것을 볼수있다. 
  
  
  
  repeat 함수와 같이 쓰기 
  repeat함수를 쓰면 반복되는 값을 자동으로 처리할수있어 편리하다.
   형태 
  → repeat(반복횟수, 반복값)
  예) repeat(5, 1fr) = 1fr 1fr 1fr 1fr 1fr 
  
  
  
  
  minmax 함수 
  최댓값과 최솟값을 지정할수있음. 
  예) minmax(100px, auto) → 최소한 100px, 최대는 자동(auto) 늘어나게
  → minmax를 설정하지 않았을때
  
  
  → minmax를 설정하였을때 
  
  
  
  gap 을 통해 간격 만들기
  row-gap: 10px → row 방향으로 간격을 10px 줘라
  column-gap: 20px → column방향으로 간격을 20px 줘라 
  gap: 10px → row방향, column방향으로 간격을 10px 줘라
  
  
  
  grid 형태를 자동으로 정의하는 법 
  grid-template-columns, grid-template-rows 의 통제를 벗어난 위치에 있는 트랙의 크기를 지정하는 속성.
  만약, ‘ grid-template-rows : repeat(3, minmax(100px, auto)); ‘ 를 통해 각 셀의 최소 높이를 100px로 지정하고 100px 을 넘어가면 알아서 늘어나도록 하기 위해 저 코드를 썼다. 
  근데 만약 row의 개수를 알수 없을땐 어떻게 해야할까?
  그럴때, grid-auto-rows를 쓰면 해결된다. 
  ‘ grid-auto-rows: minmax(100px, auto) ‘ 를 써주면 굳이 횟수를 지정하지 않아도 알아서 반복되어 처리해준다. 
  
  
  
  각 셀의 영역 지정
  이 속성들은 grid 아이템에 적용하는 속성이며, 각 셀의 영역을 지정해준다. 
  아래 영역과 같이 gird 라인의 번호가 매겨져있는데, 이 번호를 이용하여 column과 row 의 범위를 지정할수있다. 
  
  위의 빨간색 영역을 표현하자면 
  
  
  column방향으로 시작점 : grid-column-start: 1
  column방향으로 끝점 : grid-column-end: 3
  row방향으로 시작점 : grid-row-start: 1
  row방향으로 끝점 : grid-row-end: 2
  
  만약 이 위의 과정을 줄여서 작성하자면
  
  grid-column: 1 / 3;
  grid-row: 1 / 2;  
  
   → 이런식으로 줄여서(?)  표현할수있다. 
  
  
  
  
  (링크)
  
  정렬
  
  → 정렬 구분 기준 
  
  
  
    <아이템 그룹 정렬>
  align-content → 세로 방향으로 아이템 그룹 정렬
  justify-content → 가로 방향으로 아이템 그룹 정렬 
  
  
  <전체 아이템 정렬>
  align-items → 세로 방향으로 아이템 정렬
  justify-items → 가로 방향으로 아이템 정렬 
  place-items → align-items, justify-items를 같이 쓸수있는 속성
  
  
    <개별 아이템 정렬>
      *개별 아이템 = 한 아이템만을 지정
  align-self → 세로 방향으로 개별 아이템 정렬
  justify-self → 가로 방향으로 개별 아이템 정렬
  place-self → align-self, justify-self를 같이 쓸수있는 속성
  
  
  position . 
  css position 속성은 요소에 사용되는 위치 결정 방법을 지정한다. 
  5가지로 구분할수있는데 
  static → 기준 없음(배치 불가능/기본값)
  fixed → 뷰포트 기준으로 배치 
  relative → 요소 자기 자신을 기준으로 배치
  absolute → 부모(조상)요소를 기준으로 배치
  sticky → 스크롤 영역 기준으로 배치 
  
  
  모든 요소는 top, bottom, left, right 를 통해 최종 위치가 적용된다. 
  top: 요소의 position기준에 맞는 위쪽에서의 거리를 설정
  bottom: 요소의 position기준에 맞는 아래쪽에서의 거리를 설정
  left: 요소의 position기준에 맞는 왼쪽에서의 거리를 설정
  right: 요소의 position 기준에 맞는 오른쪽에서의 거리를 설정 
  
  
  사용법
  기준을 잡는다. (예 - position: relative; )
  이동시킨다. (예 - top: 50px; )
  
  
  
  
  static positioning 
  html은 기본적으로 static positioning(정적 배치) 가 됨. 
  정적으로 위치 지정되면 항상 페이지의 기본적인 흐름에 따라 배치됨. 
  top, bottom, left, right 속성에 의해 영향을 받지 않는다. 
  
  
  fixed
  position: fixed를 사용하면 모든 페이지의 같은 위치에 출력됨.(고정값) 
  즉, 웹페이지가 스크롤 되어도 고정 위치로 지정된 요소는 항상 같은 곳에 위치함. 
  대표적인 예로, 페이지에서 고정돼야하는 요소인 네비게이션바 , 혹은 페이지에서 나타나는 이벤트나 하단 우측에 계속해서 뜨는 이벤트 등등 페이지 스크롤에 상관없이 고정해야할 것들에게 쓰인다. 
  
  
  sticky
  사용자의 스크롤 위치를 기준으로 배치됨. 
  sticky요소는 스크롤 위치에 따라 relative와 fixed 사이를 전환하는데, 주어진 오프셋 위치가 뷰포트에 충족될때까지 상태적으로 배치된다음에 주어진 위치가 되면 고정(sticky)이 된다.
  
  relative 
  요소 자기 자신을 원래 위치( = static일때 위치) 를 기준으로 배치한다.
  원래 위치를 기준으로 top, bottom, left, right에서 얼마만큼 떨어질지 결정한다. 
  위치를 이동하면서 다른 요소에 영향을 주지 않는다. 
  문서 상 원래 위치가 그대로 유지된다.  
  
  
  absolute
  요소를 일반적인 문서 흐름에서 제거함. 
  가장 가까운 위치에 있는 조상 요소를 기준으로 배치 
  조상 요소 위치를 기준으로 top, bottom, left, right 에서 얼마만큼 떨어질지 결정한다. (음수도 가능)
  문서상 원래 위치를 잃어버린다. (아래에 잇는 div가 해당 자리를 차지함)
  
  
  부모 relative & 자식 absolute 
  부모 요소에는 relative를 주고, 자식요소에는 absolute를 주어서 많이 사용된다. 
  얘네가 특이한 점은 부모요소를 벗어나는 자식요소를 표현할수있다는것이다. 
  대표적인 예로
  
  책 이미지에 마우스를 올려놓으면 1이라는 박스가 그림을 벗어나 위로 올라가는 것을 볼수있는데, 저런걸 이 두 속성을 통해 구현해낸다. 
  
  bottom, top, right, left 와 같은 위치 값들에 -50px과 같이 마이너스 값을 주게 되면 부모 요소를 벗어나 자식 요소가 위치를 자유롭게 지정할수있게된다.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  Git 
  
  git이란?
  git을 왜 쓸까?
  git 사용법
  merge, branch, commit, checkout, pull, push, HEAD, origin등 용어 이해
  (+ .gitignore, .env, .gitkeep, .prettierc)
  
  git 이란? 
  git의 시초?
  2005년 리누스 토르발즈라는 천재 사람이 쓰던 버전 관리 도구가 갑자기 유료가 되서 2주만에 만들어낸 시스템이다. 
  지금은 전 세계적으로 모두가 쓰고있는 분산 버전 관리 시스템이다. 
  
  
  git이란? 
  소스코드 관리를 위한 형상관리 ( = 버전관리)  도구
  파일을 수정할때마다 그 데이터를 기록하여 필요할때 이전 버전으로 파일을 복구할 수 있게 해주며, 이를 분산시켜서 여러 개발자가 협업하여 프로젝트를 효율적으로 관리할수있도록 도와주는 협업 도구이다. 
  소스코드 관리 도구 중 git을 가장 많이 사용하는 이유는 로컬저장소를 이용한 빠른 퍼포먼스와 브랜치를 통한 효율적인 협업때문이다. 
  
  
  git을 왜 쓸까?
  소스코드를 주고받을 필요 없이 같은 파일을 여러명이 동시에 작업하는 병렬 개발이 가능
  만약 프로젝트를 개발하며 다른 개발자와 협업 시, 새로운 기능을 개발하는 버전, 버그를 수정하는 버전 등등 프로젝트는 여러가지 버전을 가질수있음. 이 버전들을 브랜치로 구분할 수 있으며, git은 이러한 브랜치를 메타 데이터 관리를 통해 자유롭게 움직일수있음.
  브랜치를 통해 개발 한 뒤, 합치는 merge로 개발을 진행할 수 있다.  
  신속하고 편리하다. 
  빠르고 대형 프로젝트나 이력이 많은 작업에 매우 합리적이다.
  장소에 구애받지 않고 협력 가능
  repository의 완전한 복사본을 로컬 장비에 둘 수 있다. 
  로컬 저장소가 있으니 속도도 빠르고 자신의 로컬에 부담 없이 커밋도 할 수 있으며 원격저장소가 터지더라도 로컬 저장소를 통해 복구도 가능하다. 
  
  
  git 사용법
  
  
  git의 동작법
  git은 분산 버전 관리 시스템이기 때문에 리모트 서버에 있는 소스를 수정하려면 로컬 환경으로 소스를 클론 ( = 모든 소스코드를 복사하여 사용자의 컴퓨터로 받아옴.) 이 필요하다. 
  이후 gir은 로컬 환경의 파일을 추적하고 있다가 사용자가 소스를 수정하면 그 변경 사항을 감지 
  →  사용자가 변경사항이나 반영하고 싶은 파일이나 소스코드의 라인을 고른 뒤 리모트 서버에 업로드함. 
  
  
  기본 개념
  
  
  Remote / Origin 
  remote : 리모트 서버 자체 
  
  ** 리모트 서버 ??
   → 구글 드라이브 같은 클라우드 스토리지인데, 이 서버를 제공해주는 대표적인 업체로 github, bitbucket, GitLab 과 같은 회사들이 있다. 
  이 회사들이 시스템에 필요한 리모트 서버와 git을 좀 더 편리하게 사용할 수 있는 기능들을 제공한다. 
  
  
  origin : 리모트 서버의 관례적인 이름
  git을 사용할때 어떤 리모트 서버에서 변경사항을 업로드 할 것인지 정해야하는데, 반드시 하나의 리모트 서버만 사용할 수 있는 것이 아니기 때문에 내가 사용하는 리모트 서버의 이름을 정해줘야한다. 이때 자주 쓰이는 이름이 origin이다. 
  
  
  Repository
  repository : 저장소라는 뜻으로, 리모트 서버 내에서 구분되는 프로젝트 단위이다. 
  우리가 구글 드라이브 사용할때 여러개 디렉토리 만들어서 용도에 따라 파일을 나눠서 구분하는거랑 똑같다. 
  일반적으로 한 개의 레파지토리는 하나의 프로젝트를 의미하지만 경우에 따라서 레파지토리 하나에 여러 개의 프로젝트를 구성하기도 한다. 
  레파지토리를 클론받을때는 해당 레파지토리를 가리키는 url 리 필요한데, url의 맨 마지막에 .git 이라는 확장자를 가진다. 
  url 예시) 
  
  
  Branch
  branch : 일종의 독립된 작업을 진행하기 위한 작업 공간의 개념
  git을 초기화하면 기본적으로 master 브랜치가 생긴다. 이 아이가 메인 브랜치 역할을 한다. 
  브랜치가 어떤 브랜치를 계속해서 분리시키는거고, 분리된 브랜치는 분리될 당시 부모 브랜치 상태를 그대로 가지고있다. 
  개발자는 각각의 브랜치에서 개발을 진행한 뒤 나중에 다시 master 브랜치로 변경사항을 합친다.
  
  
  `
}]
