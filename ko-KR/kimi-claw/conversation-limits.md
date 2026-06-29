---
title: "대화 제한"
slug: "conversation-limits"
order: 6
extract_headings: false
preview: false
---

<SeoMeta
  title="대화 제한 - Kimi 도움말 센터"
  description="대화 context가 너무 길어져 모델의 token 제한을 초과하면 Kimi Claw가 응답을 멈추거나 오류를 반환할 수 있습니다."
/>

# 대화 제한

대화 context가 너무 길어져 모델의 token 제한을 초과하면 Kimi Claw가 응답을 멈추거나 오류를 반환할 수 있습니다.

**해결 방법：**

- `/new`를 보내 새 대화를 시작하고 현재 context를 지우세요.
- `/new` 후에도 오류가 계속되면 너무 많은 스킬이 메모리에 로드되어 있을 수 있습니다. 다음을 시도해 보세요.
  - `/skills` — 설치된 스킬을 확인하고 필요 없는 스킬을 제거하세요.
  - `/compact` — 현재 context를 압축해 공간을 확보하세요.
  - `/reset` — 최후의 방법으로 Kimi Claw를 완전히 초기화하세요.

## API rate limit에 도달했나요?

요청 빈도 상한에 도달했다는 뜻입니다. 잠시 기다렸다가 다시 시도하세요.

**quota와 rate limit 확인 방법:**

1. [kimi.com/code](https://kimi.com/code)로 이동하세요.
2. **콘솔**을 엽니다.
3. **quota 및 rate limit 보기**를 클릭해 현재 사용량과 한도를 확인하세요.

rate limit에 자주 도달한다면 작업 간격을 늘리거나, 더 높은 멤버십 등급으로 업그레이드해 처리량을 늘리는 것을 고려해 보세요.
