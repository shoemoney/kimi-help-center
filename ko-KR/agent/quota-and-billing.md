---
title: "Agent credit 및 요금"
slug: "quota-and-billing"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Agent credit 및 요금 - Kimi Help Center"
  description="Agent 모드는 Kimi의 credit 시스템을 사용합니다. 모든 멤버십 기능(Agent, Deep Research, Slides, Docs, Sheets, Kimi Code, Kimi Work, Kimi Claw 등)은 하나의 credit 풀을 공유하며, 실제 token 사용량에 따라 credit이 차감됩니다."
/>

# Agent credit 및 요금

<Callout type="info">
Agent 모드는 Kimi의 credit 시스템을 사용합니다. 모든 멤버십 기능(Agent, Deep Research, Slides, Docs, Sheets, Kimi Code, Kimi Work, Kimi Claw 등)은 하나의 credit 풀을 공유하며, 실제 token 사용량에 따라 credit이 차감됩니다.
</Callout>

## 과금 방식
- **공유 credit 풀**: 모든 멤버십 기능은 하나의 credit 풀을 공유하므로 원하는 방식으로 사용량을 배분할 수 있습니다. Kimi Code에는 Kimi Code에만 적용되는 별도의 주 5시간 rate limit이 있으며, 다른 기능에는 영향을 주지 않습니다
- **사용량 기반 과금**: credit 사용량은 작업의 복잡도와 소요 시간, 즉 token 사용량에 따라 달라집니다. 간단한 작업은 적게, 복잡한 작업은 더 많이 소모됩니다
- **월간 갱신**: credit은 구독 주기에 맞춰 매월 초기화됩니다
- **사용 우선순위**: 보너스 credit(예: 체험 credit, 프로모션 리워드)이 먼저 사용되고, 그다음 플랜 credit이 사용됩니다

<Callout type="tip">
**예시**: Moderato 플랜에서는 간단한 PPT를 생성할 때 credit의 약 1~2%가 사용될 수 있으며, Deep Research 세션 1회에는 약 5~10%가 사용될 수 있습니다.
</Callout>

## credit을 모두 사용하면 어떻게 되나요?
credit이 모두 소진되면:
- 현재 진행 중인 작업은 정상적으로 완료됩니다
- 새 작업에는 "credit 부족" 안내가 표시됩니다
- 선택할 수 있는 방법:
  - 월간 credit이 자동으로 갱신될 때까지 기다리기
  - 더 많은 credit을 사용할 수 있는 상위 멤버십으로 업그레이드하기

## credit 사용량은 어떻게 확인하나요?
- **Web**: 프로필 → 설정 → 구독
- **App**: 프로필 → 멤버십 플랜 → 구독
확인할 수 있는 항목:
1. 현재 credit 잔액(백분율)
2. 다음 갱신일
3. 최근 10건의 사용 기록(타임스탬프, 사용한 기능, 사용 비율)

<Callout type="info">
사용 기록은 잠시 지연될 수 있습니다. 가장 최신 정보는 실제 credit 표시를 기준으로 확인하세요.
</Callout>

## 실패한 작업도 credit이 사용되나요?
- credit은 작업이 성공적으로 실행된 뒤 실제 사용량을 기준으로 차감됩니다
- 시스템 오류로 작업이 실패한 경우(유효한 결과가 반환되지 않은 경우) **👎** 버튼을 클릭해 신고하세요. 확인 후 해당 credit이 환급됩니다
