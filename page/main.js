

const DEFAULT_MILE_MULTIPLIER = 5;
const mapContainerId = "mainMap";
const BASE_TILE_SIZE = 256;

var worldData = {
    "name": "Tellus Draconis",
    "mapPath": ".\\Tellus_Draconis\\worldMap",
    "bounds": {
        "x": 8192,
        "y": 8192
    },
    "maxZoom": 5,
    "id": "g2pc7fmol15nlbb1",
    "markers": [],
    "detailMaps": [],
    "regions": []
}

document.addEventListener("DOMContentLoaded", function (e) {
    loadMap();
});


function loadMap() {
    var mapPath = worldData.mapPath;
    var maxZoom = worldData.maxZoom;
    MILE_MULTIPLIER = worldData.distanceUnitMultiplier || DEFAULT_MILE_MULTIPLIER;
    var originZoom = Math.ceil(maxZoom / 2);

    map = L.map(mapContainerId, {
        attributionControl: false,
        zoomControl: false,
        preferCanvas: true,
        zoomDelta: 0.5,
  
        maxZoom: maxZoom,
        crs: L.CRS.Simple,
        minZoom: 0
    });
    var southWest = map.unproject([0, worldData.bounds.y], maxZoom);
    var northEast = map.unproject([worldData.bounds.x, 0], maxZoom);
    var center = map.unproject([worldData.bounds.x / 2, worldData.bounds.y / 2], maxZoom)
    var mapBounds = new L.LatLngBounds(southWest, northEast);

    map.setView(center, originZoom);




    tileLayer = L.tileLayer(`${mapPath}/{z}/{y}/{x}.png`, {
        continuousWorld: false,
        tileSize: BASE_TILE_SIZE,
        bounds: mapBounds,
        errorTileUrl: `${mapPath}/blank.png`,
        noWrap: true
    }).addTo(map);

}
