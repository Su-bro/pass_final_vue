<template>
  <div class="container m-8">
    <h1 class="m-4" style="text-align: center">지역별 문화시설</h1>
    <div class="row">
      <div class="col">
        구 선택:
        <select name="gu" v-model="gu" @change="showMapGu">
          <option value="강남">강남</option>
          <option value="강북">강북</option>
          <option value="강동">강동</option>
          <option value="강서">강서</option>
          <option value="관악">관악</option>
          <option value="광진">광진</option>
          <option value="구로">구로</option>
          <option value="금천">금천</option>
          <option value="노원">노원</option>
          <option value="도봉">도봉</option>
          <option value="동대문">동대문</option>
          <option value="동작">동작</option>
          <option value="마포">마포</option>
          <option value="서대문">서대문</option>
          <option value="서초">서초</option>
          <option value="성동">성동</option>
          <option value="성북">성북</option>
          <option value="송파">송파</option>
          <option value="양천">양천</option>
          <option value="영등포">영등포</option>
          <option value="용산">용산</option>
          <option value="은평">은평</option>
          <option value="종로">종로</option>
          <option value="중구">중구</option>
          <option value="중랑">중랑</option>
        </select>
        <div id="map" class="map"></div>
      </div>
      <div class="col">
        <div v-for="(data, index) in datas" :key="index" @click="movemapto(data)" class="m-1">
          <a
            onclick="this.nextSibling.style.display=(this.nextSibling.style.display=='none')?'block':'none';"
            href="javascript:void(0)"
          >
            {{ data.fac_name }} ({{ data.codename }})
          </a>
          <div style="display: none">
            <li>주소: {{ data.addr }}</li>
            <li v-if="data.phne !== null">번호: {{ data.phne }}</li>
            <li v-if="data.homepage !== null">홈페이지:{{ data.homepage }}</li>
            <li v-if="data.closeday !== null">휴무일:{{ data.closeday }}</li>
            <li v-if="data.etc_desc !== null">상세정보:{{ data.etc_desc }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var markers = []; //마커정보를담을 배열
let datas = []; //데이터(문화시설정보)를 담을 배열
var map; //카카오 MAP API 객체를 저장할 변수

function addMarker(data) {
  //data를 받아온다.
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    //data의 좌표를 이용해 마커를 생성
    position: new kakao.maps.LatLng(data.x_coord, data.y_coord),
    //클릭 가능하도록 설정
    clickable: true,
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  //마커의 윈도우컨텐트를 만든다. 받아온 data의 정보를 뿌린다.
  var iwContent = `
  <div style="padding:5px;"> ${data.fac_name} </div>
  <div style="padding:5px;"> ${data.phne} </div>
  <a href= "${data.homepage}">${data.homepage}</a><br/>
  <div style="padding:5px;"> ${data.addr} </div>

  `,
    iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
  //인포윈도우를  만든다.
  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });
  //마커의 클릭 이벤트를 설정한다.
  kakao.maps.event.addListener(marker, 'click', function () {
    // 마커 위에 인포윈도우를 표시합니다
    infowindow.open(map, marker);
  });
  // 생성된 마커를 배열에 추가합니다
  markers.push(marker);
  // 생성된 마커의 데이터를 data배열에 저장한다(리스트에서 꺼내보기위함.)
  datas.push(data);
}
//json파일 임포트
import cultures from '../resources/data/culture.json';
export default {
  data() {
    return {
      lat: 37.49682, // X 좌표
      lng: 127.05234, // Y좌표
      gu: '', //구(default = '')
      datas: [], //v-for를 이용해 리스트를 뽑아올 배열
      cultures: cultures.datas, //Json파일에서 뽑아온 데이터
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap(); //맵 객체 생성
    } else {
      const script = document.createElement('script');
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d8b381423317e9a81f56605da1b2a84f';
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        center: new kakao.maps.LatLng(this.lat, this.lng), //지도의 중심좌표.
        level: 7, //지도의 레벨(확대, 축소 정도)
      };
      map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      // 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다
      // this.renderMark();
    },
    showMapGu() {
      this.hideMarkers(); //기존 랜더링된 마커를 제거한다.
      this.renderMark(); // 마커를 새로 랜더링한다.
    },
    hideMarkers() {
      this.setMarkers(null); //마커배열을 null로
    },
    setMarkers(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    },
    renderMark() {
      var gu = this.gu; //this.gu를 지역변수로 받아온다.
      datas = [];
      var lat2; //좌표 임시 변수
      var lng2;
      //json파일을 받아온 데이터를 foreach로
      this.cultures.forEach(function (data) {
        if (data.addr != null) {
          //주소값이 null이 아닌경우
          if (data.addr.includes(gu)) {
            //주소값이 gu(구 변수를 포함하고 있는경우) -> 구 검색
            addMarker(data); ////마커에 추가한다.
            lat2 = data.x_coord; //임시변수에 좌표값을 넣는다.
            lng2 = data.y_coord;
          }
        }
      });

      this.datas = datas;
      map.panTo(new kakao.maps.LatLng(lat2, lng2)); //중심좌표 이동시킨다.
    },
    movemapto(data) {
      map.panTo(new kakao.maps.LatLng(data.x_coord, data.y_coord));
    },
    click2() {
      // this.hideMarkers();
      console.log(this.gu);
      console.log(datas);
      console.log(this.datas);
    },

    bound() {
      // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
      // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
      map.setBounds();
    },
  },
};
</script>
<style>
.map {
  width: 500px;
  height: 500px;
}
</style>
