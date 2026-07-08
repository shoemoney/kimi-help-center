---
title: "Kimi Code メンバーシップガイド"
slug: "membership-guide"
order: 1
extract_headings: false
preview: false
---

<SeoMeta
  title="Kimi Code メンバーシップガイド - Kimi ヘルプセンター"
  description="Kimi Code は、Kimi メンバーシッププランに含まれる開発者向け特典で、高性能な AI コーディング機能を提供します。この特典は..."
/>

# Kimi Code メンバーシップガイド

<Callout type="info">
Kimi Code は、Kimi メンバーシッププランに含まれる開発者向け特典で、高性能な AI コーディング機能を提供します。この特典は、Kimi Code CLI、Claude Code、Roo Code などの対応ツールから利用できます。
</Callout>

## 主なメリット

| メリット | 説明 |
|-----------|-------------|
| **幅広い互換性** | Kimi Code CLI、Claude Code、Roo Code など、主流のコーディングエージェントで利用できます |
| **超高速レスポンス** | 生成速度は最大 100 トークン/s。コーディング効率を大きく高めます |
| **高頻度concurrency** | プランに応じて 5 時間あたり約 300～1,200 リクエスト、最大 30 の同時ストリームに対応します |

## クイックスタート

ご利用状況に合った手順を選んでください。

- **初めての方**: [kimi.com/code](https://kimi.com/code) にアクセスしてサインインし、コーディングプランに登録します。
- **既存の登録者**: コンソールにアクセスして APIキーを管理し、Kimi Code の利用を開始します。

## APIキーの取得

1. [Kimi コンソール](https://kimi.com/code) にサインインします。
2. **APIキー**ページに移動します。
3. **新しい APIキーを作成**をクリックします。
4. APIキーをコピーし、安全な場所に保管してください（作成時に一度だけ表示されます）。

<Callout type="warning">
APIキーを他人と共有したり、公開コードリポジトリにコミットしたりしないでください。
</Callout>

## ワンクリックログイン

Kimi Code CLI では、APIキーを手動でコピーしなくても、`/login` コマンドで素早く認証できます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "/login",
    },
  ]}
/>

システムがデバイス認証とアカウント連携を自動で完了します。全体の処理はわずか数秒で終わります。

## デバイス管理

- 各アカウントは複数のデバイスで利用できます。
- **30 日間非アクティブ**なデバイス認証は自動的に期限切れになります。再認証するには、もう一度 `/login` を実行してください。
- 認証済みデバイスはコンソールで確認・管理できます。
