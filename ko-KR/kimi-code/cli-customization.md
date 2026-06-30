---
title: "맞춤 설정 및 레퍼런스"
slug: "cli-customization"
order: 9
extract_headings: false
preview: false
---

<SeoMeta
  title="Customization \u0026 reference - Kimi 도움말 센터"
  description="Kimi Code CLI offers extensive customization options, allowing you to tailor the AI's behavior and workflow to your needs."
/>

# 맞춤 설정 및 레퍼런스

Kimi Code CLI는 다양한 맞춤 설정 옵션을 제공하여, AI의 동작 방식과 워크플로를 필요에 맞게 조정할 수 있습니다.

## 설정 파일

Kimi Code CLI는 `~/.kimi/config.toml`을 전역 설정 파일로 사용하며 TOML과 JSON 형식을 모두 지원합니다. 다음 항목을 설정할 수 있습니다.

- **API 제공자 및 모델**: 다양한 모델 제공자, API 엔드포인트, 키를 설정합니다.
- **기본 모델**: 사용할 기본 모델을 지정합니다.
- **런타임 매개변수**: 타임아웃, concurrency, 출력 형식 등 런타임 설정을 조정합니다.

> `/config` 명령으로 설정 파일을 빠르게 열어 편집할 수 있습니다.

## AGENTS.md 프로젝트 설정

프로젝트 루트에 `AGENTS.md` 파일을 두면 AI에 프로젝트 수준의 컨텍스트를 제공할 수 있습니다.

- **프로젝트 배경**: 프로젝트의 기능, 아키텍처, 기술 스택을 설명합니다.
- **빌드 단계**: 의존성 설치, 프로젝트 빌드, 테스트 실행 방법을 안내합니다.
- **코드 규칙**: 네이밍 규칙, 디렉터리 구조 규칙, 코드 스타일 선호사항을 명시합니다.
- **특별 참고사항**: 보안 제약, 성능 요구사항 등 유의해야 할 중요 사항을 적습니다.

`/init` 명령을 사용하면 AI가 프로젝트를 자동으로 스캔하여 초기 `AGENTS.md`를 생성합니다. 파일을 직접 편집해 프로젝트 고유의 정보를 추가할 수도 있습니다. `AGENTS.md` 파일은 어느 하위 디렉터리에든 둘 수 있으며, AI가 관련 설정을 자동으로 불러옵니다.

## 시스템 프롬프트 맞춤 설정

여러 방식으로 AI의 시스템 프롬프트를 맞춤 설정할 수 있습니다.

- **전역 시스템 프롬프트**: `~/.kimi/AGENTS.md`에 작성하면 모든 프로젝트에 적용됩니다.
- **프로젝트 수준 시스템 프롬프트**: 프로젝트 루트의 `AGENTS.md`에 작성하면 현재 프로젝트에만 적용됩니다.
- **실행 매개변수**: `--system-prompt` 플래그로 시작 시점에 지정합니다.

프로젝트 수준 설정은 전역 설정보다 우선하며, 실행 매개변수가 가장 높은 우선순위를 가집니다.

## MCP 연동

Kimi Code CLI는 Model Context Protocol(MCP)을 지원하여 외부 도구 및 데이터 소스에 연결함으로써 AI의 기능을 확장할 수 있습니다.

- **MCP 서버 설정**: 설정 파일에 MCP 서버 주소를 추가하면 AI가 외부 도구를 호출할 수 있습니다.
- **내장 MCP 지원**: 자주 쓰이는 일부 MCP 도구는 내장되어 있어 별도의 설정이 필요 없습니다.
- **사용자 정의 MCP 서버**: 직접 MCP 서버를 개발하여 특정 도메인에 특화된 기능을 제공할 수 있습니다.

MCP 설정은 `~/.kimi/config.toml`이나 프로젝트 수준 설정 파일에 둘 수 있습니다.

## 환경 변수

Kimi Code CLI는 환경 변수를 통한 설정을 지원하며, 이는 CI/CD 파이프라인과 스크립트에 유용합니다.

| 환경 변수 | 설명 |
| --- | --- |
| `KIMI_API_KEY` | API 키 |
| `KIMI_BASE_URL` | 사용자 정의 API 엔드포인트 |
| `KIMI_MODEL` | 기본 모델 이름 |
| `KIMI_MAX_TOKENS` | 최대 출력 token 수 |

환경 변수는 설정 파일의 설정보다 우선합니다.

## 더 많은 레퍼런스

- **슬래시 명령 레퍼런스**: `/help`로 사용 가능한 모든 명령을 확인합니다.
- **CLI 매개변수 레퍼런스**: `kimi --help`를 실행하여 모든 실행 매개변수를 확인합니다.
- **공식 문서**: [Kimi Code Docs](https://www.kimi.com/code/docs/en/)에서 최신 전체 문서를 확인하세요.
