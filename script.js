// ===================================================================
// IMPORTANT: If you want to customize the text on your donation page,
// please modify the translations below. The 'en' section is the default.
// Users will see English or Chinese based on their browser language.
// ===================================================================

const translations = {
    en: {
        // Page title shown in browser tab
        pageTitle: siteConfig.name + " Donate",
        // Main heading on the page
        mainTitle: siteConfig.name,
        // Slogan text below the name
        slogan: "Every bit of kindness illuminates the world of others.",
        // Tooltip when clicking avatar
        avatarTooltip: "Every bit of kindness is lighting up the world of others, thank you for your warm journey",
        // Button titles
        paypalTitle: "PayPal",
        wechatTitle: "WeChat",
        alipayTitle: "Alipay",
        btcTitle: "Bitcoin (Lightning)",
        ethTitle: "Ethereum",
        usdcTitle: "USDC (Solana)",
        usdtTitle: "USDT (TRC20)",
        // Footer text
        copyrightText: "Copyright &copy; " + siteConfig.copyrightYear + " " + siteConfig.name,
        contactMeLink: "Contact Me",
        aboutMeLink: "About Me",
        // "About Me" modal content
        aboutMeModalTitle: "About Me",
        aboutMeModalContent: "I'm " + siteConfig.name + ", the person behind " + siteConfig.blogName + ".<br><br>Bought this domain in 2025 on a whim. Mostly because I didn't want to build anything inside someone else's walls.<br><br>Just writing about tech and whatever else I think is worth putting into words.<br><br>The signal tower is on.<br><br>🔗 <a href='" + siteConfig.blogUrl + "' target='_blank'>My Links</a> · 📩 <a href='mailto:" + siteConfig.email + "'>" + siteConfig.email + "</a> · 💛 <a href='" + window.location.href + "' target='_blank'>Donate</a>",
        // Modal titles for each donation method
        donationThankYouTitle: "Thanks from " + siteConfig.name,
        wechatModalTitle: "WeChat Pay",
        alipayModalTitle: "Alipay",
        btcModalTitle: "Bitcoin (Lightning Network)",
        ethModalTitle: "Ethereum",
        usdcModalTitle: "USDC (Solana)",
        usdtModalTitle: "USDT (TRC20)",
        // Cryptocurrency addresses displayed in modals
        btcAddressText: "Lightning Address: " + siteConfig.crypto.btc.lightningAddress,
        ethAddressText: "Receiving Address: " + siteConfig.crypto.eth.address,
        usdcAddressText: "Receiving Address: " + siteConfig.crypto.usdc.address + "<br><span class='chain-tag'>Network: " + siteConfig.crypto.usdc.network + "</span>",
        usdtAddressText: "Receiving Address: " + siteConfig.crypto.usdt.address + "<br><span class='chain-tag'>Network: " + siteConfig.crypto.usdt.network + "</span>"
    },
    zh: {
        // 浏览器标签页显示的标题
        pageTitle: siteConfig.name + " 捐赠",
        // 页面主标题
        mainTitle: siteConfig.name,
        // 座右铭
        slogan: "点点微光,终成星河",
        // 头像点击后的提示
        avatarTooltip: "每一份善意都在点亮他人的世界，感谢您的温暖前行",
        // 按钮标题
        paypalTitle: "PayPal",
        wechatTitle: "微信",
        alipayTitle: "支付宝",
        btcTitle: "比特币（闪电网络）",
        ethTitle: "以太坊",
        usdcTitle: "USDC（Solana）",
        usdtTitle: "USDT（TRC20）",
        // 页脚文字
        copyrightText: "Copyright &copy; " + siteConfig.copyrightYear + " " + siteConfig.name,
        contactMeLink: "联系我",
        aboutMeLink: "关于我",
        // "关于我"弹窗内容
        aboutMeModalTitle: "关于我",
        aboutMeModalContent: "我是 " + siteConfig.name + "，" + siteConfig.blogName + " 的运营者。<br><br>2025 年买下这个域名的时候，我没想太多。就是不想在别人的地盘上说话。<br><br>写技术，写人，偶尔写一些没什么用但我觉得重要的东西。<br><br>信号塔已经通电。<br><br>🔗 <a href='" + siteConfig.blogUrl + "' target='_blank'>我的社交媒体</a> · 📩 <a href='mailto:" + siteConfig.email + "'>" + siteConfig.email + "</a> · 💛 <a href='" + window.location.href + "' target='_blank'>捐赠我</a>",
        // 各捐赠方式的弹窗标题
        donationThankYouTitle: "来自" + siteConfig.name + "的感谢",
        wechatModalTitle: "微信支付",
        alipayModalTitle: "支付宝",
        btcModalTitle: "比特币（闪电网络）",
        ethModalTitle: "以太坊",
        usdcModalTitle: "USDC（Solana）",
        usdtModalTitle: "USDT（TRC20）",
        // 弹窗中显示的加密货币地址
        btcAddressText: "闪电地址: " + siteConfig.crypto.btc.lightningAddress,
        ethAddressText: "收款地址: " + siteConfig.crypto.eth.address,
        usdcAddressText: "收款地址: " + siteConfig.crypto.usdc.address + "<br><span class='chain-tag'>网络: " + siteConfig.crypto.usdc.network + "</span>",
        usdtAddressText: "收款地址: " + siteConfig.crypto.usdt.address + "<br><span class='chain-tag'>网络: " + siteConfig.crypto.usdt.network + "</span>"
    }
};

// 初始化站点基本配置
function initSiteConfig() {
    // 设置头像
    document.getElementById('avatar-img').src = siteConfig.avatarImage;
    document.getElementById('avatar-img').alt = siteConfig.name + " 头像";

    // 设置 favicon
    document.getElementById('favicon').href = siteConfig.favicon;

    // 设置博客链接
    document.getElementById('blog-link').href = siteConfig.blogUrl;
    document.getElementById('blog-link').textContent = siteConfig.blogName;

    // 设置联系邮箱
    document.getElementById('contact-me-link').href = "mailto:" + siteConfig.email;
}

function updatePageLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.getElementById('page-title').textContent = translations[lang].pageTitle;
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('slogan').textContent = translations[lang].slogan;
    document.getElementById('avatar-tooltip').textContent = translations[lang].avatarTooltip;

    // Update button titles
    document.getElementById('paypal-btn').title = translations[lang].paypalTitle;
    const wechatBtn = document.getElementById('wechat-btn');
    wechatBtn.title = translations[lang].wechatTitle;
    wechatBtn.querySelector('img').alt = translations[lang].wechatTitle;

    const alipayBtn = document.getElementById('alipay-btn');
    alipayBtn.title = translations[lang].alipayTitle;
    alipayBtn.querySelector('img').alt = translations[lang].alipayTitle;

    const btcBtn = document.getElementById('btc-btn');
    btcBtn.title = translations[lang].btcTitle;
    btcBtn.querySelector('img').alt = translations[lang].btcTitle;

    const ethBtn = document.getElementById('eth-btn');
    ethBtn.title = translations[lang].ethTitle;
    ethBtn.querySelector('img').alt = translations[lang].ethTitle;

    const usdcBtn = document.getElementById('usdc-btn');
    usdcBtn.title = translations[lang].usdcTitle;
    usdcBtn.querySelector('img').alt = translations[lang].usdcTitle;

    const usdtBtn = document.getElementById('usdt-btn');
    usdtBtn.title = translations[lang].usdtTitle;
    usdtBtn.querySelector('img').alt = translations[lang].usdtTitle;

    document.getElementById('copyright-text').innerHTML = translations[lang].copyrightText;
    document.getElementById('contact-me-link').textContent = translations[lang].contactMeLink;
    document.getElementById('about-me-link').textContent = translations[lang].aboutMeLink;
}

function setLanguageByBrowser() {
    const browserLang = navigator.language.split('-')[0];
    const lang = browserLang === 'zh' ? 'zh' : 'en';
    console.log('Browser language:', browserLang, 'Using:', lang);
    updatePageLanguage(lang);
}

document.addEventListener('DOMContentLoaded', () => {
    initSiteConfig(); // 初始化站点配置
    setLanguageByBrowser(); // Set language based on browser language
    const paypalBtn = document.getElementById('paypal-btn');
    const wechatBtn = document.getElementById('wechat-btn');
    const alipayBtn = document.getElementById('alipay-btn');
    const btcBtn = document.getElementById('btc-btn');
    const ethBtn = document.getElementById('eth-btn');
    const usdcBtn = document.getElementById('usdc-btn');
    const usdtBtn = document.getElementById('usdt-btn');
    const aboutMeLink = document.getElementById('about-me-link');

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const modalCloseBtn = document.querySelector('.close-btn'); // Corrected selector
    const modalQrImage = document.getElementById('modal-qr-image');
    const avatarImg = document.querySelector('.avatar');
    const avatarContainer = document.querySelector('.avatar-container'); // Get the avatar container

    // PayPal 按钮
    paypalBtn.addEventListener('click', () => {
        window.open(siteConfig.paypalUrl, '_blank');
    });

    // 显示弹窗函数
    // 显示弹窗函数
function showModal(title, qrImagePath, textContent) {
        modalTitle.textContent = title;
        if (qrImagePath) {
            modalQrImage.src = qrImagePath;
            modalQrImage.style.display = 'block';
        } else {
            modalQrImage.style.display = 'none';
        }
        if (textContent) {
            modalText.innerHTML = textContent; // Use innerHTML to allow for HTML content
            modalText.style.display = 'block';
        } else {
            modalText.style.display = 'none';
        }
        modal.style.display = 'flex'; // Changed to flex for better centering if needed
    }

    // 关闭弹窗
    modalCloseBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 点击弹窗外部关闭
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 微信按钮
    wechatBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].wechatModalTitle, siteConfig.qrCodes.wechat);
    });

    // 支付宝按钮
    alipayBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].alipayModalTitle, siteConfig.qrCodes.alipay);
    });

    // 比特币按钮（闪电网络）
    btcBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].btcModalTitle, siteConfig.qrCodes.btc, translations[currentLang].btcAddressText);
    });

    // 以太坊按钮
    ethBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].ethModalTitle, siteConfig.qrCodes.eth, translations[currentLang].ethAddressText);
    });

    // USDC按钮（Solana）
    usdcBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].usdcModalTitle, siteConfig.qrCodes.usdc, translations[currentLang].usdcAddressText);
    });

    // USDT按钮（TRC20）
    usdtBtn.addEventListener('click', () => {
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].usdtModalTitle, siteConfig.qrCodes.usdt, translations[currentLang].usdtAddressText);
    });

    // 关于我链接
    aboutMeLink.addEventListener('click', (e) => {
        e.preventDefault(); // 阻止默认的锚点跳转行为
        const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
        showModal(translations[currentLang].aboutMeModalTitle, null, translations[currentLang].aboutMeModalContent);
    });

    // 点击头像事件，切换提示气泡显示
    if (avatarContainer) {
        avatarImg.addEventListener('click', (event) => {
            event.stopPropagation(); // 防止事件冒泡到 window 点击事件
            avatarContainer.classList.toggle('active');
            // Update tooltip text based on current language if needed, or ensure it's set initially
            const currentLang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
            document.getElementById('avatar-tooltip').textContent = translations[currentLang].avatarTooltip;
        });

        // 点击页面其他地方隐藏提示气泡
        window.addEventListener('click', () => {
            if (avatarContainer.classList.contains('active')) {
                avatarContainer.classList.remove('active');
            }
        });

        // 点击提示气泡自身不隐藏（如果需要点击气泡内部链接等）
        const avatarTooltip = document.getElementById('avatar-tooltip');
        if (avatarTooltip) {
            avatarTooltip.addEventListener('click', (event) => {
                event.stopPropagation(); // 防止点击气泡导致其隐藏
            });
        }
    }

});
