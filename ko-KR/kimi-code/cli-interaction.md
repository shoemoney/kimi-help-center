---
title: "상호작용 및 입력"
slug: "cli-interaction"
order: 5
extract_headings: false
preview: false
---

<SeoMeta
  title="상호작용 및 입력 - Kimi 도움말 센터"
  description="Kimi Code CLI는 다양한 상호작용 방식을 제공하여 AI와 효율적으로 협업할 수 있도록 돕습니다."
/>

# 상호작용 및 입력

Kimi Code CLI는 다양한 상호작용 방식을 제공하여 AI와 효율적으로 협업할 수 있도록 돕습니다.

## Thinking mode

Thinking Mode는 AI가 응답하기 전에 더 깊이 있게 추론하도록 해주며, 복잡한 문제에 안성맞춤입니다.

- `/model` 명령으로 모델을 전환하고 Thinking Mode를 켜고 끌 수 있습니다.
- 실행 시 `--thinking` 플래그로 Thinking Mode를 활성화할 수도 있습니다.

## 여러 줄 입력

**Ctrl-J**를 누르면 줄 바꿈이 삽입되어 여러 줄을 입력할 수 있습니다. 긴 프롬프트를 작성하거나 여러 줄로 된 코드 조각을 붙여 넣을 때 유용합니다.

## 클립보드 붙여넣기

**Ctrl-V**를 누르면 클립보드의 내용을 붙여 넣을 수 있으며, 텍스트와 이미지를 모두 지원합니다. 이미지를 붙여 넣으면 AI가 이미지 내용(예: 스크린샷, 디자인 시안, 오류 화면 등)을 바로 해석할 수 있습니다.

## 슬래시 명령

`/`로 시작하는 명령은 세션, 설정, 디버깅을 제어하는 데 사용됩니다. 자주 쓰는 명령은 다음과 같습니다.

| 명령 | 설명 |
| --- | --- |
| `/help` | 도움말 정보 표시 |
| `/login` | 로그인 및 인증 |
| `/model` | 모델 및 Thinking Mode 전환 |
| `/sessions` | 세션 목록 표시 및 전환 |
| `/clear` | 현재 컨텍스트 비우기 |
| `/compact` | 컨텍스트 압축 |
| `/init` | AGENTS.md 생성 |
| `/exit` | CLI 종료 |

입력란에 `/`를 입력하면 사용 가능한 명령 목록이 자동으로 표시됩니다.

## @ 경로 자동 완성

입력 시 `@` 기호를 사용해 파일이나 디렉터리 경로를 참조하면 시스템이 자동으로 완성해 줍니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Check @src/utils/auth.ts for any security vulnerabilities",
    },
  ]}
/>

AI는 참조된 파일 내용을 컨텍스트로 자동으로 읽어 들입니다.

## 구조화된 질의응답

특정 상황에서 AI는 입력을 위한 구조화된 선택지를 제시합니다. **방향키**로 선택지를 고른 뒤 **Enter**를 눌러 확정하세요.

## 승인 확인

AI가 파일 수정, 셸 명령 실행 등의 작업을 수행해야 할 때는 확인을 요청합니다. 다음 중에서 선택할 수 있습니다.

| 선택지 | 설명 |
| --- | --- |
| **Allow** | 이번 작업 허용 |
| **Allow for Session** | 현재 세션이 끝날 때까지 유사한 작업을 추가 확인 없이 허용 |
| **Deny** | 이번 작업 거부 |

### YOLO 모드

AI의 작업을 신뢰한다면 YOLO Mode를 사용해 모든 확인 절차를 건너뛸 수 있습니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --yolo",
    },
  ]}
/>

> YOLO Mode에서는 AI가 모든 작업을 자동으로 실행하므로 신중하게 사용하세요. 통제된 개발 환경에서만 사용하기를 권장합니다.
