# SupportMe ⭐

[![GitHub stars](https://img.shields.io/github/stars/DCZhe/Supportme-A-donation-site-suitable-for-everyone?style=social)](https://github.com/DCZhe/Supportme-A-donation-site-suitable-for-everyone/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/DCZhe/Supportme-A-donation-site-suitable-for-everyone?style=social)](https://github.com/DCZhe/Supportme-A-donation-site-suitable-for-everyone/network)
[![License](https://img.shields.io/github/license/DCZhe/Supportme-A-donation-site-suitable-for-everyone)](LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-brightgreen)](https://pages.github.com)

一个简洁的个人捐赠页面，支持多种捐赠方式 💰

[English Version](#english) | [中文版](#中文)

---

## 中文 {#中文}

### 功能特性 ✨

- 🌍 中英文双语支持（自动根据浏览器语言切换）
- 💳 支持多种捐赠方式：
  - PayPal
  - 微信支付
  - 支付宝
  - 比特币（闪电网络）
  - 以太坊
  - USDC (Solana)
  - USDT (TRC20)
- 📱 响应式设计，适配各种设备
- ⚡ 纯静态页面，无需后端服务器

### 快速开始 🚀

#### 1. 克隆项目

```bash
git clone https://github.com/DCZhe/Supportme-A-donation-site-suitable-for-everyone.git
cd supportme
```

#### 2. 配置修改 ⚙️

编辑 `config.js` 文件，修改以下配置：

```javascript
const siteConfig = {
    // 基本信息
    name: "你的名字",
    blogName: "你的博客名称",
    blogUrl: "https://your-blog.com/",
    email: "your@email.com",
    copyrightYear: "2026",

    // 头像和图标
    avatarImage: "assets/your-avatar.png",
    favicon: "assets/your-favicon.png",

    // PayPal
    paypalUrl: "https://www.paypal.com/paypalme/yourname",

    // 加密货币地址
    crypto: {
        btc: { lightningAddress: "your@lightning.address" },
        eth: { address: "0x..." },
        usdc: { address: "...", network: "Solana" },
        usdt: { address: "...", network: "TRC20 (TRON)" }
    },

    // 二维码图片路径
    qrCodes: {
        wechat: "assets/wechatqr.jpeg",
        alipay: "assets/alipay_qr.jpeg",
        btc: "assets/BTCqrcode.jpeg",
        eth: "assets/ETHqrcode.png",
        usdc: "assets/USDCqrcode.png",
        usdt: "assets/USDTqrcode.png"
    }
};
```

#### 3. 替换二维码图片 🖼️

在 `assets/` 目录下替换以下占位图片：
- `wechatqr.jpeg` - 微信收款码
- `alipay_qr.jpeg` - 支付宝收款码
- `BTCqrcode.jpeg` - 比特币收款码
- `ETHqrcode.png` - 以太坊收款码
- `USDCqrcode.png` - USDC 收款码
- `USDTqrcode.png` - USDT 收款码

#### 4. 部署 🌐

由于是纯静态页面，你可以直接部署到任何静态托管服务：

| 服务 | 说明 |
|------|------|
| GitHub Pages | 免费，适合 GitHub 用户 |
| Vercel | 免费，速度快 |
| Netlify | 免费，功能丰富 |
| Cloudflare Pages | 免费，全球 CDN |

### 项目结构 📁

```
.
├── index.html      # 主页面
├── config.js       # 配置文件 ⚙️
├── script.js       # 交互逻辑
├── style.css       # 样式文件
├── README.md       # 说明文档
└── assets/         # 静态资源目录
    ├── *.png       # 图标和图片
    └── *.jpeg      # 二维码图片
```

---

🔗 [我的社交媒体](https://link.dczhe.com) · 📩 [dcze816@gmail.com](mailto:dcze816@gmail.com) · 💛 [捐赠我](https://donate.dczhe.com)

[英文版](#english) | [返回顶部](#supportme-)

---

## English {#english}

### Features ✨

- 🌍 Bilingual support (auto-switch based on browser language)
- 💳 Multiple donation methods:
  - PayPal
  - WeChat Pay
  - Alipay
  - Bitcoin (Lightning)
  - Ethereum
  - USDC (Solana)
  - USDT (TRC20)
- 📱 Responsive design for all devices
- ⚡ Pure static page, no backend required

### Quick Start 🚀

#### 1. Clone the project

```bash
git clone https://github.com/DCZhe/Supportme-A-donation-site-suitable-for-everyone.git
cd supportme
```

#### 2. Configuration ⚙️

Edit the `config.js` file to customize your site:

```javascript
const siteConfig = {
    // Basic Info
    name: "Your Name",
    blogName: "Your Blog Name",
    blogUrl: "https://your-blog.com/",
    email: "your@email.com",
    copyrightYear: "2026",

    // Avatar & Icons
    avatarImage: "assets/your-avatar.png",
    favicon: "assets/your-favicon.png",

    // PayPal
    paypalUrl: "https://www.paypal.com/paypalme/yourname",

    // Cryptocurrency Addresses
    crypto: {
        btc: { lightningAddress: "your@lightning.address" },
        eth: { address: "0x..." },
        usdc: { address: "...", network: "Solana" },
        usdt: { address: "...", network: "TRC20 (TRON)" }
    },

    // QR Code Images
    qrCodes: {
        wechat: "assets/wechatqr.jpeg",
        alipay: "assets/alipay_qr.jpeg",
        btc: "assets/BTCqrcode.jpeg",
        eth: "assets/ETHqrcode.png",
        usdc: "assets/USDCqrcode.png",
        usdt: "assets/USDTqrcode.png"
    }
};
```

#### 3. Replace QR Code Images 🖼️

Replace the placeholder images in `assets/` directory:
- `wechatqr.jpeg` - WeChat QR code
- `alipay_qr.jpeg` - Alipay QR code
- `BTCqrcode.jpeg` - Bitcoin QR code
- `ETHqrcode.png` - Ethereum QR code
- `USDCqrcode.png` - USDC QR code
- `USDTqrcode.png` - USDT QR code

#### 4. Deploy 🌐

Since it's a pure static page, you can deploy to any static hosting service:

| Service | Description |
|---------|-------------|
| GitHub Pages | Free, great for GitHub users |
| Vercel | Free, fast |
| Netlify | Free, feature-rich |
| Cloudflare Pages | Free, global CDN |

### Project Structure 📁

```
.
├── index.html      # Main page
├── config.js       # Configuration file ⚙️
├── script.js       # JavaScript logic
├── style.css       # Stylesheet
├── README.md       # This file
└── assets/         # Static assets
    ├── *.png       # Icons
    └── *.jpeg      # QR codes
```

---

🔗 [My Links](https://link.dczhe.com) · 📩 [dcze816@gmail.com](mailto:dcze816@gmail.com) · 💛 [Donate](https://donate.dczhe.com)

[中文版](#中文) | [Back to Top](#supportme-)

---

## License / 许可证 📄

MIT License
