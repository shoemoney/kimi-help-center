---
title: "서드파티 코딩 에이전트와 함께 사용하기"
slug: "third-party-agents"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="서드파티 코딩 에이전트와 함께 사용하기 - Kimi 헬프 센터"
  description="Kimi Code 혜택은 Claude Code 및 Roo Code와 함께 사용할 수 있어, 즐겨 쓰는 코딩 도구 안에서 Kimi의 AI 기능을 누릴 수 있습니다."
/>

# 서드파티 코딩 에이전트와 함께 사용하기

Kimi Code 혜택은 Claude Code 및 Roo Code와 함께 사용할 수 있어, 즐겨 쓰는 코딩 도구 안에서 Kimi의 AI 기능을 누릴 수 있습니다.

## 사전 준비 사항

- Kimi Code 혜택이 활성화된 유효한 Kimi 멤버십.
- API Key([Kimi Console](https://www.kimi.com/code)에서 생성).

## Claude Code와 함께 사용하기

[Claude Code](https://code.claude.com/docs/en/overview)는 Anthropic이 제공하는 명령줄 코딩 도우미입니다.

### 구성 단계

1. 환경 변수를 설정합니다:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/v1\nexport ANTHROPIC_API_KEY=your-api-key",
    },
  ]}
/>

2. `kimi-for-coding` 모델로 Claude Code를 실행합니다:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "claude --model kimi-for-coding",
    },
  ]}
/>

> Claude Code에서 **Tab** 키를 누르면 Kimi K2 Thinking 모델로 전환할 수 있습니다.

> `tool_search` 호출로 인한 400 오류가 발생하면 환경 변수 `ENABLE_TOOL_SEARCH=false`를 설정하여 일시적으로 해결할 수 있습니다.

### HighSpeed로 전환

HighSpeed는 Standard의 약 5~6배 출력 속도를 **약 3배의 크레딧 소모**로 제공하며, [Allegretto](https://www.kimi.com/membership/pricing) 이상 플랜이 필요합니다. Claude Code에서 두 가지 방법으로 활성화할 수 있습니다:

- **방법 1: `/fast on` 명령** — Claude Code를 시작한 뒤 `/fast on`을 입력합니다. `⚡ Fast mode ON` 출력이 나오면 활성화된 것입니다.
- **방법 2: `/config` 명령** — `/config`를 입력해 설정 패널을 열고 **Config** 탭에서 **Fast mode**(및 **Thinking mode**)를 활성화합니다.

## Roo Code와 함께 사용하기

[Roo Code](https://github.com/RooCodeInc/Roo-Code)는 VS Code용 AI 코딩 확장 프로그램입니다.

### Roo Code 설치

1. VS Code 확장 프로그램 마켓플레이스에서 **Roo Code**를 검색하여 설치합니다.
2. 설치가 완료되면 활동 표시줄에 Roo Code 아이콘이 나타납니다. 보이지 않으면 VS Code를 다시 시작하세요.

### Kimi Code 모델 구성

1. Roo Code 패널을 열고 **Settings** 페이지로 이동합니다.
2. **Providers** 섹션에서 **OpenAI Compatible**을 선택하고 다음 항목을 입력합니다:

   | 설정 | 값 |
   | --- | --- |
   | Entrypoint | `https://api.kimi.com/coding/v1` |
   | API Key | 사용자의 API Key |
   | Model | `kimi-for-coding` / `kimi-for-coding-highspeed` (Standard / HighSpeed) |

3. 구성을 저장하면 바로 사용할 수 있습니다.

## 유의 사항

- Kimi Code 혜택은 **Kimi Code CLI**, **Claude Code**, **Roo Code**에서만 지원됩니다.
- 승인되지 않은 플랫폼이나 도구에서 API Key를 사용하면 위반으로 간주되어 이용이 제한될 수 있습니다.
- 궁금한 점이 있으면 [혜택](/kimi-code/benefits) 페이지를 참고하거나 Kimi 고객 지원에 문의하세요.
