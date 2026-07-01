---
title: "VS Code용 Kimi Code 빠른 시작"
slug: "vscode-getting-started"
order: 10
extract_headings: false
preview: false
---

<SeoMeta
  title="VS Code용 Kimi Code 빠른 시작 - Kimi 헬프 센터"
  description="VS Code용 Kimi Code는 Visual Studio Code에 통합된 확장 프로그램입니다. 설치하면 질문을 하고, 코드 변경 사항을 검토하며, 변경 내용을 빠르게 커밋할 수 있습니다..."
/>

# VS Code용 Kimi Code 빠른 시작

<Callout type="warning">
**VS Code 확장 프로그램 호환성 안내**

VS Code용 Kimi Code는 현재 기존 Python CLI 사용자에게만 신규 설치가 제공됩니다. 이미 플러그인을 설치한 기존 사용자는 새 CLI로 업그레이드한 후 계속 사용할 수 있습니다. TS 버전 CLI 사용자는 현재 설치가 지원되지 않습니다.
</Callout>

VS Code용 Kimi Code는 Visual Studio Code에 통합된 확장 프로그램입니다. 설치하면 편집기 안에서 바로 질문하고, 코드 변경 사항을 검토하며, 변경 내용을 빠르게 커밋할 수 있습니다.

이 확장 프로그램은 참조한 파일의 내용을 읽고 수정 제안을 시각적 인터페이스로 보여주며, 사용자가 확인하면 이를 실행합니다. 전체 작업 흐름이 사용자의 통제 아래 있으면서도 개발 효율을 크게 높여 줍니다.

이 확장 프로그램은 VS Code에 기본 채팅 패널을 제공하며 다음을 지원합니다.
- `@` 기호로 파일이나 폴더 참조하기
- `/` 명령어로 프로젝트 스캔 및 컨텍스트 관리 실행하기
- 파일 변경 사항을 보여주고 롤백을 지원하는 diff 뷰
- MCP 서버를 통합하여 외부 도구 호출하기

---

## 설치

1.  **사전 준비**: Kimi 계정 구독 또는 Kimi API 키가 필요합니다.
2.  **마켓플레이스**: [VS Code Marketplace](vscode:extension/moonshot-ai.kimi-code)를 통해 설치합니다.

<Callout type="tip">
설치 후에도 확장 프로그램이 나타나지 않으면 VS Code를 다시 시작하거나 명령 팔레트에서 **Developer: Reload Window**를 실행하세요(Mac: `Cmd+Shift+P`, Win/Linux: `Ctrl+Shift+P`).
</Callout>

---

## 인증

Kimi Code는 두 가지 인증 모드를 지원합니다. **톱니바퀴 아이콘**을 통해 언제든지 모드를 전환할 수 있습니다.

<Frames
  src="./images/vscode/kimi-code-gear-icon.png"
  alt="인증 설정"
  width={800}
  height={450}
/>

- **Kimi 계정 모드**: 로그인 버튼을 클릭하여 브라우저에서 인증합니다.
- **API 키 모드**: 이미 API 키를 설정한 경우 클릭하여 로그인을 건너뜁니다.

---

## 일반적인 작업 흐름

코드 읽기: `@`를 입력해 파일이나 폴더를 선택하고, 코드 흐름에 대한 설명을 요청한 다음 추가 질문을 이어갑니다.

리팩터링: `@src/feature/`와 같이 대상 코드를 참조하고, 리팩터링 계획을 요청한 뒤 diff를 검토해 선택적으로 승인하며, 필요하면 롤백을 사용합니다.

디버깅: 오류 메시지나 스택 트레이스를 붙여넣고 관련 파일을 참조한 다음 진단과 수정을 요청하고, 제안된 변경 사항을 승인합니다.

프로젝트 개요: `@src/services/`와 같이 폴더를 참조하고 모듈 맵이나 아키텍처 요약을 요청한 뒤, 의존성이나 취약점에 대해 계속 질문합니다.

---

## 명령어 및 단축키

`CodePreview`를 사용해 명령어를 빠르게 테스트하거나 주요 단축키를 참고하세요.

<CodePreview
  files={[
    {
      name: "shortcuts.txt",
      language: "text",
      content: "Ctrl+Shift+K : Focus Kimi input box\nAlt+K : Insert current file reference\nCtrl+N : New conversation",
    },
  ]}
/>

| 단축키 | 기능 |
| :--- | :--- |
| `Ctrl+Shift+K` / `Cmd+Shift+K` | Kimi 입력창에 포커스 |
| `Alt+K` | 현재 파일 참조 삽입 |
| `Ctrl+N` / `Cmd+N` | 새 대화 |
| `↑` / `↓` | 입력 기록 탐색 |

<Callout type="info">
명령 팔레트에 **Kimi Code**를 입력하면 새 탭에서 열기, 사이드바에서 열기, 세션 관리 등 더 많은 명령어를 사용할 수 있습니다.
</Callout>
