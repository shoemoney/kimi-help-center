---
title: "시작하기"
slug: "cli-getting-started"
order: 3
extract_headings: false
preview: true
preview_content: "Kimi Code CLI 설치, 로그인 및 시작 가이드입니다."
---

<SeoMeta
  title="Kimi Code CLI 설치 및 빠른 시작 - Kimi 헬프 센터"
  description="Kimi Code CLI를 시작해 보세요. 설치 명령어, 터미널 및 브라우저 사용법, 최초 로그인, /init으로 AGENTS.md 생성까지 안내합니다."
/>

# Kimi Code CLI 시작하기

Kimi Code CLI는 터미널에서 실행되는 AI 에이전트로, 소프트웨어 개발 작업과 일상적인 터미널 작업을 도와줍니다. 코드를 읽고 수정하고, 셸 명령을 실행하고, 파일을 검색하고, 웹 페이지를 가져오며, 작업 과정에서 받은 피드백을 바탕으로 다음 단계를 스스로 계획하고 조정합니다.

다음과 같은 상황에 적합합니다.

- **코드 작성 및 수정**: 새 기능 구현, 버그 수정, 리팩터링 완료
- **프로젝트 이해**: 낯선 코드베이스를 탐색하고 아키텍처와 구현에 관한 질문에 답변
- **작업 자동화**: 파일 일괄 처리, 빌드 및 테스트 실행, 여러 스크립트 연계 실행

CLI는 TypeScript로 작성되었으며 npm으로 배포되고 Node.js에서 실행됩니다.

## 시작하기 전에

- **운영 체제**: macOS, Linux 또는 Windows(PowerShell 사용)
- **Kimi 계정**: 유효한 Kimi 멤버십 구독 또는 호출 가능한 API 키

<Callout type="tip">
Kimi Code CLI는 완전한 인터랙티브 TUI 애플리케이션입니다. 최상의 시각적 경험을 위해 [Kitty](https://sw.kovidgoyal.net/kitty/)나 [Ghostty](https://ghostty.org/)처럼 트루컬러와 합자(ligature)를 지원하는 터미널에서 실행하세요.
</Callout>

## 설치

두 가지 설치 방법을 사용할 수 있습니다. 공식 설치 스크립트(권장, Node.js 사전 설치 불필요)와 npm 전역 설치입니다.

### 설치 스크립트(권장)

macOS / Linux:

<Frames
  src="./images/cli-getting-started/screenshot-23.png"
  alt="Kimi Code CLI 설치하기"
/>

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash",
    },
  ]}
/>

Windows(PowerShell):

<CodePreview
  files={[
    {
      name: "command.ps1",
      language: "powershell",
      content: "irm https://code.kimi.com/kimi-code/install.ps1 | iex",
    },
  ]}
/>

스크립트는 최신 릴리스를 자동으로 내려받고 체크섬을 확인한 뒤 `kimi` 실행 파일을 `PATH`에 등록합니다.

<Callout type="tip">
Windows에서는 최초 실행 전에 [Git for Windows](https://gitforwindows.org/)를 설치하세요. Kimi Code CLI는 함께 제공되는 Git Bash를 셸 환경으로 사용합니다. Git Bash가 사용자 지정 경로에 설치되어 있다면 `KIMI_SHELL_PATH`를 `bash.exe`의 절대 경로로 설정하세요.
</Callout>

### npm 설치

Node.js 22.19.0 이상이 이미 설치되어 있다면 npm으로 바로 설치할 수 있습니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "node --version\nnpm install -g @moonshot-ai/kimi-code",
    },
  ]}
/>

또는 pnpm으로:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "pnpm add -g @moonshot-ai/kimi-code",
    },
  ]}
/>

### 설치 확인

설치 후 실행 파일이 준비되었는지 확인하세요.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --version",
    },
  ]}
/>

<Callout type="tip">
`kimi` 명령을 찾을 수 없다면 터미널을 다시 열거나 `source ~/.bashrc`(또는 `~/.zshrc`)를 실행해 보세요.
</Callout>

> macOS Gatekeeper로 인해 `kimi`를 처음 실행할 때는 눈에 띄게 오래 걸릴 수 있습니다. **시스템 설정 → 개인정보 보호 및 보안 → 개발자 도구**에서 터미널 앱을 추가하면 이후 실행 속도를 높일 수 있습니다.

## 업그레이드 및 제거

**업그레이드**: `kimi upgrade`를 실행하면 CLI가 최신 버전을 확인하고 업데이트 옵션을 제시합니다. `Install update now`를 선택하면 현재 설치 방식에 맞춰 업그레이드됩니다. 패키지 관리자로도 바로 업그레이드할 수 있습니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm install -g @moonshot-ai/kimi-code@latest",
    },
  ]}
/>

**제거**: 스크립트로 설치한 경우 `kimi` 실행 파일을 삭제하세요. npm으로 설치한 경우:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "npm uninstall -g @moonshot-ai/kimi-code",
    },
  ]}
/>

## 최초 실행

### 인터랙티브 터미널

프로젝트 디렉터리로 이동한 뒤 `kimi`를 실행하면 인터랙티브 UI가 시작됩니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "cd your-project\nkimi",
    },
  ]}
/>

### 단일 명령

인터랙티브 UI에 들어가지 않고 단일 명령을 실행하려면 `-p`를 사용하세요.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"Take a look at this project's directory structure\"",
    },
  ]}
/>

### 세션 재개

이전 세션을 재개하려면 `-C`를 추가하세요.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -C",
    },
  ]}
/>

### 최초 로그인

최초 실행 시 API 소스를 설정해야 합니다. 인터랙티브 UI에서 `/login`을 입력하면 로그인 절차가 시작됩니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

`/login`은 다음 두 가지 옵션을 지원하는 플랫폼 선택기를 엽니다.

- **Kimi Code (OAuth)** — 디바이스 코드 방식이며, 아무 기기에서나 링크를 열어 로그인한 뒤 코드를 입력해 권한을 부여합니다
- **Kimi Platform API 키** — `platform.kimi.com` 또는 `platform.kimi.ai`에서 발급한 API 키를 입력합니다

로그아웃하려면 `/logout`을 입력해 현재 자격 증명을 지우세요.

<Callout type="tip">
Anthropic, OpenAI, Google 등 다른 공급자를 연결하려면 `~/.kimi-code/config.toml`을 직접 편집해 API 키를 설정하세요. 모든 설정 옵션에 관한 전체 참조는 환경 변수 및 설정 재정의 문서를 확인하세요.
</Callout>

## AGENTS.md 생성

프로젝트 디렉터리에서 `/init` 명령을 실행하세요. Kimi Code CLI가 프로젝트 구조를 자동으로 스캔해 `AGENTS.md` 파일을 생성합니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/init",
    },
  ]}
/>

`AGENTS.md`는 프로젝트 배경 정보, 빌드 단계, 코드 규칙 등 컨텍스트를 AI에 제공해, AI가 프로젝트를 더 정확하게 이해하도록 돕는 데 사용됩니다.

## 첫 대화

로그인한 뒤에는 작업을 자연어로 설명하면 됩니다. 좋은 출발점은 Kimi Code CLI가 프로젝트에 익숙해지도록 하는 것입니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Take a look at this project's directory structure and briefly describe what each directory is for.",
    },
  ]}
/>

Kimi Code CLI는 응답하기 전에 파일 읽기, 검색 등의 도구를 자동으로 호출해 관련 내용을 살펴봅니다. 읽기 전용 작업은 기본적으로 별도 확인 없이 자동으로 실행됩니다. 파일을 수정하거나 셸 명령을 실행하는 작업은 진행하기 전에 사용자에게 확인을 요청합니다.

더 구체적인 작업을 직접 설명할 수도 있습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Add a function in src/utils that converts any string to kebab-case, and add a unit test for it.",
    },
  ]}
/>

Kimi Code CLI는 단계를 계획하고, 코드를 수정하고, 테스트를 실행한 뒤 각 단계에서 무엇을 했는지 알려줍니다.

<Callout type="tip">
무엇을 해야 할지 모르겠나요? 언제든지 `/help`를 입력하면 내장된 명령어 및 단축키 패널이 열립니다. `↑`/`↓`로 살펴보고 `Esc`로 닫으세요. 종료하려면 `/exit`를 입력하거나, `Ctrl-C`를 두 번 누르거나, 입력란이 비어 있을 때 `Ctrl-D`를 누르세요.
</Callout>

## 자주 쓰는 명령어 및 단축키

### 세션 명령어

| 명령어 | 설명 |
| --- | --- |
| `/new` | 현재 컨텍스트를 지우고 새 세션 시작 |
| `/sessions` | 세션 기록을 살펴보고 재개할 세션 선택 |
| `/model` | 현재 모델 전환 |
| `/compact` | 컨텍스트를 수동으로 압축해 토큰 확보 |
| `/fork` | 현재 세션을 분기해 기록은 유지하되 독립적으로 진행 |

### 가장 많이 쓰는 단축키

| 단축키 | 설명 |
| --- | --- |
| `Esc` | 스트리밍 출력 중단 / 팝업 닫기 |
| `Ctrl-C` | 출력 중단, 대기 중에 두 번 누르면 종료 |
| `Shift-Tab` | Plan 모드 전환 |
| `Ctrl-S` | 현재 응답이 끝나기를 기다리지 않고 스트리밍 도중에 메시지 추가 |
| `Ctrl-O` | 도구 출력 접기 / 펼치기 |

전체 목록은 `/help`를 입력하거나 [상호작용 및 입력](/kimi-code/cli-interaction)을 확인하세요.

## 데이터 저장 위치

Kimi Code CLI는 기본적으로 로컬 데이터를 `~/.kimi-code/` 아래에 저장합니다. 설정 파일, 세션 기록, 로그, 업데이트 캐시가 여기에 포함됩니다. 다른 위치로 옮기려면 `KIMI_CODE_HOME` 환경 변수로 새 경로를 지정하세요. 전체 디렉터리 구조는 환경 변수 문서를 확인하세요.

## 자주 묻는 질문

**API 키를 입력했는데 인증에 실패했다고 나옵니다.**

먼저 키와 Base URL이 같은 플랫폼에 속하는지 확인하세요. `api.kimi.com`과 `api.moonshot.cn`은 완전히 독립된 두 계정 체계이며, 두 API 키는 서로 호환되지 않습니다.

| 플랫폼 | Base URL | 과금 | 키 발급 |
|------|---------|---------|-------------|
| **Kimi Code** | OpenAI 호환: `https://api.kimi.com/coding/v1`<br> Anthropic 호환: `https://api.kimi.com/coding/` | Kimi 멤버십 구독(크레딧 포함) | [Kimi Code 콘솔](https://www.kimi.com/code/console) |
| **Kimi 오픈 플랫폼** | `https://api.moonshot.cn/v1` | 사용량 기반 과금 | [Kimi 오픈 플랫폼](https://platform.kimi.com) |

**설치 후 `kimi` 명령을 찾을 수 없습니다.**

설치 스크립트가 `kimi`를 PATH에 추가하지만, 적용하려면 터미널을 다시 시작하거나 `source ~/.bashrc`(또는 `source ~/.zshrc`)를 실행해야 합니다. 그래도 찾을 수 없다면 `~/.local/bin`이 PATH에 있는지 확인하세요.

**`/login`을 실행했는데 브라우저가 열리지 않았습니다.**

원격 서버나 헤드리스 환경에서는 `/login`이 URL을 표시합니다. 이 URL을 브라우저에 직접 복사해 붙여넣어 권한 부여를 완료하세요.

문제나 제안이 있다면 [GitHub Issues](https://www.github.com/MoonshotAI/kimi-cli/issues)에서 피드백을 남겨 주세요.

## 다음 단계

- [상호작용 및 입력](/kimi-code/cli-interaction) — 입력란 조작, 승인 절차, Plan 모드, YOLO 모드 설명
- [세션 및 컨텍스트](/kimi-code/cli-sessions) — 세션 재개, 컨텍스트 압축, 세션 내보내기
- [일반 활용 사례](/kimi-code/cli-use-cases) — 일반적인 작업을 위한 프롬프트 예시
