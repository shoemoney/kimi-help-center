---
title: "Kimi 브라우저 확장 프로그램 소개"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi 브라우저 확장 프로그램 소개 - Kimi 고객 센터"
  description="Kimi 브라우저 확장 프로그램(구 Kimi WebBridge)은 AI Agent를 위한 브라우저 플러그인으로, 웹페이지 열기, 버튼 클릭, 양식 작성, 정보 추출을 자동으로 수행합니다."
  ogType="article"
/>

# Kimi 브라우저 확장 프로그램 소개

Kimi 브라우저 확장 프로그램(구 Kimi WebBridge)은 AI Agent를 위한 브라우저 플러그인으로, 웹페이지 열기, 버튼 클릭, 양식 작성, 정보 추출을 통해 사람처럼 번거로운 웹 작업을 자동으로 완료합니다. 자주 사용하는 웹페이지를 CLI로 분해하거나 녹화한 웹 작업을 Skill로 변환해 Agent가 언제든 재사용할 수 있습니다.

## 두 가지 사용 방법

Kimi 브라우저 확장 프로그램에는 두 가지 사용 방법이 있습니다.

- **브라우저 사이드바**: 도구 모음에서 Kimi 아이콘을 클릭해 사이드바를 열고, Kimi 계정으로 로그인하면 바로 대화하며 Kimi가 현재 웹페이지를 조작하도록 할 수 있습니다.
- **로컬 에이전트 원격 제어**: Kimi Work, Claude Code 같은 AI 어시스턴트가 확장 프로그램을 원격으로 구동해 웹 작업을 자동으로 완료하도록 할 수 있습니다.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi 브라우저 확장 프로그램 튜토리얼",
    },
  ]}
/>

## 다운로드 및 설치

### 1단계: Kimi 브라우저 확장 프로그램 다운로드

다음 방법으로 다운로드할 수 있습니다.

**방법 1: 웹 스토어에서 설치**

- Chrome 사용자: [Chrome 웹 스토어](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)로 이동
- Edge 사용자: [Edge 추가 기능](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)으로 이동

**방법 2: 수동 설치**

웹 스토어에 접근할 수 없는 경우 수동 설치 방법을 사용할 수 있습니다.

1. [Kimi 브라우저 확장 프로그램 공식 웹사이트](https://www.kimi.com/features/webbridge)에서 확장 프로그램 패키지를 다운로드하고 압축을 풉니다
2. 주소창에 확장 프로그램 관리 페이지 주소를 입력합니다(Chrome: `chrome://extensions/`; Edge: `edge://extensions/`)
3. "개발자 모드"를 켭니다(Chrome은 페이지 우측 상단, Edge는 좌측 하단)
4. "압축해제된 확장 프로그램을 로드합니다"를 클릭합니다
5. 파일 선택 창에서 압축을 푼 WebBridge 폴더를 선택합니다

<Frames
  src="./images/installation_chrome_en.png"
  alt="Chrome을 예로 한 수동 설치 과정; Edge 인터페이스도 거의 동일합니다"
/>

설치가 완료되면 브라우저의 확장 프로그램 목록에서 Kimi 브라우저 확장 프로그램을 확인할 수 있습니다. 더 쉽게 접근할 수 있도록 브라우저 도구 모음에 고정하는 것을 권장합니다.

### 2단계: 설정 방법을 선택하고 구성 완료하기

**방법 1: Kimi Work 데스크톱과 함께 사용**

1. [공식 웹사이트](https://www.kimi.com/products/kimi-work)에서 Kimi Work를 다운로드합니다

2. 다운로드한 Kimi Work 데스크톱 앱을 열고 Work 모드로 전환하세요. 플러그인 마켓플레이스에서 Kimi 브라우저 확장 프로그램을 찾아 설치하세요. 그런 다음 브라우저 사이드바나 Kimi Work에서 아래 지시를 보낼 수 있습니다:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi 브라우저 확장 프로그램으로 Xiaohongshu를 열고 Kimi K3 출시에 관한 게시물을 검색해 줘",
    },
  ]}
/>

**방법 2: 로컬 에이전트와 연동**

Claude Code, Codex, Cursor, Kimi Code, Hermes Claw 등을 지원합니다.

1. 에이전트에서 다음 명령어를 직접 보내면 Kimi 브라우저 확장 프로그램이 자동으로 설치됩니다. 에이전트는 운영 체제에 맞는 적절한 설정을 실행합니다.

macOS 사용자라면 아래 명령어를 사용하세요.

<CodePreview
  files={[
    {
      name: "macos.sh",
      language: "bash",
      content:
        "curl -fsSL https://kimi-web-img.moonshot.cn/webbridge/install_skill.sh | bash -s -- -y",
    },
  ]}
/>

Windows 사용자라면 아래 명령어를 사용하세요.

<CodePreview
  files={[
    {
      name: "windows.ps1",
      language: "powershell",
      content:
        "irm https://kimi-web-img.moonshot.cn/webbridge/install.ps1 | iex",
    },
  ]}
/>

2. 사용 시작

확장 프로그램이 연결되면 지시를 보낼 수 있습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Kimi 브라우저 확장 프로그램으로 X.com을 열고 Kimi K3 출시에 관한 게시물을 검색해 줘",
    },
  ]}
/>
