const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源'
    },
    hongniu: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源'
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源'
    },
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影'
    },
    youzhi: {
        api: 'http://api.1080zyku.com/inc/api.php/provide/vod',
        name: '优质资源库'
    },

    // ===== 以下统一视为成人 / 点播聚合源 =====
    haiwaikan2: {
        api: 'https://haiwaikan.com/api.php/provide/vod/',
        name: '海外看|点播🪜',
        adult: true
    },
    sanliuling: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360|点播',
        adult: true
    },
    heimuer: {
        api: 'https://www.heimuer.tv/api.php/provide/vod',
        name: '黑木耳|点播',
        adult: true
    },
    citong: {
        api: 'http://ys9.cttv.vip/api.php/provide/vod/',
        name: '刺桐|点播',
        adult: true
    },
    guanwang: {
        api: 'http://gwcms.cttv.vip/api.php/provide/vod/',
        name: '官网|点播',
        adult: true
    },
    yeyu: {
        api: 'https://yyff.540734621.xyz/api.php/provide/vod/',
        name: '业余|点播',
        adult: true
    },
    huaweiba: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧|点播',
        adult: true
    },
    xiaohuangren: {
        api: 'https://iqyi.xiaohuangrentv.com/api.php/provide/vod/',
        name: '小黄人|点播',
        adult: true
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod/',
        name: '牛牛|点播',
        adult: true
    },
    yaya: {
        api: 'https://cj.yayazy.net/api.php/provide/vod/',
        name: '丫丫|点播',
        adult: true
    },
    uku2: {
        api: 'https://api.ukuapi.com/api.php/provide/vod/',
        name: 'U酷|点播',
        adult: true
    },
    haohua1: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华|点播',
        adult: true
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速|点播',
        adult: true
    },
    sijiu: {
        api: 'https://49zyw.com/api.php/provide/vod/',
        name: '四九|点播',
        adult: true
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼|点播',
        adult: true
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: 'ikun|点播',
        adult: true
    },
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡|点播',
        adult: true
    },
    baofeng: {
        api: 'https://bfzyapi.com/api.php/provide/vod/',
        name: '暴风|点播',
        adult: true
    },
    feisu2: {
        api: 'https://www.feisuzyapi.com/api.php/provide/vod/',
        name: '飞速|点播',
        adult: true
    },
    kuaiikan: {
        api: 'https://www.kuaikan-api.com/api.php/provide/vod/',
        name: '快看|点播',
        adult: true
    },
    xiongzhang: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌|点播',
        adult: true
    },
    kuaiyun: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云|点播',
        adult: true
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
