---
title: "자주 사용하는 활용 사례"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="자주 사용하는 활용 사례 - Kimi 도움말 센터"
  description="일상적인 개발에서 Kimi Code CLI를 활용하는 대표적인 시나리오와 참고용 예시 프롬프트를 소개합니다."
/>

# 자주 사용하는 활용 사례

일상적인 개발에서 Kimi Code CLI를 활용하는 대표적인 시나리오와 참고용 예시 프롬프트를 소개합니다.

## 새로운 기능 구현

자연어로 요구사항을 설명하기만 하면 AI가 관련 코드를 자동으로 읽고, 새 코드를 작성한 뒤 결과까지 검증합니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "사용자 목록 페이지에 가입 날짜순 정렬 기능을 추가해 줘. 프론트엔드와 백엔드 모두 수정이 필요해",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "토큰 버킷 알고리즘을 사용해 각 IP를 분당 60회 요청으로 제한하는 rate limiter 미들웨어를 구현해 줘",
    },
  ]}
/>

## 버그 수정

오류 메시지를 AI에 그대로 붙여 넣기만 하면 근본 원인을 자동으로 찾아 수정 방법을 제시합니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "npm test를 실행했더니 이런 오류가 났어. 고쳐 줘:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "CI 파이프라인의 lint 단계에서 실패했어. 로그는 다음과 같아: ... 고쳐 줘",
    },
  ]}
/>

## 프로젝트 파악

새 프로젝트에 합류하거나 특정 코드를 이해해야 할 때, 그냥 물어보세요.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "이 프로젝트의 전체 아키텍처는 어떻게 돼? 주요 모듈은 뭐가 있어?",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts는 무슨 역할을 해? 인증 흐름은 어떻게 동작하는지 설명해 줘",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "이 프로젝트에서 데이터베이스 마이그레이션을 어떻게 관리하는지 설명해 줘",
    },
  ]}
/>

## 사소한 작업 자동화

코드 일괄 수정, 문서 추가, 테스트 생성 등 반복적인 작업에 안성맞춤입니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/utils/ 디렉터리에서 export된 모든 함수에 JSDoc 주석을 추가해 줘",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "UserService 클래스의 모든 public 메서드에 대한 단위 테스트를 생성해 줘",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "프로젝트의 모든 var 선언을 const나 let으로 바꿔 줘",
    },
  ]}
/>

## 일반 작업

Kimi Code CLI는 코딩에만 국한되지 않습니다. 자료 조사, 데이터 분석, 파일 일괄 처리 등 다양한 작업도 처리할 수 있습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "현재 주류로 쓰이는 Node.js ORM 라이브러리를 조사하고 장단점을 비교해 줘",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "logs/ 디렉터리에서 최근 7일간의 접근 로그를 분석해 상위 10개 요청 경로를 알려 줘",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "data/ 디렉터리의 모든 CSV 파일을 하나로 병합하고 중복 행을 제거해 줘",
    },
  ]}
/>
