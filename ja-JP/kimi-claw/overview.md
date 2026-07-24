---
title: "Kimi Claw の概要"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "ワンクリック設定で、自分専用の Kimi Claw AI アシスタントをクラウドにデプロイし、管理できます。"
---

<SeoMeta
  title="Kimi Claw の概要 - Kimi ヘルプセンター"
  description="ワンクリック設定で、自分専用の Kimi Claw AI アシスタントをクラウドにデプロイし、管理できます。"
/>

# 製品概要

<Callout type="info">
**Kimi Claw** は、独自の個性と持続的な長期記憶を備えた AI アシスタントです。Kimi Claw を使えば、自分専用の OpenClaw インスタンスを Kimi から直接作成、デプロイし、チャットできます。
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## ワンクリックでクラウドにデプロイ

まだ OpenClaw をお持ちでない場合は、[kimi.com/bot](https://kimi.com/bot) にアクセスして作成してください。Kimi がクラウドへのデプロイを代行します。サーバーの購入も、コマンドラインでの設定も不要です。

<Callout type="warning">

- ワンクリックデプロイには、**Allegretto 以上**のプランが必要です。[メンバーシッププラン](https://www.kimi.com/membership/pricing)。

</Callout>

- Kimi は **Kimi K2.6 モデル**を自動で設定し、**Kimi メンバーシップのクレジット**を連携し、Kimi Web Search を有効にします。個別の API 設定は必要ありません。
- **Kimi K3 モデル**に切り替える場合は、Kimi Claw 設定でモデル設定を変更するか、詳細設定ガイドを参照してください。
- Kimi Claw は Telegram やその他のチャットプラットフォームに直接デプロイできます。

## はじめに

1. [kimi.com/bot](https://kimi.com/bot) にサインインします
2. **作成**をクリックして、新しい Kimi Claw を起動します
3. 自動セットアップが完了するまで待ちます（通常は数分です）
4. Kimi Claw の名前とペルソナをカスタマイズします
5. **設定 → チャットチャネル**で、利用したいプラットフォーム（例: Telegram）を接続します

## 既存の OpenClaw をリンクする

すでに OpenClaw インスタンスをセルフホストしている場合は、Kimi プラグインをインストールして Kimi に接続できます。

1. [kimi.com/bot](https://kimi.com/bot) に移動し、**既存の OpenClaw をリンク**を選択します
2. 手順に従って、OpenClaw デバイスにプラグインをインストールします
3. 接続後は、Kimi を通じて OpenClaw とチャットできます

<a id="switch-to-k3"></a>
## Kimi K3 モデルに切り替える

Kimi Claw のデフォルトは Kimi K2.6 モデルです。Kimi K3 を使用する場合は、以下のコマンドでローカルの OpenClaw 設定を変更できます。

```bash
# 1. 备份当前配置
cp /root/.openclaw/openclaw.json /root/.openclaw/openclaw.json.bak.k3

# 2. 新增 k3 模型并切换默认模型（示例使用 jq）
jq '
  (.models.providers["kimi-coding"].models // .models.providers.kimi-coding.models) |= . + [{
    "id": "k3",
    "name": "k3",
    "input": ["text", "image"],
    "reasoning": true,
    "contextWindow": 1048576,
    "maxTokens": 65536
  }]
  | .agents.defaults.model.primary = "kimi-coding/k3"
' /root/.openclaw/openclaw.json > /tmp/openclaw.json.tmp \
  && mv /tmp/openclaw.json.tmp /root/.openclaw/openclaw.json

# 3. 重启 OpenClaw
openclaw gateway restart

# 4. 验证
session_status
```

実行後、`session_status` の出力で `model` が `kimi-coding/k3`、かつ `context` の上限が `1.0m` になっていることを確認してください。

<Callout type="warning">
設定ファイルのパスはインストール方法によって異なる場合があります。実際の環境に合わせて `/root/.openclaw/openclaw.json` を置き換えてください。変更前に必ずバックアップを取ってください。
</Callout>
