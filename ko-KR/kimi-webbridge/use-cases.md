---
title: "Kimi WebBridge 사용 사례 데모"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge 사용 사례 데모 - Kimi Help Center"
  description="여행 계획, 임대 매물 검색, 문헌 조사 등 Kimi WebBridge의 대표적인 사용 사례를 Skill 및 CLI 예시와 함께 살펴보세요."
  ogType="article"
/>

# Kimi WebBridge 사용 사례 데모

Kimi WebBridge를 사용하면 에이전트가 실제 사람처럼 브라우저를 조작해, 이미 로그인된 웹사이트에서 자동으로 탐색하고 정보를 추출·정리할 수 있습니다.

<Callout type="tip">
WebBridge를 사용할 때는 작업 설명이 구체적일수록 에이전트가 더 정확하게 작업을 완료할 수 있습니다. 대상 웹사이트, 필터 조건, 원하는 출력 형식을 명시하는 것이 좋습니다. 페이지 구조가 복잡하다면 먼저 에이전트에게 스크린샷을 찍어 페이지 상태를 확인한 뒤 진행하도록 요청할 수도 있습니다.
</Callout>

실무에서는 WebBridge를 Skill 및 CLI와 함께 사용하는 경우가 많습니다. Skill은 어떤 웹사이트를 방문할지, 어떤 단계로 정보를 수집할지, 결과를 어떻게 정리할지 같은 작업 경험을 담고, CLI는 검색, 페이지 읽기, 파일 다운로드, 구조화된 데이터 조회 같은 구체적인 기능을 제공합니다.

웹에서 반복적으로 하는 일을 AI 에이전트에게 한 문장으로 알려 주세요. 그러면 실제 Chrome 로그인 세션을 직접 사용하는 CLI를 생성할 수 있습니다. API도 필요 없고, API Token을 설정하거나 관리할 필요도 없습니다.

아래 시나리오에서 사용한 Skills와 CLIs는 모두 이런 방식으로 만들었습니다. 그대로 설치해 사용해도 되고, 참고 예시로 활용해도 됩니다.

<Callout type="warning">
이 페이지에서 제공하는 Skills와 CLIs는 교육 및 기술 교류용으로만 제공됩니다. 문의 사항이 있으면 <a href="mailto:support@moonshot.cn">support@moonshot.cn</a>으로 연락해 주세요.
</Callout>

## 정보 검색 및 정리

여러 웹사이트를 동시에 검색해야 할 때 WebBridge를 사용하면 에이전트가 대상 페이지를 자동으로 열고 핵심 내용을 추출한 뒤 구조화된 결과로 정리할 수 있습니다. 페이지를 하나씩 열어 수동으로 복사하고 붙여 넣는 번거로운 작업을 줄여 줍니다.

### 여행 계획

항공권 플랫폼, 호텔 예약 사이트, 여행 커뮤니티를 오가며 가격과 일정을 비교한 뒤 여행 일정표, 예산 표, 숙소 추천을 정리합니다.

관련 도구:

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "11월에 두 사람이 교토로 4박 5일 여행을 가려고 합니다. 예산은 약 RMB 8,000입니다. 항공편, 호텔, 관광지 운영 시간을 확인하고, 결과를 일자별 일정표와 예산 표로 정리해 주세요.",
    },
  ]}
/>

설치 및 사용 방법:

1. [릴리스](https://github.com/better-world-ai/x-cli/releases)에서 ctrip-cli와 booking-cli를 다운로드합니다
2. `npx skills add better-world-ai/x-cli --skill travel-planning`을 실행합니다
3. Kimi Code, Claude Code, Codex CLI, Cursor처럼 Skill과 호환되는 클라이언트 등 로컬 에이전트를 열고 위 프롬프트를 보냅니다

### 임대 매물 선별

여러 임대 플랫폼을 동시에 검색하고, 월세, 통근 시간, 주거 형태 등 조건으로 매물을 필터링한 뒤 정보를 통합해 추천 우선순위를 매깁니다.

관련 도구:

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "상하이 Zhangjiang Hi-Tech Park Station 근처에서 임대 주택을 찾는 것을 도와주세요. 예산은 RMB 4,500 이내이고, 통근 시간은 40분 이하여야 하며, 원룸 전체 임대를 선호합니다. 여러 플랫폼을 열어 매물 링크, 가격, 면적, 통근 시간을 정리하고, 우선 연락할 매물 목록을 제공해 주세요.",
    },
  ]}
/>

설치 및 사용 방법:

1. [릴리스](https://github.com/better-world-ai/x-cli/releases)에서 58-cli, anjuke-cli, apartments-cli, rightmove-cli, idealista-cli를 다운로드합니다
2. `npx skills add better-world-ai/x-cli --skill rental-assistant`를 실행합니다
3. Kimi Code, Claude Code, Codex CLI, Cursor처럼 Skill과 호환되는 클라이언트 등 로컬 에이전트를 열고 위 프롬프트를 보냅니다

## 콘텐츠 조사 및 분석

WebBridge는 에이전트가 검색 결과를 자동으로 탐색하고, 상세 페이지를 열어 제목, 데이터, 댓글 등 정보를 추출한 뒤 분석·요약하도록 도와줍니다. 많은 웹페이지를 훑어야 하는 조사 작업에 특히 적합합니다.

### 문헌 조사

학술 문헌을 검색하고 논문 초록, 핵심 방법론, 실험 결론, 인용 관계를 추출해 구조화된 리뷰를 출력합니다.

관련 도구:

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "최근 2년간 AI 에이전트 메모리와 관련된 대표 논문을 조사해 주세요. 제목, 저자, 초록, 핵심 방법, 오픈소스 링크를 정리하고 연구 흐름을 요약해 주세요.",
    },
  ]}
/>

설치 및 사용 방법:

1. [릴리스](https://github.com/better-world-ai/x-cli/releases)에서 scholar-cli를 다운로드합니다
2. `npx skills add better-world-ai/x-cli --skill paper-research`를 실행합니다
3. Kimi Code, Claude Code, Codex CLI, Cursor처럼 Skill과 호환되는 클라이언트 등 로컬 에이전트를 열고 위 프롬프트를 보냅니다

### 심층 주제 검색

낯선 주제를 이해하려면 예전에는 검색 엔진을 열고, 결과를 하나씩 클릭해 끝까지 읽고, 핵심 내용을 복사한 뒤 노트로 정리해야 했습니다. 그렇게 하다 보면 반나절이 훌쩍 지나갑니다.

이 과정을 AI에게 맡겨 보세요. AI가 자동으로 검색하고, 결과를 따라가며 전문을 가져온 뒤, 요약본을 만들어 주거나 원문을 그대로 남겨 읽을 수 있게 해 줍니다. 연구 주제를 조사하거나, 특정 분야의 최신 동향을 추적하거나, 글쓰기 자료를 모을 때 먼저 사용해 정보를 한곳에 모아 보세요.

관련 도구:

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "2025년에 사용할 만한 로컬 AI 모델을 검색하고, 상위 10개 결과의 전문을 가져와 주세요.",
    },
  ]}
/>

설치 및 사용 방법:

1. [릴리스](https://github.com/better-world-ai/x-cli/releases)에서 google-cli 또는 baidu-cli를 다운로드합니다
2. Kimi Code, Claude Code, Codex CLI, Cursor처럼 Skill과 호환되는 클라이언트 등 로컬 에이전트를 열고 위 프롬프트를 보냅니다

## 일상 업무 지원

WebBridge의 자동화 기능으로 반복적인 웹 작업을 처리하고 업무 효율을 높일 수 있습니다.

### 이커머스 가격 비교

여러 이커머스 플랫폼에서 같은 상품을 검색하고 가격, 사양, 사용자 리뷰를 비교한 뒤 가장 좋은 구매 후보를 정리합니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "예산 약 RMB 2,000으로 27인치 4K 모니터를 구매하려고 합니다. 주요 이커머스 플랫폼에서 상품을 검색해 비교하고, 가격, 브랜드, 사용자 리뷰를 정리한 뒤 가성비가 가장 좋은 선택지를 추천해 주세요.",
    },
  ]}
/>

### 웹 데이터 추출

웹페이지에서 표, 목록 같은 구조화된 데이터를 추출하고 지정한 형식으로 자동 정리해, 수동으로 복사해 붙여 넣는 번거로움을 줄입니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "이 웹페이지를 열고 페이지의 제품 가격표를 추출한 뒤 보기 쉬운 목록으로 출력해 주세요.",
    },
  ]}
/>

더 많은 사용 사례는 [Kimi WebBridge 공식 웹사이트](https://www.kimi.com/zh-cn/features/webbridge)에서 확인하세요.
