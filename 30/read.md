왜 React를 사용하는가?
React를 사용하는 이유는 아래의 이유들 때문인거 같습니다.

Virtual DOM의 존재
React Native의 앱 개발 가능
수 많은 커뮤니티
Component를 사용한 재사용이 가능하고 유지보수의 용이함

1. Virtual DOM의 존재
   리액트의 가장 큰 특징 중 하나이기도 합니다.

기존의 DOM은 페이지가 바뀔 때마다, 새 HTML를 로드하면서 DOM 전체를 바꾸게 됩니다.

Virtual Dom은 React 컴포넌트가 리턴하는 값에 의해 만들어져서 실제 보이고 있는 DOM과 비교해서 달라진 부분만 찾아내어 바꾸게 됩니다. 이러한 Virtual DOM 때문에 React에서 컴포넌트 단위의 개발이 가능하게 됩니다.

2. React Native의 앱 개발 가능
   웹과 앱은 엄청난 연관이 있습니다. 웹 프로젝트가 끝나 React 하나만 잘 활용하여도 React Native로 native moblie app을 만들 수 있기 때문입니다.

3. 수 많은 커뮤니티
   개발을 하다보면 막히는 부분, 오류가 있는 부분이 생깁니다.

Vue에 비해 사용자가 많고, facebook에서 만들어 계속되는 업데이트와 자료가 굉장히 방대합니다.

4. Component 단위 작성
   컴포넌트는 UI를 구성하는 개별적인 뷰 단위로 서로서, UI 개발을 레고라고 한다면, 컴포넌트는 블록 역할을 하게 됩니다. 이러한 블록을 조립해 하나의 완성품을 만드는 것입니다.

이러한 컴포넌트들을 나눠놨기에 다른 부분, 또 다른 웹에서 재사용이 가능해집니다. 이는 생산성과 유지 보수를 용이하게 합니다. 브라우저 화면상에 보이는 하나하나의 버튼, 탭, 아이콘 등이 모두 컴포넌트라고 보면 됩니다. 이 것들이 모여 하나의 뷰(VIEW)를 완성하게 됩니다.
