---
title: "Tailscale 연결 끊김"
slug: "tailscale-issue"
order: 11
extract_headings: false
preview: false
---

<SeoMeta
  title="Tailscale 연결 끊김 - Kimi 도움말 센터"
  description="Tailscale 설정 후 Kimi Claw의 연결이 끊긴다면 원인은 대부분 DNS 재정의입니다. Tailscale이 시스템의 DNS 설정을 바꾸면서 Kimi Claw가 호스트 이름을 해석하지 못하..."
/>

# Tailscale 연결 끊김

Tailscale 설정 후 Kimi Claw의 연결이 끊긴다면 원인은 대부분 DNS 재정의입니다. Tailscale이 시스템의 DNS 설정을 바꾸면서 Kimi Claw가 호스트 이름을 해석하지 못하게 됩니다.

## 해결 방법은？

1. [Tailscale DNS 설정 페이지](https://login.tailscale.com/admin/dns)를 엽니다.
2. **네임서버 → 전역 네임서버**에서 **네임서버 추가**를 클릭합니다.
3. 다음 공용 DNS 서버를 추가합니다.
   - **Google Public DNS** — `8.8.8.8` / `8.8.4.4`
   - **Cloudflare Public DNS** — `1.1.1.1` / `1.0.0.1`
4. 오른쪽 상단의 **DNS 서버 재정의** 토글을 켭니다.
5. 연결이 복구될 때까지 약 **30초** 기다립니다.

## 예방 방법은？

Tailscale을 설정하려는 경우, Tailscale을 활성화하기 **전에** 위의 DNS 설정을 먼저 구성하세요. 이렇게 하면 연결이 끊기는 일을 피할 수 있습니다.
