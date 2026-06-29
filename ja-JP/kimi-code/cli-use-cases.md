---
title: "よくあるユースケース"
slug: "cli-use-cases"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="よくあるユースケース - Kimi ヘルプセンター"
  description="Kimi Code CLI を日常の開発で活用する代表的なシナリオを、参考用のプロンプト例とともに紹介します。"
/>

# よくあるユースケース

Kimi Code CLI を日常の開発で活用する代表的なシナリオを、参考用のプロンプト例とともに紹介します。

## 新機能を実装する

要件を自然言語で伝えるだけで、AI が関連するコードを自動的に読み取り、新しいコードを書き、結果を検証します。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "ユーザー一覧ページに登録日で並べ替える機能を追加してください。フロントエンドとバックエンドの両方に変更が必要です",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "token bucket アルゴリズムを使ったレートリミッターのミドルウェアを実装し、各 IP を 1 分あたり 60 リクエストに制限してください",
    },
  ]}
/>

## バグを修正する

エラーメッセージをそのまま AI に貼り付ければ、根本原因を自動で特定し、修正案を提示します。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "npm test を実行したら次のエラーが出ました。修正してください:\nTypeError: Cannot read properties of undefined (reading 'map')\n  at UserList (src/components/UserList.tsx:23)",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "CI パイプラインが lint ステージで失敗しました。ログは次のとおりです: ... 修正してください",
    },
  ]}
/>

## プロジェクトを理解する

新しいプロジェクトに参加したときや特定のコードを理解したいときは、そのまま質問してください。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "このプロジェクト全体のアーキテクチャはどうなっていますか？主要なモジュールは何ですか？",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/auth/middleware.ts は何をしていますか？認証フローはどのように動きますか？",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "このプロジェクトではデータベースマイグレーションをどのように管理していますか",
    },
  ]}
/>

## 小さな作業を自動化する

コードの一括変更、ドキュメント追加、テスト生成などの反復作業に最適です。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "src/utils/ ディレクトリ内のエクスポートされたすべての関数に JSDoc コメントを追加してください",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "UserService クラスのすべての公開メソッドに対する単体テストを生成してください",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "プロジェクト内のすべての var 宣言を const または let に置き換えてください",
    },
  ]}
/>

## 一般的なタスク

Kimi Code CLI はコーディングだけにとどまりません。調査、データ分析、ファイルの一括操作なども扱えます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "現在主流の Node.js ORM ライブラリを調査し、それぞれの長所と短所を比較してください",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "logs/ ディレクトリにある過去 7 日分のアクセスログを分析し、リクエストパスの上位 10 件を一覧にしてください",
    },
  ]}
/>

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "data/ ディレクトリ内のすべての CSV ファイルを 1 つに結合し、重複行を削除してください",
    },
  ]}
/>
