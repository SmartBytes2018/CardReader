cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.blackberry.invoke.client",
    "file": "plugins/com.blackberry.invoke/www/client.js",
    "pluginId": "com.blackberry.invoke",
    "clobbers": [
      "blackberry.invoke"
    ]
  },
  {
    "id": "com.chariotsolutions.nfc.plugin.NFC",
    "file": "plugins/com.chariotsolutions.nfc.plugin/www/phonegap-nfc.js",
    "pluginId": "com.chariotsolutions.nfc.plugin",
    "runs": true
  },
  {
    "id": "com.chariotsolutions.toast.plugin.Toasty",
    "file": "plugins/com.chariotsolutions.toast.plugin/www/phonegap-toast.js",
    "pluginId": "com.chariotsolutions.toast.plugin",
    "clobbers": [
      "toast"
    ]
  },
  {
    "id": "org.apache.cordova.vibration.notification",
    "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
    "pluginId": "org.apache.cordova.vibration",
    "merges": [
      "navigator.notification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.blackberry.invoke": "1.0.0",
  "com.chariotsolutions.nfc.plugin": "0.4.6",
  "com.chariotsolutions.toast.plugin": "1.1.1",
  "org.apache.cordova.vibration": "0.3.4"
};
// BOTTOM OF METADATA
});