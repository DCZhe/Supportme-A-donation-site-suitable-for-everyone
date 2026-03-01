/**
 * Site Configuration File
 * Modify this file to customize your website content. No need to change other files.
 */

const siteConfig = {
    // ========== Basic Info / 基本信息 ==========
    name: "DCZhe",                       // Your display name / 你的名字
    blogName: "DCZhe's Blog",             // Your blog or site name / 博客名称
    blogUrl: "https://link.dczhe.com",     // Your blog URL / 博客链接
    email: "dcze816@gmail.com",           // Your contact email / 联系邮箱
    copyrightYear: "2026",                // Copyright year / 版权年份

    // ========== Avatar & Icons / 头像和图标 ==========
    avatarImage: "assets/DCZhe.png",         // Path to avatar image / 头像图片路径
    favicon: "assets/32314.png",              // Path to favicon / 网站图标路径

    // ========== Donation Links / 捐赠链接 ==========
    paypalUrl: "https://www.paypal.com/paypalme/yourname",  // PayPal donation link / PayPal 捐赠链接

    // ========== Cryptocurrency Addresses / 加密货币地址 ==========
    crypto: {
        btc: {
            lightningAddress: "your@lightning.address"   // Bitcoin Lightning address / 比特币闪电地址
        },
        eth: {
            address: "0x..."                            // Ethereum receiving address / 以太坊收款地址
        },
        usdc: {
            address: "...",                             // USDC receiving address / USDC 收款地址
            network: "Solana"                           // Network: Solana / 网络类型
        },
        usdt: {
            address: "...",                             // USDT receiving address / USDT 收款地址
            network: "TRC20 (TRON)"                     // Network: TRC20 / 网络类型
        }
    },

    // ========== QR Code Images / 二维码图片路径 ==========
    qrCodes: {
        wechat: "assets/wechatqr.jpeg",      // WeChat QR code / 微信收款码
        alipay: "assets/alipay_qr.jpeg",    // Alipay QR code / 支付宝收款码
        btc: "assets/BTCqrcode.jpeg",      // Bitcoin QR code / 比特币收款码
        eth: "assets/ETHqrcode.png",       // Ethereum QR code / 以太坊收款码
        usdc: "assets/USDCqrcode.png",     // USDC QR code / USDC 收款码
        usdt: "assets/USDTqrcode.png"      // USDT QR code / USDT 收款码
    }
};
