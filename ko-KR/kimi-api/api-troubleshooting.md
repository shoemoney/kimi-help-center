---
title: "API 문제 해결"
slug: "api-troubleshooting"
order: 8
extract_headings: true
preview: false
---

<SeoMeta
  title="API 문제 해결 - Kimi 도움말 센터"
  description="Kimi API를 사용하는 개발자를 위한 일반적인 문제와 해결 방법입니다."
/>

# API 문제 해결

<Callout type="info">
Kimi API를 사용하는 개발자를 위한 일반적인 문제와 해결 방법입니다.
</Callout>

## 429 rate limit 오류는 어떻게 처리하나요?

429 오류는 요청 빈도가 현재 계정의 rate limit을 초과했다는 뜻입니다. 해결하려면 다음을 시도하세요.

- 지수 백오프 재시도 전략을 구현합니다. 재시도 전 1초, 2초, 4초…처럼 점차 오래 기다립니다.
- 큐 메커니즘을 사용해 동시 요청 수를 제어합니다.
- 누적 충전 금액을 늘려 rate limit 등급을 올립니다.
- 더 높은 quota가 필요하면 영업팀에 문의하세요.

## 401 인증 오류는 어떻게 처리하나요?

401 오류는 API 키 인증에 실패했다는 뜻입니다. 다음 항목을 확인하세요.

- API 키가 올바르게 복사되었는지 확인합니다. 앞뒤 공백에 주의하세요.
- 요청 헤더 형식이 `Authorization: Bearer <your-api-key>`인지 확인합니다.
- API 키가 삭제되었거나 비활성화되지 않았는지 콘솔에서 확인합니다.
- 다른 플랫폼의 키를 사용하고 있지 않은지 확인합니다. Kimi API 키는 `sk-`로 시작합니다.

<Callout type="warning">
**API 키 형식**: Kimi API 키는 `sk-`로 시작합니다. 올바른 키 형식을 사용하고 있는지 확인하세요.
</Callout>

## 파일 업로드에도 요금이 부과되나요?

파일 업로드 자체는 무료입니다. 다만 대화에서 업로드한 파일을 참조하면 파일 내용이 token으로 파싱되어 입력 token으로 과금됩니다. 파일이 클수록 더 많은 token이 생성됩니다.

## 403 잔액 부족 오류는 어떻게 처리하나요?

403 오류는 일반적으로 계정 잔액이 부족하다는 뜻입니다. 콘솔에서 충전하세요. 충전한 금액은 즉시 사용할 수 있습니다. 잔액 조회 API로 현재 잔액을 확인할 수도 있습니다.

## 응답이 중간에 잘리면 어떻게 하나요?

API 응답이 불완전하거나 중간에 잘린 경우:

- `max_tokens` 매개변수가 너무 낮게 설정되어 있는지 확인하고 필요에 따라 높입니다.
- 응답의 `finish_reason` 필드를 확인합니다. `length`는 token 제한 때문에 출력이 잘렸다는 뜻이고, `stop`은 정상적으로 완료되었다는 뜻입니다.
- 긴 텍스트를 생성해야 한다면 요청을 여러 구간으로 나누는 방법을 고려하세요.

<Callout type="tip">
**`finish_reason` 확인**: `length` = 잘림, `stop` = 정상 완료.
</Callout>

## 파일 API로 이미지를 업로드할 수 있나요?

예. 파일 업로드 API는 이미지 파일을 지원합니다. 업로드한 이미지는 대화에서 참조할 수 있습니다. Vision 모델을 사용하는 경우 URL 또는 Base64 인코딩을 통해 메시지에 이미지를 직접 전달할 수도 있습니다.

## Web Search의 출처는 무엇인가요?

Kimi API의 Web Search 기능은 인터넷에 공개된 정보를 실시간으로 가져옵니다. 결과는 주요 검색 엔진에 색인된 웹페이지에서 제공됩니다. Web Search를 한 번 호출할 때마다 $0.004의 추가 요금이 부과됩니다.

## Kimi 멤버십과 API concurrency는 관련이 있나요?

<Callout type="warning">
**Kimi 멤버십 플랜**(예: Allegretto)과 **API**는 별도의 과금 시스템입니다. 멤버십 플랜에 포함된 에이전트 병렬 실행은 Kimi의 소비자용 제품에만 적용되며 API rate limit과는 관련이 없습니다. API concurrency 한도는 계정의 누적 충전 등급에 따라 결정됩니다.
</Callout>

## API와 Kimi 웹 앱의 차이

| 항목 | Kimi 웹 앱 | Kimi API |
| --- | --- | --- |
| **대상** | 일반 사용자를 위한 대화형 제품 | 개발자를 위한 연동 인터페이스 |
| **접근 방식** | 브라우저 기반 | 프로그래밍 방식의 API 호출 |
| **과금** | 멤버십/크레딧 시스템 | token 기준 종량제 |
| **계정** | 동일 로그인 계정 | 동일 로그인 계정 |
| **크레딧** | 시스템 간 이전 불가 | 시스템 간 이전 불가 |

## API에서 PPT 생성과 Deep Research를 사용할 수 있나요?

<Callout type="warning">
**PPT 생성**과 **Deep Research**는 **아직 API로 제공되지 않습니다**. 현재 이 기능들은 Kimi 소비자용 제품에서만 사용할 수 있습니다. 업데이트 소식은 플랫폼 공지를 확인하세요.
</Callout>

## 온프레미스 배포를 지원하나요?

현재 Kimi API는 클라우드 기반 API 서비스만 제공하며, **온프레미스 프라이빗 배포는 지원하지 않습니다**. 프라이빗 배포가 필요하다면 [platform.moonshot.ai/contact-sales](https://platform.moonshot.ai/contact-sales)를 통해 영업팀에 문의하세요.

## 중국 외 지역에서 Kimi API를 호출할 수 있나요?

Kimi API는 `api.moonshot.ai`를 통해 전 세계에서 사용할 수 있습니다. 연결 문제가 발생하면 영업팀에 문의하여 해당 지역에 가장 적합한 해결 방법을 상담하세요.
