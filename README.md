# 투두 앱 만들기.

## 폴더 구조

폴더 구조는 기능별로 작업했습니다. 간단한 프로젝트에서는 파일 유형별로 작성하는게 더 이득일 수 있지만 기능별로 작업해본적이 많지가 않아 실험적으로 적용해보려고 합니다.

- Feature Slice Design
- Feature Driven Development(Architecture)

shared (공통 컴포넌트 작업)

- @common
- @todo

feature (도메인 작업)

- Todo
  - TodoHeader
  - TodoBody
    - TodoList
    - TodoForm
      - TodoInput
