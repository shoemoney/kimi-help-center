---
title: "Telegram 봇"
slug: "telegram-bot"
order: 7
extract_headings: false
preview: false
---

<SeoMeta
  title="Telegram 봇 - Kimi 헬프 센터"
  description="Kimi Claw를 Telegram에 연결하면 브라우저 없이도 어떤 기기에서든 대화할 수 있습니다."
/>

# Telegram 봇

Kimi Claw를 Telegram에 연결하면 브라우저 없이도 어떤 기기에서든 대화할 수 있습니다.

## 단계별 설정

### 1. BotFather로 봇 만들기

1. Telegram을 열고 [@BotFather](https://t.me/BotFather)와 채팅을 시작합니다.
2. `/newbot`을 보냅니다.
3. 안내에 따라 **표시 이름**과 **사용자 이름**을 정합니다. 사용자 이름은 반드시 `bot`으로 끝나야 합니다.
4. BotFather가 **봇 token**을 보내줍니다. 복사해 안전하게 보관하세요.

### 2. 봇을 Kimi Claw에 연결하기

1. [kimi.com](https://kimi.com)에서 Kimi Claw 대화를 엽니다.
2. Kimi Claw에게 이렇게 말합니다. _"내 Telegram 봇 token은 `<your-token>`입니다. Telegram 연결을 설정해 주세요."_
3. Kimi Claw가 token을 구성에 저장합니다.

### 3. 재시작하고 페어링하기

1. Kimi Claw를 재시작합니다. 재시작해 달라고 요청하거나 **설정 → Kimi Claw 재시작**으로 이동하세요.
2. 다시 온라인 상태가 되면 새 Telegram 봇을 열고 메시지를 보냅니다.
3. Kimi Claw가 응답하면 페어링이 완료된 것입니다.

## 팁

- **개인정보 보호 모드:** 기본적으로 Telegram 그룹의 봇은 자신을 언급한 메시지나 `/`로 시작하는 메시지만 볼 수 있습니다. Kimi Claw가 모든 그룹 메시지를 볼 수 있게 하려면 BotFather에서 Privacy Mode를 비활성화하세요(`/setprivacy → Disable`).
- **여러 봇:** 여러 Telegram 봇을 만들어 같은 Kimi Claw 인스턴스에 연결할 수 있습니다.
- **token 보안:** 봇 token을 공개적으로 공유하지 마세요. 유출된 경우 BotFather에서 폐기하고(`/revoke`) 새 token을 구성하세요.
