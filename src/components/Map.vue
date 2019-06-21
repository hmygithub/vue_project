<template>
    <div id="map"></div>
</template>
<script>
    // http://lbsyun.baidu.com/index.php
    // https://blog.csdn.net/wang1006008051/article/details/78034585
    import loadMap from '../loadMap.js'
    // import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
    export default {
        data() {
            return {
                mapId: 'map',
                myMap: null
            }
        },
        mounted() {
            // this.initMap();
        },
        methods: {
            // 返回
            goback() {
                this.$router.go(-1)
            },
            initMap() {
                let BMap = window.BMap;//在BMap.Map前面加window，即new window.BMap.Map，成功解决报错爆红~
                // **************自定义控件-start**************
                // function ZoomControl() {
                //     this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
                //     this.defaultOffset = new BMap.Size(10, 10);
                // }

                // ZoomControl.prototype = new BMap.Control();
                // ZoomControl.prototype.initialize = function (map) {
                //     // 创建一个DOM元素   
                //     var div = document.createElement("div");
                //     // 添加文字说明    
                //     div.appendChild(document.createTextNode("放大2级"));
                //     // 设置样式    
                //     div.style.cursor = "pointer";
                //     div.style.border = "1px solid gray";
                //     div.style.backgroundColor = "white";
                //     // 绑定事件，点击一次放大两级    
                //     div.onclick = function (e) {
                //         map.zoomTo(map.getZoom() + 2);
                //     }
                //     // 添加DOM元素到地图中   
                //     map.getContainer().appendChild(div);
                //     // 将DOM元素返回  
                //     return div;
                // }
                // **************自定义控件-end**************
                // **************自定义标注-start**************
                // 定义自定义覆盖物的构造函数  
                // function SquareOverlay(center, length, color) {
                //     this._center = center;
                //     this._length = length;
                //     this._color = color;
                // }
                // // 继承API的BMap.Overlay
                // SquareOverlay.prototype = new BMap.Overlay();
                // SquareOverlay.prototype.initialize = function (map) {
                //     // 保存map对象实例
                //     this._map = map;
                //     // 创建div元素，作为自定义覆盖物的容器
                //     var div = document.createElement("div");
                //     div.style.position = "absolute";
                //     // 可以根据参数设置元素外观
                //     div.style.width = this._length + "px";
                //     div.style.height = this._length + "px";
                //     div.style.background = this._color;
                //     // 将div添加到覆盖物容器中
                //     map.getPanes().markerPane.appendChild(div);
                //     // 保存div实例
                //     this._div = div;
                //     // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
                //     // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
                //     return div;
                // }
                // 实现绘制方法   
                // SquareOverlay.prototype.draw = function () {
                //     // 根据地理坐标转换为像素坐标，并设置给容器    
                //     var position = this._map.pointToOverlayPixel(this._center);
                //     this._div.style.left = position.x - this._length / 2 + "px";
                //     this._div.style.top = position.y - this._length / 2 + "px";
                // }
                // SquareOverlay.prototype.show = function () {
                //     if (this._div) {
                //         this._div.style.display = "";
                //     }
                // }
                // // 实现隐藏方法  
                // SquareOverlay.prototype.hide = function () {
                //     if (this._div) {
                //         this._div.style.display = "none";
                //     }
                // }
                // **************自定义标注-end**************

                this.myMap = new BMap.Map(this.mapId);// 创建Map实例
                loadMap('BQM7A3TEGPitcWq3SY5XaKCqGy6nqkg0')
                    .then(() => {
                        let point = new BMap.Point(116.404, 39.915);  //创建点坐标  
                        this.myMap.centerAndZoom(point, 11);// 初始化地图,设置中心点坐标和地图级别(11级别-10公里,15级别-500米)
                        // this.myMap.addControl(
                        //     new BMap.MapTypeControl({
                        //         mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
                        //     })
                        // )
                        // const opts = { type: BMAP_NAVIGATION_CONTROL_SMALL };//修改控件配置
                        this.myMap.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
                        // this.myMap.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                        // this.myMap.addControl(new BMap.NavigationControl(opts)); //平移缩放控件（左上角）
                        // this.myMap.addControl(new BMap.ScaleControl()); //比例尺控件（左下角）
                        // this.myMap.addControl(new BMap.OverviewMapControl());  //缩略图控件（在地图右下角）
                        // this.myMap.addControl(new BMap.MapTypeControl());
                        // // 向地图添加标注
                        // // let marker=new BMap.Marker(point);
                        // // map.addOverlay(marker);
                        // var polyline = new BMap.Polyline([
                        //     new BMap.Point(116.399, 39.910),
                        //     new BMap.Point(116.605, 39.960)
                        // ], { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
                        // );
                        // this.myMap.addOverlay(polyline);
                        // const myIcon = new BMap.Icon("../assets/images/user.png", new BMap.Size(18, 19), {});//定义标注图标
                        // const marker = new BMap.Marker(point, { icon: myIcon })  // 创建标注
                        // this.myMap.addOverlay(marker)           // 将标注添加到地图中
                        // 创建自定义控件实例    
                        // var myZoomCtrl = new ZoomControl();    
                        // this.myMap.addControl(myZoomCtrl);
                        // 添加自定义覆盖物   
                        // var mySquare = new SquareOverlay(this.myMap.getCenter(), 100, "red");
                        // mySquare.show();
                        // this.myMap.addOverlay(mySquare);
                    })
                    .catch(err => {
                        // console.log('地图加载失败：', err);
                        return false;
                    })
            },

        },

        filters: {
            more(value) {
                var newMessage = value.slice(0, 40) + "........点击查看更多";
                return newMessage;
            }
        }
    }
</script>
<style>
    #map {
        width: 1200px;
        height: 800px;
        border: 1px solid #ccc;
        margin: 0 auto;
        background: #fff;
        cursor: pointer
    }
</style>