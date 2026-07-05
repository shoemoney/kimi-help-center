---
title: "Deep Research"
slug: "deep-research-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Deep Research가 스스로 계획하고 검색하며 10,000단어 이상의 연구 보고서를 완성하는 방식을 알아보세요."
---

<SeoMeta
  title="Deep Research 개요 - Kimi 헬프 센터"
  description="Deep Research가 스스로 계획하고 검색하며 10,000단어 이상의 연구 보고서를 완성하는 방식을 알아보세요."
/>

# Deep Research

<Callout type="info">
**Deep Research**는 Kimi-Researcher 모델로 구동되는 Kimi의 첫 Agent 제품입니다. 단순히 질문에 답하는 데 그치지 않고, 실제 연구자처럼 작업 계획부터 보고서 전달까지 전체 워크플로를 자율적으로 수행합니다.
</Callout>

## Kimi-Researcher는 어떻게 작동하나요?

모든 질문에 대해 Kimi-Researcher는 전체 연구 파이프라인을 독립적으로 수행합니다.
| 단계 | 설명 |
| --- | --- |
| **의도 명확화** | 문제 범위를 더 명확히 잡기 위해 선제적으로 후속 질문을 합니다 |
| **심층 추론** | 작업당 평균 23단계의 추론을 거쳐 요구 사항을 정리하고 해결합니다 |
| **능동 검색** | 약 74개의 키워드를 계획하고 206개의 URL을 찾아낸 뒤, 상위 3.2%의 고품질 콘텐츠만 선별합니다 |
| **반복 심층 추론** | 결과를 평가해 추가 검색이 필요한지 판단합니다 |
| **도구 호출** | 브라우저, 코드 실행 등 다양한 도구를 호출해 데이터를 처리합니다 |
| **보고서 생성** | 정보를 종합해 인용이 포함된 구조화된 장문 보고서를 작성합니다 |

<Callout type="info">
Deep Research는 비동기 방식으로 작동하며, 단계별 추론, 검색, 작성에 10~25분이 소요됩니다.
</Callout>

## 산출물
각 연구 작업은 두 가지 산출물을 생성합니다.
### 1. 텍스트 연구 보고서
- 평균 길이: 10,000단어 이상
- 추적 가능한 고품질 출처 약 26개
- 본문에 인용 포함 — 클릭하면 출처로 이동

<Frames
  src="./images/overview/dr-gif.gif"
  alt="DR GIF"
/>

### 2. 시각 보고서
- 인터랙티브하고 공유 가능한 동적 HTML 보고서
- 구조화된 레이아웃과 마인드맵
- 공개 공유 링크 제공

<Frames
  src="./images/overview/drreport.png"
  alt="DR 보고서"
/>

## 활용 사례

<Callout type="tip">
**적합한 용도**: 투자 분석, 산업 리서치, 학술 주제, 전략 기획, 규제 검토, 지식 종합
</Callout>

| 분류 | 예시 |
| --- | --- |
| **전문 리서치** | 투자 분석, 산업 리서치, 학술 주제, 전략 기획 |
| **정보 종합** | 규제 검토, 복잡한 문서 검색, 여러 출처의 정보 통합 |
| **지식·교육** | 교육 자료, 체계적 조사, 주제 심층 탐구 |
| **일상적 탐색** | 관심 있는 주제 학습 |

<Callout type="warning">
**적합하지 않은 용도**: 창작 글쓰기(소설, 시나리오), 운세 보기, 이력서 작성, 고정 형식 템플릿, 편집 가능한 슬라이드
</Callout>

## Deep Research 사용 방법
**진입 경로**:
- **Web**: [kimi.com/deep-research](https://www.kimi.com/deep-research)
- **Mobile**: Kimi app → 작업 표시줄 → Deep Research Agent 모드
**절차**:
1. 연구 질문을 입력하고 전송합니다
2. Clarification (의도 명확화) 질문에 답해 방향을 확정합니다. 건너뛰려면 "모두 포함"을 클릭합니다
3. 검색 키워드, 추론 과정, 방문한 URL을 실시간으로 확인합니다
4. 완료되면 두 가지 산출물을 받습니다.
   - **Deep Research 보고서** (Markdown): 목차와 추적 가능한 출처가 포함된 10,000단어 이상의 보고서
   - **시각 보고서** (HTML): 인터랙티브하며 공개 공유가 가능한 시각 보고서
5. 필요에 따라 미리보기, 다운로드(PDF/Word) 또는 공유를 진행합니다
## 더 좋은 결과를 얻기 위한 팁
### 1. 범위 좁히기
제출하기 전에 다음 항목을 지정해 보세요.
- **기간**: "2023년부터 현재까지"
- **지역 범위**: "미국 시장만"
- **출처 유형**: "공식 보고서와 학술 논문을 우선"
- **질문 분해**: 넓은 질문을 하위 질문으로 나누기

### 2. Clarification (의도 명확화) 단계에서 방향 보정하기
- 다루지 않길 원하는 방향을 명시합니다
- 집중할 구체적인 차원이나 관점을 추가합니다
- 복잡한 질문에는 배경 맥락을 제공합니다

<Callout type="warning">
Clarification (의도 명확화) 답변은 간결하고 구체적으로 작성하세요. 지나치게 길거나 불분명한 입력은 연구 방향이 흔들리는 원인이 될 수 있습니다.
</Callout>

### 3. 실행 중에는 여유 있게 기다리기
Deep Research는 보통 10~25분이 걸립니다. 시스템은 백그라운드에서 실행되므로 페이지에 계속 머물러 있을 필요는 없습니다.

<Callout type="warning">
**"출력 중지"를 클릭하지 마세요** — 클릭하면 연구가 종료됩니다. 페이지가 응답하지 않는 것처럼 보이면 새로고침만 해 주세요.
</Callout>

## 중요 참고 사항
1. **실행 시간**: 10~25분. 작업은 비동기로 실행되며, 완료되면 알림을 받습니다
2. **크레딧 환불**: 도구 호출 오류가 발생하면 자동으로 환불됩니다. 연구 방향이 어긋난 경우 피드백을 제출해 주세요
3. **입력 품질**: 간결하고 명확한 질문일수록 더 좋은 결과가 나옵니다
4. **범위 기준**: 단순한 질의응답은 더 빠른 응답을 위해 일반 채팅 모드를 사용하세요
5. **약관**: [Kimi 사용자 서비스 이용약관](https://www.kimi.com/user/agreement/modelUse?version=v2)이 적용됩니다

## 관련 자료
- 기술 보고서: [Kimi-Researcher: End-to-End RL Training](https://moonshotai.github.io/Kimi-Researcher/)
- 사용자 갤러리: [kimi.com/deep-research](https://www.kimi.com/deep-research?showGallery=true)

<Frames
  src="./images/overview/dr-gallery.png"
  alt="DR 갤러리"
/>
