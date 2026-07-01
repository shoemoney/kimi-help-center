---
title: "모델 기능"
slug: "api-model-capabilities"
order: 11
extract_headings: true
preview: false
---

<SeoMeta
  title="모델 기능 - Kimi 헬프 센터"
  description="아래에서 Kimi API 모델 기능에 관해 자주 묻는 질문을 확인할 수 있습니다."
/>

# 모델 기능

아래에서 Kimi API 모델 기능에 관해 자주 묻는 질문을 확인할 수 있습니다.

## JSON mode를 지원하나요?

네. Kimi API는 모델 출력이 유효한 JSON이 되도록 제한하는 JSON Mode를 제공합니다. 사용 방법은 다음과 같습니다.

- 요청에서 `response_format` 매개변수를 `{"type": "json_object"}`로 설정합니다.
- 또한 프롬프트에서 모델이 JSON을 반환하도록 명시적으로 지시하고, 기대하는 구조를 설명합니다.
- JSON Mode에서는 모델이 파싱 가능한 JSON 문자열을 출력하도록 보장됩니다.

## 모델 파인튜닝을 지원하나요?

Kimi API는 현재 사용자가 직접 시작하는 모델 파인튜닝을 **지원하지 않습니다**. 맞춤형 모델이 필요한 경우 [platform.moonshot.ai/contact-sales](https://www.platform.moonshot.ai/contact-sales)를 통해 영업팀에 문의하여 기업용 맞춤 옵션을 확인하세요.

## OCR을 지원하나요?

Kimi API의 Vision 모델은 이미지 이해 기능을 갖추고 있어 이미지 속 텍스트를 인식할 수 있으며, OCR과 유사한 결과를 제공합니다.

- 영어, 중국어를 비롯한 다양한 언어의 텍스트 인식을 지원합니다.
- 인쇄된 텍스트와 일부 손글씨를 인식할 수 있습니다.
- 각 이미지는 1,024 token의 고정 요금으로 과금됩니다.
- 단순 텍스트 인식을 넘어, 모델은 이미지 속 표, 차트 및 기타 구조화된 콘텐츠도 해석할 수 있습니다.

## TTS(텍스트 음성 변환)와 ASR(음성 인식)을 지원하나요?

Kimi API는 현재 TTS 또는 ASR을 **지원하지 않습니다**. 음성 관련 기능이 필요한 경우 타사 음성 서비스를 Kimi API와 함께 사용하는 방안을 고려해 보세요. 향후 기능 업데이트는 플랫폼 공지를 확인해 주세요.
