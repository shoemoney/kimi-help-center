---
title: "K2.6 Agent Swarm [베타]"
slug: "agent-swarm"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="K2.6 Agent Swarm [베타] - Kimi 헬프 센터"
  description="K2.6 Agent Swarm 베타는 최대 300개의 하위 에이전트가 병렬로 작업하도록 조율하는 &quot;수평 확장&quot; 아키텍처입니다. 미리 정한 역할이나 손수 만든..."
/>

# K2.6 Agent Swarm [베타]

<Callout type="info">
**K2.6 Agent Swarm [베타]**는 최대 300개의 하위 에이전트가 병렬로 작업하도록 조율하는 "수평 확장" 아키텍처입니다. 미리 정한 역할이나 손수 만든 워크플로가 필요하지 않으며, 단일 에이전트 실행보다 약 **4.5배 빠르게** 작업을 완료합니다.
</Callout>

2026년 1월 27일, Moonshot AI는 Kimi K2.5를 출시하며 Agent Swarm [베타]를 선보였습니다. 2026년 4월 20일에는 Kimi K2.6을 공개하고 오픈소스로 배포하면서 Agent Swarm 아키텍처를 크게 업그레이드했습니다.
- 최대 **300개의 하위 에이전트** 동시 작업
- 작업당 **4,000회 이상의 도구 호출**
- 단일 에이전트의 순차 실행보다 **4.5배 빠른** 속도

## 탄생 배경

2025년 AI 업계의 주된 화두는 더 큰 모델과 더 많은 파라미터로 대표되는 수직 확장이었습니다. 하지만 여기에는 구조적 한계가 있습니다. 바로 단일 순차 실행이라는 병목입니다.

Agent Swarm은 실제 상황에서 출발했습니다. 한 팀원이 일일 주식 정보 수집을 자동화하려다 if-else 코드가 100줄에 이르자 이렇게 깨달았습니다. "내가 지금 멀티 에이전트 시스템을 손으로 작성하고 있구나." 모델이 도구를 사용할 수 있다면, 스스로 구조를 설계할 수는 없을까요?

Agent Swarm은 사람이 아니라 AI가 직접 설계한 조직 구조입니다. 메인 Agent(오케스트레이터)가 최대 300개의 하위 에이전트를 자율적으로 지휘하며, 최대 4,000개의 병렬 워크플로 단계를 실행합니다.

<Frames
  src="./images/swarm/swarm.png"
  alt="스웜"
/>

K2.6 Agent Swarm [베타]는 PARL(Parallel-Agent Reinforcement Learning) 학습 방법을 사용합니다. 단일 에이전트 방식과 비교하면, 대규모 검색 시나리오에서 핵심 단계를 3배~4.5배 줄입니다.

## 사용 방법

<Frames
  src="./images/swarm/screenshot-8.png"
  alt="스크린샷 8"
/>

**접속 경로:**
- **Web**: [kimi.com/agent-swarm](https://www.kimi.com/agent-swarm)
- **Mobile**: Kimi app → 모드 전환 → K2.6 Agent Swarm [베타] 선택

<Callout type="warning">
**베타 이용 권한**: K2.6 Agent Swarm [베타]는 현재 Moderato, Allegretto, Allegro, Vivace 회원에게 제공됩니다. 작업은 일반 Agent 작업보다 훨씬 많은 quota를 사용합니다.
</Callout>

**단계:**
1. 작업을 설명하고 전송합니다. 예: "Paul Graham 글 200편 이상 수집해 줘"
2. 작업 목록 생성, 하위 에이전트 생성, 병렬 실행 과정을 실시간으로 확인합니다.
3. 코드 프로젝트, 파일 폴더, 데이터 분석, Office 문서 등 결과물을 받습니다.
4. 결과를 미리 보거나 다운로드 또는 공유합니다.
5. 이후 대화를 이어갈 때는 단일 K2.6 Agent로 전환합니다.

## 활용 사례

### 대규모 탐색

**사례 1: 100개 YouTube 니치별 상위 크리에이터 3명**

K2.6 Agent Swarm [베타]는 병렬 검색을 위해 300개의 하위 에이전트를 생성하고, 채널명, 구독자 수, 설명이 포함된 구조화된 표를 만들었습니다.

<Frames
  src="./images/swarm/youtube.png"
  alt="YouTube"
/>

<Chat title="결과 보기" src="https://www.kimi.com/share/19c40eea-b272-8ef2-8000-0000af5e0baa?hide_sidebar=1&disable_auto_preview=1" />

**사례 2: Paul Graham 글 200편 이상 수집**

Agent Swarm은 하위 에이전트를 배치해 200편 이상의 글을 검색, 다운로드, 분류, 요약한 뒤 주제별 폴더로 정리했습니다.

<Chat title="결과 보기" src="https://www.kimi.com/chat/19dbe721-9af2-86eb-8000-09b25205727e?chat_enter_method=home" />

### 대규모 산출

**사례: 40개 PDF로 100페이지 분량의 문헌 고찰 작성**

K2.6 Agent Swarm [베타]는 글쓰기에 특화된 여러 하위 에이전트를 배치하고, 각 에이전트가 한 장씩 맡도록 했습니다. 최종 결과물은 인용, 방법론 차트, 인용 네트워크 분석을 포함한 100페이지 분량의 학술 문서였습니다.

<Frames
  src="./images/swarm/literature-review.png"
  alt="문헌 고찰"
/>

### 대규모 관점 검토

**사례: 제품 출시 전략에 대한 전문가 리뷰**
Agent Swarm은 제품 출시 전략을 검토하기 위해 프로덕트 매니저, 투자자, 고객 성공 담당자 등 서로 다른 관점을 가진 전문가 하위 에이전트를 배치했습니다.

<Frames
  src="./images/swarm/expert-review.png"
  alt="전문가 리뷰"
/>

<Chat title="결과 보기" src="https://www.kimi.com/share/19c40bc9-31a2-8533-8000-0000bad59b7a?hide_sidebar=1&disable_auto_preview=1" />

**사례: *삼체*를 20가지 문체로 다시 쓰기**
20개의 "작가" 하위 에이전트가 버지니아 울프, 보르헤스, 카프카 등 서로 다른 스타일로 독립적으로 글을 썼습니다.

<Chat title="결과 보기" src="https://www.kimi.com/share/19c409c8-8692-821a-8000-0000070ad369?hide_sidebar=1&disable_auto_preview=1" />

## 기술 심층 분석

**핵심 아키텍처: 지휘관 + 전문가들**

- **오케스트레이터** = 코치/지휘관: 전체 그림을 보고 전략을 세웁니다.
- **하위 에이전트** = 선수: 각자 특정 역할에 집중합니다.

**핵심 설계: 선수는 그대로 두고 코치만 훈련하기**

모든 하위 에이전트는 기존 능력을 그대로 유지하고, 오케스트레이터만 강화학습을 통해 개선됩니다. 이를 통해 책임 소재가 분명해지고 학습 안정성도 높아집니다.

**"게으름" 방지:**
- **직렬 붕괴**: 오케스트레이터가 모든 일을 하나의 하위 에이전트에게 넘기는 현상
- **가짜 병렬화**: 지표를 좋게 보이게 하려고 의미 없는 하위 작업을 만드는 현상

**해결책: 3차원 보상 메커니즘**
1. 최종 결과물의 품질
2. 실제로 달성한 병렬성
3. 하위 작업 완료율

**핵심 단계 지표**

Agent Swarm은 각 단계에서 가장 느린 하위 에이전트의 시간을 계산합니다. 이를 통해 무작정 작업을 쪼개는 대신, 실제 프로세스 최적화가 이루어지도록 유도합니다.

**Context Sharding**

각 하위 에이전트는 자신만의 "작업 노트"에 집중하며 관련 세부 정보를 독립적으로 기록합니다. 오케스트레이터에게는 핵심 결론만 보고하므로, 추론 과정은 보존하면서도 메모리에 과부하가 걸리지 않습니다.

**실제 결과**

BrowseComp 벤치마크 기준:
- 정확도: 15.9%(단일 에이전트) → 33.3%
- 핵심 단계 약 40% 감소

## 적용 시나리오

K2.6 Agent Swarm [베타]는 특히 다음에 적합합니다.
1. **대규모 정보 검색**: 방대한 인터넷 데이터 수집
2. **일괄 다운로드**: 대규모 파일 및 리소스 수집
3. **광범위한 문서 읽기**: 100개 이상의 문서 처리
4. **장문 작성**: 100,000단어를 넘는 콘텐츠 작성
5. **복잡한 프로그래밍**: 프런트엔드 개발, 코드 리뷰, 리팩터링
6. **Office 자동화**: 전문 문서, 스프레드시트, 프레젠테이션

**더 읽어보기:**
- [Kimi Agent Swarm: 100개의 하위 에이전트를 대규모로 운용하기](https://www.kimi.com/blog/agent-swarm)
- [Kimi K2.5: Visual Agentic Intelligence](https://www.kimi.com/blog/kimi-k2-5)
- [Kimi K2.6: 오픈소스 코딩의 진전](https://www.kimi.com/blog/kimi-k2-6)
