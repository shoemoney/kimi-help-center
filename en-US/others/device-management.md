---
title: "Device Management"
slug: "device-management"
order: 11
extract_headings: true
preview: true
preview_content: "View the devices signed in to your account and remove suspicious ones to keep your account secure."
---

<SeoMeta
  title="Kimi Device Management Guide - Kimi Help Center"
  description="Learn how to view the list of devices signed in to your Kimi account, identify and remove suspicious devices, and keep your account secure."
/>

# Device Management

Kimi supports signing in to the same account on multiple devices. With **Device Management**, you can see which devices your account is currently signed in on and remove devices you no longer use or don't recognize.

## Where to find it?

**Web**: click your avatar in the bottom-left corner → **Settings** → **Account & Security** → **Device Management**.

**App**: **Me** → **Settings** → **Account Security** → **Manage Devices**.

<Callout type="info">
Sign-in and binding options depend on your region: on **kimi.ai** (overseas), accounts sign in with Google or phone; on **kimi.com** (mainland China), accounts sign in with phone or WeChat. The screenshots below show both.
</Callout>

<Frames
  src="./images/device-management/entry-settings.png"
  alt="Device Management entry on the Account & Security settings page"
  width={3068}
  height={1708}
/>

## About the device list

Devices are sorted by most recent activity first. Each device card shows:

- **Device type icon**: phone / PC / Web
- **Device name**: e.g. "iPhone 16 Pro Max" or "MacBook Pro"; if the model can't be identified, the raw system string is shown
- **Sign-in location**: the city resolved from the sign-in IP; shown as "Unknown" if resolution fails
- **Last active time**: the current device always shows "Just now"; other devices show the exact time

In addition:

- Your current device is pinned to the top with a **This Device** badge
- The list only shows devices active within the past year; devices inactive for over a year are no longer shown

<Frames
  src="./images/device-management/device-list.png"
  alt="Manage Devices dialog showing the signed-in device list"
  width={3068}
  height={1708}
/>

## How to remove a device?

1. In the device list, click **Remove** next to the device.
2. Confirm in the dialog. The device will be signed out of your Kimi account.

<Callout type="tip">
If you notice an unfamiliar device, remove it and change your account password promptly. When there are more than 3 devices other than this one, a **Remove All** button appears at the bottom of the page, which signs out all devices except the current one.
</Callout>
