---
title: "API 오류 코드"
slug: "api-error-codes"
order: 2
extract_headings: false
preview: false
---

<SeoMeta
  title="API 오류 코드 - Kimi 도움말 센터"
  description="Kimi API 호출 시 자주 발생하는 오류 코드와 해결 방법입니다."
/>

# API 오류 코드

<Callout type="info">
Kimi API 호출 시 자주 발생하는 오류 코드와 해결 방법입니다.
</Callout>

## 오류 코드 참고표

| 오류 코드 | 의미 | 해결 방법 |
| --- | --- | --- |
| 400 | 잘못된 요청 | 요청 본문 형식, 매개변수 이름과 타입을 확인하세요. 주요 원인으로는 잘못된 JSON 형식, 필수 매개변수 누락, 허용 범위를 벗어난 값 등이 있습니다. |
| 401 | 인증되지 않음 | API 키가 올바른지, 만료되거나 비활성화되지 않았는지 확인하세요. 헤더 형식이 `Authorization: Bearer <your-api-key>`인지도 확인하세요. |
| 403 | 금지됨(잔액 부족) | 계정 잔액이 소진되었습니다. 콘솔에서 충전하세요. 계정에 제한이 걸렸을 수도 있으니, 필요한 경우 지원팀에 문의하세요. |
| 404 | 찾을 수 없음 | 요청 URL 경로와 모델 이름을 확인하세요. 엔드포인트가 `https://api.moonshot.ai/v1/...`인지 확인하세요. |
| 429 | Too Many Requests | rate limit을 초과했습니다. 호출 빈도를 낮추고, 지수 백오프를 구현하거나, 더 높은 한도가 필요하면 지원팀에 문의하세요. |
| 500 | Internal Server Error | 일시적인 서버 문제입니다. 잠시 후 다시 시도하세요. 문제가 계속되면 `request_id`와 함께 support@moonshot.ai로 문의하세요. |

## 일반 문제 해결 팁

<Callout type="tip">
1. **전체 오류 메시지를 확인하세요**: 응답 JSON의 `error.message`에 자세한 설명이 포함되어 있습니다.
2. **request_id를 기록하세요**: 지원팀이 문제를 빠르게 찾는 데 도움이 됩니다.
3. **공식 문서를 참고하세요**: 호출이 [platform.kimi.ai](https://platform.kimi.ai)의 문서와 일치하는지 확인하세요.
4. **재시도 로직을 구현하세요**: 429 및 500 오류에는 지수 백오프를 사용하세요.
</Callout>
