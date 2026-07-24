---
title: "Kimi Claw 概覽"
slug: "overview"
order: 1
extract_headings: false
preview: true
preview_content: "一鍵完成設定，在雲端部署並管理你自己的 Kimi Claw AI 助理。"
---

<SeoMeta
  title="Kimi Claw 概覽 - Kimi 說明中心"
  description="一鍵完成設定，在雲端部署並管理你自己的 Kimi Claw AI 助理。"
/>

# 產品概覽

<Callout type="info">
**Kimi Claw** 是一款具備獨特個性與持久長期記憶的 AI 助理。透過 Kimi Claw，你可以直接在 Kimi 中建立、部署並與自己的 OpenClaw 實例聊天。
</Callout>

<Frames
  src="./images/overview/claw.png"
  alt="Claw"
/>

## 一鍵雲端部署

還沒有 OpenClaw 嗎？前往 [kimi.com/bot](https://kimi.com/bot) 建立一個。Kimi 會為你部署到雲端——不必購買伺服器，也不用執行命令列設定。

<Callout type="warning">

- 一鍵部署需要 **Allegretto 或更高等級**方案。[會員方案](https://www.kimi.com/membership/pricing)。

</Callout>

- Kimi 會自動配置 **Kimi K2.6 模型**，並關聯 **Kimi 會員權益額度**，無需額外配置 API。同時會自動配置 Kimi Web Search 服務，為 AI 提供聯網搜索能力。
- 如需切換為 **Kimi K3** 模型，可在 Kimi Claw 設定中調整模型配置，或參考進階設定指南。
- Kimi Claw 可直接部署到 Telegram 及其他聊天平台。

## 開始使用

1. 在 [kimi.com/bot](https://kimi.com/bot) 登入
2. 點選 **建立** 以啟動新的 Kimi Claw
3. 等待自動設定完成（通常需要幾分鐘）
4. 自訂 Kimi Claw 的名稱與角色設定
5. 在 **設定 → 聊天頻道** 中，連接你想使用的平台（例如 Telegram）

## 連結既有的 OpenClaw

如果你已經自行託管 OpenClaw 實例，可以安裝 Kimi plugin 將它連接到 Kimi：

1. 前往 [kimi.com/bot](https://kimi.com/bot)，並選擇 **連結既有 OpenClaw**
2. 依照指示在你的 OpenClaw 裝置上安裝 plugin
3. 連接完成後，即可透過 Kimi 與你的 OpenClaw 聊天

<a id="switch-to-k3"></a>
## 切換為 Kimi K3 模型

Kimi Claw 預設使用 Kimi K2.6 模型。如果你希望使用 Kimi K3，可以透過以下命令自動修改本機 OpenClaw 設定。

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

執行後請確認 `session_status` 輸出中 `model` 顯示為 `kimi-coding/k3`，且 `context` 上限為 `1.0m`。

<Callout type="warning">
設定檔路徑可能因安裝方式不同而有所差異，請根據實際情況替換 `/root/.openclaw/openclaw.json`。修改前務必先備份。
</Callout>
