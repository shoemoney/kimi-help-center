---
title: "IDE 통합"
slug: "cli-ides"
order: 7
extract_headings: false
preview: true
preview_content: "ACP를 통해 Kimi Code CLI를 IDE에 통합하세요."
---

<SeoMeta
  title="IDE 통합 - Kimi Help Center"
  description="Agent Client Protocol(ACP)을 통해 Kimi Code CLI를 IDE에 통합하세요. Zed, JetBrains IDE, Paseo 설정 가이드와 문제 해결 방법을 안내합니다."
/>

# IDE에서 Kimi Code CLI 사용하기

<Callout type="info">
Kimi Code CLI는 [Agent Client Protocol(ACP)](https://agentclientprotocol.com/)을 통한 IDE 통합을 지원하므로, 편집기 안에서 바로 AI 기반 코딩을 활용할 수 있습니다.
</Callout>

## 사전 준비 사항

IDE를 설정하기 전에 Kimi Code CLI가 설치되어 있고 로그인 설정을 마쳤는지 확인하세요.

ACP 어댑터는 `kimi acp` 하위 명령으로 제공됩니다. IDE는 이를 자식 프로세스로 실행하고 stdin/stdout을 통해 JSON-RPC로 통신합니다. IDE가 세션을 생성할 때마다 CLI는 기존 인증 상태를 재사용하므로 다시 로그인할 필요가 없습니다.

<Callout type="tip">
macOS에서 IDE GUI로 실행된 자식 프로세스는 일반적으로 터미널 셸의 `PATH`를 상속하지 **않습니다**. `kimi`가 `/usr/local/bin` 같은 시스템 디렉터리에 없다면 IDE 설정에 절대 경로를 사용하세요. 터미널에서 `which kimi`를 실행하면 현재 사용 중인 경로를 확인할 수 있습니다.
</Callout>

## Zed에서 Kimi Code CLI 사용하기

[Zed](https://zed.dev/)는 ACP를 기본 지원하는 최신 편집기입니다.

Zed 설정 파일 `~/.config/zed/settings.json`에 다음 내용을 추가하세요.

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"type\": \"custom\",\n      \"command\": \"kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

설정 항목:

- `type`: 고정값 `"custom"`
- `command`: Kimi Code CLI 실행 파일 경로. `kimi`가 `PATH`에 없으면 전체 경로를 사용하세요(예: `/Users/you/.local/bin/kimi`).
- `args`: 시작 인수. `acp` 하위 명령은 CLI를 ACP 모드로 전환합니다.
- `env`: 추가 환경 변수. 보통 비워 둡니다. Zed가 기본 환경을 자동으로 주입합니다.

저장한 뒤 Zed의 Agent 패널에서 새 대화를 열면 위 설정을 사용해 `Kimi Code CLI` ACP 하위 프로세스가 실행됩니다. Zed의 `agent_servers` 섹션에 선언된 MCP 서버 또한 ACP 프로토콜을 통해 kimi 쪽으로 전달됩니다.

## JetBrains IDE에서 Kimi Code CLI 사용하기

JetBrains IDE(IntelliJ IDEA, PyCharm, WebStorm 등)는 AI 채팅 플러그인을 통해 ACP를 지원합니다.

JetBrains AI 구독이 없다면 Registry에서 `llm.enable.mock.response`를 활성화해 ACP 전용 시나리오에서 AI 채팅 패널에 접근할 수 있습니다. Shift 키를 두 번 누르고 "Registry"를 검색하면 열 수 있습니다.

AI 채팅 패널 메뉴에서 **Configure ACP agents**를 클릭하고 다음 설정을 추가하세요.

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agent_servers\": {\n    \"Kimi Code CLI\": {\n      \"command\": \"~/.local/bin/kimi\",\n      \"args\": [\"acp\"],\n      \"env\": {}\n    }\n  }\n}",
    },
  ]}
/>

JetBrains는 `command` 필드를 엄격하게 처리하므로, 항상 **절대 경로**를 사용하세요. 터미널에서 `which kimi`를 실행하면 경로를 얻을 수 있습니다. 저장하면 AI 채팅의 에이전트 선택기에 `Kimi Code CLI`가 표시됩니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "which kimi",
    },
  ]}
/>

## Paseo에서 Kimi Code CLI 사용하기

[Paseo](https://paseo.sh/)는 데스크톱, 웹, 모바일에서 에이전트 CLI를 실행하고 관리하는 자체 호스팅 오케스트레이터입니다. IDE와 동일한 방식으로 ACP를 통해 Kimi Code CLI에 연결됩니다.

Paseo의 기본 ACP 제공자 목록에서 **Kimi Code CLI**를 선택하거나, `~/.paseo/config.json`에 사용자 지정 제공자를 추가하세요.

<CodePreview
  files={[
    {
      name: "example.json",
      language: "json",
      content: "{\n  \"agents\": {\n    \"providers\": {\n      \"kimi\": {\n        \"extends\": \"acp\",\n        \"label\": \"Kimi Code CLI\",\n        \"command\": [\"kimi\", \"acp\"]\n      }\n    }\n  }\n}",
    },
  ]}
/>

Paseo의 범용 ACP 어댑터는 로그인 절차를 진행하지 않으므로, 먼저 터미널 로그인을 완료하세요([사전 준비 사항](#prerequisites) 참고). 그렇지 않으면 세션 생성이 `Authentication required` 오류로 실패합니다.

## 문제 해결

- **세션이 즉시 끊김 / IDE에 "agent exited" 표시**: 대개 `command` 경로가 잘못되었거나 로그인이 누락된 경우입니다. 먼저 터미널에서 `kimi acp`를 실행해 확인하세요. stdin 입력을 기다리며 멈춰 있으면 CLI 자체는 정상이고 문제는 IDE 설정에 있습니다. 오류와 함께 즉시 종료되면 오류 메시지를 따르세요(대부분 `/login`을 실행해야 합니다).
- **IDE에 "auth required" 표시**: CLI에 사용 가능한 인증 token이 없습니다. IDE를 종료하고 터미널에서 `kimi`를 실행해 로그인을 완료한 뒤 IDE를 다시 시작하세요.
- **MCP 도구가 보이지 않음**: `kimi acp` 기능 표를 확인해 IDE에 설정된 MCP 전송 유형이 지원되는지 점검하세요. 현재 Kimi Code CLI ACP 어댑터는 `http`와 `stdio` 전송을 지원합니다. `sse`와 `acp` 유형은 자동으로 무시되며 로그에 경고가 기록됩니다.
