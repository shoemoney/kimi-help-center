---
title: "세션과 컨텍스트"
slug: "cli-sessions"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="세션과 컨텍스트 - Kimi 도움말 센터"
  description="Kimi Code CLI는 다중 세션 관리와 컨텍스트 유지를 지원하여 언제든 작업을 멈추고 다시 이어갈 수 있습니다."
/>

# 세션과 컨텍스트

Kimi Code CLI는 다중 세션 관리와 컨텍스트 유지를 지원하여 언제든 작업을 멈추고 다시 이어갈 수 있습니다.

## 세션 재개

이전 세션은 여러 방법으로 재개할 수 있습니다.

### 가장 최근 세션 이어가기

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --continue",
    },
  ]}
/>

`--continue`(또는 `-c`) 플래그를 사용하면 마지막 대화를 이어갈 수 있습니다.
### 세션 ID 지정

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --session \u003csession-id\u003e",
    },
  ]}
/>

`--session` 플래그를 사용하면 특정 세션을 복원할 수 있습니다.

### 탐색 및 전환

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/sessions",
    },
  ]}
/>

`/sessions`(또는 `/resume`)를 실행하면 세션 목록을 확인하고 복원할 세션을 선택할 수 있습니다.
## 시작 시 리플레이

세션을 재개하면 Kimi Code CLI가 대화 기록을 자동으로 다시 재생해 주므로, 이전 컨텍스트와 진행 상황을 빠르게 떠올릴 수 있습니다.

## 상태 유지

다음 상태는 세션 간에 자동으로 저장되고 복원됩니다.

- **승인 결정**: "세션 동안 허용"과 같은 결정이 기억됩니다.
- **동적 서브 에이전트**: 세션 중에 생성한 서브 에이전트 설정이 유지됩니다.
- **추가 디렉터리**: 명령으로 추가한 작업 디렉터리도 함께 유지됩니다.

덕분에 세션을 재개한 뒤 이전 작업을 자연스럽게 이어갈 수 있습니다.

## 비우기 및 압축

Kimi Code CLI는 대화를 계속 이어갈 수 있도록 필요할 때 컨텍스트를 자동으로 압축합니다. 슬래시 명령으로 컨텍스트를 직접 관리할 수도 있습니다.

### 컨텍스트 비우기

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/clear",
    },
  ]}
/>

`/clear`(또는 `/reset`)를 입력하면 현재 세션의 모든 컨텍스트를 비우고 새로운 대화를 시작할 수 있습니다.

### 컨텍스트 압축

`/compact`을 입력하면 핵심 정보는 보존하면서 token 사용량을 줄이도록 컨텍스트를 압축합니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact",
    },
  ]}
/>

압축할 때 지시를 함께 넣어 AI가 우선시할 정보를 알려줄 수도 있습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/compact Keep the discussion about database migrations",
    },
  ]}
/>

### 컨텍스트 상태

CLI 하단의 상태 표시줄에는 현재 컨텍스트 사용률이 실시간으로 표시되어 컨텍스트 소비 상황을 살펴볼 수 있습니다. 사용률이 높을 때는 `/compact`으로 컨텍스트를 압축해 중요한 정보가 사라지지 않도록 하세요.
