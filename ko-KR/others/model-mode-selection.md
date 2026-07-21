---
title: "선택 가이드: K2.6 / K3 / K3 Cluster, 사고 강도, Agent"
slug: "model-mode-selection"
order: 4
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi 모델과 모드 선택 가이드: K2.6 / K3 / K3 Cluster, 사고 강도, Agent - Kimi Help Center"
  description="Kimi의 세 가지 모델 옵션(K2.6 / K3 / K3 Cluster), 사고 강도 수준(Standard / Advanced / Extreme), Agent와 Agent Cluster의 차이를 이해하고, 상황마다 가장 알맞은 모드를 선택하세요."
/>

# 선택 가이드: K2.6 / K3 / K3 Cluster, 사고 강도, Agent

Kimi는 질문 내용에 따라 인터넷 사용 여부를 스스로 판단하므로 사용자가 직접 전환할 필요가 없습니다. 사용자가 선택해야 하는 것은 **모델**과 **사고 강도**입니다. 복잡한 작업에는 **Agent**와 **Agent Cluster**도 사용할 수 있습니다.

## 세 가지 모델 옵션

입력창 위의 모델 전환 메뉴에서 선택하세요.

| 모델 | 사고 강도 | 적합한 용도 | credit |
|---|---|---|---|
| **K2.6** | Standard / Advanced | 빠른 대화와 Q&A, 더 빠른 응답이 필요할 때 | **멤버십 credit을 사용하지 않음** |
| **K3** | Standard / Advanced / Extreme | 대화와 Agent 작업, 가장 강력한 종합 성능이 필요할 때 | credit에서 차감 |
| **K3 Cluster** | Standard / Advanced / Extreme | 대규모 검색, 일괄 처리, 대량 작업을 한 번에 완료해야 할 때 | credit에서 차감 |

- **K3**는 `.pptx`, `.docx`, `.xlsx`, `.pdf`와 같은 편집 가능한 문서를 처음부터 끝까지 생성할 수 있습니다. **K2.6**은 빠른 Q&A에 최적화되어 있으며 PPT 개요, Word 본문, 코드 등 텍스트만 출력합니다.
- **이미지 / 동영상 / 오디오 생성**은 “+” → Plugins를 클릭한 뒤 관련 기능을 선택하고 **K3**와 함께 사용하세요.

## 사고 강도: Standard / Advanced / Extreme

사고 강도가 높을수록 모델이 더 충분히 추론하므로 일반적으로 결과가 더 똑똑해집니다. 다만 그만큼 **더 많은 token을 사용합니다**.

- **빠른 속도와 낮은 credit 사용량**을 원한다면 → **Standard**를 선택하세요.
- 복잡한 분석이나 어려운 문제에 **더 강한 추론 능력**이 필요하다면 → **Advanced** 또는 **Extreme**을 선택하세요. Extreme은 K3 / K3 Cluster에서 지원됩니다.

## Agent와 Agent Cluster

- **범용 Agent**: 웹사이트 생성, PPT 제작, Deep Research(심층 연구), 문서 및 스프레드시트 처리 등 작업을 자동으로 계획하고 완료합니다.
- **Agent Cluster**: 4,000회 이상의 병렬 도구 호출을 지원하며, 최대 300개의 sub-agent(Sub-agent)를 병렬로 자율 조율할 수 있습니다. **대규모 검색, 긴 글 작성, 일괄 처리** 같은 대규모 작업에 적합합니다.

## 상황별 선택 가이드

- **빠른 Q&A와 일상 대화** → K2.6(credit 사용 안 함).
- **복잡한 대화, 문서 작성 / PPT 및 스프레드시트 생성 / 여러 단계의 작업** → K3.
- **대규모 검색, 일괄 처리, 매우 긴 글 작성** → K3 Cluster.
- **credit을 아끼고 싶다면** → K2.6을 사용하거나 사고 강도를 “Standard”로 설정하세요.

## FAQ

### “Thinking Mode”는 더 이상 사용할 수 없나요?
Kimi는 “대화”와 “Agent”를 하나의 경험으로 통합했으므로, 이제 두 기능이 별도 모드로 나뉘어 있지 않습니다. “Thinking”은 이제 **모델과 사고 강도를 선택하는 방식**으로 제어됩니다. 예를 들어 K3에서 더 높은 사고 강도를 사용하면 더 깊이 있는 추론 결과를 얻을 수 있습니다.

### K2.6과 K3의 차이는 무엇인가요?
K2.6은 빠른 Q&A에 최적화되어 응답이 더 빠르며 멤버십 credit을 사용하지 않습니다. K3는 종합 성능이 가장 강력하고, 복잡한 대화와 Agent 작업에 뛰어나며, 편집 가능한 문서를 처음부터 끝까지 생성할 수 있고 credit에서 사용량이 차감됩니다.

### K3와 K3 Cluster의 차이는 무엇인가요?
K3는 일반적인 대화와 Agent 작업에 적합합니다. K3 Cluster는 수천 번의 도구 호출과 수백 개의 sub-agent를 활용하는 대규모 병렬 처리 방식으로, **대규모 검색, 일괄 처리, 매우 긴 글 작성** 같은 대량 작업을 처리합니다.

### 한 번의 턴에서 얼마나 많은 내용을 처리할 수 있나요?
K2.6은 단일 턴 context로 약 128K token(중국어 기준 약 50,000~60,000자)을 지원합니다. K3는 100만 token context window를 제공합니다(최상위 멤버십 혜택 필요). 자세한 내용은 [대화가 중국어 200,000자를 초과하면 어떻게 해야 하나요?](/others/chat-issues)를 참고하세요.
