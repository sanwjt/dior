var shareData,scrollDirection = "left",scrollPro = 0,wrap = $('.main'),ww = window.innerWidth,wh = window.innerHeight,shayuPlay = false,loader;
var imgArr = [

    "img/part1/bg.png?v=1",
    "img/part1/gugong.png",
    "img/part1/wu1.png",
    "img/part1/wu2.png",
    "img/part1/text1.png",
    "img/part1/wu3.png",
    "img/part1/wu4.png",
    "img/part1/wu5.png",
    "img/part1/text2.png", 
    // "img/part1/wu4.png",
    "img/part1/cloud1.png", 
    "img/part1/cloud2.png", 
    "img/part1/cloud3.png", 
    "img/part1/sun.png",
    "img/part1/flower.png",
    "img/part2/mountain1.png",
    "img/part2/mountain2.png",
    "img/part2/bigsun.png",
    "img/part2/land.png",
    "img/part2/bird1.png",
    "img/part2/bird2.png",
    "img/part2/bird3.png",
    "img/part2/bird4.png",
    "img/part3/sailing.png",
    "img/part3/text3.png",
    "img/part3/ship.png",
    "img/part4/birdfly1.png",
    "img/part4/country1.png",
    "img/part4/house2.png",
    "img/part4/house3.png",
    "img/part4/mountains.png",
    "img/part4/meihua.png",
    "img/part5/timeang.png",
    "img/part4/yumao.png",
    "img/part5/text4.png",
    "img/part5/chang.png",
    "img/part5/zhuzi.png",
    "img/part5/men.png",
    "img/part6/liushengji.png",
    "img/part6/denglong1.png",
    "img/part5/book1997.png",
    "img/part5/yellowdenglong.png",
    "img/part5/bluedenglong.png",
    "img/part5/reddenglong.png",
    "img/part5/whitedenglong.png",
    "img/part5/cloudzu.png",
    "img/part6/bigtree.png",
    "img/part6/leves1.png",
    "img/part6/trees.png",
    "img/part6/text5.png",
    "img/part6/swallow1.png",
    "img/part6/swallow2.png",
    "img/part6/swallow3.png",
    "img/part6/peoqin.png",
    "img/part6/peo1.png",
    "img/part6/peo2.png",
    "img/part6/peo3.png",
    "img/part6/peo4.png",
    "img/part6/peo5.png",
    "img/part6/ɡ2.png",
    "img/part6/ɡ3.png",
    "img/part6/zhuzi1.png",
    "img/part6/zhuzi2.png",
    "img/part6/ɡ.png",
    "img/part6/zhuzi7.png",
    "img/part6/zhuzi3.png",
    "img/part6/zhuzi5.png",
    "img/part6/zhuzi4.png",
    "img/part6/zhuzi6.png",
    "img/part6/land2.png",
    "img/part7/door1.png",
    "img/part7/door2.png",
    "img/part7/door3.png",
    "img/part7/book2.png",
    "img/part8/chime.png",
    "img/part8/dancer1.png",
    "img/part8/dancer2.png",
    "img/part8/text6.png",
    "img/part8/cloud8cer3.png",
    "img/part8/petal1.png",
    "img/part8/petal2.png"

]

// 横屏内容长度
var lastWidth = $(window).height();
// var contentLength = 47740+1400+lastWidth;
var contentLength = lastWidth;
$(document).bind("touchmove",function(e){
    e.preventDefault();
});
// 横竖屏旋转
function changeScene(){
    iniW = 1040,
    iniH = 640,
    tarW = 0,
    tarH = 0;
    ww = $(window).width();
    wh = $(window).height();


// if("onorientationchange" in window){
    if(netease.ua.weixin){
        if(window.orientation === 90 || window.orientation === -90){
            // 横屏 浏览器的宽度大于高度
            h();
        }
        if(window.orientation === 180 || window.orientation === 0){
            // 竖屏 浏览器的宽度小于高度
            v();
        }
    }else{
        if(ww < wh){
            // 竖屏
            v();
        }else{
            // 横屏
            h();
        }
    }
}

// 横屏
function h(){
    setTimeout(function(){
        ww = $(window).width();
        wh = $(window).height();
        tarW = ww;
        tarH = tarW*iniH/iniW;

        wrap.css({
            'left':"50%",
            'top':'50%',
            'width':ww + 'px',
            'height':wh + 'px',
            'transform':'translate3d(-50%,-50%,0)',
            '-webkit-transform':'translate3d(-50%,-50%,0)'
        });
        if(!(typeof scroller == "undefined")){
            app.renderer.resize(ww,wh);
            setTimeout(function(){
                scrollDirection = "left";
                lastWidth = ww;
                contentLength = lastWidth;
                scroller.setDimensions(app.view.width, app.view.height, contentLength ,app.view.height);
                scroller.scrollTo(scrollPro,0,false);
                // 初始页提示
            },200);
        }
    },300);
}
// 竖屏
function v(){
    screenOrientation = "horizontal";
    setTimeout(function(){
        ww = $(window).width();
        wh = $(window).height();
        tarW = wh;
        tarH = tarW*iniH/iniW;
        wrap.css({
            'left':"50%",
            'top':'50%',
            'width':wh + 'px',
            'height':ww + 'px',
            'transform':'translate3d(-50%,-50%,0) rotate(90deg)',
            '-webkit-transform':'translate3d(-50%,-50%,0) rotate(90deg)'
        });
        if(!(typeof scroller == "undefined")){
            app.renderer.resize(wh,ww);
            setTimeout(function(){
                scrollDirection = "top";
                lastWidth = wh;
                contentLength = 50000+lastWidth;
                scroller.setDimensions(app.view.width, app.view.height, app.view.height, contentLength);
                scroller.scrollTo(0,scrollPro,false);
                // 初始页提示
            },200);
        }
    },300);
}

// 创建sprite对象
function createSprite(name,opt){
    var newSprite = new PIXI.Sprite.fromImage(name);
    if (opt) {
        _.forIn(opt, function(value, key) {
            newSprite[key] = value;
        });
    }
    return newSprite;
}

function pixiFn(){
    app = new PIXI.Application(5000000, 640,{
        backgroundColor: '000'
    });
    $(".main").append(app.view);
    app.stage.displayList = new PIXI.DisplayList();
    var index1 = new PIXI.DisplayGroup(1, false);
    // 预加载
    loader = new PIXI.loaders.Loader();
    loader.add(imgArr)
        .onProgress.add(function(e){
        $(".loading-num").text(Math.round(e.progress) + '%');
    });
    container = new PIXI.Container();
    container.interactive = true;

    loader.load(function(loader){
        // 第一部分
        part1 = new PIXI.Container();
        part1.x = 0;
        part1.y = 0;
        part1.width = 18000;

        // 背景图
        // var countBg = new PIXI.Container();
        // countBg.x = 0;
        // countBg.y = 0;
        // countBg.width =  app.view.width;
        // countBg.height =  app.view.height;

        //   // 背景
        // activityBg = createSprite("img/part1/bg.png",{
        //     x:0,
        //     y:0,
        // });
        
        // activityBg.width =  12000;
        // activityBg.height =  app.view.height;
        // countBg.addChild(activityBg);

        var countBg = PIXI.Texture.fromImage('img/part1/bg.png'); //创建纹理
        var tilingSprite = new PIXI.extras.TilingSprite(
            countBg,
            app.renderer.width,
            app.renderer.height
        ); //创建瓷砖效果显示精灵



        //  // 引子
         var part1ClouCover = new PIXI.Container();
         part1ClouCover.x = 0;
         part1ClouCover.y = 0;


        // 故宫
        part1gugong = createSprite("img/part1/gugong.png",{
            x:0,
            y:165,
        });
        // part1gugong.pivot.x = 354;
        // part1gugong.pivot.y = 27;

        // 雾1
        part1wu1 = createSprite("img/part1/wu1.png",{
            x:0,
            y:250,
        });
        
        // 雾2
        part1wu2 = createSprite("img/part1/wu2.png",{
            x:620,
            y:0,
        });

        // 你知道吗
        part1text1 = createSprite("img/part1/text1.png",{
            x:1260,
            y:290,
        });
        part1text1.alpha=0;
        
        // 雾3
        part1wu3 = createSprite("img/part1/wu3.png",{
            x:1510,
            y:520,
        });

        // 太阳1
        part1sun1 = createSprite("img/part1/sun.png",{
            x:2143,
            y:535,
        });
        part1sun1.alpha=0;
     
        // 中国风
        part1text2 = createSprite("img/part1/text2.png",{
            x:2210,
            y:306,
        });
        

         // 云1
        part1cloud1 = createSprite("img/part1/cloud2.png",{
            x:1836-200,
            y:55,
        });

        // 云2
        part1cloud2 = createSprite("img/part1/cloud1.png",{
            x:2472,
            y:-100,
        });

        // 太阳2
        part1sun2 = createSprite("img/part1/sun.png",{
          x:3236,
          y:-150,
        });

        // 云3
        part1cloud3 = createSprite("img/part1/cloud3.png",{
            x:3154,
            y:5,
        });
           // 雾4
       part1wu4 = createSprite("img/part1/wu4.png",{
            x:2942,
            y:327,

        });
        part1wu4.alpha=0;


        part1ClouCover.addChild(part1wu1,part1gugong,part1wu2,part1wu3,part1text1,part1cloud1,part1cloud2,part1sun1,part1text2,part1cloud3,part1wu4);
        
        // 手散
        var part1HandMove = new PIXI.Container();
        part1HandMove.x=3700+92;
        part1HandMove.y=0;

        // 荷花
         part1flower = createSprite("img/part1/flower.png",{
            x:-200,
            y:0,
          });
          part1flower.alpha=0;

        // 手1
        part1shou1 = createSprite("img/part1/shou.png",{
          x:-92,
          y:320,
        });
        part1shou1.pivot.x = -5;
        part1shou1.pivot.y = 0;

        // 伞1
        part1san = createSprite("img/part1/san.png",{
          x:0,
          y:-150,
        });

        // 假山1
        part1mountain1 = createSprite("img/part2/mountain1.png",{
            x:1350,
            y:410,
          });
        //   雾5
        part1wu5 = createSprite("img/part1/wu5.png",{
            x:-350,
            y:0,
          });
          part1wu5.alpha=0;
        // 伞2
        part1san2 = createSprite("img/part1/san.png",{
            x:1498,
            y:190,
          });

        // 伞
        part1shouCounter = new PIXI.Container();
        part1shouCounter.x=0;
        part1shouCounter.y=0;
        part1shouCounter.addChild(part1san,part1shou1)
        part1HandMove.addChild(part1flower,part1mountain1,part1shouCounter,part1wu5)
        // 第二部分
        // 仙鹤群和朝阳
        var part1BirdSun = new PIXI.Container();
        part1BirdSun.x=5900;
        part1BirdSun.y=0;

        // 大太阳
        part1bigsun = createSprite("img/part2/bigsun.png",{
            x:88,
            y:-199,
          });

        // 湿地
        part1land = createSprite("img/part2/land.png",{
            x:-1280,
            y:374,
          });
        
        // 仙鹤1
        part1bird1 = createSprite("img/part2/bird1.png",{
            x:353,
            y:84,
          });
        part1bird1.alpha=0;

        // 仙鹤2
        part1bird2 = createSprite("img/part2/bird2.png",{
            x:-75,
            y:200,
          });
          part1bird2.alpha=0;
        // 仙鹤3
        part1bird3 = createSprite("img/part2/bird3.png",{
            x:400,
            y:94,
          });
        part1bird3.alpha=0;

        // 仙鹤4
        part1bird4 = createSprite("img/part2/bird4.png",{
            x:910,
            y:42,
          });
          part1bird4.alpha = 0;  
        // 假山2
        part1mountain2 = createSprite("img/part2/mountain2.png",{
            x:1146,
            y:404+100,
        });

        part1mountain2.alpha=0;
        
        part1BirdSun.addChild(part1bigsun,part1land,part1bird1,part1bird2,part1bird3,part1bird4,part1mountain2)

        // 第三部分
        // 帆船组
        part1Sailing = new PIXI.Container();
        part1Sailing.x = 7860;
        part1Sailing.y = 0;

        var part1sailing1 = createSprite("img/part3/sailing.png",{
            x:40,
            y:87,
           alpha:0


        });
        part1sailing1.scale.set(0.1,0.1);

        var part1sailing2 = createSprite("img/part3/sailing.png",{
            x:67,
            y:125,
            alpha:0
        });
        part1sailing2.scale.set(0.2,0.2);
        
        var part1sailing3 = createSprite("img/part3/sailing.png",{
            x:160,
            y:167,
            alpha:0
        });
        part1sailing3.scale.set(0.4,0.4);

        var part1sailing4 = createSprite("img/part3/sailing.png",{
            x:273,
            y:170,
            alpha:0
        });
        part1sailing4.scale.set(0.6,0.6);
        
        var part1sailing5 = createSprite("img/part3/sailing.png",{
            x:488,
            y:218,
            alpha:0
        });
        part1sailing5.scale.set(0.8,0.8);


        var part1sailing6 = createSprite("img/part3/sailing.png",{
            x:775,
            y:236,
            alpha:0
        });
        part1sailing6.scale.set(1.0,1.0);
        
        part1Sailing.addChild(part1sailing1,part1sailing2,part1sailing3,part1sailing4,part1sailing5,part1sailing6);

        // 小船组
        part1Ship = new PIXI.Container();
        part1Ship.x = 8900;
        part1Ship.y = -100;

        var part1ship1 = createSprite("img/part3/ship.png",{
            x:300,
            y:168,
           alpha:0


        });
        part1ship1.scale.set(0.2,0.2);

        var part1ship2 = createSprite("img/part3/ship.png",{
            x:232,
            y:204,
            alpha:0
        });
        part1ship2.scale.set(0.4,0.4);
        
        var part1ship3 = createSprite("img/part3/ship.png",{
            x:90,
            y:236,
            alpha:0
        });
        part1ship3.scale.set(0.6,0.6);

        var part1ship4 = createSprite("img/part3/ship.png",{
            x:-100,
            y:280,
            alpha:0
        });
        part1ship4.scale.set(0.8,0.8);
        
        var part1ship5 = createSprite("img/part3/ship.png",{
            x:-300,
            y:368,
            alpha:0
        });
        part1ship5.scale.set(1,1);
        
        part1Ship.addChild(part1ship5,part1ship4,part1ship3,part1ship2,part1ship1);

        // 第四部分
        // 仙鹤5飞
        var part1BirdFly = new PIXI.Container();
        part1BirdFly.x = 9650;
        part1BirdFly.y = 0;

        part1birdfly1 = createSprite("img/part4/birdfly1.png",{
            x:0,
            y:-300,
          });
        // //   房屋1
        part1house1 = createSprite("img/part4/house1.png",{
            x:100,
            y:80,
        });
        // 房屋3
        part1house3 = createSprite("img/part4/house3.png",{
            x:900,
            y:270,
        });
        // // 村庄背景
        part1country1 = createSprite("img/part4/country1.png",{
            x:200,
            y:0,
        });
        part1country1.alpha=0;

        // 真正中国风，历久弥新
        part1text3 = createSprite("img/part4/text3.png",{
            x:2000,
            y:250,
        });

        // 羽毛1
        part1yumao1 = createSprite("img/part4/yumao.png",{
            x:2800,
            y:200,
        });

        // 羽毛2
        part1yumao2 = createSprite("img/part4/yumao.png",{
            x:5300,
            y:340,
        });
   
        // 房屋2
        part1house2 = createSprite("img/part4/house2.png",{
            x:3000,
            y:340,
        });

        // 仙鹤5停
        part1birdfly2 = createSprite("img/part4/birdfly1.png",{
            x:3480,
            y:200,
        });
        part1birdfly2.scale.set(0.6,0.6);
        part1birdfly2.scale.set(0.6,0.6);


        // 群山1
        part1mountains = createSprite("img/part4/mountains.png",{
            x:4000,
            y:240+50,
        });
        part1mountains.alpha = 0;

        // 梅花
        part1meihua= createSprite("img/part4/meihua.png",{
            x:4000,
            y:0,
        });
        
        // 时间隧道
        timerCount = new PIXI.Container();
        timerCount.x = 16500;
        timerCount.y = 0;

        timerOuter  = new PIXI.Container();
        timerOuter.x = 0;
        timerOuter.y = 0;
        timerOuter.width = 1140;
        timerOuter.height = 640;

        // 时光机
        timerang= createSprite("img/part5/timeang.png",{
          x:570,
          y:320,
        });
        timerang.pivot.x=592;
        timerang.pivot.y=606;
        timerang.scale.x = 0.4;
        timerang.scale.y = 0.4;
        timerang.alpha = 1;
        // timerang.rotation=4;
        // 羽毛
        yumao= createSprite("img/part5/yumao.png",{
          x:570,
          y:320,
        });
        yumao.pivot.x = 780;
        yumao.pivot.y = 780;
        yumao.rotation = -0.4;

        timerOuter.addChild(timerang,yumao)
        // 仙鹤6
        part1birdfly3= createSprite("img/part5/birdfly.png",{
            x:5000,
            y:240,
        });

        // 文本4纵使
        part1text4= createSprite("img/part5/text4.png",{
            x:5500,
            y:240,
        });

        timerCount.addChild(timerOuter)
        // "img/part5/chang.png",
        // 唱片
        changCount  = new PIXI.Container();
        changCount.x = 18500;
        changCount.y = 0;
        chang= createSprite("img/part5/chang.png",{
          x:570,
          y:320,
        });
        chang.pivot.x = 689;
        chang.pivot.y = 689;
        changCount.addChild(chang)

        // 时光机后的内容
        // 第五部分
        part5 = new PIXI.Container();
        part5.x = 20000;
        part5.y = 0;


        // 柱子逐渐显示
        part5pillars=new PIXI.Container();
        part5pillars.x = 1100;
        part5pillars.y = 150;

        var part5zhuzi1 = createSprite("img/part5/zhuzi.png",{
            x:300,
            y:150,
           alpha:0,
        });
        part5zhuzi1.scale.set(0.2,0.2);

        var part5zhuzi2 = createSprite("img/part5/zhuzi.png",{
            x:400,
            y:120,
            alpha:0,
        });
        part5zhuzi2.scale.set(0.4,0.4);
        
        var part5zhuzi3 = createSprite("img/part5/zhuzi.png",{
            x:500,
            y:100,
            alpha:0
        });
        part5zhuzi3.scale.set(0.6,0.6);

        var part5zhuzi4 = createSprite("img/part5/zhuzi.png",{
            x:600,
            y:80,
            alpha:0
        });
        part5zhuzi4.scale.set(0.8,0.8);
        
        var part5zhuzi5 = createSprite("img/part5/zhuzi.png",{
            x:700,
            y:60,
            alpha:0
        });
        part5zhuzi5.scale.set(1,1);

            
        var part5zhuzi6 = createSprite("img/part5/zhuzi.png",{
            x:800,
            y:60,
            alpha:0
        });
        part5zhuzi6.scale.set(0.8,0.8);
        
        var part5zhuzi7 = createSprite("img/part5/zhuzi.png",{
            x:900,
            y:80,
            alpha:0
        });
        part5zhuzi7.scale.set(0.6,0.6);

        var part5zhuzi8 = createSprite("img/part5/zhuzi.png",{
            x:1000,
            y:100,
            alpha:0
        });
        part5zhuzi8.scale.set(0.4,0.4);

        var part5zhuzi9 = createSprite("img/part5/zhuzi.png",{
            x:1100,
            y:120,
            alpha:0
        });
        part5zhuzi9.scale.set(0.6,0.6);

        var part5zhuzi10 = createSprite("img/part5/zhuzi.png",{
            x:1200,
            y:100,
            alpha:0
        });
        part5zhuzi10.scale.set(0.8,0.8);

        var part5zhuzi11 = createSprite("img/part5/zhuzi.png",{
            x:1300,
            y:80,
            alpha:0
        });
        part5zhuzi11.scale.set(1,1);

        var part5zhuzi12 = createSprite("img/part5/zhuzi.png",{
            x:1400,
            y:60,
            alpha:0
        });
        part5zhuzi12.scale.set(0.8,0.8);

        var part5zhuzi13 = createSprite("img/part5/zhuzi.png",{
            x:1500,
            y:40,
            alpha:0
        });
        part5zhuzi13.scale.set(0.6,0.6);

        // 模糊的灯笼
        part5denglonghu= createSprite("img/part6/denglong1.png",{
            x:1900,
            y:0,
        });

        // 夜上海拱门
        part5men= createSprite("img/part5/men.png",{
            x:2700,
            y:0,
        });

        // 1997书
        part5book= createSprite("img/part5/book1997.png",{
            x:3500,
            y:100,
        });
        part5book.alpha = 0;

        // 留声机
        part5liushengji= createSprite("img/part6/liushengji.png",{
            x:600,
            y:250,
        });
        part5liushengji.alpha = 0;
        
        // 小伞1
        part5smallsan= createSprite("img/part5/smallsan.png",{
            x:3300,
            y:400,
        });

        // 中伞1
        part5midsan= createSprite("img/part5/midsan.png",{
            x:3800,
            y:330,
        });
        
        // 三个灯笼组
        part5denglongzu=new PIXI.Container();
        part5denglongzu.x = 3300;
        part5denglongzu.y = 0;

        // 黄灯笼
        part5yellowdenglong= createSprite("img/part5/yellowdenglong.png",{
            x:600,
            y:0,
        });
        part5yellowdenglong.alpha = 0;
        // 蓝灯笼
        part5bluedenglong= createSprite("img/part5/bluedenglong.png",{
            x:650,
            y:0,
        });
        part5bluedenglong.alpha = 0;
        // 红灯笼
        part5reddenglong= createSprite("img/part5/reddenglong.png",{
            x:700,
            y:0,
        });
        part5reddenglong.alpha = 0;
        part5denglongzu.addChild(part5yellowdenglong,part5bluedenglong,part5reddenglong)
        // 白灯笼
        part5whitedenglong=createSprite("img/part5/whitedenglong.png",{
            x:4200,
            y:0,
        });
        // 模特组
        part5modelzu=new PIXI.Container();
        part5modelzu.x = 4300;
        // part5modelzu.x = 0;
        part5modelzu.y = 0;

        // 模特1
        part5model1= createSprite("img/part5/model1.png",{
            x:0,
            y:200,
        });
        part5model1.alpha = 0;
        // 模特2
        part5model2= createSprite("img/part5/model2.png",{
            x:180,
            y:180,
        });
        part5model2.alpha = 0;
        // 模特3
        part5model3= createSprite("img/part5/model3.png",{
            x:330,
            y:48,
        });
        part5model3.alpha = 0;
        // 模特4
        part5model4= createSprite("img/part5/model4.png",{
            x:530,
            y:60,
        });
        part5model4.alpha = 0;
        // 模特5
        part5model5= createSprite("img/part5/model5.png",{
            x:930,
            y:10,
        });
        part5model5.alpha = 0;
        // 模特6
        part5model6= createSprite("img/part5/model6.png",{
            x:1230,
            y:60,
        });
        part5model6.alpha = 0;

        // 模特7
        part5model7= createSprite("img/part5/model7.png",{
            x:1730,
            y:135,
        });
        part5model7.alpha = 0;

         // 模特8
         part5model8= createSprite("img/part5/model8.png",{
            x:1930,
            y:150,
        });
        part5model8.alpha = 0;

        changpian  = new PIXI.Container();
        changpian.x = 4150;
        changpian.y = 0;
        changpianImg= createSprite("img/part5/chang.png",{
          x:570,
          y:640,
        });
        changpian.addChild(changpianImg)

        // 云组
        part5cloudzu=createSprite("img/part5/cloudzu.png",{
            x:3700,
            y:180,
        });

        // 蓝灯笼2
        part5bluedenglong2= createSprite("img/part5/bluedenglong.png",{
            x:900,
            y:0,
        });
        part5bluedenglong2.alpha = 0;

        // 第六部分
        part6=new PIXI.Container();
        part6.x = 26300;
        //   part6.x = 0;
        part6.y = 0;

        // 紫色伞
        // img/part6/ɡ.png
        part6san3 =  createSprite("img/part6/ɡ.png",{
          x:-220,
          y:250,
      });
            // 蓝灯笼
        part6bluedenglong= createSprite("img/part5/bluedenglong.png",{
            x:100,
            y:0,
        });
        // 大竹子
        part6bigtree=createSprite("img/part6/bigtree.png",{
            x:200,
            y:0,
        })

        // 竹子叶子
        part6leves1=createSprite("img/part6/leves1.png",{
            x:1000,
            y:0,
        })
        part6leves1.height=640;
        // part6leves1.height=640;
        // 粉色伞
        part6san1=createSprite("img/part6/ɡ2.png",{
          x:600,
          y:280,
        })
        part6san2=createSprite("img/part6/ɡ3.png",{
          x:1200,
          y:440,
        })
        // 前景竹子
        part6zhuzi1 = createSprite(" img/part6/zhuzi1.png",{
          x:1540,
          y:0,
        })

        // 前景竹子
        part6zhuzi2 = createSprite(" img/part6/zhuzi2.png",{
          x:2150,
          y:0,
        })

        // 竹子组
        part6trees=createSprite("img/part6/trees.png",{
            x:1000,
            y:0,
        })

        // 假山和竹子
        part6treesmount=createSprite("img/part6/rockery.png",{
            x:2200,
            y:0,
        })

         // 文本从改良到原创
         part6text5=createSprite("img/part6/text5.png",{
            x:1000,
            y:230,
        })

        // 燕子1
        part6swallow1=createSprite("img/part6/swallow1.png",{
            x:2100,
            y:0,
        })

        // 燕子2
        part6swallow2=createSprite("img/part6/swallow2.png",{
            x:2200+900,
            y:100,
        })

        // img/part6/zhuzi7.png
        part6zhuzi7=createSprite("img/part6/zhuzi7.png",{
          x:2200+900,
          y:0,
      })

        // 燕子3
        part6swallow3=createSprite("img/part6/swallow3.png",{
            x:1000,
            y:0,
        })

        // 人弹琴组
        part6peos=new PIXI.Container();
        part6peos.x = 2200+800;
        part6peos.y = 300;
        
        // 人1
         part6peo1=createSprite("img/part6/peo1.png",{
            x:0,
            y:0,
        })
        // 人弹琴
        part6peoqin=createSprite("img/part6/peoqin.png",{
            x:200+200+10,
            y:0,
        })
        // 人2
        part6peo2=createSprite("img/part6/peo2.png",{
            x:200,
            y:100,
        })
        // 人3
        part6peo3=createSprite("img/part6/peo3.png",{
            x:200+200,
            y:0,
        })
        // 人4
        part6peo4=createSprite("img/part6/peo4.png",{
            x:200+200+600,
            y:-150,
        })
        // 人5
        part6peo5=createSprite("img/part6/peo5.png",{
            x:200+200+600+600,
            y:0,
        })

        part6peos.addChild(part6peo1,part6peo2,part6peo3,part6peoqin,part6peo4,part6peo5)
        // 竹子3
        part6zhuzi3=createSprite("img/part6/zhuzi3.png",{
            x:520,
            y:200
        })

        //    绿地2
        // part6land2=createSprite("img/part6/land2.png",{
        //     x:520,
        //     y:200
        // })
        // part6.addChild(part6bluedenglong,part6bigtree,part6leves1,part6trees,part6leves1,part6text5,part6swallow1,part6swallow2,part6swallow3)
        part6.addChild(part6san3,part6bluedenglong,part6bigtree,part6san1,part6leves1,part6trees,part6zhuzi1,part6swallow1,part6zhuzi2,part6treesmount,part6san2,part6swallow2,part6zhuzi7,part6text5,part6peos)


        // 竹子&&门
        part7 =  new PIXI.Container();
        part7.x = 26300+700+2200+900+300+200;
        part7.y = 0;

        part7zhuzi3=createSprite("img/part6/zhuzi3.png",{
          x:-700,
          y:0,
       })

       part7zhuzi5=createSprite("img/part6/zhuzi5.png",{
        x:0,
        y:0,
      })

      part7zhuzi4=createSprite("img/part6/zhuzi4.png",{
        x:-150,
        y:0,
      })

      part7zhuzi6=createSprite("img/part6/zhuzi6.png",{
        x:950,
        y:0,
      })

    

     

       part7doorzu=new PIXI.Container();
       // part7.x = 26300+700+2200+900+300;
       part7doorzu.x = 2300;
       part7doorzu.y = 0;

       part7doors = new PIXI.Container();
       part7doors.x = 0;
       part7doors.y = 0;
      // 燕子2
        part7swallow2=createSprite("img/part6/swallow2.png",{
          x:500,
          y:155,
        })
        part7swallow2.scale.set(2,2)
        
       // 门1
       part7door1=createSprite("img/part7/door1.png",{
        x:500,
        y:-80,
       })
    //    part7swallow2.scale.set(0.5,0.5)

       // 门2
       part7door2=createSprite("img/part7/door2.png",{
        x:200,
        y:0,
       })

       // 门3
       part7door3=createSprite("img/part7/door3.png",{
        x:-250,
        y:0,
       })
       part7doors.addChild(part7door1,part7door2,part7door3)
       part7doorzu.addChild(part7doors);
        // 书2
        part7book2=createSprite("img/part7/book2.png",{
            x:3000,
            y:60,
           })
        // 新模特组
        part7nmodelzu=new PIXI.Container();
        part7nmodelzu.x = 3400;
        // part7doorzu.x = 0;
        part7doorzu.y = 0;
        // 新模特1
        part7nmodel1=createSprite("img/part7/nmodel1.png",{
            x:80,
            y:60,
           })
        // 新模特2
        part7nmodel2=createSprite("img/part7/nmodel2.png",{
        x:400,
        y:0,
        })
        // 新模特3
        part7nmodel3=createSprite("img/part7/nmodel3.png",{
        x:600,
        y:0,
        })
        // 新模特4
        part7nmodel4=createSprite("img/part7/nmodel4.png",{
        x:1000,
        y:0,
        })
        // 新模特5
        part7nmodel5=createSprite("img/part7/nmodel5.png",{
        x:1350,
        y:0,
        })
        // 新模特6
        part7nmodel6=createSprite("img/part7/nmodel6.png",{
        x:1950,
        y:0,
        })
        // 新模特7
        part7nmodel7=createSprite("img/part7/nmodel7.png",{
        x:2350,
        y:20,
        })
        // 新模特8
        part7nmodel8=createSprite("img/part7/nmodel8.png",{
        x:2650,
        y:40,
        })

        // 第八部分
        part8 = new PIXI.Container();
        part8.x = 26300+700+2200+900+300+200+3000;
        part8.y = 0;
        // 编钟组
        part8chimes=new PIXI.Container();
        part8.x = 0;
        part8.y = 0;
        // 编钟1
        var part8chime1= createSprite("img/part8/chime.png",{
            x:300,
            y:-20,
        });
        part8chime1.scale.set(0.2,0.2);
        // 编钟2
        var part8chime2 = createSprite("img/part8/chime.png",{
            x:400,
            y:-25,
        });
        part8chime2.scale.set(0.3,0.3);
        // 编钟3
        var part8chime3 = createSprite("img/part8/chime.png",{
            x:520,
            y:-30,    
        });
        part8chime3.scale.set(0.4,0.4);
        // 编钟4
        var part8chime4 = createSprite("img/part8/chime.png",{
            x:650,
            y:-40,
        });
        part8chime4.scale.set(0.5,0.5);
        // 编钟5
        var part8chime5 = createSprite("img/part8/chime.png",{
            x:800,
            y:-50,
        });
        part8chime5.scale.set(0.6,0.6);
        // 编钟6
        var part8chime6 = createSprite("img/part8/chime.png",{
            x:1000,
            y:-40,
        });
        part8chime6.scale.set(0.7,0.7);
        // 编钟7
        var part8chime7 = createSprite("img/part8/chime.png",{
            x:1200,
            y:-10,
        });
        part8chime7.scale.set(0.8,0.8);

        // 文本6潜藏着丰富的时尚元素
        part8text6=createSprite("img/part8/text6.png",{
            x:100,
            y:300,
        });
                
        // 舞者1
        part8dancer1=createSprite("img/part8/dancer1.png",{
            x:800,
            y:520,
        });
        part8dancer1.scale.set(0.5,0.5)

        // 舞者2
        part8dancer2=createSprite("img/part8/dancer2.png",{
            x:1000,
            y:430,
        });
        part8dancer2.scale.set(0.6,0.6)

         // 舞者3
         part8dancer3=createSprite("img/part8/dancer3.png",{
            x:1500,
            y:0,
        });

        // 云组8
        part8cloud8=createSprite("img/part8/cloud8.png",{
            x:1500,
            y:0,
        });

        // 花瓣组1
        part8petal1=createSprite("img/part8/petal1.png",{
            x:1500,
            y:0,
        });
        // 花瓣组2
        part8petal2=createSprite("img/part8/petal2.png",{
            x:1700,
            y:0,
        });

        // 小仙鹤
        part8bird=createSprite("img/part4/birdfly1.png",{
            x:1400,
            y:200,
        });
        part8bird.scale.set(0.6,0,6)

        part8chimes.addChild(part8chime1,part8chime2,part8chime3,part8chime4,part8chime5,part8chime6,part8chime7)
        part8.addChild(part8chimes,part8text6,part8dancer1,part8dancer2,part8bird,part8dancer3,part8cloud8,part8petal1,part8petal1,part8petal2)
      // img/part6/zhuzi6.png

      // img/part6/zhuzi4.png
        part7nmodelzu.addChild(part7nmodel1,part7nmodel2,part7nmodel3,part7nmodel4,part7nmodel5,part7nmodel6,part7nmodel7,part7nmodel8)
        part7.addChild(part7zhuzi6,part7zhuzi3,part7zhuzi5,part7doorzu,part7zhuzi4,part7swallow2,part7book2,part7nmodelzu);
        // part5modelzu.addChild(part5model1,part5model2,part5model3,part5model4,part5model5,part5model6,part5model7,part5model8)
        part5modelzu.addChild(part5model1,part5model2,part5model3,part5model4,part5model5,part5model6,part5model7,part5model8)
        part5pillars.addChild(part5zhuzi1,part5zhuzi2,part5zhuzi3,part5zhuzi4,part5zhuzi5,part5zhuzi6,part5zhuzi7,part5zhuzi8,part5zhuzi9,part5zhuzi10,part5zhuzi11,part5zhuzi12,part5zhuzi13);
        part5.addChild(part5pillars,part5denglonghu,part5men,part5liushengji,part5book,part5denglongzu,part5whitedenglong,part5smallsan,part5midsan,part5cloudzu,changpian,part5modelzu,part5bluedenglong2);
        // part5.addChild(part5modelzu);
        
        // part1BirdFly.addChild(part1birdfly1,part1house1,part1house3,part1country1,part1text3,part1yumao1,part1house2,part1birdfly2,part1mountains,part1meihua,part1birdfly3,part1yumao2,part1text4);
        part1BirdFly.addChild(part1house1,part1house3,part1country1,part1text3,part1house2,part1mountains,part1yumao1,part1birdfly1,part1meihua,part1birdfly3,part1yumao2,part1text4);

        part1.addChild(part1ClouCover,part1BirdSun,part1HandMove,part1Sailing,part1Ship,part1BirdFly,changCount,timerCount);
        container.addChild(tilingSprite,part1,part5,part6,part7,part8);
        app.stage.addChild(container);
        init() 
        app.ticker.add(function() {
	    tilingSprite.tilePosition.x += 0.4; // 在渲染砖块效果下移动，注意与position.x的区别

})
    })

    
}


function init(){
    setTimeout(function(){
        $(".loading-wrap").fadeOut(600);
    },10);
    changeScene();
    scrollBegin();
    scroller.setDimensions(app.view.width, app.view.height, app.view.height, contentLength);
}

function scrollBegin(){
    
    scroller = new Scroller(function(left, top, zoom) {
        if(scrollDirection == "top"){
            container.x = -top;
        }
        if(scrollDirection == "left"){
            container.x = -left;
        }
        scrollPro = left > top ? left : top;
        console.log(scrollPro)

        // 第一部分 怀表线的遮罩
        // 雾1动画
        // if(0 < scrollPro && scrollPro < 2850){
        //     part1w1.x = scrollNum(0,2850,scrollPro,0,20);
        //   }
        // 雾2动画
        if(0 < scrollPro && scrollPro < 760){
          part1wu2.x = scrollNum(0,760,scrollPro,620,420);
        }
        // 文字1动画
        if(560 < scrollPro && scrollPro < 760){
          part1text1.alpha = scrollNum(560,760,scrollPro,0,1);
        }
        // 文字2动画
        // if(1110 < scrollPro && scrollPro < 2160){
        //     part1text2.alpha = scrollNum(1110,2160,scrollPro,0,1);
        //   }
        // 云1动画
        if(1610 < scrollPro && scrollPro < 2160){
          part1cloud1.x = scrollNum(1610,2160,scrollPro,1836-200,1836+400);
        }
        // 云2动画
        if(1610 < scrollPro && scrollPro < 2460){
            part1cloud2.x = scrollNum(1610,2460,scrollPro,2472,2472+200);
            }
         // 云3动画
         if(2210 < scrollPro && scrollPro < 2890){
            part1cloud3.x = scrollNum(2210,2890,scrollPro,3154,2472+400);
            }
        // 太阳1动画
        if(1610 < scrollPro && scrollPro < 2460){
            part1sun1.x = scrollNum(1610,2460,scrollPro,2143,2143+850);
            part1sun1.y = scrollNum(1610,2460,scrollPro,535,-150);
            part1sun1.alpha = scrollNum(1610,2460,scrollPro,0,1);
            }
        // 雾4动画
        if(2210 < scrollPro && scrollPro < 2890){
            part1wu4.alpha = scrollNum(2210,2890,scrollPro,0,1);
            // part1wu4.x = scrollNum(2210,2890,scrollPro,2143,3236);
            // part1wu4.y = scrollNum(2210,2890,scrollPro,-327,327);
            }
        // 雾5动画
        if(3462 < scrollPro && scrollPro < 4510){
            part1wu5.alpha = scrollNum(3462,4510,scrollPro,0,1);
            } 
        // 荷花动画
        if(2906 < scrollPro && scrollPro < 3877){
            part1flower.alpha = scrollNum(2906,3877,scrollPro,0,1);
         } 

         // 手伞倾斜
         if(3470 < scrollPro && scrollPro < 3660){
          part1shouCounter.x = scrollNum(3470,3660,scrollPro,0,500);
          part1shouCounter.y = scrollNum(3470,3660,scrollPro,0,80);
          part1shouCounter.rotation = scrollNum(3470,3660,scrollPro,0,0.4)
          console.log('伞'+part1san.y)
         } 

         if(3880 < scrollPro && scrollPro < 3880+1230){
          part1san.x = scrollNum(3880,3880+1270,scrollPro,30,1230);
          part1san.y = scrollNum(3880,3880+1270,scrollPro,-250,-400);
          // part1shouCounter.rotation = scrollNum(3470,3660,scrollPro,0,0.4)
          // console.log('伞'+part1san.y)
         }
         if(3850 < scrollPro && scrollPro < 3850+30){
          part1san.x = scrollNum(3850,3850+30,scrollPro,0,30);
          part1san.y = scrollNum(3850,3850+30,scrollPro,-150,-250);
         }  

        // 伞1动画
        // if(2980 < scrollPro && scrollPro < 5000){
        //     // part1san.alpha = scrollNum(2980,4420,scrollPro,0,1);
        //     part1san.x = scrollNum(2980,5000,scrollPro,0,1500);
        //     part1san.y = scrollNum(2980,5000,scrollPro,-150,190);
        //     }

        // // 手1动画
        // if(2930 < scrollPro && scrollPro < 3635){
        //     // part1shou1.rotation=0.5;
        //     part1shou1.x = scrollNum(2980,5000,scrollPro,-92,550);
        //     part1shou1.y = scrollNum(2980,5000,scrollPro,320,497);
        //     }

        // 大太阳动画
        if(4830 < scrollPro && scrollPro < 5900){
            // part1shou1.rotation=0.5;
            // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
            part1bigsun.y = scrollNum(4830,5900,scrollPro,-1307,-190);
            }
        // 仙鹤1动画
        if(5450 < scrollPro && scrollPro < 5500){
            // part1shou1.rotation=0.5;
            // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
            // part1bird1.alpha = 1;
            part1bird1.alpha = scrollNum(5450,5500,scrollPro,0,1);
        }else if(5450 > scrollPro){
            part1bird1.alpha = 0;
            // part1shou1.x = scrollNum(5450,5450,scrollPro,1,0);
        }
        if(5500 < scrollPro && scrollPro < 5550){
          // part1shou1.rotation=0.5;
          // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
          part1bird2.alpha = scrollNum(5500,5550,scrollPro,0,1);
        }else if(5550 > scrollPro){
          part1bird2.alpha = 0;
        }

        // 仙鹤2动画
        // if(4700 < scrollPro && scrollPro < 5000){
        //     part1bird2.rotation=0.5;
        //     part1bird2.alpha = scrollNum(4700,5000,scrollPro,0,1);
        //     // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
        //     // part1bird2.y = scrollNum(4700,4700,scrollPro,-350,290);
        //     }
        // 仙鹤3动画
        if(5650 < scrollPro && scrollPro < 5700){
            // part1bird3.rotation=0.5;
            // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
            part1bird3.alpha = scrollNum(5650,5700,scrollPro,0,1);
        }else if(5700>scrollPro){
            part1bird3.alpha = 0;
        }

        if(6000 < scrollPro && scrollPro < 6050){
          // part1bird3.rotation=0.5;
          // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
          part1bird4.alpha = scrollNum(6000,6050,scrollPro,0,1);
      }else if(6050>scrollPro){
          part1bird4.alpha = 0;
      }
        
        // 帆船组逐渐出现
        if(6910+300 < scrollPro && scrollPro < 7830+300){
            for(var i = 0; i < 6; i++){
                var num1 = 6910+300+ (7830-6910)/6 * i;
                var num2 = 6910+300+ (7830-6910)/6 * (i+1);
                if(num1 < scrollPro && scrollPro < num2){
                    for(var j = 0; j < part1Sailing.children.length;j++){
                        if(j >= i){
                            part1Sailing.children[j].alpha = 0;
                        }else{
                            part1Sailing.children[j].alpha = 1;
                        }
                        // if(j == 0) part1Sailing.children[0].alpha = 1;
                    }
                }
            }
        }

        // 小船组逐渐出现
        if(7985+300 < scrollPro && scrollPro < 8500+300){
            for(var i = 0; i < 5; i++){
                var num1 = 7985+300+ (8500-7985)/5 * i;
                var num2 = 7985+300+ (8500-7985)/5 * (i+1);
                if(num1 < scrollPro && scrollPro < num2){
                    for(var j = 0; j < part1Ship.children.length;j++){
                        if(j >= i){
                            part1Ship.children[j].alpha = 0;
                        }else{
                            part1Ship.children[j].alpha = 1;
                        }
                        // if(j == 0) part1Ship.children[0].alpha = 1;
                    }
                }
            }
        }

        // 仙鹤5飞入倾斜
        // part1birdfly1.anchor.x=8745;
        // part1birdfly1.anchor.y = 200;
        part1birdfly1.rotation=0.8;
        part1birdfly1.scale.x = 0.5;
        part1birdfly1.scale.y = 0.5;

        // 村庄1动画
        if(8850 < scrollPro && scrollPro < 15000){
            // part1shou1.rotation=0.5;
            // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
            part1country1.alpha = scrollNum(8850,15000,scrollPro,0,1);
            }
       
       // 时光隧道旋转放大
       
       if(15600 < scrollPro && scrollPro < 16600){
        // part1shou1.rotation=0.5;
        // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
        // part1country1.alpha = scrollNum(8850,15000,scrollPro,0,1);
        timerang.scale.x =scrollNum(15600,16600,scrollPro,0.4,1.5);
        timerang.scale.y =scrollNum(15600,16600,scrollPro,0.4,1.5);
        timerang.rotation = scrollNum(15600,16600,scrollPro,0,3);
        }
        // 羽毛1动画
        if(12486 < scrollPro && scrollPro < 14057){
            // part1shou1.rotation=0.5;
            part1yumao1.x = scrollNum(12486,14057,scrollPro,2800,5400);
            part1yumao1.y = scrollNum(12486,14057,scrollPro,100,340);

            // part1yumao1.alpha = scrollNum(12486,14057,scrollPro,0,1);
            }
        // 仙鹤5到仙鹤6动画
        if(9356 < scrollPro && scrollPro < 13183){
            // part1shou1.rotation=0.5;
            part1birdfly1.x = scrollNum(9356,13183,scrollPro,0,3840);
            part1birdfly1.y = scrollNum(9356,13183,scrollPro,-300,200);
            console.log('2222 '+scrollNum(9356,13183,scrollPro,0.8,0))
            part1birdfly1.rotation = scrollNum(9356,13183,scrollPro,0.8,0);

            // part1yumao1.alpha = scrollNum(12486,14057,scrollPro,0,1);
          }
          if(scrollPro > 13183){
            part1birdfly1.rotation =0;
          }
        // if(11555 < scrollPro && scrollPro < 13183){
        //   part1birdfly1.rotation = scrollNum(11555,13183,scrollPro,0.8,0);
        // }    
        if(16000 < scrollPro && scrollPro < 16600){
          // part1shou1.rotation=0.5;
          // part1shou1.x = scrollNum(4830,5900,scrollPro,-92,550);
          // part1country1.alpha = scrollNum(8850,15000,scrollPro,0,1);
          // console.log(yumao.rotation)
          // console.log('yumap'+scrollNum(15600,16600,scrollPro,0,-1))
          yumao.rotation = scrollNum(15600,16600,scrollPro,0,-1);
        }

        if(16600 < scrollPro && scrollPro < 18600){
          timerang.x =scrollNum(16600,18600,scrollPro,570,570+2000);
          yumao.x =scrollNum(16600,18600,scrollPro,570,570+2000);
          timerang.scale.x =scrollNum(16600,18600,scrollPro,1.5,3);
          timerang.scale.y =scrollNum(16600,18600,scrollPro,1.5,3)
          timerang.rotation = scrollNum(16600,18600,scrollPro,3,6);
          yumao.rotation = scrollNum(16600,18600,scrollPro,-0.99,-6);
          yumao.scale.x = scrollNum(16600,18600,scrollPro,1,0.2);
          yumao.scale.y = scrollNum(16600,18600,scrollPro,1,0.2);
          // timerang.alpha = scrollNum(15600,16600,scrollPro,1,0.5);
        }
        if(18600 < scrollPro && scrollPro < 19600){
          timerang.rotation = scrollNum(18600,19600,scrollPro,6,9);
          yumao.rotation = scrollNum(18600,19600,scrollPro,-6,-9);
        }

        if(18750 < scrollPro && scrollPro < 20350){
          chang.x = scrollNum(18750,20350,scrollPro,570,570+1800);
          chang.rotation = scrollNum(18750,20350,scrollPro,0,2);
          chang.scale.x = scrollNum(18750,20350,scrollPro,1,0.7);
          chang.scale.y = scrollNum(18750,20350,scrollPro,1,0.7);
        }
        if(20350 < scrollPro && scrollPro < 22350){
          chang.x = scrollNum(20350,22350,scrollPro,570+1800,570+2000+2000);
          chang.y = scrollNum(20350,22350,scrollPro,320,0);
          chang.rotation = scrollNum(20350,22350,scrollPro,2,6);
          chang.scale.x = scrollNum(20350,22350,scrollPro,0.7,0.4);
          chang.scale.y = scrollNum(20350,22350,scrollPro,0.7,0.4);
        }     
        
        // part1mountain2 y:404+100,
        if(6548 < scrollPro && scrollPro < 6548+200){
          part1mountain2.alpha = scrollNum(6548,6548+200,scrollPro,0,1);
          part1mountain2.y = scrollNum(6548,6548+200,scrollPro,404+100,404);
        } 
        // 群山
        // 13516    
        if(13516 < scrollPro && scrollPro < 13516+200){
          part1mountains.y = scrollNum(13516,13516+200,scrollPro,240+50,220);
          part1mountains.alpha = scrollNum(13516,13516+200,scrollPro,0,1);
        } 

        // 留声机
        if(20160 < scrollPro && scrollPro < 20160+200){
          part5liushengji.alpha = scrollNum(20160,20160+200,scrollPro,0,1);
        } 

        if(20160-50 < scrollPro && scrollPro < 20160+200-50){
          part5bluedenglong2.alpha = scrollNum(20160-50,20160+200-50,scrollPro,0,1);
        } 
        
         // 柱子
         if(20550+300 < scrollPro && scrollPro < 21710+300){
           console.log(part5pillars.children.length)
          for(var i = 0; i < 14; i++){
              var num1 = 20550+300+ (21710-20550)/14 * i;
              var num2 = 20550+300+ (21710-20550)/14* (i+1);
              if(num1 < scrollPro && scrollPro < num2){
                  for(var j = 0; j < part5pillars.children.length;j++){
                      if(j >= i){
                          part5pillars.children[j].alpha = 0;
                      }else{
                          part5pillars.children[j].alpha = 1;
                      }
                      // if(j == 0) part5pillars.children[0].alpha = 1;
                  }
              }
          }
       }

      //  part5book
      if(22901 < scrollPro && scrollPro < 22901+200){
        part5book.alpha = scrollNum(22901,22901+200,scrollPro,0,1);
      } 
      // 灯笼组合 part5denglongzu
      // 23070
      if(23070 < scrollPro && scrollPro < 23070+200){
       for(var i = 0; i < 4; i++){
           var num1 = 23070+ (23070+200-23070)/4 * i;
           var num2 = 23070+ (23070+200-23070)/4* (i+1);
           if(num1 < scrollPro && scrollPro < num2){
               for(var j = 0; j < part5denglongzu.children.length;j++){
                   if(j >= i){
                       part5denglongzu.children[j].alpha = 0;
                   }else{
                       part5denglongzu.children[j].alpha = 1;
                   }
                  //  if(j == 0) part5denglongzu.children[0].alpha = 1;
               }
           }
       }
     }


     //云组
    //  part5cloudzu
    // 23360  24070.66875517615

      if(23360 < scrollPro && scrollPro < 24370){
        part5cloudzu.x = scrollNum(23360,24070,scrollPro,3700,3700-300);
      } 
      

      // 23480 模特 25470
      if(23480 < scrollPro && scrollPro < 25470+200){
        for(var i = 0; i < 9; i++){
            var num1 = 23480+ (25470-23480)/9 * i;
            var num2 = 23480+ (25470-23480)/9* (i+1);
            if(num1 < scrollPro && scrollPro < num2){
                for(var j = 0; j < part5modelzu.children.length;j++){
                    if(j >= i){
                        part5modelzu.children[j].alpha = 0;
                    }else{
                        part5modelzu.children[j].alpha = 1;
                    }
                   //  if(j == 0) part5denglongzu.children[0].alpha = 1;
                }
            }
        }
      }

      // 24506.77907118165 changpianImg
      if(24506 < scrollPro && scrollPro < 24506+200){
        changpianImg.y = scrollNum(24506,24506+200,scrollPro,640,320);
      } 

      // 柱子错位
      // 26777 28144

      if(26770 < scrollPro && scrollPro < 28140){
        part6trees.x = scrollNum(26770,28140,scrollPro,1000,800);
        part6zhuzi1.x = scrollNum(26770,28140,scrollPro,1540,1740);
        part6zhuzi2.x  = scrollNum(26770,28140,scrollPro,2150,2350);
        part6swallow1.x  = scrollNum(26770,28140,scrollPro,2100,2300);
      } 

      //   // 燕子1
      //   part6swallow1=createSprite("img/part6/swallow1.png",{
      //     x:2100,
      //     y:0,
      // })
      // // 前景竹子
      // part6zhuzi1 = createSprite(" img/part6/zhuzi1.png",{
      //   x:1540,
      //   y:0,
      // })

      // // 前景竹子
      // part6zhuzi2 = createSprite(" img/part6/zhuzi2.png",{
      //   x:2150,
      //   y:0,
      // })

      // // 竹子组
      // part6trees=createSprite("img/part6/trees.png",{
      //     x:1000,
      //     y:0,
      // })

      // // 假山和竹子
      // part6treesmount=createSprite("img/part6/rockery.png",{
      //     x:2200,
      //     y:0,
      // })
 
    },{
        zooming: true,
        bouncing: false
    })


    var mousedown = false;
    document.addEventListener("touchstart", function(e) {
        scroller.doTouchStart(e.touches, e.timeStamp);
        mousedown = true;
    }, false);

    document.addEventListener("touchmove", function(e) {
        if (!mousedown) {
            return;
        }
        scroller.doTouchMove(e.touches, e.timeStamp);
        mousedown = true;
    }, false);

    document.addEventListener("touchend", function(e) {
        if (!mousedown) {
            return;
        }
        scroller.doTouchEnd(e.timeStamp);
        mousedown = false;
    }, false);
}

// 区间最小值, 区间最大值, top, 初始位置, 终点, 速度, 方向
function scrollNum(minNum,maxNum,top,start,end){
    var start = start + ((top - minNum)/(maxNum - minNum)*(end-start))
    return start;
}

$(function(){
    // loading图片加载
    var loadingImg = new Image();
    loadingImg.src = "img/loading.png";
    loadingImg.onload = function(){
        // pixi初始化
        pixiFn();
        // 调整画布位置和大小初始化
        changeScene();
        window.onresize = function(){
            changeScene();
        };

    }
})