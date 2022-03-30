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
 


