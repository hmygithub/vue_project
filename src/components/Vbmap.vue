<template>
    <!-- :mapStyle="mapStyle" -->
    <div id="vue-map">
        <baidu-map :center="center" :zoom="zoom" @ready="handler" ak="BQM7A3TEGPitcWq3SY5XaKCqGy6nqkg0" class="map">
            <bm-map-type :map-types="['BMAP_HYBRID_MAP','BMAP_NORMAL_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-overview-map anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :isOpen="true"></bm-overview-map>
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true">
            </bm-geolocation>
            <bm-copyright anchor="BMAP_ANCHOR_TOP_RIGHT"
                :copyright="[{id: 1, content: 'Copyright Message', bounds: {ne: {lng: 110, lat: 40}, sw:{lng: 0, lat: 0}}}, {id: 2, content: '<a>我是版权信息</a>'}]">
            </bm-copyright>
            <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
            <bm-panorama></bm-panorama>
            <!-- 自定义控件 -->
            <!-- <bm-control>
                <button @click="addZoom(19)">缩放至最大</button>
                <button @click="addZoom(10)">还原</button>
                <button @click="addZoom(3)">缩放至最小</button>
            </bm-control> -->
            <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}"
                    :offset="{width: -35, height: 30}" />
            </bm-marker>
            <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red"
                size="BMAP_POINT_SIZE_SMALL"></bm-point-collection>
            <bm-polyline :path="polylinePath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2"
                :editing="true" @lineupdate="updatePolylinePath"></bm-polyline>
            <bm-polygon :path="polygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2" :editing="true"
                @lineupdate="updatePolygonPath" />
            <bm-circle :center="circlePath.center" :radius="circlePath.radius" stroke-color="blue" :stroke-opacity="0.5"
                :stroke-weight="2" @lineupdate="updateCirclePath" :editing="true"></bm-circle>
            <!-- <bm-traffic :predictDate="{weekday: 7, hour: 12}"></bm-traffic> -->
            <bm-tile :isTransparentPng="true"
                tileUrlTemplate="http://developer.baidu.com/map/jsdemo/demo/tiles/{Z}/tile{X}_{Y}.png">
            </bm-tile>
        </baidu-map>
    </div>
</template>
<script>
    // https://dafrok.github.io/vue-baidu-map/
    import {
        BaiduMap, BmMapType, BmScale, BmNavigation, BmOverviewMap, BmGeolocation, BmCopyright, BmCityList, BmPanorama,
        BmControl, BmMarker, BmLabel, BmPointCollection, BmPolyline, BmPolygon, BmCircle, BmTraffic, BmTile
    } from 'vue-baidu-map/components'

    export default {
        name: 'Vbmap',
        components: {
            BaiduMap,
            BmMapType,
            BmScale,
            BmNavigation,
            BmOverviewMap,
            BmGeolocation,
            BmCopyright,
            BmCityList,
            BmControl,
            BmMarker,
            BmLabel,
            BmPointCollection,
            BmPolyline,
            BmPolygon,
            BmCircle,
            BmTraffic,
            BmTile
        },
        data() {
            return {
                BMap: null,
                center: { lng: 0, lat: 0 },
                zoom: 4,
                points: [],
                polylinePath: [
                    { lng: 116.404, lat: 39.915 },
                    { lng: 116.405, lat: 39.920 },
                    { lng: 116.423493, lat: 39.907445 },
                    { lng: 116.404, lat: 39.915 }
                ],
                polygonPath: [
                    { lng: 116.412732, lat: 39.911707 },
                    { lng: 116.39455, lat: 39.910932 },
                    { lng: 116.403461, lat: 39.921336 }
                ],
                circlePath: {
                    center: {
                        lng: 116.404,
                        lat: 39.915
                    },
                    radius: 500
                },
                mapStyle: {
                    styleJson: [
                        {
                            "featureType": "all",
                            "elementType": "geometry",
                            "stylers": {
                                "hue": "#007fff",
                                "saturation": 89
                            }
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": {
                                "color": "#ffffff"
                            }
                        }
                    ]
                }
            }
        },
        methods: {
            handler({ BMap, map }) {
                this.BMap = BMap
                this.center.lng = 116.404
                this.center.lat = 39.915
                this.zoom = 15
            },
            addZoom(level) {
                this.zoom = level;
            },
            addPoints() {
                const points = [];
                for (var i = 0; i < 100; i++) {
                    const position = { lng: Math.random() * 40 + 85, lat: Math.random() * 30 + 21 }
                    points.push(position)
                }
                this.points = points
            },
            updatePolylinePath(e) {
                this.polylinePath = e.target.getPath()
            },
            addPolylinePoint() {
                this.polylinePath.push({ lng: 116.404, lat: 39.915 })
            },
            updateCirclePath(e) {
                this.circlePath.center = e.target.getCenter()
                this.circlePath.radius = e.target.getRadius()
            },
            updatePolygonPath(e) {
                this.polygonPath = e.target.getPath()
            },
            addPolygonPoint() {
                this.polygonPath.push({ lng: 116.404, lat: 39.915 })
            }
        }
    }
</script>
<style>
    #vue-map {
        width: 1200px;
        height: 800px;
        margin: 0 auto;
        border: 1px solid #ddd;
        background-color: #fff;
    }
    /* 必须定义自己的高度 */
    .map {
        height: 800px;
    }
</style>