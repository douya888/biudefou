var body = $response.body;
var url = $request.url;
//var obj = JSON.parse(body);  
const p1 = '/getGlobalData?v=';
const p2 = '/vod/reqplay/';
const p3 = '/ucp/index';
if (url.indexOf(p1) != -1) {
    body = JSON.stringify(body);
    console.log('跳过广告');
}
if (url.indexOf(p2) != -1) { }
if (url.indexOf(p3) != -1) {
    var obj = JSON.parse(body);
    obj.data.uinfo['down_daily_remainders'] = 999;
    obj.data.uinfo['play_daily_remainders'] = 999;
    obj.data.uinfo['minivod_play_daily_remainders'] = 999;
    body = JSON.stringify(obj);
    $done(body);
}
$done(body);
