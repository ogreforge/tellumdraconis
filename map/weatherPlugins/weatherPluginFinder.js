

const weatherPluginFinder = function () {
    async function listPlugins() {
        return [

            { default: true, name: "Snow", value: "snowPlugin", path:"./weatherPlugins/snowPlugin"}
        ]
    }
    return {

        listPlugins: listPlugins
    }
}();

module.exports = weatherPluginFinder;