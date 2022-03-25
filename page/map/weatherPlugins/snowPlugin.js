

const snow = require("./snow/L.Snow");
L.snow = snow;
class SnowPlugin {

    apply(regionLtLngs, map) {
        return; //needs fixing.
        var options = {
            speed: 120,
            layersCount: 5,
            density: 1,
            size: 12,
            color: '#eeeeee',
            opacity: 0.7
        };
        this.snow = L.snow(regionLtLngs, options).addTo(map);
    }

    remove() {
        this.snow?.remove();
    }

}
module.exports = SnowPlugin;