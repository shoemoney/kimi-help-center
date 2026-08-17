---
title: "Kimi Work 개요"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "Kimi Work는 Kimi 데스크톱 클라이언트(Mac / Windows)의 \"Work\" 모드에서 사용할 수 있는 지식 근로자용 범용 로컬 Agent입니다."
---

<SeoMeta
  title="Kimi Work란? 지식 근로자를 위한 로컬 Agent - Kimi 헬프 센터"
  description="Kimi Work(Beta)를 알아보세요. Kimi Code와 Kimi K3 모델 기반의 지식 근로자용 범용 로컬 Agent로, Skills, 예약 작업, WebBridge, Agent Swarm, 위젯, 대시보드를 지원하며 Mac / Windows 클라이언트에서 사용할 수 있습니다."
/>

# Kimi Work 개요

Kimi Work는 Kimi 데스크톱 클라이언트(Mac / Windows)의 "Work" 모드에서 사용할 수 있는 지식 근로자용 범용 로컬 Agent입니다.

Kimi Work는 엔지니어링 환경에서 검증된 Kimi Code의 Agent 역량을 일상적인 지식 근로자에게 익숙한 데스크톱 상호작용으로 가져옵니다. 터미널을 열거나, 명령어를 작성하거나, 환경을 설정할 필요가 없습니다. 자연어로 목표만 설명하면 Kimi Work가 작업을 분해하고, 여러 단계를 병렬로 실행하고, 도구를 호출하고, 브라우저를 사용하고, 폴더를 만들고 정리하며, 문서·스프레드시트·슬라이드 덱 같은 결과물을 사용자의 컴퓨터에서 완성합니다.

Kimi Code가 코드를 작성하는 개발자를 위한 도구라면, Kimi Work는 지식 근로자를 위한 도구로, 주로 정보 이동, 파일 정리, 데이터 분석, 보고서 작성 같은 일상 업무 시나리오를 다룹니다.

## 핵심 기능

- **로컬 Agent 커널**: Kimi Code를 커널로 사용하고 Kimi K3 모델을 기반으로, Skills 설치 및 사용, 예약 작업 실행 등 로컬 Agent의 기본 역량을 제공합니다.
- **전문 Skills**: 웹사이트 제작, PPT 생성 등 온라인 Kimi Agent의 전문 Skills를 계승하며, 서드파티 Skills 추천과 로컬 Skills 업로드도 지원합니다.
- **플러그인 및 전문 데이터베이스**: Kimi 안에서 Canva, Notion, WPS 같은 외부 앱과 서비스를 사용하고, 금융·연구·법률 등 다양한 분야의 전문 데이터베이스에 연결할 수 있습니다.
- **위젯(Widgets)**: 모델이 채팅에서 생성하는 대화형 페이지로, 로컬 데이터나 외부 플러그인에 연결해 지속적으로 업데이트할 수 있어 답변을 더 시각적이고 이해하기 쉽게 만들어 줍니다. [위젯](/kimi-work/widgets)을 참조하세요.
- **대시보드(Dashboard)**: 가장 관심 있는 위젯을 하나의 영속적이고 개인화된 보기로 모아 주제·프로젝트·목표 중심으로 정리하고, 언제든 확인하고 관리할 수 있습니다. [대시보드](/kimi-work/dashboard)를 참조하세요.
- **Kimi WebBridge**: 사람이 브라우저를 다루는 방식 그대로 사용하는 내장 브라우저 조작 솔루션입니다.
- **Agent Swarm**: 작업 복잡도에 따라 최대 300개의 sub-agent로 팀을 자율 구성해 더 복잡하고 오래 걸리는 작업을 처리합니다.
- **장기 작업 실행**: Kimi K3 모델의 장기 작업 실행 능력을 기반으로, 수십 시간의 자율 작업과 수천 회의 자율 도구 호출을 지원합니다.

## 인터페이스와 상호작용

- 클라이언트에는 "Work"와 "Chat" 두 가지 모드가 있습니다. Work 모드 사이드바에는 새 작업, 대시보드, 플러그인, Skills, 예약 작업, WebBridge, 프로젝트, Chat이 포함됩니다.
- 입력창에 "/"를 입력하면 Skills를 빠르게 사용할 수 있고, "@"를 입력하면 context를 추가할 수 있습니다.
- 권한 제어를 제공하며, 다음 방식으로 승인 방식을 선택할 수 있습니다.
  - **권한 요청**: 작업을 수행하기 전에 승인을 요청합니다.
  - **모두 허용**: 승인 요청 없이 바로 실행합니다.
- "Agent"와 "Agent Swarm" 두 실행 모드 사이를 전환할 수 있습니다.

## 버전 참고 사항

Kimi Work는 2026년 6월 3일 출시되었으며, 현재 Beta 단계로 빠르게 반복 개선되고 있습니다. 파일 미리보기, 초안 자동 저장, Goal 모드, 플러그인 센터, 위젯, 대시보드 같은 기능이 단계적으로 추가되었습니다. 3.1.0 버전부터 Kimi Work는 Kimi K3 모델을 기반으로 합니다. 현재 테스트의 초점은 작업 분해, 멀티 Agent 병렬 처리, 도구 호출, 브라우저 조작, 로컬 파일 처리, 긴 결과물 생성에 맞춰져 있습니다. 실행 안정성, 결과물 품질, 사용자 경험은 beta 사용자 피드백을 바탕으로 계속 개선될 예정입니다.

## 시스템 요구 사항 및 다운로드

- **Mac**: Apple silicon 필요, macOS 12 이상
- **Windows**: Windows 10 이상
- **다운로드**: <a href="https://www.kimi.com/products/kimi-work">kimi.com/products/kimi-work</a>
