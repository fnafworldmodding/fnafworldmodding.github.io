---
lang: en_US
title: "Using Certificates"
description: Tutorial to use Certificates to install apps on most iOS devices.
permalink: /using-certs
---
::: danger
It is HIGHLY recommended to use TrollStore on versions 14.0b2 - 16.6.1, and 17.0. This is still an option for those who want it on those versions.

:::

## Getting a Certificate

There are many places to get Certificates from, but the most recommended one is [KravaSign](https://kravasign.com/purchase) or [DxSign](https://dxsign.cc/purchase) purchase due to the cheap price.

All private Certificates need your iDevice's UDID, you can use [KravaSign's UDID Grabber](https://udid.kravasign.com/) to obtain it.


## Using the Certificate
::: danger

If you are using an iOS 16+ Device, you will need to take extra steps beforehand to open sideloaded apps:

1. Open Settings
1. Go to Privacy & Security and find the `Developer Mode` entry
1. Toggle Developer Mode on, then press `Reboot`
1. After the device reboots, unlock it, and confirm that you want to enable Developer Mode
  - If you have a passcode enabled, you'll need to enter it.

:::

After you get your Certificate, you should have a zip file with the files ending with ".p12" and ".mobileprovision"

1. Download the IPA if you haven't already.
2. Go to [IPASign](https://sign.ipasign.cc/) or [KravaSigner](https://sign.kravasign.com/) (If using Krava)
3. Insert the IPA, .p12 and .mobileprovision files. These files should be in the .ZIP you were sent when you had purchased with your certificate provider.
