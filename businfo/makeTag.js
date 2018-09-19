function inputTag(data) {
  var bustag = "";
  if (data.response.body.totalCount === 0) {
    isLoading = false;
    bustag = '<p id = "resultnone"> 결과가 없습니다. </p>';
    $("#businfo").html(bustag);
    return;
  }

  var items = data.response.body.items.item;
  items = !items.length ? [items] : items;  // 배열이 아니면 배열처럼 만드는 것(에러 안나게)

  for (var i = 0; i < items.length; i++) {
    if (items[i].nodeno) {
      bustag +=
        '<ul class = "bustag">' +
				'<li id="stationName">' + items[i].nodenm + "</li>" +
				'<li id="stationNo">' + items[i].nodeno + "</li>" +
				'<li id="reqNodeId">' + items[i].nodeid + "</li>" +
				"</ul>";
    } else {
      bustag +=
        '<ul class = "bustag">' +
				'<li id="stationName">' + items[i].nodenm + "</li>" +
        '<li id="stationNo">' + "" + "</li>" +
        '<li id="reqNodeId">' + items[i].nodeid + "</li>" +
        "</ul>";
    }
  } //for end
  $("#messege").hide();
  $("#businfo").html(bustag);
  $(".bustag").click(busStationInfo);     //event 등록은 웹 페이지 생성 시 등록됨.
                                          //그래서 bustag가 생성되는 시점에 등록해야함
  isLoading = false;
} //inputTag end

function busInfoTag(data){
  console.log(data);
  var items = data.response.body.items.item;
  /*
  <arrprevstationcnt>5</arrprevstationcnt>  남은 정류장 정보
  <arrtime>356</arrtime>                    남은 시간(초)
  <nodeid>DGB7021020400</nodeid>           정류장id
  <nodenm>영진전문대학후문앞</nodenm>        버스정류장
  <routeid>DGB3000836000</routeid>         버스routeid
  <routeno>836</routeno>                   버스번호
  <routetp>간선버스</routetp>               버스종류
  <vehicletp>일반차량</vehicletp>           특수버스종류
  */
}
