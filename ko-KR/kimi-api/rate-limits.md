---
title: "rate limit"
slug: "api-rate-limits"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="rate limit - Kimi 도움말 센터"
  description="Kimi API는 플랫폼 안정성과 공정한 사용을 위해 요청 빈도와 concurrency에 rate limit을 적용합니다. rate limit 등급은 계정의..."
/>

# rate limit

Kimi API는 플랫폼 안정성과 공정한 사용을 위해 요청 빈도와 concurrency에 rate limit을 적용합니다. rate limit 등급은 계정의 누적 충전 금액을 기준으로 정해집니다.

## rate limit 등급

API rate limit은 계정의 **누적 충전 금액**에 따라 등급이 나뉩니다. 충전 금액이 많을수록 더 높은 rate limit을 사용할 수 있습니다. 구체적인 등급 기준과 해당 RPM(분당 요청 수), TPM(분당 token 수) 한도는 [platform.kimi.ai](https://platform.kimi.ai) 콘솔에서 확인하세요.

## 현재 한도 확인 방법

- API 콘솔에 로그인하면 현재 rate limit 등급을 확인할 수 있습니다.
- API 응답 헤더에도 rate limit 정보가 포함됩니다.
  - `X-RateLimit-Limit`: 현재 rate limit 상한
  - `X-RateLimit-Remaining`: 남은 사용 가능 요청 수
  - `X-RateLimit-Reset`: 한도가 재설정되는 시각

## 429 오류 처리

요청 빈도가 한도를 초과하면 API는 429 상태 코드를 반환합니다. 다음 조치를 권장합니다.

1. **지수 백오프 구현**: 처음에는 1초 기다리고, 재시도할 때마다 대기 시간을 두 배로 늘립니다(2초, 4초, 8초…).
2. **concurrency 제어**: 요청 큐나 세마포어를 사용해 동시에 처리되는 요청 수를 제한합니다.
3. **요청 일괄 처리**: 여러 개의 작은 요청을 묶어 더 적은 수의 큰 요청으로 처리합니다.

## 더 높은 rate limit 요청

비즈니스 요구 사항이 현재 rate limit을 초과하는 경우:

- **충전하여 업그레이드**: 누적 충전 금액을 늘리면 시스템이 rate limit 등급을 자동으로 업그레이드합니다.
- **영업팀 문의**: 특별한 요구 사항이 있는 경우 [platform.kimi.ai/contact-sales](https://platform.kimi.ai/contact-sales)를 통해 플랫폼 영업팀에 문의하여 맞춤 rate quota를 요청하세요.
