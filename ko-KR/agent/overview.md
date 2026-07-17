---
title: "Kimi Agent 개요"
slug: "agent-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Kimi Agent의 자율 작업 실행, 20개 이상의 도구, 지원되는 활용 사례를 알아보세요."
---

<SeoMeta
  title="Kimi Agent 개요 - Kimi 헬프 센터"
  description="Kimi Agent의 기능, 발전 과정, 활용 사례를 알아보세요."
/>

# Kimi Agent 개요

Kimi Agent는 복잡한 작업을 처음부터 끝까지 처리하는 자율형 AI 어시스턴트입니다. Kimi K3을 기반으로 20개 이상의 도구를 활용해 웹사이트 제작, 문서 생성, 데이터 분석 등을 수행합니다.

## 제품 발전 과정
- **2025년 9월 5일**: Kimi K2 출시 — 활성 파라미터 32B / 총 1T
- **2025년 9월 26일**: "OK Computer" Agent 모드 출시
- **2026년 1월 27일**: Kimi K2.5 출시 — Office 작업 역량과 Agent 기능 개선
- **2026년 2월**: Kimi Claw 공개 베타 출시
- **2026년 4월 20일**: Kimi K2.6 출시 및 오픈소스 공개 — 선도적인 코딩, 장기 실행, Agent Swarm
- **2026년 7월 16일**: Kimi K3 출시 — 세계 최초의 개방형 3T급 모델(2.8조 파라미터, 네이티브 비전, 100만 토큰 컨텍스트)이자 Kimi의 가장 강력한 모델로, 채팅, Agent, Agent Swarm을 구동합니다. Kimi App, kimi.com, Kimi Work, Kimi Code, Kimi API를 통해 이용할 수 있으며, 전체 가중치는 2026년 7월 27일에 공개됩니다

## 핵심 기능
| 기능 | 설명 |
|---------|-------------|
| **웹사이트** | 반응형 웹 앱 생성 및 배포 |
| **문서** | Word, PDF, Markdown 편집 및 생성 |
| **시트** | Excel/CSV 데이터 분석 및 시각화 |
| **슬라이드** | PPT 자동 생성 |
| **Deep Research** | 10,000자 이상의 리서치 보고서 |
| **Agent Swarm** | 최대 300개의 하위 에이전트가 병렬 작업 |
| **Kimi Claw** | 5,000개 이상의 스킬을 갖춘 클라우드 자동화 |

<Frames
  src="./images/overview/agent-workflow.png"
  alt="에이전트 워크플로"
/>

## 작동 방식
1. **작업 계획**: 요청을 여러 하위 작업으로 분해합니다
2. **도구 호출**: 필요에 따라 20개 이상의 도구를 사용합니다
3. **자율 실행**: 리서치, 디자인, 개발을 완료합니다
4. **오류 처리**: 사용자 개입 없이 스스로 수정합니다
5. **결과물**: Office 파일, 웹 앱 또는 보고서를 제공합니다

## 시작하기
- **웹**: [kimi.com/agent](https://www.kimi.com/agent)
- **모바일**: Kimi 앱을 열고 모델 전환 버튼에서 K3 또는 K3 Swarm 모델을 선택하세요
작업을 명확히 설명하고 실행 진행 상황을 확인한 뒤, 결과를 다운로드하거나 공유하세요.

## 활용 사례
- 웹사이트 개발(코딩 불필요)
- 멀티미디어를 포함한 콘텐츠 생성
- 문서 비교 및 번역
- 데이터 분석(최대 1,000행 Excel)
- 슬라이드 생성
- 문서 변환

<ColumnsContent
  columns={[
    {
      title: "기능 & 제한 사항",
      description: "기능과 크레딧",
      pageUrl: "/agent/agent-features-and-limits",
      type: "document",
    },
    {
      title: "크레딧 & 결제",
      description: "요금제와 멤버십 세부 정보",
      pageUrl: "/agent/quota-and-billing",
      type: "data",
    },
    {
      title: "Agent Swarm",
      description: "멀티 에이전트 협업",
      pageUrl: "/agent/agent-swarm",
      type: "comment",
    },
    {
      title: "Kimi Claw",
      description: "클라우드 자동화 에이전트",
      pageUrl: "/kimi-claw/overview",
      type: "kimiclaw",
    },
  ]}
/>
