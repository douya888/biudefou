var body = $response.body;
var url = $request.url;
const p1 = '/discovery-feed/v3/mix/';
const p2 = 'ting/feed/ts-';

//console.log(url)

if (url.indexOf(p1) != -1) {
    var obj = JSON.parse(body);
    if ('header' in obj) {
        obj.header[0].item.list[0].data = "";
    } else {
        
    }
    obj.body[2].item.adInfo = "";
    obj.body[1].item = "";
    body = JSON.stringify(obj);
    $done(body);
}
if (url.indexOf(p2) != -1) {
    var obj = JSON.parse(body);
    obj.data = "";
    body = JSON.stringify(obj);
    $done(body);
}
$done(body);