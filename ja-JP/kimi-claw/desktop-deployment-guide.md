---
title: "Kimi Claw Desktop の概要"
slug: "desktop-deployment-guide"
order: 4
extract_headings: true
preview: true
preview_content: "KimiデスクトップアプリでローカルのOpenClawインスタンスをワンクリックでデプロイし、自分専用のAIアシスタントを作成できます。"
---

<SeoMeta
  title="Kimi Claw Desktop の概要 - Kimi ヘルプセンター"
  description="KimiデスクトップアプリでローカルのOpenClawインスタンスをワンクリックでデプロイする方法を説明します。クライアントのダウンロード、ローカルデプロイ、アシスタント名のカスタマイズまでを扱います。"
  ogType="article"
/>
 
# Kimi Claw Desktop の概要

OpenClawは、独自の個性と長期記憶を備えたAIアシスタントです。Kimiデスクトップアプリでは、ローカルのOpenClawインスタンスをワンクリックでデプロイし、すぐにチャットを始められます。

<Callout type="info">
ローカルのOpenClawをまだお持ちでない場合は、KimiデスクトップアプリのKimi Clawページで自分専用のOpenClawを作成してください。
</Callout>

ワンクリックデプロイでは、次のすべてを自動で処理します。

- **自動デプロイ** — KimiがあなたのマシンにOpenClawを自動でデプロイします。すでに別のOpenClawがローカルにインストールされている場合は、許可を得たうえで、そのペルソナ、記憶、スキルをKimiが複製できます。移行はスムーズです。
- **モデルの自動設定** — Kimiが **Kimi K2.6 モデル**を自動で設定し、**Kimi メンバーシップのクレジット**を連携し、インターネットアクセス用にKimi Web Searchをセットアップします。APIの設定は不要です。
- **Kimi K3 モデルに切り替える**場合は、Kimi Claw 設定でモデル設定を変更するか、[Kimi K3 モデルに切り替える](/kimi-claw/overview#switch-to-k3)を参照してください。
- **メンバーシップ要件** — ワンクリックデプロイにはAllegretto以上のプランが必要です。
- **インスタンス数の上限** — 各アカウントで同時に利用できるKimi Claw Desktopは最大1つです。別のマシンに切り替えて新しいマシンにデプロイする場合は、先に以前のインスタンスとの連携を解除するよう求められます。

## ステップ1：Kimiデスクトップアプリをダウンロードし、プランをアップグレードする

まず、Kimiデスクトップアプリをダウンロードし、アカウントにサインインします。

**システム要件**

| 項目 | 要件 |
|------|-------------|
| オペレーティングシステム | macOSまたはWindows |
| メンバーシップ tier | Allegretto以上 |

ダウンロード後、Kimiアカウントにサインインし、メンバーシップがAllegretto以上であることを確認してください。そうでない場合は、先にプランをアップグレードしてください。

## ステップ2：ローカルにデプロイする

KimiデスクトップアプリのKimi Clawページに移動し、**自分のコンピューターにデプロイ**をクリックして、画面の案内に従ってKimi Claw Desktopをセットアップします。

<Frames
  src="./images/desktop claw/add bot.png"
  alt="Kimi Clawデプロイページ"
/>

<Callout type="warning">
各アカウントで利用できるKimi Claw Desktopは最大1つです。以前に別のマシンへデプロイしていた場合は、続行する前にそのインスタンスの接続を解除するかどうか確認を求められます。
</Callout>

**既存のローカルOpenClawから移行する**

同じマシンに別バージョンのOpenClawがインストールされている場合、次のデータをコピーするかどうかをシステムが確認します。
- ペルソナ
- 記憶
- チャット履歴
- ワークスペースファイル
必要に応じて、移行するデータを選択できます。

## ステップ3：ニックネームを設定する

デプロイが完了したら、Kimi Claw Desktopに任意のニックネームを付けます。

<Frames
  src="./images/desktop claw/nickname.png"
  alt="Kimi Claw Desktop設定ページ"
/>

ニックネームを設定すれば、Kimi Claw Desktopの準備は完了です。いつでもチャットを始められます。

<Callout type="tip">
デプロイ後は、ペルソナの設定、スキルのインストール、スケジュールタスクの設定によってKimi Claw Desktopをさらにカスタマイズし、より自分に合ったAIアシスタントにできます。
</Callout>
