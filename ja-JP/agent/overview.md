---
title: "Kimi Agent の概要"
slug: "agent-overview"
order: 1
extract_headings: false
preview: true
preview_content: "Kimi Agent の自律的なタスク実行、20種類以上のツール、対応ユースケースについて紹介します。"
---

<SeoMeta
  title="Kimi Agent の概要 - Kimi ヘルプセンター"
  description="Kimi Agent の機能、進化、ユースケースを紹介します。"
/>

# Kimi Agent の概要

Kimi Agent は、複雑なタスクを最初から最後まで自律的に処理する AI アシスタントです。Kimi K3 を基盤に、20種類以上のツールを使ってウェブサイトの構築、ドキュメント生成、データ分析などを行います。

## 製品の進化
- **2025年9月5日**: Kimi K2 リリース — アクティブパラメータ 32B / 総パラメータ 1T
- **2025年9月26日**: 「OK Computer」Agent mode をリリース
- **2026年1月27日**: Kimi K2.5 リリース — Office スキルと Agent 機能を強化
- **2026年2月**: Kimi Claw パブリックベータ開始
- **2026年4月20日**: Kimi K2.6 リリース・オープンソース化 — 最先端のコーディング、長期的な実行、Agent Swarm
- **2026年7月16日**: Kimi K3 リリース — 世界初のオープンな 3T クラスのモデル（2.8T パラメータ、ネイティブビジョン、100万トークンのコンテキスト）であり、Kimi で最も高性能なモデル。チャット、Agent、Agent Swarm を駆動します。Kimi アプリ、kimi.com、Kimi Work、Kimi Code、Kimi API から利用でき、2026年7月27日に全重みを公開予定

## 主な機能
| 機能 | 説明 |
|---------|-------------|
| **ウェブサイト** | レスポンシブなウェブアプリを生成・デプロイ |
| **ドキュメント** | Word、PDF、Markdown の編集と生成 |
| **シート** | Excel/CSV データの分析と可視化 |
| **スライド** | PPT を自動生成 |
| **Deep Research** | 10,000語以上のリサーチレポート |
| **Agent Swarm** | 最大300のサブエージェントが並列で作業 |
| **Kimi Claw** | 5,000以上のスキルを備えたクラウド自動化 |

<Frames
  src="./images/overview/agent-workflow.png"
  alt="エージェントのワークフロー"
/>

## 仕組み
1. **タスク計画**: 依頼内容をサブタスクに分解
2. **ツール呼び出し**: 必要に応じて20種類以上のツールを使用
3. **自律実行**: 調査、設計、開発まで完遂
4. **エラー処理**: ユーザーの介入なしに自己修正
5. **成果物**: Office ファイル、ウェブアプリ、レポート

## はじめ方
- **Web**: [kimi.com/agent](https://www.kimi.com/agent)
- **モバイル**: Kimi アプリを開き、モデル切り替えボタンで K3 または K3 Swarm モデルを選択します
タスクを明確に入力し、実行の進捗を確認したら、結果をダウンロードまたは共有します。

## ユースケース
- ウェブサイト開発（コーディング不要）
- マルチメディアを使ったコンテンツ生成
- ドキュメントの比較・翻訳
- データ分析（最大1,000行の Excel に対応）
- スライド生成
- ドキュメント変換

<ColumnsContent
  columns={[
    {
      title: "機能と制限",
      description: "機能とクレジット",
      pageUrl: "/agent/agent-features-and-limits",
      type: "document",
    },
    {
      title: "クレジットと請求",
      description: "料金とメンバーシップの詳細",
      pageUrl: "/agent/quota-and-billing",
      type: "data",
    },
    {
      title: "Agent Swarm",
      description: "マルチエージェント連携",
      pageUrl: "/agent/agent-swarm",
      type: "comment",
    },
    {
      title: "Kimi Claw",
      description: "クラウド自動化エージェント",
      pageUrl: "/kimi-claw/overview",
      type: "kimiclaw",
    },
  ]}
/>
