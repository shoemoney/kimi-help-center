---
title: "Kimi 플러그인 제거하기"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 플러그인 제거하기 - Kimi 헬프 센터"
  description="이 작업은 Kimi에 연결한 자체 호스팅 OpenClaw 기기에만 해당됩니다. 반드시 본인의 기기에서 실행하고 있는지 확인하세요."
/>

# Kimi 플러그인 제거하기

<Callout type="warning">
**이 작업은 Kimi에 연결한 자체 호스팅 OpenClaw 기기에만 해당됩니다.** 반드시 본인의 기기에서 실행하고 있는지 확인하세요.
</Callout>

## 제거 명령어

OpenClaw가 설치된 기기에서 다음 명령어를 실행하세요:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash <(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## 중요 경고

<Callout type="warning">
**원클릭으로 배포된 Kimi Claw 인스턴스에서는 절대로 이 명령어를 실행하지 마세요.**
클라우드에 배포된 Kimi Claw에서 제거 스크립트를 실행하면 연결이 **영구적으로 끊어지며 복구할 방법이 없습니다.** 이 명령어는 오직 자체 호스팅 OpenClaw 기기에서 Kimi 플러그인을 제거할 때만 사용해야 합니다.
</Callout>
