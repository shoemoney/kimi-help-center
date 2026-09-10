---
title: "Minor Mode"
slug: "minor-mode"
order: 7
extract_headings: true
preview: true
preview_content: "How to turn on, turn off, reset the passcode, or unbind the guardian for Minor Mode."
---

<SeoMeta
  title="Kimi Minor Mode (Guardian Mode) Guide - Kimi Help Center"
  description="Learn how to set up and manage Minor Mode in Kimi: bind a guardian, set a guardian passcode, turn it on or off, reset a forgotten passcode, and unbind the guardian."
/>

# Minor Mode

Minor Mode (shown as **Guardian Mode** in the setup dialog) is a management tool for guardians. When it's on, Kimi restricts certain features and content to protect minors from inappropriate use.

- **Age-appropriate content**: content and features are age-restricted when it's on
- **Guardian control**: a guardian passcode is required to turn it on or off
- **Synced across devices**: the same status applies across app, web, and desktop

## Where to find it?

**Web (kimi.com)**: click your avatar in the bottom-left corner → **Settings** → **Account & Security** → **Minor Mode**.

**App**: **Me** → **Settings** → **Minor Mode**.

<Frames
  src="./images/minor-mode/entry-settings.png"
  alt="Minor Mode entry on the Account & Security settings page"
  width={3068}
  height={1708}
/>

## How to turn it on?

1. Click the **Minor Mode** entry to open the intro dialog, then click **Get Started**.

<Frames
  src="./images/minor-mode/intro-dialog.png"
  alt="Guardian Mode intro dialog"
  width={3068}
  height={1708}
/>

2. Bind a guardian: enter the guardian's phone number, then request and enter the 6-digit verification code.

<Frames
  src="./images/minor-mode/bind-guardian.png"
  alt="Bind guardian dialog"
  width={3068}
  height={1708}
/>

3. Create a 4-digit guardian passcode and confirm it. Once done, the entry status shows as **On**.

## How to turn it off?

Open the Minor Mode menu, toggle the switch, and enter the 4-digit guardian passcode. Once verified, Minor Mode is turned off.

## Forgot the guardian passcode?

On the turn-off page, click **Forgot passcode**, verify the guardian's phone number with the 6-digit verification code, and set a new passcode.

<Callout type="info">
Resetting the passcode does not change the on/off state. If Minor Mode is currently on, it stays on after the reset — use the new passcode to turn it off.
</Callout>

## How to unbind the guardian?

In the menu, click **Unbind guardian**, complete the guardian phone verification, and confirm. Unbinding turns off Minor Mode and clears the passcode and binding.

<Callout type="warning">
After unbinding, you need to complete the binding and setup flow again to use Minor Mode.
</Callout>
