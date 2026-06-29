---
title: "도구 통합"
slug: "cli-integrations"
order: 8
extract_headings: false
preview: false
---

<SeoMeta
  title="도구 통합 - Kimi 헬프 센터"
  description="IDE 통합 외에도 Kimi Code CLI를 다른 도구와 통합하여 터미널 워크플로를 한층 강화할 수 있습니다."
/>

# 도구 통합

<Callout type="info">
IDE 통합 외에도 Kimi Code CLI를 다른 도구와 통합하여 터미널 워크플로를 한층 강화할 수 있습니다.
</Callout>

## Zsh 플러그인

[zsh-kimi-cli](https://www.github.com/MoonshotAI/zsh-kimi-cli)는 셸에서 곧바로 Kimi Code CLI로 전환할 수 있게 해 주는 Zsh 플러그인입니다.

### Oh My Zsh 설치

Oh My Zsh를 사용한다면 다음 단계를 따라 설치하세요.

1. Oh My Zsh의 사용자 지정 플러그인 디렉터리에 저장소를 복제합니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "git clone https://github.com/MoonshotAI/zsh-kimi-cli.git\n${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/kimi-cli",
    },
  ]}
/>

2. `~/.zshrc`의 플러그인 목록에 `kimi-cli`를 추가합니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "plugins=(\n# ... other plugins\nkimi-cli\n)",
    },
  ]}
/>

3. 설정을 다시 불러옵니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "source ~/.zshrc",
    },
  ]}
/>

### 사용 방법

설치한 뒤에는 터미널에서 **Ctrl-X**를 누르면 `kimi` 명령을 직접 입력하지 않고도 Kimi Code CLI로 빠르게 전환할 수 있습니다.
