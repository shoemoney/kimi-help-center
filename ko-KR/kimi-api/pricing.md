---
title: "API 요금"
slug: "api-pricing"
order: 3
extract_headings: false
preview: false
---

<SeoMeta
  title="API 요금 - Kimi 도움말 센터"
  description="Kimi API는 token 사용량을 기준으로 과금되며, 모델과 기능에 따라 요금이 달라집니다."
/>

# API 요금

<Callout type="info">
Kimi API는 token 사용량을 기준으로 과금되며, 모델과 기능에 따라 요금이 달라집니다.
</Callout>

## 과금 기본 사항

- **token 단위 과금**: 각 API 호출은 입력 token과 출력 token에 대해 각각 과금됩니다
- **token 단위**: 1M = 1,000,000 token
- **모델별 요금**: 성능이 더 높은 모델일수록 token당 비용이 높습니다. 사용 사례에 가장 알맞은 모델을 선택하세요

## 부가 기능 과금

| 기능 | 추가 요금 |
| --- | --- |
| **Web Search(웹 검색)** | 호출 1회당 $0.004 (token 사용량과 무관) |

## 컨텍스트 캐싱

<Callout type="tip">
**컨텍스트 캐싱**을 사용하면 시스템 프롬프트나 참고 문서처럼 자주 쓰는 컨텍스트 콘텐츠를 캐시할 수 있습니다. 캐시에 적중한 token에는 할인 요금이 적용되어, 반복되는 컨텍스트에 드는 비용을 효과적으로 줄일 수 있습니다.
</Callout>

컨텍스트 캐싱의 자세한 요금은 공식 문서를 참고하세요.

## 요금 상세

전체 모델 요금표와 과금 규칙은 다음에서 확인할 수 있습니다.

[platform.kimi.ai/docs/pricing/chat](https://platform.kimi.ai/docs/pricing/chat)로 이동하세요

## 비용 최적화 팁

<Callout type="tip">
- 불필요하게 긴 출력이 생성되지 않도록 `max_tokens` 매개변수를 적절히 설정하세요
- 반복되는 시스템 프롬프트와 컨텍스트에는 컨텍스트 캐싱을 사용하세요
- 작업 복잡도에 맞는 모델을 선택하세요. 단순한 작업에는 경량 모델을 사용하면 됩니다
- 프롬프트 설계를 간결하게 다듬어 불필요한 입력 token을 줄이세요
</Callout>
