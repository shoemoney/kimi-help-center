---
title: "선택 가이드: K2.6 / K3 / K3 Cluster, 사고 강도, Agent"
slug: "model-mode-selection"
order: 5
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi 모델과 모드 선택 가이드: K2.6 / K3 / K3 Cluster, 사고 강도, Agent - Kimi Help Center"
  description="Kimi의 세 가지 모델 옵션(K2.6 / K3 / K3 Cluster), 사고 강도 단계(Standard / Advanced / Extreme), Agent와 Agent Cluster의 차이를 이해하고, 각 상황에 가장 알맞은 모드를 선택하세요."
/>

# 선택 가이드: K2.6 / K3 / K3 Cluster, 사고 강도, Agent

Kimi는 질문 내용을 바탕으로 인터넷 사용 여부를 스스로 판단하므로, 사용자가 직접 전환할 필요가 없습니다. 사용자가 선택해야 하는 것은 **모델**과 **사고 강도**입니다. 복잡한 작업에는 **Agent**와 **Agent Cluster**도 사용할 수 있습니다.

## 세 가지 모델 옵션

입력창 위의 모델 전환 메뉴에서 선택하세요.

| 모델 | 사고 강도 | 적합한 용도 | credit |
|---|---|---|---|
| **K2.6** | Standard / Advanced | 빠른 대화와 Q&A, 더 빠른 응답 | credit 차감 |
| **K3** | Standard / Advanced / Extreme | 전반적으로 가장 강력한 성능이 필요한 대화와 Agent 작업 | credit 차감 |
| **K3 Cluster** | Standard / Advanced / Extreme | 대규모 검색, 일괄 처리, 대량 작업의 한 번에 완료 | credit 차감 |

- **K3**는 `.pptx`, `.docx`, `.xlsx`, `.pdf`처럼 편집 가능한 문서를 처음부터 끝까지 생성할 수 있습니다. **K2.6**은 빠른 Q&A에 최적화되어 있으며, PPT 개요, Word 본문, 코드 등 텍스트만 출력합니다.
- **이미지 / 동영상 / 오디오 생성**은 “+” → Plugins를 클릭한 뒤, 관련 기능을 선택하고 **K3**와 함께 사용하세요.

<Callout type="info">
K2.6은 Chat(입력창 위의 모델 전환 메뉴)과 Kimi Work 안에서 K2.6 Agent로 사용할 때 모두 멤버십 credit을 소모합니다.
</Callout>

## 사고 강도: Standard / Advanced / Extreme

사고 강도가 높을수록 모델이 더 충분히 추론하므로 일반적으로 결과가 더 똑똑해집니다. 다만 그만큼 **더 많은 token**을 사용합니다.

- **속도와 낮은 credit 사용량**이 중요하다면 → **Standard**를 선택하세요.
- 복잡한 분석이나 어려운 문제에 **더 강한 추론 능력**이 필요하다면 → **Advanced** 또는 **Extreme**을 선택하세요(Extreme은 K3 / K3 Cluster에서 지원).

## Agent와 Agent Cluster

- **범용 Agent**: 웹사이트 생성, PPT 제작, Deep Research, 문서 및 스프레드시트 처리 등 작업을 자동으로 계획하고 완료합니다.
- **Agent Cluster**: 4,000개 이상의 병렬 도구 호출을 지원하며, 최대 300개의 서브 에이전트(Sub-agents)를 병렬로 자율 조율할 수 있습니다. **대규모 검색, 장문 작성, 일괄 처리** 같은 대규모 작업에 적합합니다.

## 상황별 선택 가이드

- **빠른 Q&A와 일상 대화** → K2.6.
- **복잡한 대화, 문서 작성 / PPT 및 스프레드시트 생성 / 여러 단계가 필요한 작업** → K3.
- **대규모 검색, 일괄 처리, 매우 긴 장문 작성** → K3 Cluster.
- **credit을 아끼고 싶다면** → 사고 강도를 “Standard”로 설정하세요.

## FAQ

### “Thinking Mode”는 더 이상 사용할 수 없나요?
Kimi는 “대화”와 “Agent”를 하나의 경험으로 통합했기 때문에, 이제 둘은 별도의 모드로 나뉘지 않습니다. “사고”는 이제 **모델과 사고 강도 선택**으로 조절합니다. 예를 들어 K3에서 더 높은 사고 강도를 사용하면 더 깊이 있는 추론 결과를 얻을 수 있습니다.

### K2.6과 K3는 무엇이 다른가요?
K2.6은 빠른 Q&A에 최적화되어 응답이 더 빠르며, credit 기준으로 과금됩니다. K3는 전반적으로 가장 강력한 성능을 제공하고, 복잡한 대화와 Agent 작업에 뛰어나며, 편집 가능한 문서를 처음부터 끝까지 생성할 수 있고, credit이 차감됩니다.

### K3와 K3 Cluster는 무엇이 다른가요?
K3는 일반적인 대화와 Agent 작업에 적합합니다. K3 Cluster는 수천 건의 도구 호출과 수백 개의 서브 에이전트를 활용하는 대규모 병렬 처리로 **대규모 검색, 일괄 처리, 매우 긴 장문 작성** 같은 대량 작업을 처리합니다.

### 한 번에 얼마나 많은 콘텐츠를 처리할 수 있나요?
K2.6은 단일 턴 컨텍스트로 약 128K tokens(중국어 기준 약 50,000~60,000자)를 지원합니다. K3는 100만 token 컨텍스트 창을 제공합니다(최상위 멤버십 혜택 필요). 자세한 내용은 [대화가 중국어 기준 200,000자를 초과하면 어떻게 해야 하나요?](/others/chat-issues)를 참고하세요.
