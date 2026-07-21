---
title: "Kimi WebBridge ユースケースデモ"
slug: "kimi-webbridge-use-cases"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi WebBridge ユースケースデモ - Kimi Help Center"
  description="旅行計画、賃貸物件検索、文献調査などに役立つ Skill と CLI の例を含め、Kimi WebBridge の代表的なユースケースを紹介します。"
  ogType="article"
/>

# Kimi WebBridge ユースケースデモ

Kimi WebBridge を使うと、Agent が実際の人のようにブラウザを操作し、すでにログイン済みのウェブサイト上で自動的に移動、抽出、情報整理を行えます。

<Callout type="tip">
WebBridge を使うときは、タスクの説明が具体的であるほど、Agent はより正確に作業を完了できます。対象サイト、絞り込み条件、希望する出力形式を指定することをおすすめします。ページ構造が複雑な場合は、処理を進める前にまずスクリーンショットを撮ってページの状態を確認するよう Agent に依頼することもできます。
</Callout>

実際には、WebBridge は Skill や CLI と組み合わせて使われることがよくあります。Skill には、どのサイトにアクセスし、どの手順で情報を集め、結果をどう整理するかといったタスク経験を蓄積できます。CLI は、検索、ページの読み取り、ファイルのダウンロード、構造化データのクエリといった具体的な機能を提供します。

ウェブ上で繰り返し行っている作業を、AI Agent に一文で伝えてください。実際の Chrome ログインセッションをそのまま利用する CLI を生成できます。API は不要で、API Token の設定や管理も必要ありません。

以下のシナリオで使っている Skills と CLIs は、この方法で作成したものです。そのままインストールして使うことも、参考例として活用することもできます。

<Callout type="warning">
このページで提供している Skills と CLIs は、教育および技術交流のみを目的としています。ご不明な点や懸念がある場合は、<a href="mailto:support@moonshot.cn">support@moonshot.cn</a> までお問い合わせください。
</Callout>

## 情報検索と整理

複数のウェブサイトを横断して検索したいとき、WebBridge を使えば Agent が対象ページを自動で開き、重要な内容を抽出して構造化された出力に整理できます。ページを一つずつ開いて手作業でコピー＆ペーストする手間を省けます。

### 旅行計画

航空券予約サイト、ホテル予約サイト、旅行コミュニティを行き来しながら価格やスケジュールを比較し、旅程、予算表、宿泊先の候補を整理します。

関連ツール:

- Skill: [travel-planning](https://github.com/better-world-ai/x-cli/tree/main/skills/travel-planning)
- CLI: [ctrip-cli](https://github.com/better-world-ai/x-cli/tree/main/ctrip-cli), [booking-cli](https://github.com/better-world-ai/x-cli/tree/main/booking-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "11月に2人で京都へ4泊5日の旅行を計画しています。予算は約8,000人民元です。航空券、ホテル、観光スポットの営業時間を調べ、結果を日別の旅程表と予算表に整理してください。",
    },
  ]}
/>

インストールと使い方:

1. [Releases](https://github.com/better-world-ai/x-cli/releases) から ctrip-cli と booking-cli をダウンロードします
2. `npx skills add better-world-ai/x-cli --skill travel-planning` を実行します
3. Kimi Code、Claude Code、Codex CLI、Cursor など、Skill 対応クライアントのローカル Agent を開き、上記のプロンプトを送信します

### 賃貸物件の絞り込み

複数の賃貸プラットフォームを同時に検索し、家賃、通勤時間、間取りなどの条件で物件を絞り込みます。情報を統合したうえで、おすすめ順に並べ替えます。

関連ツール:

- Skill: [rental-assistant](https://github.com/better-world-ai/x-cli/tree/main/skills/rental-assistant)
- CLI: [58-cli](https://github.com/better-world-ai/x-cli/tree/main/58-cli), [anjuke-cli](https://github.com/better-world-ai/x-cli/tree/main/anjuke-cli), [apartments-cli](https://github.com/better-world-ai/x-cli/tree/main/apartments-cli), [rightmove-cli](https://github.com/better-world-ai/x-cli/tree/main/rightmove-cli), [idealista-cli](https://github.com/better-world-ai/x-cli/tree/main/idealista-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "上海の張江高科駅周辺で賃貸住宅を探してください。予算は4,500人民元以内、通勤時間は40分以内、1ベッドルームの一棟貸しマンションを希望します。複数のプラットフォームを開き、物件リンク、価格、面積、通勤時間を整理し、優先して問い合わせるべきリストを作成してください。",
    },
  ]}
/>

インストールと使い方:

1. [Releases](https://github.com/better-world-ai/x-cli/releases) から 58-cli、anjuke-cli、apartments-cli、rightmove-cli、idealista-cli をダウンロードします
2. `npx skills add better-world-ai/x-cli --skill rental-assistant` を実行します
3. Kimi Code、Claude Code、Codex CLI、Cursor など、Skill 対応クライアントのローカル Agent を開き、上記のプロンプトを送信します

## コンテンツ調査と分析

WebBridge は、Agent が検索結果を自動で閲覧し、詳細ページを開いて、タイトル、データ、コメントなどの情報を抽出し、それらを分析・要約するのに役立ちます。多くのウェブページを確認する必要がある調査タスクに適しています。

### 文献調査

学術文献を検索し、論文の要旨、主要手法、実験結果、引用関係を抽出して、構造化されたレビューとして出力します。

関連ツール:

- Skill: [paper-research](https://github.com/better-world-ai/x-cli/tree/main/skills/paper-research)
- CLI: [scholar-cli](https://github.com/better-world-ai/x-cli/tree/main/scholar-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "AI Agent のメモリに関する過去2年の代表的な論文を調査し、タイトル、著者、要旨、主要手法、オープンソースリンクを整理したうえで、研究の流れを要約してください。",
    },
  ]}
/>

インストールと使い方:

1. [Releases](https://github.com/better-world-ai/x-cli/releases) から scholar-cli をダウンロードします
2. `npx skills add better-world-ai/x-cli --skill paper-research` を実行します
3. Kimi Code、Claude Code、Codex CLI、Cursor など、Skill 対応クライアントのローカル Agent を開き、上記のプロンプトを送信します

### トピックの深掘り検索

なじみのないテーマを理解したいとき、従来は検索エンジンを開き、検索結果を一つずつクリックして読み込み、要点をコピーしてメモに整理する必要がありました。それだけで半日が過ぎてしまいます。

このプロセスは AI に任せましょう。AI が自動で検索し、結果をたどって全文を取得します。要約として統合することも、あとで読めるよう原文のまま残すこともできます。研究テーマの調査、分野の新しい動向の追跡、執筆用素材の収集では、まず情報を一か所に集める用途に活用できます。

関連ツール:

- CLI: [google-cli](https://github.com/better-world-ai/x-cli/tree/main/google-cli), [baidu-cli](https://github.com/better-world-ai/x-cli/tree/main/baidu-cli)

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "2025年に使う価値のあるローカル AI モデルを検索し、上位10件の結果の全文を取得してください。",
    },
  ]}
/>

インストールと使い方:

1. [Releases](https://github.com/better-world-ai/x-cli/releases) から google-cli または baidu-cli をダウンロードします
2. Kimi Code、Claude Code、Codex CLI、Cursor など、Skill 対応クライアントのローカル Agent を開き、上記のプロンプトを送信します

## 日常業務のサポート

WebBridge の自動化機能を使って、反復的なウェブ操作を処理し、仕事の効率を高めます。

### EC 価格比較

複数の EC プラットフォームで同じ商品を検索し、価格、仕様、ユーザーレビューを比較して、最適な購入候補を整理します。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "27インチの4Kモニターを購入したいです。予算は約2,000人民元です。主要な EC プラットフォームで候補を検索・比較し、価格、ブランド、ユーザーレビューを整理したうえで、最もコストパフォーマンスの高い選択肢をおすすめしてください。",
    },
  ]}
/>

### ウェブデータ抽出

ウェブページから表やリストなどの構造化データを抽出し、指定した形式に自動で整理します。手作業でコピー＆ペーストする手間を省けます。

<CodePreview
  files={[
    {
      name: "prompt.txt",
      language: "text",
      content: "このウェブページを開き、ページ内の商品価格表を抽出して、見やすいリストとして出力してください。",
    },
  ]}
/>

その他のユースケースについては、[Kimi WebBridge 公式サイト](https://www.kimi.com/zh-cn/features/webbridge)をご覧ください。
