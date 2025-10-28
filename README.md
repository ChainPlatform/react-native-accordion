# Accordion

A lightweight, animated **Accordion** component for **React Native** and **React Native Web**, supporting smooth expand/collapse transitions with automatic content height measurement.

<p align="center">
  <a href="https://github.com/ChainPlatform/react-native-accordion/blob/HEAD/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/accordion">
    <img src="https://img.shields.io/npm/v/@chainplatform/accordion?color=brightgreen&label=npm%20package" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/accordion">
    <img src="https://img.shields.io/npm/dt/@chainplatform/accordion.svg" />
  </a>
  <a href="https://www.npmjs.com/package/@chainplatform/accordion">
    <img src="https://img.shields.io/badge/platform-android%20%7C%20ios%20%7C%20web-blue" />
  </a>
  <a href="https://github.com/ChainPlatform/react-native-accordion/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
  <a href="https://x.com/intent/follow?screen_name=doansan">
    <img src="https://img.shields.io/twitter/follow/doansan.svg?label=Follow%20@doansan" alt="Follow @doansan"></img>
  </a>
</p>

---

## 🚀 Installation

```bash
npm install @chainplatform/accordion
# or
yarn add @chainplatform/accordion
```

---

## 📦 Usage

```jsx
import React from "react";
import { Text } from "react-native";
import Accordion from "@chainplatform/accordion";

export default function Example() {
  return (
    <Accordion title="View Details" initiallyOpen>
      <Text>
        This is a simple accordion component. It animates height smoothly based
        on its content size.
      </Text>
      <Text>You can place any component inside it.</Text>
    </Accordion>
  );
}
```

---

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `title` | `string` | `"Accordion Title"` | Header text |
| `initiallyOpen` | `boolean` | `false` | Whether it's expanded on mount |
| `duration` | `number` | `250` | Animation duration in milliseconds |
| `titleStyle` | `object` | `undefined` | Custom style for the title text |
| `contentStyle` | `object` | `undefined` | Style for inner content |
| `iconStyle` | `object` | `undefined` | Style for the arrow icon |
| `buttonStyle` | `object` | `undefined` | Button style |
| `style` | `object` | `undefined` | Container style |

---

## 💡 Features
- Smooth open/close animation using `Animated`
- Auto height measurement (no fixed height)
- Works on both React Native & Web
- Customizable styling
- Class-based component (for RN legacy compatibility)

---

## 🧩 Example Styles

```jsx
<Accordion
  title="Course Information"
  style={{ borderColor: "#00C853" }}
  titleStyle={{ color: "#00C853" }}
>
  <Text>Instructor: John Doe</Text>
  <Text>Duration: 12 weeks</Text>
</Accordion>
```

---

## 🪪 License
MIT © 2025 [Chain Platform](https://chainplatform.net)

---

## 💖 Support & Donate

If you find this package helpful, consider supporting the development:

| Cryptocurrency | Address |
|----------------|----------|
| **Bitcoin (BTC)** | `17grbSNSEcEybS1nHh4TGYVodBwT16cWtc` |
![alt text](image-1.png)
| **Ethereum (ETH)** | `0xa2fd119a619908d53928e5848b49bf1cc15689d4` |
![alt text](image-2.png)
| **Tron (TRX)** | `TYL8p2PLCLDfq3CgGBp58WdUvvg9zsJ8pd` |
![alt text](image.png)
| **DOGE (DOGE)** | `DDfKN2ys4frNaUkvPKcAdfL6SiVss5Bm19` |
| **USDT (SOLANA)** | `cPUZsb7T9tMfiZFqXbWbRvrUktxgZQXQ2Ni1HiVXgFm` |

Your contribution helps maintain open-source development under the Chain Platform ecosystem 🚀
