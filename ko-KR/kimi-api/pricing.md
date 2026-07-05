---
title: "API 요금"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API 요금 - Kimi 헬프 센터"
  description="Kimi API는 token 사용량을 기준으로 과금되며, 모델 및 기능별 요금이 적용됩니다."
/>

# API 요금

<Callout type="info">
Kimi API는 token 사용량을 기준으로 과금되며, 모델 및 기능별 요금이 적용됩니다.
</Callout>

## 과금 기본 사항

- **token별 과금**: 각 API 호출은 입력 token과 출력 token을 나누어 별도로 과금합니다
- **token 단위**: 1M = 1,000,000 tokens
- **모델별 요금**: 성능이 높은 모델일수록 token당 비용이 높습니다. 사용 사례에 가장 알맞은 모델을 선택하세요

## 추가 기능 과금

| 기능 | 추가 요금 |
| --- | --- |
| **Web Search** | 호출 1회당 $0.004(token 사용량과 무관) |

## 컨텍스트 캐싱

<Callout type="tip">
**컨텍스트 캐싱**을 사용하면 자주 쓰는 컨텍스트 콘텐츠(예: 시스템 프롬프트, 참고 문서)를 캐시할 수 있습니다. 캐시에 적중한 token에는 할인 요금이 적용되어, 반복되는 컨텍스트 비용을 효과적으로 줄일 수 있습니다.
</Callout>

자세한 컨텍스트 캐싱 요금은 공식 문서를 참고하세요.

## 요금 상세

전체 모델 요금표와 과금 규칙은 다음에서 확인할 수 있습니다.

[platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)으로 이동하세요

## 비용 최적화 팁

<Callout type="tip">
- 불필요하게 긴 출력이 생성되지 않도록 `max_tokens` 매개변수를 적절히 설정하세요
- 반복되는 시스템 프롬프트와 컨텍스트에는 컨텍스트 캐싱을 사용하세요
- 작업의 복잡도에 맞는 모델을 선택하세요. 간단한 작업에는 경량 모델을 사용하면 됩니다
- 불필요한 입력 token을 최소화하도록 프롬프트 설계를 간결하게 다듬으세요
</Callout>
