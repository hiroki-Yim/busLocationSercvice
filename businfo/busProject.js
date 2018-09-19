var isLoading = false;

//새로고침 한번 자동
if (!location.hash) {
  location.hash = "#reload";
  location.href = location.href;
}

// eventlistener 등록
$("#section__search").on("change keyup paste", onSearch);
//$(".bustag").on("click", busStationInfo);

//이벤트 함수
function onSearch(e) {
  var searchStation = e.target.value;
  if (searchStation.length >= 2 && !isLoading) {
    isLoading = true;
    var targetURL = makeURL(
      "BusSttnInfoInqireService",
      "getSttnNoList",
      "&nodeNm",
      searchStation
    );
    console.log(targetURL);
    // var targetURL = makeURI("정류소검색", {
    //   nodeNm: searchStation,
    //   nodeId: '123123'
    // });

    $.ajax({
      type: "GET",
      url: targetURL,
      dataType: "json",
      error: function() {
        throw new Error("Ajax통신 실패");
      },
      success: function(data) {
        inputTag(data);
      }
    });
  } else if (searchStation.length < 2) {
    $("#messege").show();
  } else if (searchStation.length > 2) {
    $("#messege").hide();
  }
}


function busStationInfo(event){
  // console.log(event.currentTarget.childNodes[2].innerText);
  var nodeId = event.currentTarget.childNodes[2].innerText;

  var targetURL = makeURL(
  "ArvlInfoInqireService",
  "getSttnAcctoArvlPrearngeInfoList",
  "&nodeId",
  nodeId);

  $.ajax({
    type: "GET",
    url: targetURL,
    dataType: "json",
    error: function() {
      throw new Error("Ajax통신 실패");
    },
    success: function(data) {
      busInfoTag(data);
    }
  });
}
