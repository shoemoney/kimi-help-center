---
title: "Kimi プラグインをアンインストールする"
slug: "uninstall-plugin"
order: 13
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi プラグインをアンインストールする - Kimi ヘルプセンター"
  description="これは Kimi に連携した自己ホスト型の OpenClaw デバイスにのみ適用されます。必ずご自身のマシン上で実行してください。"
/>

# Kimi プラグインをアンインストールする

<Callout type="warning">
**これは Kimi に連携した自己ホスト型の OpenClaw デバイスにのみ適用されます**。必ずご自身のマシン上で実行してください。
</Callout>

## アンインストールコマンド

OpenClaw がインストールされているデバイスで、次を実行します。

<CodePreview
  files={[
    {
      name: "command.sh",
      language: "bash",
      content: "bash \u003c(curl -fsSL https://cdn.kimi.com/kimi-claw/uninstall.sh)",
    },
  ]}
/>

## 重要な警告

<Callout type="warning">
**ワンクリックでデプロイした Kimi Claw インスタンスでは、このコマンドを絶対に実行しないでください。**
クラウド上にデプロイされた Kimi Claw でアンインストールスクリプトを実行すると、接続が**完全に切断され、復旧できなくなります**。このコマンドは、自己ホスト型の OpenClaw デバイスから Kimi プラグインを削除する場合にのみ使用してください。
</Callout>
