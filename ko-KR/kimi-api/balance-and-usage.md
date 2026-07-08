---
title: "잔액 및 사용량"
slug: "api-balance-and-usage"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="잔액 및 사용량 - Kimi 헬프 센터"
  description="Kimi API는 계정 잔액과 사용량 세부 정보를 확인할 수 있는 여러 방법을 제공하여, 사용량과 비용을 쉽게 추적할 수 있도록 돕습니다."
/>

# 잔액 및 사용량

Kimi API는 계정 잔액과 사용량 세부 정보를 확인할 수 있는 여러 방법을 제공하여, 사용량과 비용을 쉽게 추적할 수 있도록 돕습니다.

## 콘솔 대시보드

[platform.kimi.ai](https://platform.kimi.ai)에 로그인한 뒤 콘솔의 **fee-detail**(결제 세부 정보) 페이지로 이동하면 다음을 확인할 수 있습니다.

- 현재 계정 잔액
- 일별 사용량 내역
- 모델별 사용량 및 비용
- 과거 지출 추이

<Callout type="info">
일별 과금 내역은 **다음 날 오전 7:00까지** 업데이트됩니다. 실시간 사용량 데이터는 약간 지연될 수 있습니다.
</Callout>

> **참고**: 일별 과금 내역은 **다음 날 오전 7:00까지** 업데이트됩니다. 실시간 사용량 데이터는 약간 지연될 수 있습니다.

## Token Estimation API

요청을 보내기 전에 Token Estimation API를 사용해 해당 호출이 소비할 토큰 수를 예상할 수 있습니다. 비용 관리에 유용합니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "POST https://api.moonshot.ai/v1/tokenizers/estimate-token-count",
    },
  ]}
/>

Chat Completion 요청과 동일한 `messages` 형식을 전달하면, API가 예상 토큰 수를 반환합니다.

## 잔액 조회 API

API를 통해 현재 계정 잔액을 직접 조회할 수 있습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "GET https://api.moonshot.ai/v1/users/me/balance",
    },
  ]}
/>

사용 가능한 잔액을 가져오려면 요청 헤더에 API Key를 포함하세요.

## 사용량 모니터링 팁

<Callout type="tip">
**권장 사항**:
- fee-detail 페이지를 정기적으로 확인하여 지출 추이를 모니터링하세요
- 잔액 조회 API를 연동하고 잔액 알림 임계값을 설정하세요
- 중요한 호출 전에는 Token Estimation API를 사용해 비용을 예상하세요
</Callout>
