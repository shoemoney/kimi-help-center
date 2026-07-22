---
title: "Agent の credit と課金"
slug: "quota-and-billing"
order: 4
extract_headings: false
preview: false
---

<SeoMeta
  title="Agent の credit と課金 - Kimi ヘルプセンター"
  description="Agent モードでは Kimi の credit（利用枠）システムを使用します。メンバーシップのすべての機能（Agent、Deep Research（高度な調査）、Slides、Docs、Sheets、Kimi Code、Kimi Work、Kimi Claw など）は 1 つの credit プールを共有し、実際の token 消費量に応じて credit が差し引かれます。"
/>

# Agent の credit と課金

<Callout type="info">
Agent モードでは Kimi の credit（利用枠）システムを使用します。メンバーシップのすべての機能（Agent、Deep Research（高度な調査）、Slides、Docs、Sheets、Kimi Code、Kimi Work、Kimi Claw など）は 1 つの credit プールを共有し、実際の token 消費量に応じて credit が差し引かれます。
</Callout>

## 課金モデル
- **共有 credit プール**: メンバーシップのすべての機能は、1 つの credit プールを共有します。使い方は自由に配分できます。Kimi Code には、Kimi Code のみに適用され、他の機能には影響しない独自の週 5 時間の rate limit もあります
- **従量制**: credit の消費量は、タスクの複雑さと所要時間（つまり token 使用量）によって決まります。シンプルなタスクほど少なく、複雑なタスクほど多く消費します
- **毎月更新**: credit はサブスクリプション周期に合わせて毎月リセットされます
- **使用の優先順位**: ボーナス credit（トライアル credit、キャンペーン特典など）が先に消費され、その後にプランの credit が消費されます

<Callout type="tip">
**例**: Moderato プランの場合、シンプルな PPT の生成では credit の約 1〜2% を消費する一方、1 回の Deep Research セッションでは約 5〜10% を使用することがあります。
</Callout>

## credit がなくなるとどうなりますか？
credit を使い切ると、次のようになります。
- 進行中のタスクは通常どおり完了します
- 新しいタスクでは「credit 不足」の通知が表示されます
- 選択肢:
  - 毎月の credit が自動更新されるまで待つ
  - より多くの credit を利用できる上位メンバーシップにアップグレードする

## credit の使用状況を確認するには？
- **Web**: プロフィール → 設定 → サブスクリプション
- **App**: プロフィール → メンバーシッププラン → サブスクリプション
確認できる内容:
1. 現在の credit 残高（割合）
2. 次回更新日
3. 直近 10 件の利用履歴（日時、利用した機能、消費割合）

<Callout type="info">
利用履歴の反映には、短い遅延が発生する場合があります。最新の情報は、実際の credit 表示をご確認ください。
</Callout>

## 失敗したタスクでも credit は消費されますか？
- タスクが正常に実行された後、実際の消費量に基づいて credit が差し引かれます
- システムエラーでタスクが失敗した場合（有効な結果が返されなかった場合）は、**👎** ボタンをクリックして報告してください。確認後、該当する credit が返還されます
