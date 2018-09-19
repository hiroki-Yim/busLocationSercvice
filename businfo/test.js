var isLoading = false;

// eventlistener 등록
$('#section__search').on('change keyup paste', onSearch);

//이벤트 함수
function onSearch(e) {
  var searchStation = e.target.value;

  if(searchStation.length >=2 && !isLoading){
  isLoading = true;
  targetURL = makeURL("버스검색",{
    nodeNm : searchStation
  });
  $.ajax({
    type: 'GET',
    url: targetURL,
    dataType: 'json',
    error: function(){
      console.error('ajax통신 실패');
    },
    success: function(data){
      inputTag(data);
      }
    });
    $('#messege').hide();
  }else if(searchStation.length < 2){
    $('#messege').show();
  }
}

//유틸리티
function makeURL(what ,opt) {
    switch (what) {
    case "버스검색":
        var targetURL = 'http://openapi.tago.go.kr/openapi/service/BusSttnInfoInqireService/getSttnNoList?serviceKey=9LeaO%2FsDT53nJ8Y6CLJuGlkzDfR53au3x0djeFPhkkD1i5KEFuyTo2XJ1iSP1Dd3khf8gUSaTBkaIsyK2WEiMg%3D%3D&cityCode=22&_type=json';
        targetURL += '&nodeNm='+ opt.nodeNm;
        console.log(opt.nodeNm);
        return targetURL;
      break;
  }

}

function inputTag(data){
  var bustag = "";
  if (data.response.body.totalCount === 0) {
    isLoading = false;
    bustag += '<p id = "resultnone"> 결과가 없습니다. </p>';
    $('#businfo').html(bustag);
    return;
  }
  var items = data.response.body.items.item;
  items = !items.length ? [items] : items;
  for (var i = 0; i < items.length; i++) {
    if (items[i].nodeno) {
      bustag += '<ul id = "bustag">' +
        '<li id="stationName">' + (items[i].nodenm) + '</li>' +
        '<li id="stationNo">' + (items[i].nodeno) + '</li>' +
        '<li id="reqNodeId">' + (items[i].nodeid) + '</li>' + '</ul>'
    } else {
      bustag += '<ul id = "bustag">' +
        '<li id="stationName">' + (items[i].nodenm) + '</li>' +
        '<li id="stationNo">' + "" + '</li>' +
        '<li id="reqNodeId">' + (items[i].nodeid) + '</li>' + '</ul>'
    }
  }

  $('#businfo').html(bustag);
  isLoading = false;
}
