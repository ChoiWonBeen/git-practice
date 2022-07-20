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
  
  
  
  
  `,{"이름": "최원빈",
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
  
  
  `}
}]