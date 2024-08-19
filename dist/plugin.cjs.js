'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

class MsAuth extends core.WebPlugin {
    async login(_options) {
        return Promise.reject(new Error('Not implemented on web.'));
    }
    logout(_options) {
        return Promise.reject(new Error('Not implemented on web.'));
    }
    logoutAll(_options) {
        return Promise.reject(new Error('Not implemented on web.'));
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getCurrentAccount(_options) {
        return Promise.reject(new Error('Not implemented on web.'));
    }
}

const MsAuthPlugin = core.registerPlugin('MsAuthPlugin', {
    web: () => new MsAuth(),
});

exports.MsAuthPlugin = MsAuthPlugin;
//# sourceMappingURL=plugin.cjs.js.map
