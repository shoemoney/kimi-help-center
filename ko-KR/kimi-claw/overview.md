---
title: "Kimi Claw 개요"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "원클릭 설정으로 클라우드에서 나만의 Kimi Claw AI 어시스턴트를 배포하고 관리하세요."
---

<SeoMeta
  title="Kimi Claw 개요 - Kimi 헬프 센터"
  description="원클릭 설정으로 클라우드에서 나만의 Kimi Claw AI 어시스턴트를 배포하고 관리하세요."
/>

# 제품 개요

<Callout type="info">
**Kimi Claw**는 고유한 개성과 지속되는 장기 기억을 갖춘 AI 어시스턴트입니다. Kimi Claw를 통해 Kimi에서 바로 나만의 OpenClaw 인스턴스를 만들고, 배포하고, 대화할 수 있습니다.
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## 원클릭 클라우드 배포

아직 OpenClaw가 없나요? [kimi.com/bot](https://kimi.com/bot)에서 새로 만들어 보세요. 서버를 구매하거나 명령줄로 설정할 필요 없이, Kimi가 클라우드에 배포해 드립니다.

<Callout type="warning">

- 원클릭 배포는 **Allegretto 이상** 플랜에서 사용할 수 있습니다. [멤버십 플랜](https://www.kimi.com/membership/pricing).

</Callout>

- Kimi가 **Kimi K2.6 모델**을 자동으로 구성하고 **Kimi 멤버십 혜택 크레딧**을 연결하며, AI가 인터넷 검색을 사용할 수 있도록 Kimi Web Search 서비스도 자동으로 구성합니다. 별도의 API 설정은 필요하지 않습니다.
- Kimi Claw는 Telegram을 비롯한 여러 채팅 플랫폼에 바로 배포할 수 있습니다.

## 시작하기

1. [kimi.com/bot](https://kimi.com/bot)에 로그인합니다
2. **만들기**를 클릭해 새 Kimi Claw를 시작합니다
3. 자동 설정이 완료될 때까지 기다립니다(보통 몇 분 정도 걸립니다)
4. Kimi Claw의 이름과 페르소나를 원하는 대로 설정합니다
5. **설정 → 채팅 채널**에서 사용하려는 플랫폼(예: Telegram)을 연결합니다

## 기존 OpenClaw 연결

이미 OpenClaw 인스턴스를 직접 호스팅하고 있다면 Kimi 플러그인을 설치해 Kimi에 연결할 수 있습니다.

1. [kimi.com/bot](https://kimi.com/bot)으로 이동해 **기존 OpenClaw 연결**을 선택합니다
2. 안내에 따라 OpenClaw 기기에 플러그인을 설치합니다
3. 연결이 완료되면 Kimi를 통해 OpenClaw와 대화할 수 있습니다

<a id="switch-to-k3"></a>
## Kimi K3 모델로 전환

Kimi Claw는 기본적으로 Kimi K2.6 모델을 사용합니다. Kimi K3를 사용하려면 아래 명령어로 로컬 OpenClaw 설정을 자동으로 수정할 수 있습니다.

```bash
# 1. Back up the current config
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. Add the k3 model and switch the default model (example uses jq)
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. Restart OpenClaw
openclaw gateway restart

# 4. Verify
session_status
```

실행 후 `session_status` 출력에서 `model`이 `kimi-coding/k3`로 표시되고, `context` 상한이 `1.0m`인지 확인하세요.

<Callout type="warning">
설정 파일 경로는 설치 방식에 따라 다를 수 있으므로, 실제 환경에 맞게 `/root/.openclaw/openclaw.json` 경로를 변경해 주세요. 수정 전 반드시 백업하세요.
</Callout>
