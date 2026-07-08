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
