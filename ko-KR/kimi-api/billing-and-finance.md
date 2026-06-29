---
title: "청구 및 결제"
slug: "api-billing-and-finance"
order: 10
extract_headings: true
preview: false
---

<SeoMeta
  title="청구 및 결제 - Kimi Help Center"
  description="Kimi API 청구, 가격, 결제에 관한 자주 묻는 질문입니다."
/>

# 청구 및 결제

<Callout type="info">
Kimi API 청구, 가격, 결제에 관한 자주 묻는 질문입니다.
</Callout>

## 가격 체계는 어떻게 되나요?
Kimi API는 사용한 token 수를 기준으로 과금되며, 입력 token과 출력 token의 가격이 별도로 책정됩니다. 가격은 모델에 따라 달라지며, Web Search는 호출당 $0.004의 추가 요금이 발생합니다.

<Callout type="tip">
자세한 가격은 [platform.moonshot.ai/docs/pricing/chat](https://platform.moonshot.ai/docs/pricing/chat)을 참고하세요.
</Callout>

## 어떤 결제 수단을 지원하나요?
API 콘솔에서는 다음 결제 수단을 지원합니다.
| 결제 수단 | 세부 정보 |
| --- | --- |
| **신용/직불카드** | Visa, Mastercard 및 기타 주요 카드 |
| **계좌 이체** | 조직 인증을 완료한 사용자는 계좌 이체를 요청할 수 있습니다. 은행 정보는 영업팀에 문의하세요. |

충전한 금액은 API 사용에 즉시 사용할 수 있습니다.
## 인보이스는 어떻게 요청하나요?
1. [platform.moonshot.ai](https://platform.moonshot.ai) 콘솔에 로그인합니다.
2. **Billing → Invoice Management**로 이동합니다.
3. 인보이스가 필요한 충전 기록을 선택합니다.
4. 인보이스 정보(개인 또는 사업자)를 입력하고 제출합니다.
5. 전자 인보이스가 이메일로 발송됩니다.
