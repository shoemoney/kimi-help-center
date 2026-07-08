---
title: "모델 선택 및 비교"
slug: "api-model-selection"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="모델 선택 및 비교 - Kimi 헬프 센터"
  description="기능, 속도, 가격을 기준으로 적합한 Kimi API 모델을 선택하세요."
/>

# 모델 선택 및 비교

<Callout type="info">
기능, 속도, 가격을 기준으로 적합한 Kimi API 모델을 선택하세요.
</Callout>

Kimi API는 개발자가 선택할 수 있는 여러 모델을 제공합니다.
## 사용 가능한 모델
전체 모델 목록과 상세 사양은 [platform.kimi.ai/docs/models](https://platform.kimi.ai/docs/models)에서 확인하세요.
모델을 선택할 때는 다음 기준을 고려할 수 있습니다.
| 항목 | 고려 사항 |
| --- | --- |
| **컨텍스트 길이** | 긴 문서 처리에는 대용량 컨텍스트 모델을 선택하세요 |
| **응답 속도** | 지연 시간에 민감한 상황에는 경량 모델이 적합합니다 |
| **생성 품질** | 복잡한 추론과 창의적 글쓰기에는 상위 등급 모델을 선택하세요 |
| **가격** | 예산과 사용량을 고려해 비용 효율적인 모델을 선택하세요 |

## 비전 모델
비전 모델은 이미지 입력을 지원하며, 캡션 생성, OCR, 차트 해석 등에 사용할 수 있습니다.

<Callout type="info">
- 각 이미지는 크기나 해상도와 관계없이 **1,024 토큰**의 고정 요금으로 청구됩니다
- 지원 형식: JPEG, PNG, WebP 등
- 이미지는 URL 또는 Base64 인코딩으로 전달할 수 있습니다
</Callout>

## 현재 지원되지 않는 기능

<Callout type="warning">
- **비디오 멀티모달**: 직접적인 비디오 입력은 아직 지원되지 않습니다
- **PPT 생성 API**: 아직 API로 제공되지 않습니다
- **Deep Research API**: 아직 API로 제공되지 않습니다
</Callout>

이 기능들에 대한 업데이트는 플랫폼 공지를 확인하세요.
