var body = $response.body;
var url = $request.url;


    //var body = $response.body;
    var obj = JSON.parse(body);
    obj.data.head[0].data="";//清除首页顶部广告
    obj.data.head[2].data.items="";//清除首页轮播广告
    obj.data.head[3]="";//清除首页天气定位
    obj.data.head[4].data.items="";//清除每日打卡
    obj.data.feed[6].data="";//清除广告
    body = JSON.stringify(obj);
    console.log('APP-E滁州-净化')
	//console.log(body)
    $done(body);
 



// body = JSON.stringify(body);
// var obj = JSON.parse(body);

// obj.ret= 1;

// body = JSON.stringify(obj);

//  body = JSON.parse(body);
//  //delete body;
// console.log(obj);
// console.log(url);
// console.log('mima');
 
//https://qianfanapi.0550.com/v5_0/home/tab-data?area_code=&channel_id=0&city=&cursor=0&page=1&tab_id=1
//https://qianfanapi.0550.com/v5_0/home/tab-data?area_code=&channel_id=0&city=&cursor=0&page=1&tab_id=1

