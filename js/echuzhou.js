var body = $response.body;
var url = $request.url;
const p1 = '/init/start_ad';
const p2 = 'area_code=&channel_id=0&city=&cursor=0&page=1&tab_id=1';


if (url.indexOf(p1) != -1) {
    obj.data="";//清除开屏广告
    body = JSON.stringify(obj);
    console.log('跳过广告');
    $done(body);
}
if (url.indexOf(p2) != -1) {

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
}
 


