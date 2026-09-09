---
title: "자주 묻는 질문"
slug: "kimi-webbridge-faq"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi 브라우저 확장 프로그램 자주 묻는 질문 - Kimi 헬프 센터"
  description="여러 브라우저와 Local Agent에서 Kimi 브라우저 확장 프로그램을 설치, 연결, 사용하는 방법에 관한 자주 묻는 질문입니다."
  ogType="article"
/>

# 자주 묻는 질문

## 제품 버전

### Kimi WebBridge와 Kimi 브라우저 확장 프로그램은 어떤 관계인가요?

Kimi WebBridge가 Kimi 브라우저 확장 프로그램으로 이름이 변경되었고, 브라우저 사이드바 진입점, 웹 작업 녹화, 웹페이지를 분해해 지시문을 생성하는 기능이 새로 추가되었습니다. Local Agent에서 확장 프로그램을 호출하는 방식은 그대로 유지되므로 계속 사용할 수 있으며, 새로 추가된 사이드바 진입점은 Kimi 멤버로 로그인한 후 사용할 수 있습니다.

## 설치 및 설정

### 확장 프로그램을 설치할 때 "이 웹사이트에서 앱을 추가할 수 없습니다"라는 메시지가 표시됩니다.

반드시 공식 웹 스토어(Chrome 웹 스토어 또는 Edge 부가 기능)에서 설치하세요. 웹 스토어에 접속할 수 없다면 공식 웹사이트에서 제공하는 수동 설치 방법을 이용하세요.

### 연결 명령을 실행해도 아무 일도 일어나지 않습니다.

인터넷 연결 상태를 확인하세요. 문제가 계속되면 Kimi Claw Desktop을 다시 시작한 후 명령을 다시 실행해 보세요.

### 여러 대의 컴퓨터에서 사용할 수 있나요?

가능합니다. 다만 각 컴퓨터마다 별도로 설치하고 설정해야 합니다.

### Kimi Claw Desktop을 찾을 수 없습니다.

Kimi Claw Desktop은 로컬 컴퓨터에 배포된 Kimi Claw입니다. Kimi Desktop을 열고 왼쪽 사이드바에서 Kimi Claw를 찾아 새 Claw를 만든 다음 "내 컴퓨터에 배포"를 선택하세요.

## 연결 및 사용

### 확장 프로그램 상태가 "연결 끊김"으로 표시됩니다.

Kimi 브라우저 확장 프로그램이 정상적으로 설치되었는지 확인한 다음, 설정 방식에 맞는 단계를 따르세요.

- **Kimi Desktop**: Kimi Desktop을 다시 시작한 후 다시 시도하세요.

- **기타 Local Agent**: Agent에서 다음 명령을 다시 보내고, 실행이 끝나면 Agent를 다시 시작하세요.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

### Windows에서 Kimi 브라우저 확장 프로그램을 설치할 때 "설치 실패" 오류가 발생합니다.

Kimi 브라우저 확장 프로그램은 Windows 운영 체제를 지원하며, 설치 명령은 Linux 환경에서 실행할 수 있습니다.

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

### 설치 후 Kimi 브라우저 확장 프로그램에 Chrome 호환성 경고가 표시됩니다. 무슨 의미인가요?

Kimi 브라우저 확장 프로그램이 페이지는 정상적으로 열지만 `snapshot`, `evaluate`, `screenshot`, `click` 같은 동작이 계속 실패한다면, 가장 흔한 원인은 **다른 브라우저 확장 프로그램과의 충돌**입니다.

특히 스크래핑 도구, 웹사이트 도우미 확장 프로그램, 화면 녹화 확장 프로그램, AI 비서 확장 프로그램에서 자주 발생합니다.

다음 단계로 문제를 해결해 보시기를 권장합니다.

1. 브라우저의 확장 프로그램 관리 페이지를 엽니다.
2. 다른 확장 프로그램을 일시적으로 비활성화합니다.
3. Kimi 브라우저 확장 프로그램만 활성화 상태로 둡니다.
4. 브라우저를 다시 시작한 후 다시 시도합니다.
5. Kimi 브라우저 확장 프로그램이 정상적으로 작동하면 다른 확장 프로그램을 하나씩 다시 활성화하여 충돌을 일으키는 확장 프로그램을 찾아냅니다.


### Kimi 브라우저 확장 프로그램이 제 로그인 정보를 유출하지는 않나요?

그렇지 않습니다. 모든 실행은 사용자 기기에서 로컬로 이루어지며, 로그인 상태와 웹 페이지 콘텐츠는 절대 기기 밖으로 나가지 않습니다. Agent는 사용자가 승인한 작업 결과에만 접근할 수 있습니다.

### 작업이 실패하는 이유는 무엇인가요?

복잡한 페이지 구조나 동적 로딩으로 인해 작업이 실패할 수 있습니다. 지시를 더 단순하게 작성하거나, 실행하기 전에 Agent에게 먼저 스크린샷을 찍어 페이지 상태를 확인하도록 요청해 보세요.

### 어떤 브라우저를 지원하나요?

현재 Chrome과 Edge를 지원합니다. 최상의 환경을 위해 최신 버전을 사용하시길 권장합니다.

## 다른 Agent와 함께 사용하기

### 어떤 다른 Agent를 지원하나요?

Kimi 브라우저 확장 프로그램은 Claude Code, Codex, Cursor, Kimi Code, Hermes Claw 등을 비롯한 모든 Local Agent를 지원합니다.

### Agent마다 설정 방법이 같나요?

설치 명령은 모두 동일합니다. 단일 curl 명령 하나로 설치하면 됩니다. 자세한 내용은 각 Agent의 Skill 설정을 참고하세요.
