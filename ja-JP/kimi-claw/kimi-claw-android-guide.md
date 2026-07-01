---
title: "Kimi Claw Android 概要"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Kimi Claw Android 概要 - Kimi ヘルプセンター"
  description="Android スマートフォンに OpenClaw をデプロイし、24時間365日使える AI リモートアシスタントとして活用する方法を説明します。"
  ogType="article"
/>

# Kimi Claw Android 概要

この記事では、Android スマートフォンに OpenClaw をデプロイし、使っていない端末を24時間365日使える AI リモートアシスタントに変える方法を紹介します。Kimi、Feishu、WeChat などのメッセージアプリを通じて、スマートフォンを遠隔操作したり、アプリを使ったり、スマートホームに接続したり、自分専用のアシスタントを作成したりできます。

日常利用との権限競合を避けるため、Kimi Claw Android は予備のスマートフォンにデプロイすることをおすすめします。OpenClaw のバージョンを手動でアップグレードしないでください。公式に適合済みのアップデートは、アプリ内のバージョン更新を通じて提供されます。

## Kimi Claw Android の紹介

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

システム要件:

| 項目 | 要件 |
| --- | --- |
| オペレーティングシステム | Android 8.0 以上 |
| 利用可能なストレージ容量 | 5GB 以上 |
| ネットワーク | 安定したネットワーク接続が必要 |
| アカウント | Kimi Allegretto 以上のサブスクリプション |

<Callout type="info">
日常利用との競合を避けるため、予備のスマートフォンの使用をおすすめします。
</Callout>

## ダウンロードとインストール
### Kimi Claw Android をダウンロードする

以下の方法でダウンロードできます。

#### 方法 1: QR コードをスキャンして Web ページからダウンロードする。
kimi.com](https://kimi.com) にログインし、「Kimi Claw Android をダウンロード」の入口を見つけ、Android スマートフォンでページ上の QR コードをスキャンしてダウンロードします。

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### 方法 2: Google Play から直接ダウンロードする
スマートフォンのアプリストアで「Kimi Claw」を検索し、ダウンロードを完了します。

#### 方法 3: モバイルで Kimi App をダウンロードする
Kimi App を開き、Kimi Claw Android をクリックします。既存の OpenClaw インスタンスをリンクすることもできます。

### 初期設定 

Kimi Claw Android を初めて開くと、ウェルカムページが表示されます。以下の重要事項を確認したうえで、「設定を開始」をクリックし、セットアップに進みます。

- すばやい OpenClaw デプロイ - OpenClaw をローカルのスマートフォンにデプロイし、Kimi、Feishu などを通じて通信します。
- 予備のスマートフォンの使用を推奨 - Kimi Claw Android の安定稼働には安定したネットワークが必要なため、予備のスマートフォンの使用をおすすめします。
- 安全にご利用ください - OpenClaw にはプライバシーやセキュリティ上のリスクが伴う場合があります。慎重にご利用ください。

プライバシーポリシー とユーザー契約に同意を選択してから、次に進みます。

#### ステップ 1: 権限を付与する
Kimi Claw Android をバックグラウンドで安定して動作させるには、以下の権限が必要です。「許可」を順にクリックして、権限付与を完了してください。

| 権限 | 説明 |
| --- | --- |
| システム通知 | ゲートウェイの状態と通知を表示します |
| ストレージ容量の権限 | 5GB 以上の空き容量が必要です |
| バックグラウンド実行権限 | バックグラウンドに切り替えた後もゲートウェイを実行し続けます |

設定パスはスマートフォンのブランドによって異なるため、一般的な手順を以下に示します。

1. 「設定を開く」をクリックしてスマートフォンの設定ページに移動します
2. アプリ管理一覧に入り、Kimi Claw Android を選択します
3. 自動起動のスイッチをオンにします
4. 電力消費管理で「バックグラウンド動作を完全に許可」を選択します
5. Kimi Claw Android に戻り、「完了しました」をクリックしてインストールを続行します

#### ステップ 2: Kimi アカウントを設定する

1. 「設定へ進む」をクリックして Kimi App に移動し、認可を行います
2. 認可後、Kimi は Kimi Claw Android 用の Kimi Coding Plan API キーを自動作成します
3. 無料ユーザーの場合は、先にメンバーシップ特典を有効化する必要があります。「アップグレードへ進む」をクリックしてメンバーシップを有効化してください。

#### ステップ 3: OpenClaw をインストールする

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

インストールに失敗した場合は、「再インストール」をクリックして再試行できます。何度も失敗する場合は、「問題がありますか？フィードバックへ」をクリックして問題を送信してください。

## Dashboard ユーザーガイド

### メイン画面

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

設定が完了すると Dashboard のメイン画面に入り、以下の情報を確認できます。

- OpenClaw ゲートウェイ状態 — 起動中 / 接続済み / 停止中、および稼働時間
- チャットチャネル — 現在接続されている通信チャネルの一覧
- OpenClaw ログ — OpenClaw の動作に関する元ログ
- Kimi で会話する — Kimi App を開き、Kimi Claw Android に対応する会話画面を開いて、対応する Claw に自動で切り替えます。

Dashboard の上部に権限リマインダーが表示される場合、一部の権限がまだ付与されていない、または失効していることを示します。表示に従って項目ごとに認可を完了し、Kimi Claw Android が正常に動作するようにしてください。

### チャットチャネル管理

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
Dashboard では、すべての通信チャネルを管理できます。

- 接続済みチャネルとその状態を確認する（例: Kimi - 接続済み、Feishu - 接続済み）
- 「+ 接続」をクリックして新しいチャットチャネルを追加する
- 既存のチャネルをクリックして詳細を確認、または削除する

<Callout type="info">
Kimi Claw Android と正常に通信できるよう、少なくとも1つのチャットチャネルを維持してください。
</Callout>

### OpenClaw ログ

- 検索 — キーワードでログ内容を検索します
- レベルでフィルタ — ログレベル（Info / Warning / Error など）で絞り込みます
- 最下部へ自動スクロール — 最新ログまで自動でスクロールします
- 更新 — ログ内容を手動で更新します

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### 設定

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
設定をクリックして設定ページに入ります。

**機能レイヤー:**

- ClawHub Skills: ClawHub 公式サイトと自動的に連携し、Kimi Claw Android で利用できるスキルを管理します
- OpenClaw Workspace: ローカルの OpenClaw 設定ファイルディレクトリに入り、個人設定を編集します

**システムレイヤー:**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- バックアップと復元: 現在の OpenClaw 設定と履歴をバックアップし、過去の設定や記録の復元に対応します
- アクセシビリティサービス: スマートフォンのアクセシビリティサービス権限を監視します
- バックグラウンド実行権限: スマートフォンのバックグラウンド実行権限を監視します
- バージョンアップグレード: バージョンを監視し、クリックすると自動的にアップグレードします

**About:**

- ヘルプ: 基本的な利用上の推奨事項
- フィードバック: フィードバックを送信します
- ユーザー契約: ユーザー契約を読む
- プライバシーポリシー: プライバシーポリシー を読む

#### ClawHub Skills

ClawHub 公式サイトと自動的に連携し、Kimi Claw Android で利用できるスキルを管理します。Skills をダウンロードしてインストールすると、Claw の機能を拡張できます。

#### OpenClaw Workspace

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### バックアップと復元

Kimi Claw Android は自動バックアップと手動バックアップの両方に対応しており、OpenClaw の履歴と設定が失われないようにします。

自動バックアップ

Kimi Claw Android は一定間隔で現在の OpenClaw の履歴と設定を自動的にバックアップし、圧縮ファイルにまとめて保存します。手動操作は不要で、システムがバックグラウンドで自動的に完了します。

手動バックアップ:

特定時点の状態を記録したい場合は、バックアップをクリックして、現在の履歴と設定のスナップショットを手動で保存することもできます。バックアップをクリックすると、現在のすべての設定バックアップを書き出せます。

**設定を復元:**

Kimi Claw Android は以前の設定状態への復元に対応しています。Kimi Claw Android の自動バックアップ状態と手動バックアップ状態のどちらからでも復元できます。

以下のような場合は、復元機能を使って以前の状態に戻せます。

- アプリのアンインストールや再インストールによって履歴記録が消えた場合、過去の記録を復元できます
- Claw 設定を切り替える必要がある場合、以前に保存した設定状態へ復元できます
- スマートフォンを交換して再デプロイする場合、バックアップファイルをインポートするだけで復元できます

バックアップ一覧で該当するバックアップファイルをクリックすると、その時点の履歴記録と設定が自動的に復元され、過去の記録が消去されずに保たれます。

## チャットチャネルを設定する

### Kimi
Kimi はデフォルトの通信チャネルです。Onboarding プロセスで Kimi アカウント設定を完了すると自動的に接続され、追加操作は不要です。

インストールと設定が完了すると、Kimi Claw Android は Web クライアント（kimi.com）の Bot 切り替えページに自動的に表示されます。クリックして切り替えると、アバターとチャットスレッドも同期して切り替わります。

Kimi Claw Android は、Bot 管理で Bot 名の編集と Bot の削除のみをサポートしています。

### Feishu
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

3つの接続方法に対応しています。

方法 1: Feishu を開いて作成する

「Feishu を開いて作成」をクリックし、表示に従って Feishu でアプリ作成を完了すると、状態が自動的に「接続済み」に更新されます。

方法 2: QR コードをスキャンして作成する

1. 「QR コードをスキャンして作成」をクリックします
2. Feishu で QR コードをスキャンします
3. ブラウザで Feishu アプリケーションの作成を完了します

**方法 3: Bot 情報を手動で入力する**

1. 「Bot 情報を手動で入力」をクリックします
2. App ID と App Secret を入力します
3. 「追加」をクリックして接続を完了します

### WeChat
WeChat チャネルを使うには、まず WeChat 側に WeChat Claw をインストールする必要があります。Kimi Claw Android は WeChat Claw 端末を通じて通信します。

WeChat 公式の案内に従って、先に WeChat Claw のインストールを完了してください。チャットページに WeChat ClawBot が表示されれば、インストールは完了です。

Kimi Claw Android に入り、WeChat チャネルに接続し、WeChat で QR コードをスキャンして手順を完了します。

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android は Telegram 連携に対応しています。利用するには、まず bot token と user ID を取得する必要があります。

## 自動化

Kimi Claw Android の中核機能の1つは、スマートフォン上のアプリを操作してさまざまなタスクを完了することです。Kimi、Feishu、WeChat などのチャットチャネルから Claw に指示を送ると、Claw はスマートフォン上で対応するアプリを自動的に開き、実際のユーザーのように一連の操作を行い、最後に指定したタスクを完了します。

### 動作原理

チャットチャネルから Claw にタスク指示を送信すると、Claw は次のように動作します。

1. タスク要件を理解します
2. スマートフォン上の対応するアプリを自動的に開きます
3. ユーザー操作（クリック、スワイプ、入力など）をシミュレートしながら、段階的にタスクを完了します
4. 実行中にスクリーンショットを撮り、実行過程を確認しやすくします
5. タスク完了後、実行結果を報告します

### 代表的な利用シーン

#### ショッピングと消費

Taobao、Tmall、Meituan などのプラットフォームで、商品の検索、カートへの追加、注文確認、割引の取得などを行います。

#### 旅行とナビゲーション

Amap でタクシー料金の確認、地下鉄時刻表の確認、近くのホテル検索、旅行予約などを行います。

#### ソーシャルとコンテンツ

WeChat、Rednote、Douyin などのプラットフォームで、メッセージ確認、コンテンツ閲覧、商品の検索、インタラクション操作などを行います。

## 利用のヒント

### チャットソフトからスマートフォンを操作する

設定が完了したら、Kimi、Feishu、WeChat で Claw にコマンドを送信し、Android スマートフォン上のアプリを遠隔操作できます。例:

- WeChat を開いて最新メッセージを確認して
- 地図を開いて近くのレストランを検索して
- 「今日の予定を確認するためにカレンダーを見て」

### ClawHub Skills を使う

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android には、内蔵スキルライブラリである ClawHub が用意されています。設定でスキルを管理・インストールし、Claw の機能をさらに拡張できます。

Skills の利用に適したシーン:
- 情報整理: ニュース集約、競合製品比較
- データ分析: 市場レビュー、データ解釈
- ワークフロー自動化: 要件分解から出力までの一連のプロセス

### 複数チャネルの同時オンライン
Kimi、Feishu、WeChat など複数のチャネルを同時に接続し、異なるメッセージアプリから Claw とチャットできます。追加するには、Dashboard のチャネル管理で「+ 接続」をクリックするだけです。

## セキュリティと制限対象アプリケーション

### 安全上の注意

Kimi Claw Android を使用する前に、以下の安全上の注意事項をご確認ください。

1. 予備のスマートフォンを使用する — Kimi Claw Android はスマートフォンのシステム権限を使用するため、日常利用に影響する可能性があります。予備のスマートフォンの使用をおすすめします

2.  機密データの隔離 — Kimi Claw Android はローカルファイルデータを読み取るため、機密情報を事前に削除または隔離してください

3. 金融アプリケーションの保護 — 資産保護のため、銀行、決済、証券、保険アプリケーションへのアクセスはシステムにより自動的にブロックされています

### 制限対象アプリケーション一覧

金融セキュリティとプライバシー上の懸念により、以下のカテゴリのアプリは Kimi Claw Android によるアクセスが自動的にブロックされ、遠隔操作できません。

1. ソーシャル

| Package | リスク説明 |
| --- | --- |
| wechat | 重要なプライベートなソーシャル機能および決済機能に関わります |

2. 銀行

| Package | アプリ名 | リスク説明 |
| --- | --- | --- |
| com.android.bankabc | abc, Agricultural Bank of China | Agricultural Bank of China。振込や資産運用などの操作が可能です |
| com.bankcomm.main | bocom, Bank of Communications | Bank of Communications。振込や資産運用などの操作に対応しています |
| com.bjbk.im | Bank of Beijing | Bank of Beijing。振込や資産運用などの操作が可能です |
| com.cebbank.im | Everbright Bank | China Everbright Bank。振込や資産運用などの操作が可能です |
| com.cgb.im | Guangfa Bank | Guangfa Bank。振込や資産運用などの操作が可能です |
| com.chinamworld.bocmbci | boc, Bank of China | Bank of China。中国四大銀行の1つです |
| com.chinamworld.main | CCB, China Construction Bank | China Construction Bank。中国四大銀行の1つです |
| com.cib.im | Industrial Bank | Industrial Bank。振込や資産運用などの操作が可能です |
| com.citic.im | China CITIC Bank | China CITIC Bank。振込や資産運用などの操作に対応しています |
| com.cmbc.im | Minsheng Bank | China Minsheng Bank。振込や資産運用などの操作が可能です |
| com.cmbchina.ccd.pluto.customerView | cmb, China Merchants Bank | China Merchants Bank。振込や資産運用などの操作に対応しています |
| com.hxb.im | Huaxia Bank | Huaxia Bank。振込や資産運用などの操作が可能です |
| com.hzbk.im | Hangzhou Bank | Hangzhou Bank。振込や資産運用などの操作に対応しています |
| com.icbc | ICBC, Industrial and Commercial Bank of China | Industrial and Commercial Bank of China。中国四大銀行の1つです |
| com.jsbk.im | Jiangsu Bank | Jiangsu Bank。振込や資産運用などの操作に対応しています |
| com.nbbk.im | Ningbo Bank | Ningbo Bank。振込や資産運用などの操作に対応しています |
| com.pingan.paces.cloud | Ping An Pocket Bank | Ping An Bank モバイルクライアントです |
| com.psbc.im | Postal Savings Bank | Postal Savings Bank of China です |
| com.shbk.im | Shanghai Bank | Shanghai Bank。振込や資産運用などの操作に対応しています |
| com.spdb.im | Shanghai Pufa Bank | Shanghai Pufa Development Bank です |

3. 決済

| Package | アプリ名 | リスク説明 |
| --- | --- | --- |
| com.eg.android.AlipayGphone | Alipay | Alipay。中国最大の第三者決済プラットフォームです |
| com.paypal.android.p2pmobile | paypal | PayPal。世界最大級のオンライン決済プラットフォームです |
| com.unionpay | ysf, Cloud Flash Payment | China UnionPay Cloud Flash Payment。銀行カード決済ツールです |
| com.squareup.cash | cashapp | Cash App。米国のモバイル決済プラットフォームです |
| com.venmo | venmo | Venmo。米国の P2P 決済プラットフォームです |
| com.google.android.apps.walletnfcrel | googlewallet, wallet | Google Wallet。Google の決済ウォレットです |

4. 証券

| Package | アプリ名 | リスク説明 |
| --- | --- | --- |
| com.citics.pbm | CITIC, Xin E Tou | CITIC Securities 取引クライアントです |
| com.cmschina.stock | China Merchants Securities | China Merchants Securities 取引クライアントです |
| com.csc108.newpda | CITIC Construction Investment | CITIC Construction Investment Securities 取引クライアントです |
| com.dfzq.stock | Orient Securities | Orient Securities 取引クライアントです |
| com.eastmoney.android.berlin | eastmoney, Orient Fortune | East Money。株式/ファンド取引プラットフォームです |
| com.ebscn.stock | ebscn, Golden Sunshine | Everbright Securities 取引クライアントです |
| com.foundersc.stock | founder, Xiaofang | Founder Securities 取引クライアントです |
| com.gf.gfstocks | GF Easy Gold Rush | GF Securities 取引クライアントです |
| com.guosen.stock | guosen, Golden Sun | Guoxin Securities 取引クライアントです |
| com.guotai.junan.guiyang | Guotai Junan | Guotai Junan Securities 取引クライアントです |
| com.hexin.plat.android | ths, Flush | Flush。株式/ファンド取引および相場プラットフォームです |
| com.htsc.mdc | Huatai, Zhangle Fortune Link | Huatai Securities 取引クライアントです |
| com.htsec.android | Haitong Securities | Haitong Securities 取引クライアントです |
| com.pingan.stock | Ping An Securities | Ping An Securities 取引クライアントです |
| com.tfzq.stock | Tianfeng Securities | Tianfeng Securities 取引クライアントです |
| com.xueqiu.android | xueqiu, Snowball | Xueqiu。株式コミュニティおよび取引プラットフォームです |
| com.xyzq.stock | Industrial Securities | Industrial Securities 取引クライアントです |

5. 保険 / 金融

| Package | アプリ名 | リスク説明 |
| --- | --- | --- |
| com.pingan.lifeinsurance | Ping An Financial Services Client | Ping An Insurance of China。保険購入や保険金請求などの操作が可能です |
| com.jd.jrapp | JD Finance | JD Finance は資産運用、融資、決済などの金融サービスを提供します |

## 対応機能と非対応機能

### 対応機能

| 機能 | 説明 |
| --- | --- |
| モバイルアプリのリモート操作 | チャットソフトのコマンドを通じて、スマートフォン上のアプリを遠隔利用できます |
| マルチチャネル通信 | Kimi、Feishu、WeChat を通じた Claw との通信に対応しています |
| リアルタイムログ表示 | OpenClaw ゲートウェイの動作ログを確認でき、検索とレベルフィルタに対応しています |
| 設定のバックアップと復元 | 現在の設定をバックアップし、再インストール後や端末交換後に復元できます |
| ゲートウェイ状態監視 | OpenClaw ゲートウェイの接続状態と稼働時間をリアルタイムで確認できます |
| チャネル管理 | 通信チャネルの追加、確認、削除ができます |
| OpenClaw Dashboard | 内蔵 Dashboard から OpenClaw を管理できます |

### 非対応機能と制限事項

| 領域 | 制限 |
| --- | --- |
| プラットフォーム対応 | 現在は Android 端末のみ対応しています。iOS には対応していません |
| メンバーシップ | Allegretto 以上の Kimi メンバーのみ利用できます |
| 金融アプリ | 銀行、決済、証券、保険に関連するアプリケーションへのアクセスは禁止されています（詳細は第6章を参照） |
| Bot 管理 | Kimi Claw Android の Bot は名前の編集と削除のみ対応しており、その他の Bot 設定には対応していません |
| ターミナル | Kimi Claw Android は現在、直接のコマンドライン操作機能を提供していません |

## よくある質問（FAQ）

<Callout type="info">
以下は Kimi Claw Android に関する参考情報です。
</Callout>

### インストールと設定

#### OpenClaw のインストールに失敗した場合はどうすればよいですか？

- 十分なストレージ容量（5GB 以上）があることを確認し、インストール中にアプリを終了したり画面をロックしたりしないでください
- 「再インストール」をクリックして再試行してください
- 何度も失敗する場合は、「問題があります。フィードバックへ」をクリックして問題を送信してください

#### 権限を認可した後、状態が更新されません。

- 一部のスマートフォンブランドでは、権限付与を反映するためにアプリの再起動が必要です
- Kimi Claw Android に戻ってください。状態が更新されていない場合は、App を閉じて再度開いてみてください

#### 無料ユーザーでも利用できますか？

- 現在、Kimi Claw Android を利用するには Allegretto 以上の Kimi メンバーシップ特典を有効化する必要があります
- Kimi アカウント設定手順の「アップグレードへ進む」をクリックして開通してください

#### 設定の復元時に「設定ファイルが無効です」と表示されます。

- バックアップファイルが破損している、または互換性のないバージョンのものかもしれません
- 「Kimi App ワンクリック設定」を使って再設定してください

### 接続性と安定性

#### ゲートウェイ状態が常に「起動中」と表示されるのはなぜですか？

- ネットワーク接続が正常か確認してください
- 必要な権限（通知、バッテリー最適化、ストレージ、自動起動）がすべて付与されているか確認してください
- 設定の「バックアップして再起動」をクリックし、ゲートウェイサービスの再起動を試してください

#### ゲートウェイが突然切断される場合

- スマートフォンが省電力モードに入り、バックグラウンドアプリが終了されていないか確認してください
- 「バッテリー最適化を無視」と「自動起動権限」が正しく付与されているか確認してください
- Dashboard でゲートウェイ状態を確認してください。「停止中」と表示されている場合は、再起動をクリックしてください

#### スマートフォンをロックすると Kimi Claw Android の接続が切れますか？

- 通常は、スマートフォンのバッテリー最適化ポリシーによりバックグラウンドアプリが終了されることが原因です
- 以下の設定が完了していることを確認してください。
  - バッテリー最適化を無視 - 認可済み
  - 自動起動権限 — 有効
  - 電力消費管理 — 「バックグラウンド動作を完全に許可」を選択

### チャネルと通信

#### 複数のチャットチャネルを同時に接続できますか？

- はい。Kimi、Feishu、WeChat など複数のチャネルを同時に接続できます
- Dashboard のチャネル管理で「+ 接続」をクリックするだけで追加できます
- 正常な通信のため、少なくとも1つのチャネルを維持してください

#### Feishu の QR コードをスキャンした後、状態更新待ちのままになります。

- ブラウザで Feishu アプリケーションの作成プロセスを完了していることを確認してください
- 長時間更新されない場合は、Bot 情報を手動で入力して接続を試してください

#### WeChat の接続に失敗しました。

- WeChat Claw の認証情報が正しく入力されており、WeChat 側セットアップの値と一致していることを確認してください
- 必要に応じて、公式の WeChat Claw セットアップガイドに従い、認証情報を再生成して再バインドしてください
- モバイルネットワークから WeChat サービスに正常にアクセスできるか確認してください

#### Kimi App で Kimi Claw Android が見えないのはなぜですか？

- Onboarding プロセスがすべて完了していることを確認してください（権限付与 → OpenClaw のインストール → Kimi アカウントの設定）
- Dashboard のゲートウェイ状態が「接続済み」になっているか確認してください
- Kimi App の Bot 一覧を更新してみてください

### 機能の利用

#### 一部のアプリケーションを遠隔操作できないのはなぜですか？

- セキュリティ上の理由により、銀行、決済、証券、保険などの金融アプリケーションはシステムにより自動的にアクセスがブロックされています
- 完全な一覧については、第6章「制限対象アプリケーション一覧」を参照してください。

#### なぜ予備のスマートフォンを使う必要があるのですか？

- Kimi Claw Android は実行中にスマートフォンの操作権限を使用する場合があり、通常の利用に影響する可能性があります
- 予備端末を使うことで、権限競合を避け、プライベートデータを保護できます

#### スマートフォンを変更した後、再デプロイするにはどうすればよいですか？

1. 古いスマートフォンで Dashboard → 設定 → バックアップと復元 から設定ファイルを書き出します
2. 新しいスマートフォンに Kimi Claw Android をインストールします
3. ステップ 3 で「設定を復元」を選択し、以前のバックアップファイルをインポートします。

#### Kimi Claw Android の稼働状態を確認するにはどうすればよいですか？

- Dashboard のメイン画面で、ゲートウェイ状態と稼働時間を確認できます
- 「リアルタイムログ」をクリックすると、詳細な動作ログを確認できます
- ログの検索機能とレベルフィルタ機能を使うと、問題をすばやく特定できます

### アップグレードとバージョン

#### Kimi Claw Android をアップグレードするにはどうすればよいですか？

- Dashboard → 設定 → 「バージョンアップグレード」で最新バージョンを確認し、アップグレードしてください
- Wi-Fi 環境でのアップグレードをおすすめします

#### OpenClaw のバージョンを手動でアップグレードできますか？

- 手動アップグレードは推奨されません。手動アップグレードにより互換性の問題が発生する可能性があります
- 公式側で適合が完了した後、アプリ内通知でアップグレードが配信されます

## フィードバックとヘルプ

利用中に問題が発生した場合や提案がある場合は、以下をご利用ください。

### アプリ内フィードバック

- Dashboard → 設定 → ユーザーフィードバック
- OpenClaw インストールページ → 「問題がある場合は、フィードバックを送信」

フィードバック時には、以下の情報を提供してください。

- Kimi Claw Android ID（Kimi チャネルをクリックすると表示されます）
- 端末モデルと Android バージョン
- 問題の説明とスクリーンショット

<Callout type="info">
Kimi Claw Android ID を提供すると、技術担当者が問題をすばやく特定しやすくなります。フィードバック時には必ず含めてください。
</Callout>
