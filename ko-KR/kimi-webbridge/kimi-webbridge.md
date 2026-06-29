---
title: "Kimi WebBridge 소개"
slug: "kimi-webbridge-introduction"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi WebBridge 소개 - Kimi 고객 센터"
  description="Kimi WebBridge는 AI 에이전트를 위해 설계된 브라우저 확장 프로그램입니다. Chrome 또는 Edge 브라우저에서 직접 실행되며, 기존 로그인 세션을 활용해 에이전트가 사람처럼 웹 페이지와 상호작용할 수 있도록 합니다."
  ogType="article"
/>

# Kimi WebBridge 소개

Kimi WebBridge는 AI 에이전트를 위해 설계된 브라우저 확장 프로그램입니다. 클라우드 기반의 브라우저 자동화 솔루션과 달리, Kimi WebBridge는 Chrome 또는 Edge 브라우저에서 직접 실행되며 기존 로그인 세션을 자동으로 활용해 에이전트가 사람처럼 웹 페이지와 상호작용할 수 있도록 합니다.

<VideoList
  column={1}
  list={[
    {
      url: "./videos/H265_LoRes_WebBridge_用户教程_EN.mp4",
      type: "video",
      caption: "Kimi WebBridge 튜토리얼",
    },
  ]}
/>

<Callout type="tip">
최상의 브라우저 자동화 경험을 위해 주 업무용 컴퓨터에 Kimi WebBridge를 설치하는 것을 권장합니다.
</Callout>

<Callout type="info">
WebBridge는 로컬 브리지 서비스와 브라우저 확장 프로그램을 통해 작동합니다. 모든 실행은 기기에서 로컬로 이루어지며, 로그인 상태와 웹 페이지 콘텐츠는 기기를 벗어나지 않습니다.
</Callout>

<Frames
  src="./images/introduction.png"
  alt="WebBridge Introduction"
/>

## 1단계: Kimi WebBridge 확장 프로그램 다운로드

다음 방법으로 다운로드할 수 있습니다.

**방법 1: 웹 스토어에서 설치**

- Chrome 사용자: [Chrome 웹 스토어](https://chromewebstore.google.com/detail/kimi-webbridge/fldmhceldgbpfpkbgopacenieobmligc)로 이동
- Edge 사용자: [Edge 추가 기능](https://microsoftedge.microsoft.com/addons/detail/kimi-webbridge/bnlffdbcfnanfbknnlaflhlhkocccckg)으로 이동

**방법 2: 수동 설치**

웹 스토어에 접근할 수 없는 경우 수동 설치 방법을 사용할 수 있습니다.

그런 다음 사용 중인 브라우저에 맞는 단계를 따르세요.

**Chrome:**

1. [Kimi WebBridge 공식 웹사이트](https://www.kimi.com/features/webbridge)에서 확장 프로그램 패키지를 다운로드합니다.
2. 다운로드한 파일의 압축을 풉니다
3. 주소창에 `chrome://extensions/`를 입력해 엽니다
4. 우측 상단의 "개발자 모드"를 켭니다
5. "압축해제된 확장 프로그램을 로드합니다"를 클릭합니다
6. 파일 선택 창에서 압축을 푼 WebBridge 폴더를 선택합니다

<Frames
  src="./images/installation_chrome_en.png"
  alt="installation_chrome_en"
/>

**Edge:**

1. [Kimi WebBridge 공식 웹사이트](https://www.kimi.com/features/webbridge)에서 확장 프로그램 패키지를 다운로드합니다.
2. 다운로드한 파일의 압축을 풉니다
3. 주소창에 `edge://extensions/`를 입력해 엽니다
4. 좌측 하단의 "개발자 모드"를 켭니다
5. "압축해제된 확장 프로그램을 로드합니다"를 클릭합니다
6. 파일 선택 창에서 압축을 푼 WebBridge 폴더를 선택합니다

<Frames
  src="./images/installation_edge_en.png"
  alt="installation_edge_en"
/>

설치가 완료되면 브라우저의 확장 프로그램 목록에서 WebBridge를 확인할 수 있습니다. 더 쉽게 접근할 수 있도록 브라우저 도구 모음에 고정하는 것을 권장합니다.

## 2단계: 설정 방법을 선택하고 구성 완료하기

### 방법 1: Kimi Work 데스크톱과 함께 사용

1. [공식 웹사이트](https://www.kimi.com/zh-cn/products/kimi-work)에서 Kimi Work를 다운로드합니다

2. 설치가 완료되면 Kimi Work에서 다음과 같이 지시를 보낼 수 있습니다.

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "Use Kimi Webbridge and open Xiaohongshu, search for posts about the Kimi K2.6 release",
    },
  ]}
/>

### 방법 2: 로컬 에이전트와 연동

Claude Code, Codex, Cursor, Kimi Code, Hermers Claw 등을 지원합니다.

1. 에이전트에서 다음 명령어를 직접 보내면 WebBridge가 자동으로 설치됩니다. 에이전트는 운영 체제에 맞는 적절한 설정을 실행합니다.

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
      content: "Use Kimi WebBridge open X.com and search for posts about the Kimi K2.6 release",
    },
  ]}
/>
