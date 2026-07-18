---
title: "Kimi Code에서 스킬 사용하기"
slug: "use-skills-in-code"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code에서 스킬 사용하기 - Kimi 헬프 센터"
  description="Kimi Code CLI에서 스킬을 만들고 호출하여 팀의 코딩 규칙을 표준화하고 개발 워크플로를 자동화하는 방법을 알아보세요."
  ogType="article"
/>

# Kimi Code에서 스킬 사용하기

Kimi Code는 개발자를 위해 설계된 AI 프로그래밍 어시스턴트로, 터미널이나 에디터에서 바로 실행되어 코드 작성, 버그 수정, 문서 생성을 도와줍니다. Kimi Code는 `SKILL.md` 파일을 통해 지식 기반 지침을 제공할 수 있습니다. AI가 이 파일을 읽으면 그 안에 정의된 표준을 따릅니다. 코드 스타일, 워크플로, 모범 사례를 정의하는 데 적합합니다.

<Frames
  src="./images/skills/kimi-code-skill.png"
  alt="슬래시 명령으로 스킬 호출하기"
/>

## 스킬 호출하기

Kimi Code CLI에서는 슬래시 명령으로 스킬을 호출할 수 있습니다:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:<name>",
    },
  ]}
/>

예를 들어 `/skill:git-commits`를 입력하면 Kimi Code가 해당 `SKILL.md` 내용을 읽고 이를 지침으로 에이전트에 전달합니다.

슬래시 명령 뒤에 추가 설명을 붙일 수도 있습니다. 이 설명은 스킬 지침의 끝에 추가됩니다:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits 로그인 문제 수정",
    },
  ]}
/>

일반적인 대화에서는 수동으로 호출할 필요가 없습니다. 에이전트가 맥락을 바탕으로 스킬 내용을 읽을지 자동으로 판단합니다.

## 첫 번째 스킬 만들기

스킬 만들기는 두 단계면 충분합니다. 스킬 디렉터리에 하위 디렉터리를 만들고, 그 안에 `SKILL.md` 파일을 생성하세요.

권장 저장 위치(모든 프로젝트에 적용):

<CodePreview
  files={[
    {
      name: "디렉터리 구조",
      language: "text",
      content: "~/.config/agents/skills/\n└── my-skill/\n    └── SKILL.md",
    },
  ]}
/>

`SKILL.md`는 YAML Frontmatter로 메타데이터를 정의한 뒤, 핵심 규칙은 Markdown으로 작성합니다:

<CodePreview
  files={[
    {
      name: "SKILL.md",
      language: "markdown",
      content: "---\nname: code-style\ndescription: 내 프로젝트 코드 스타일 표준\n---\n\n## 코드 스타일\n\n- 들여쓰기는 공백 4개를 사용\n- 변수명은 camelCase 사용\n- 함수명은 snake_case 사용\n- 모든 함수에는 docstring 필요\n- 한 줄은 100자를 넘지 않도록 작성",
    },
  ]}
/>

Frontmatter의 `name`과 `description`은 모두 선택 필드입니다. 생략하면 디렉터리 이름이 기본값으로 사용됩니다.

### 예시

팀에서 커밋 메시지에 Conventional Commits 형식을 요구하지만, 매번 설명하기는 번거롭습니다. 이를 스킬로 작성해 두면 앞으로는 명령 하나로 불러올 수 있습니다.

**1단계: 스킬 파일 만들기**

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/git-commits/SKILL.md",
      language: "markdown",
      content: "---\nname: git-commits\ndescription: Conventional Commits 형식을 사용하는 Git 커밋 메시지 표준\n---\n\n## Git 커밋 표준\n\nConventional Commits 형식을 사용합니다: type(scope): description\n\n허용되는 타입: feat, fix, docs, style, refactor, test, chore\n\n예시:\n- feat(auth): OAuth 로그인 지원 추가\n- fix(api): 사용자 쿼리가 빈 값을 반환하는 문제 수정",
    },
  ]}
/>

**2단계: 코드 변경을 마친 뒤 스킬 호출하기**

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "/skill:git-commits Safari에서 로그인 페이지 레이아웃이 밀리는 문제를 수정함",
    },
  ]}
/>

Kimi Code는 여러분의 표준과 작업 설명을 함께 읽고, 형식 요구사항을 다시 설명하지 않아도 올바른 형식의 커밋 메시지를 바로 출력합니다.

## Flow 스킬: 여러 단계 워크플로 정의하기

일반 스킬이 정적인 표준을 제공한다면, **Flow 스킬**은 여러 단계로 이루어진 프로세스를 자동화하도록 정의할 수 있습니다.

Frontmatter에 `type: flow`를 설정하고 Mermaid 또는 D2 형식의 플로차트를 포함하면 Flow 스킬을 만들 수 있습니다.

<CodePreview
  files={[
    {
      name: "~/.config/agents/skills/code-review/SKILL.md",
      language: "markdown",
      content: "---\nname: code-review\ndescription: 코드 리뷰 워크플로\ntype: flow\n---\n\n```mermaid\nflowchart TD\nA([BEGIN]) --> B[코드 변경 사항을 분석하고 수정된 파일과 기능을 모두 나열]\nB --> C{코드 품질이 표준을 충족하는가?}\nC -->|예| D[코드 리뷰 보고서 생성]\nC -->|아니요| E[문제를 나열하고 개선 사항 제안]\nE --> B\nD --> F([END])\n```",
    },
  ]}
/>

실행할 때는 `/flow:<name>` 명령을 사용하세요. 에이전트는 `BEGIN` 노드에서 시작해 `END`에 도달할 때까지 각 단계를 순서대로 자동 수행합니다.

## 스킬 로딩 방식

Kimi Code CLI는 다음 우선순위에 따라 스킬을 검색하고 로드합니다(먼저 일치한 항목이 우선합니다):

1. **내장 스킬**: 소프트웨어 패키지와 함께 설치되며 기본 기능을 제공합니다.
2. **사용자 수준 스킬**: 홈 디렉터리에 저장되어 모든 프로젝트에 적용됩니다.
3. **프로젝트 수준 스킬**: 프로젝트 디렉터리에 저장되어 해당 프로젝트에만 적용됩니다.

`--skills-dir` 매개변수로 스킬 디렉터리를 추가로 직접 지정할 수도 있습니다:

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "kimi --skills-dir /path/to/my-skills",
    },
  ]}
/>

<Callout type="info">
Kimi Code CLI에는 유용한 내장 스킬 두 가지가 포함되어 있습니다. `kimi-cli-help`(CLI 사용법 관련 질문에 답변)와 `skill-creator`(새 스킬 생성을 안내)입니다. 시작하려면 `/skill:skill-creator`를 입력하세요.
</Callout>

전체 구성 옵션과 매개변수 설명은 [Kimi Code CLI 스킬 문서](https://www.kimi.com/code/docs/en/kimi-code-cli/customization/skills.html)를 참고하세요.
