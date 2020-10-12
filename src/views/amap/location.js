let geolocation = null;


export function selfLocation(params) { // {map: "" ,current: ""}
	if(!geolocation) {
		geolocation = new AMap.Geolocation({
		    enableHighAccuracy: true,//是否使用高精度定位，默认:true
		    timeout: 10000,          //超过10秒后停止定位，默认：5s
		    buttonPosition:'RB',    //定位按钮的停靠位置
		    showMarker: false,
		    showCircle: false,
		    showButton: true,
		    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
		    zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点
		    markerOptions: {
		    	content: " "
		    }
		});
	}
	// 在地图中添加该控件
	params.map.addControl(geolocation);
	geolocation.getCurrentPosition();
	if(params.complete && typeof params.complete == 'function') {
		AMap.event.addListener(geolocation, 'complete', params.complete);//返回定位信息
	}
	if(params.error && typeof params.error == 'function') {
    	AMap.event.addListener(geolocation, 'error', params.error);  //返回定位出错信息
	}
}

