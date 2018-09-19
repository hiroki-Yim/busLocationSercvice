function makeURL(service, operation, key, value) {
  var targetURL = "";
  // switch (what) {
  //   case "정류소검색":
  targetURL =
    "http://openapi.tago.go.kr/openapi/service/" +
    service +
    "/" +
    operation +
    "?serviceKey=9LeaO%2FsDT53nJ8Y6CLJuGlkzDfR53au3x0djeFPhkkD1i5KEFuyTo2XJ1iSP1Dd3khf8gUSaTBkaIsyK2WEiMg%3D%3D&cityCode=22&_type=json";
  targetURL += key + "=" + value;
  //   break;
  // case "정류소 도착 상세 정보":
  //   break;
  // }

  return targetURL;
}
