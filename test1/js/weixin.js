var shareURL = shareURL || location.href;
var shareTitle = shareTitle || '厂庆60年优惠接力 购宝骏汽车最高享直补5500元' ;
var shareDesc = shareDesc || '';
var shareImg = shareImg || UrlUtils.getBase() + '/img/share.jpg';
var shareObj={
    title: shareTitle,
    desc: shareDesc, // 分享描述
    link: shareURL,
    imgUrl: shareImg,
    success: function () {
        //alert('已分享');
    },
    complete: function () {
        //alert('已完成');
    },
    cancel: function () {
        //alert('已取消');
    }
};

(function () {

    console.log(shareURL);
    console.log(shareTitle);
    console.log(shareDesc);
    console.log(shareImg);
    //
    $.ajax(
        {
            url: '//event.toutiaocloud.com/API/weixin/getSignPackage.php',
            type: "GET",
            dataType: 'jsonp',
            jsonp: 'wxJSONP'
        })
        .then(function (json) {
            console.log("getWxshareConfig")
            /* 微信API */
            wx.config({
                debug: false,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
                appId: json.appId,
                timestamp: json.timestamp,
                nonceStr: json.nonceStr,
                signature: json.signature,
                //rawString: json.rawString
            });
            wx.ready(function () { // 在这里调用 API
                // 微信分享
                shareToWx();

                function shareToWx() {
                    // 分享给好友
                    wx.onMenuShareAppMessage(shareObj);

                    // 分享到朋友圈
                    wx.onMenuShareTimeline(shareObj);
                }
            });

        })
})()