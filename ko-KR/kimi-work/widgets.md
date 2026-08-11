---
title: "Widgets"
slug: "widgets"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Work Widgets - Kimi 헬프 센터"
  description="Kimi Work Widgets를 알아보세요. 모델이 채팅에서 바로 생성하는 대화형 페이지로, widget task를 바인딩해 계속 업데이트되는 live widget을 만들고 Dashboard에 저장할 수 있습니다."
/>

# Widgets

Widget은 모델이 생성해 채팅에 바로 표시되는 대화형 페이지입니다. 별도의 결과물 지시를 하지 않아도 모델이 시나리오에 적합하다고 판단하면(예: 지도 표시, 이메일 초안 작성, 레시피 정리, 데이터 시각화) widget을 생성해 답변을 더 빠르고 직관적으로 이해할 수 있게 도와줍니다.

Widget은 로컬 데이터나 외부 플러그인에 연결해 지속적으로 업데이트할 수 있으며, [Dashboard](/kimi-work/dashboard)에 저장해 장기적으로 확인하고 관리할 수 있습니다.

## Widget 생성하기

1. 채팅에서 자연어로 필요한 내용을 설명합니다. 예를 들면 다음과 같습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "미국 테크 뉴스를 매일 오전 9시에 업데이트하는 데일리 다이제스트 widget을 만들어 줘",
    },
  ]}
/>

2. 생성되는 동안 widget 페이지가 단계별로 완성되는 과정을 지켜볼 수 있습니다.
3. 생성이 완료되면 채팅에서 바로 widget과 상호작용할 수 있습니다.

## Widget Task와 Live Widget

- **Widget Task**: 특정 조건이 충족되면 자동으로 실행되는 작업으로, 일정에 따라 또는 이벤트로 트리거할 수 있습니다.
- **Live Widget**: widget task에 바인딩된 widget으로, 작업이 실행될 때마다 콘텐츠가 자동으로 업데이트됩니다. 예를 들어 "데일리 미국 테크 뉴스 다이제스트" widget을 매일 아침 실행되는 작업에 바인딩하면 콘텐츠가 매일 자동으로 새로고침됩니다.

<Callout type="info">
동시에 실행할 수 있는 widget task 수에는 제한이 있으며, 플랜에 따라 다릅니다. 제한에 도달하면 Dashboard 페이지에서 일부 작업을 일시 중지한 후 새 작업을 생성하세요.
</Callout>

## Dashboard에 저장하기

Widget이 생성된 후 마우스를 올리고 "Save to Dashboard"를 선택하면 dashboard에 저장됩니다. 하나의 widget은 여러 dashboard에 동시에 존재할 수 있습니다.

Dashboard에서는 live widget에 바인딩된 작업을 확인하고, 켜거나 끄고, 최근 10회 실행 기록을 확인할 수 있습니다. [Dashboard](/kimi-work/dashboard)를 참조하세요.
