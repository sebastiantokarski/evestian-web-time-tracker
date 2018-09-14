/* global chrome, define, module */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.config = factory();
    }
}(this, () => {

    return {
        ALL_TIME: '_',
        BLACKLIST_PROTOCOL: ['chrome:', 'chrome-extension:', 'vivaldi:', 'file:'],
        COUNT_ONLY_ACTIVE_STATE: true,
        DAY_OF_THE_WEEK: 'dw',
        DEVELOPMENT_MODE: !!chrome.runtime.getManifest().debug,
        DISPLAY_BADGE: true,
        EXTENSION_DATA: 'data',
        INTERVAL_UPDATE_S: 1000,
        INTERVAL_UPDATE_MIN: 1000 * 60
    };

}));