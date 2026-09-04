---
title: "Kimi 플러그인이란 무엇인가요?"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "외부 도구를 Kimi에 연결해 앱과 서비스로 작업을 완료할 수 있습니다. 플러그인을 설치하면 Kimi가 금융 데이터, 오피스 소프트웨어, 디자인 도구 같은 서드파티 기능을 호출해 작업을 도와줍니다."
---

<SeoMeta
  title="Kimi 플러그인이란 무엇인가요? 설치 및 사용 방법 - Kimi 헬프 센터"
  description="Kimi 플러그인에 대해 알아보세요. 금융 데이터, 오피스 소프트웨어, 디자인 도구 등 외부 서비스를 Kimi에 연결하고 작업 중에 바로 호출할 수 있습니다. 플러그인을 사용할 수 있는 환경, 설치 및 인증, 호출 방법, 플러그인 카테고리, credit 사용량을 다룹니다."
/>

# Kimi 플러그인이란 무엇인가요?

플러그인은 외부 도구를 Kimi에 연결해 Kimi가 앱과 서비스를 활용해 작업을 완료할 수 있게 합니다. 플러그인을 설치하면 Kimi가 작업을 수행하는 동안 해당 서드파티 기능을 직접 호출할 수 있습니다. 예를 들어 금융 데이터를 조회하거나, 오피스 소프트웨어를 조작하거나, 디자인 도구를 사용할 수 있습니다. 특정 플러그인을 명시적으로 사용하도록 요청할 수도 있고, 적절한 경우 Kimi가 자동으로 호출하기도 합니다.

## Kimi 플러그인이란?

Kimi 플러그인은 [Kimi Code 플러그인 정의](https://www.kimi.com/code/docs/kimi-code-cli/customization/plugins.html#plugin-manifest)를 따르며, 다음 구성 요소 중 하나 이상을 포함할 수 있습니다.

| 구성 요소 | 용도 |
| --- | --- |
| Skills | 작업 완료에 필요한 지식, 단계, 사용 가이드를 제공합니다 |
| MCP | 외부 소프트웨어, 서비스, 데이터베이스 또는 API를 연결합니다 |
| Agents | 복잡한 작업을 전문 서브 에이전트에 위임합니다 |
| Hooks | 특정 이벤트가 발생하면 사전 정의된 작업을 자동으로 실행합니다 |
| Commands | 명확하고 재사용 가능한 명령 기반 진입점을 제공합니다 |
| System Prompt | 플러그인이 활성화된 동안 메인 Agent에 시스템 지침을 추가합니다 |

Kimi 웹 환경은 현재 플러그인의 MCP와 Skills를 지원합니다. Kimi Work와 Kimi Code는 위의 전체 플러그인 정의를 따르며 더 완전한 플러그인 구성 요소 조합을 지원합니다.

**예시:**

- **Notion 플러그인** = Notion MCP + 사용 가이드 스킬
- **금융 리서치 플러그인** = 여러 금융 MCP + 여러 분석 스킬 + 커스텀 Agent

## 플러그인을 사용할 수 있는 환경

모델을 **K3** 또는 **K3 Swarm**으로 전환했을 때, 그리고 **Deep Research, Websites, PPT** 시나리오에서 플러그인을 사용할 수 있습니다.

**Kimi Work 데스크톱 앱**에서도 플러그인을 사용할 수 있습니다. 데스크톱의 내장 플러그인 목록은 [Kimi Work 플러그인 센터](/kimi-work/plugin-center)를 참고하세요.

<Callout type="info">
플러그인은 아직 Kimi Claw 또는 Kimi Plus 대화에서 지원되지 않습니다.
</Callout>

## 플러그인 설치

- **진입점**: 입력창의 **+**를 사용하거나 "/"를 입력합니다. 모바일에서도 입력창의 **+** 또는 "/"를 사용합니다.
- 플러그인 마켓플레이스에서 검색하거나 둘러본 뒤 플러그인 상세 페이지를 열고 설치를 클릭합니다.
- 일부 플러그인은 **OAuth 인증**이 필요합니다(서드파티 로그인으로 이동하며, 인증 후 사용할 수 있습니다). 일부 플러그인은 **사전 설치**되어 있어 별도 설치가 필요 없습니다.
- **기업 전용 플러그인**: 기업 사용자가 아니어도 볼 수는 있지만 "Install" 버튼이 비활성화됩니다.
- 로그아웃 상태에서는 플러그인을 설치하거나 사용할 수 없습니다.

## 플러그인 사용

- 설치 후 입력창에 "/"를 입력하거나 **+** → Plugins를 클릭한 뒤 플러그인을 선택해 호출합니다. **여러 플러그인을 한 번에 호출**할 수도 있습니다.
- 필요한 내용을 설명하기만 하면 됩니다(예: "Tianyancha에서 이 회사를 조회해 줘"). Kimi가 알맞은 플러그인을 자동으로 선택합니다.
- Kimi가 플러그인의 도구를 호출하면 답변에 "xx 플러그인 사용 중"이 표시됩니다.

## 플러그인 카테고리 및 목록

플러그인 마켓플레이스는 아래 카테고리로 구성됩니다. 실제로 표시되는 플러그인은 **지역(국내/해외)**과 **사용 환경**에 따라 다르며, 일부 플러그인은 두 개 이상의 카테고리에 속합니다.

- **금융**: Financial Investment Analysis, Investment Banking & Private Equity, Corporate Finance & Accounting, Wind Financial Data, S&P Global Market Intelligence, Hundsun Gildata, Tonghuashun iFinD, SEC, Global Financial Database, World Bank Open Data, IMF(International Monetary Fund) Database, Stripe, Tianyancha
- **생산성**: Notion, Baidu Netdisk
- **개발**: GitHub, Supabase, Neon, Cloudflare
- **크리에이티브**: Inspiration Pool, Image Generation, Video Generation, Audio Generation, Canva
- **일반**: Vivify

## 데이터 및 권한

- 플러그인을 선택하거나 명시적으로 사용을 요청하면 Kimi는 해당 플러그인이 제공하는 도구를 우선 사용하고, 그 도구가 반환한 결과를 바탕으로 답변을 생성합니다. 플러그인을 연결하면 Kimi는 사용자가 승인한 범위 내에서 관련 콘텐츠에 접근합니다.
- 플러그인이 서드파티에서 제공하는 경우, 데이터 처리 규칙은 해당 회사가 독자적으로 정하며 데이터에는 그 회사의 서비스 약관과 개인정보 처리방침이 적용됩니다. 인증 전에 확인해 보시기 바랍니다.
- **언제든지 플러그인을 제거하거나 인증을 철회할 수 있습니다.** 제거 후에는 관련 OAuth 인증이 철회되며, 플러그인을 다시 사용하려면 재설치하고 다시 인증해야 합니다.

## FAQ

### 플러그인을 사용하면 멤버십 credit이 소모되나요?
일부는 소모됩니다. Kimi가 플러그인의 도구나 서비스를 호출해 작업을 완료하면 실제 사용량에 따라 credit이 차감되며, 호출 비용이 없는 플러그인은 추가 요금이 발생하지 않습니다.

### 여러 플러그인을 동시에 사용할 수 있나요?
예. "/" 또는 **+**를 통해 여러 플러그인을 한 번에 호출할 수 있습니다.

### 특정 플러그인이 보이지 않는 이유는 무엇인가요?
사용 가능한 플러그인은 지역(국내/해외)과 사용 환경에 따라 다릅니다. 또한 일부 플러그인은 개인 또는 기업 사용자에게만 제공됩니다.

### ChatGPT, Claude 등 다른 플랫폼의 플러그인을 사용할 수 있나요?
예. [개인 플러그인 만들기](/plugins-and-skills/create)를 참고하세요. 다른 플랫폼의 기존 플러그인 파일이나 프로젝트 링크를 Plugin Builder에 제공하고 안내에 따라 Kimi 플러그인으로 변환하면 됩니다.
