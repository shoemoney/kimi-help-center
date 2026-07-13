---
title: "Kimi Code 멤버십 가이드"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code 멤버십 가이드 - Kimi 헬프 센터"
  description="Kimi Code는 Kimi 멤버십 플랜에 포함된 개발자 중심 혜택으로, 고성능 AI 코딩 기능을 제공합니다. 이 혜택은 다음을 통해 사용할 수 있습니다..."
/>

# Kimi Code 멤버십 가이드

<Callout type="info">
Kimi Code는 Kimi 멤버십 플랜에 포함된 개발자 중심 혜택으로, 고성능 AI 코딩 기능을 제공합니다. 이 혜택은 Kimi Code CLI, Claude Code, Roo Code를 비롯해 지원되는 여러 도구에서 사용할 수 있습니다.
</Callout>

## 주요 장점

| 장점 | 설명 |
|-----------|-------------|
| **폭넓은 호환성** | Kimi Code CLI, Claude Code, Roo Code 등 주요 코딩 에이전트와 연동됩니다 |
| **Standard / HighSpeed 등급** | 동일한 모델을 두 가지 속도로 제공 — HighSpeed는 Standard의 약 5~6배 출력 속도를 내며 필요에 따라 전환할 수 있습니다 |
| **초고속 응답** | 최대 100 토큰/s의 생성 속도로 코딩 효율을 크게 높여줍니다 |
| **고빈도 동시 처리** | 5시간 단위로 약 300~1,200건의 요청을 처리하며(플랜에 따라 다름), 최대 30개의 스트림을 동시에 실행할 수 있습니다 |

## 빠른 시작

자신의 상황에 맞는 방법을 선택하세요:

- **신규 사용자**: [kimi.com/code](https://kimi.com/code)로 이동해 로그인한 뒤 Coding Plan을 구독하세요.
- **기존 구독자**: 콘솔에 접속해 API Key를 관리하고 Kimi Code 사용을 시작하세요.

## API 키 발급

1. [Kimi 콘솔](https://kimi.com/code)에 로그인합니다.
2. **API Keys** 페이지로 이동합니다.
3. **Create New API Key**를 클릭합니다.
4. 발급된 API Key를 복사해 안전하게 보관하세요(생성 시 한 번만 표시됩니다).

<Callout type="warning">
API Key를 다른 사람과 공유하거나 공개 코드 저장소에 커밋하지 마세요.
</Callout>

## 원클릭 로그인

Kimi Code CLI에서는 `/login` 명령으로 API Key를 직접 복사하지 않고도 빠르게 인증할 수 있습니다:

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

기기 인증과 계정 연동이 자동으로 완료되며, 전체 과정은 단 몇 초면 끝납니다.

## 기기 관리

- 계정 하나를 여러 기기에서 사용할 수 있습니다.
- **30일 동안 사용하지 않은** 기기 인증은 자동으로 만료되며, 다시 사용하려면 `/login`을 실행해 재인증해야 합니다.
- 인증된 기기는 콘솔에서 확인하고 관리할 수 있습니다.

## 모델 전환 방법

**HighSpeed 모델이 이제 제공됩니다.** Kimi Code는 **Standard**와 **HighSpeed** 두 등급을 제공하며, 동일한 모델을 기반으로 코딩 능력이 동일하고 같은 Base URL, API Key, 멤버십 혜택을 공유합니다. HighSpeed는 Standard의 약 **5~6배 출력 속도**를 제공하므로, 즉각적인 응답과 빠른 반복이 필요할 때 한 번의 전환으로 더 매끄러운 코딩 경험을 얻을 수 있습니다. 주요 차이:

| 항목 | Standard | HighSpeed |
| --- | --- | --- |
| 모델 ID | `kimi-for-coding` | `kimi-for-coding-highspeed` |
| 출력 속도 | 기준 | Standard 대비 약 5~6배 빠름 |
| 크레딧 소모 | 기준 | Standard의 약 3배 |
| 코딩 능력 | 완전 | Standard와 동일 |
| 적합한 용도 | 일상적인 코딩 작업 | 즉각 응답, 빠른 반복 |
| 멤버십 | 모든 Kimi Code 회원 사용 가능 | [Allegretto](https://www.kimi.com/membership/pricing) 이상 플랜 필요 |

원하는 모델로 전환하는 방법:

- **공식 Kimi Code CLI**: 세션에서 `/model`을 입력하면 설정 변경 없이 Standard와 HighSpeed 사이를 바로 전환할 수 있습니다.
- **Kimi Code for VS Code**: 입력창의 드롭다운 메뉴에서 원하는 모델을 선택합니다. HighSpeed가 아직 보이지 않으면 VS Code를 재시작하거나 확장을 재설치하세요.
- **서드파티 도구**: 도구의 Model ID를 원하는 모델로 설정합니다. 나머지 설정은 그대로 둡니다. 각 도구에서의 위치는 [서드파티 코딩 에이전트에서 사용](/kimi-code/third-party-agents)을 참고하세요.

<Callout type="info">
- **안정적인 모델 ID**: 두 ID 모두 안정적인 식별자로, 모델이 개선될 때 백엔드가 매핑된 모델을 업데이트하며 클라이언트 설정 변경이 필요 없습니다.
- **정확히 입력**: HighSpeed ID는 반드시 `kimi-for-coding-highspeed`여야 합니다. 오타이거나 다른 값으로 설정하면 요청이 조용히 표준 `kimi-for-coding`으로 대체됩니다 — 오류는 없지만 가속도 되지 않습니다.
- **권한 없으면 401**: 플랜에 HighSpeed 접근 권한이 없으면 호출이 `401`을 반환합니다. Allegretto 이상으로 업그레이드하세요.
</Callout>

<Callout type="tip">
**전체 작업이 왜 5~6배 빠르게 느껴지지 않나요?** 「5~6×」는 **모델 출력 속도**(텍스트/코드가 생성되는 속도)를 가리킵니다. 코딩 작업의 총 소요 시간은 「모델 출력 + 도구 호출(파일 읽기/쓰기, 명령 실행, 웹 조회 등) + 스크립트 실행」으로 구성됩니다. 도구 호출과 스크립트 실행에 걸리는 시간은 프로젝트와 명령에 따라 달라지며 HighSpeed는 이 부분을 바꾸지 않습니다. 따라서 전체적으로 5~6배 빠르게 느껴지지 않는다면 보통 해당 턴에서 도구 호출/스크립트 실행이 대부분을 차지했기 때문이지, 모델 생성이 느려진 것이 아닙니다.
</Callout>
