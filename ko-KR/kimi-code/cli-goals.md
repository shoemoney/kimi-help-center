---
title: "목표(Goal)"
slug: "cli-goals"
order: 7
extract_headings: false
preview: true
preview_content: "목표를 활용하면 Kimi Code가 여러 차례의 대화에 걸쳐 정해진 결과를 향해 작업을 이어 가도록 할 수 있습니다."
---

<SeoMeta
  title="목표(Goal) - Kimi 헬프 센터"
  description="/goal을 활용해 Kimi Code가 여러 차례의 대화에 걸쳐 정해진 결과를 향해 작업하도록 하세요. 목표를 언제 사용해야 하는지, 목표의 수명 주기를 어떻게 관리하는지, 다가올 목표를 어떻게 대기열에 넣는지 알아보세요."
/>

# 목표(Goal)

목표를 사용하면 Kimi Code가 여러 차례의 대화에 걸쳐 정해진 결과를 향해 작업을 이어 갑니다. 다음에 무엇을 할지 지시하는 일반 프롬프트와 달리, 목표는 무엇이 참이 되어야 하는지를 명시합니다. 작업에 명확한 결승선이 있지만 다음에 유용한 단계가 에이전트가 작업하면서 알게 되는 내용에 따라 달라질 때 `/goal`을 사용하세요. 예를 들어 실패하는 테스트 묶음을 고치거나 망가진 빌드의 근본 원인을 추적하는 경우가 그렇습니다.

## 목표 시작하기

`/goal` 뒤에 목표를 적으세요:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix bugs listed in the issue tracker.",
    },
  ]}
/>

Kimi Code는 목표를 저장하고 이를 다음 사용자 메시지로 보낸 뒤 목표 모드를 시작합니다. 각 대화가 끝날 때마다 목표가 완료되었는지, 막혔는지, 일시 중지되었는지, 아니면 여전히 활성 상태인지 확인합니다.

목표는 결승선과 그것을 입증할 근거를 함께 명시할 때 가장 잘 작동합니다:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every bug labeled checkout-regression, add or update tests for each fix, and run the checkout test suite",
    },
  ]}
/>

넓은 방향만 제시하는 목표는 피하세요:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find all bugs in this codebase.",
    },
  ]}
/>

이런 목표는 무엇이 성공으로 인정되는지, 무엇을 점검해야 하는지, 언제 멈춰야 하는지를 알려 주지 않습니다. 에이전트가 곧바로 막힐 수도 있고, 예상보다 훨씬 오래 작업을 계속할 수도 있습니다.

### 목표를 사용해야 할 때

명확한 결승선과 검증 가능한 근거가 있는 작업에는 목표를 사용하세요.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Fix every failing checkout test and run the checkout test suite successfully.",
    },
  ]}
/>

Kimi Code는 테스트 출력을 점검하고, 파일을 변경하며, 검사를 다시 실행하고, 언제 목표가 완료되는지 판단할 수 있습니다.

여러 차례에 걸쳐 조사와 수정이 필요할 수 있는 작업에는 목표를 사용하세요.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Find why the release build fails, fix the root cause, and verify the build passes.",
    },
  ]}
/>

목표가 결과를 기술하므로, 첫 단서가 근본 원인이 아니더라도 에이전트가 대응을 조정할 수 있습니다.

또 다른 프롬프트 없이 계속 진행되어야 하는 순차적 작업에는 목표를 사용하세요.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Update the feature implementation, add docs, run tests, and summarize the changed files.",
    },
  ]}
/>

작업이 끝나기 전에 존재해야 하는 검사나 산출물을 이미 알고 있을 때 유용합니다.

### 목표를 사용하지 말아야 할 때

광범위한 주제나 정해진 끝이 없는 논의에는 목표를 사용하지 마세요.

**잘못된 예:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Greetings!",
    },
  ]}
/>

<Callout type="warning">
목표가 아닌 입력에 대해서는 에이전트가 즉시 목표를 완료로 표시합니다.
</Callout>

불가능하거나 해결할 수 없다고 알려진 작업에는 목표를 사용하지 마세요.

**잘못된 예:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Prove 1 + 1 = 3.",
    },
  ]}
/>

<Callout type="warning">
목표가 불가능하거나 해결할 수 없어 보이면 에이전트가 목표를 막힘으로 표시합니다.
</Callout>

모호하거나 지나치게 복잡한 목표에는 사용하지 마세요.

**잘못된 예:**

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal Create a videogame in a single HTML file.",
    },
  ]}
/>

<Callout type="warning">
에이전트가 목표를 완료할 수도 있지만, 오랜 시간이 지난 뒤 예상치 못하거나 뜻밖의 결과를 내놓을 수도 있습니다.
</Callout>

## 수명 주기 관리하기

현재 목표를 확인하거나 제어하려면 동일한 명령 체계를 사용하세요:

| 명령어 | 동작 |
| --- | --- |
| `/goal` 또는 `/goal status` | 현재 목표와 진행 상황 표시 |
| `/goal pause` | 활성 목표를 삭제하지 않고 일시 중지 |
| `/goal resume` | 일시 중지되거나 막힌 목표 재개 |
| `/goal cancel` | 현재 목표 제거 |
| `/goal replace <objective>` | 현재 목표를 새 목표로 교체 |

목표는 세 가지 방식으로 멈출 수 있습니다:

- **완료(complete)**: 목표가 달성되면 Kimi Code가 목표를 비우고, 에이전트가 작업을 어떻게 완료했는지 요약합니다.
- **일시 중지(paused)**: 직접 일시 중지했거나, 대화를 중단했거나, 활성 목표가 있던 세션을 재개했거나, 모델·제공자·런타임 오류에 부딪힌 경우
- **막힘(blocked)**: Kimi Code가 입력이 필요하거나, 명시된 대로 목표를 완료할 수 없거나, 예산 한도에 도달한 경우. 에이전트가 목표를 막을 때는 그 이유를 설명하는 짧은 메시지를 남깁니다.

중지 조건은 목표 안에 적으세요. `/goal`에는 별도의 중지 한도 플래그가 없습니다.

## 다가올 목표 대기열에 넣기

에이전트가 목표를 너무 빨리 끝내 버릴 때가 있습니다. 한 번에 하나의 목표만 지정할 수 있다는 점에 사용자가 아쉬움을 느낄 수 있습니다. 이미 다음에 추진하고 싶은 목표를 알고 있는 경우도 많습니다. 그러면 현재 목표가 완료되기를 기다렸다가 TUI를 열고 다음 목표를 직접 입력해야 했습니다.

준비된 작업이 더 있지만 현재 목표를 중단하고 싶지 않을 때는 `/goal next`를 사용하세요:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next Update the release notes after the tests pass",
    },
  ]}
/>

다가올 목표는 현재 목표가 실행되는 동안에는 에이전트에게 보이지 않습니다. 현재 목표가 완료되면 Kimi Code는 사용자가 `/goal <objective>`를 입력했을 때와 동일한 방식으로 첫 번째 대기 목표를 시작합니다.

활성 목표가 없으면 `/goal next <objective>`는 해당 목표를 즉시 시작합니다. 이는 `/goal <objective>`와 동일하게 동작하며, 목표가 시작되기 전에 상태 메시지를 표시합니다.

다가올 목표를 대화형으로 관리하세요:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/goal next manage",
    },
  ]}
/>

관리 화면에서는 <kbd>↑</kbd> / <kbd>↓</kbd>로 둘러보고, <kbd>Space</kbd>로 이동할 목표를 선택하며, <kbd>↑</kbd> / <kbd>↓</kbd>로 순서를 바꾸고, <kbd>E</kbd>로 편집, <kbd>D</kbd>로 삭제, <kbd>Esc</kbd>로 취소합니다. 편집할 때는 <kbd>Shift-Enter</kbd> 또는 <kbd>Ctrl-J</kbd>로 새 줄을 추가하고, <kbd>Enter</kbd>로 저장합니다.

현재 목표가 일시 중지·취소·막힘 상태이면 Kimi Code는 다음 대기 목표를 시작하지 않습니다. 목표가 막혔는데 대기 목표가 있는 경우, TUI가 해당 목표들이 완료를 기다리고 있음을 알려 줍니다.

## 목표 모드는 신중하게 사용하세요

목표 모드는 파일, 테스트, 명령 출력, 생성된 산출물, 또는 명확하게 작성된 보고서로 검증할 수 있는 작업에 유용합니다. 일회성 수정이나 답 하나만 필요한 질문에는 별로 유용하지 않습니다.

`manual` 권한 모드에서는 도구 호출 승인을 위해 목표 작업이 일시 중지될 수 있습니다. 사람이 지켜보지 않는 작업의 경우, 저장소의 위험 수준과 에이전트가 실행할 수 있는 명령에 맞는 권한 모드를 사용하세요.

비대화형 프롬프트 모드에서는 목표 생성만 지원됩니다:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi -p \"/goal Fix the failing checkout test\"",
    },
  ]}
/>

프롬프트 모드는 목표가 완료되면 코드 `0`, 막히면 `3`, 일시 중지되면 `6`으로 종료됩니다. `/goal next`와 그 밖의 관리 명령은 TUI 컨트롤입니다.
