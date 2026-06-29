---
title: "Kimi WebBridge 작동 방식"
slug: "kimi-webbridge-how-it-works"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 작동 방식 - Kimi 헬프 센터"
  description="Kimi WebBridge가 브라우저를 AI 에이전트와 로컬에서 연결하여 안전한 웹 탐색, 클릭, 스크린샷 등을 가능하게 하는 방식을 알아보세요."
  ogType="article"
/>

# Kimi WebBridge 작동 방식

## 작동 흐름

Kimi WebBridge는 다음과 같이 작동합니다:

1. **로컬 브리지 서비스**: 컴퓨터에서 로컬 서비스가 실행되어 에이전트로부터 명령을 받습니다
2. **브라우저 확장 프로그램**: Chrome DevTools Protocol을 기반으로 브라우저에서 특정 작업을 실행합니다
3. **보안 격리**: 모든 실행이 로컬에서 이루어지며, 로그인 상태와 웹 페이지 내용은 기기를 벗어나지 않습니다

<Frames
  src="./images/workflow.png"
  alt="workflow"
/>

## 확장 프로그램 인터페이스

브라우저 도구 모음에서 WebBridge 아이콘을 클릭하면 현재 연결 상태를 확인할 수 있습니다:

**연결됨**: WebBridge가 정상적으로 작동하며 에이전트와 협업할 수 있습니다.

**연결 끊김**: 설정을 확인하거나 연결 명령을 다시 실행하세요.

<Frames
  src="./images/connection.png"
  alt="WebBridge Connection"
/>

## 기능

| 기능 | 설명 |
|---------|-------------|
| 웹 탐색 | 지정한 URL을 자동으로 엽니다 |
| 요소 클릭 | 버튼, 링크 등 페이지 요소의 클릭을 시뮬레이션합니다 |
| 양식 작성 | 텍스트를 자동으로 입력하고 옵션을 선택합니다 |
| 페이지 스크린샷 | 현재 페이지 또는 특정 영역을 캡처합니다 |
| 콘텐츠 추출 | 페이지의 텍스트, 표 등 구조화된 데이터를 읽습니다 |
| 로그인 세션 유지 | 브라우저에 저장된 기존 로그인 상태를 사용합니다 |

활용 사례:

- 이커머스 가격 비교: 여러 플랫폼에서 상품을 자동으로 검색하고 가격을 비교합니다
- 정보 조사: 웹 페이지를 깊이 있게 탐색하고 구조화된 정보를 추출합니다
- 양식 작성: 다양한 온라인 양식을 자동으로 작성합니다
- 데이터 입력: 웹 데이터를 지정한 형식으로 자동 정리하고 입력합니다

더 많은 활용 사례는 [Kimi WebBridge 공식 웹사이트](https://www.kimi.com/features/webbridge)를 참고하세요.
