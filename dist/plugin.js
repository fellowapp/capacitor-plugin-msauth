var capacitorMsAuth = (function (exports, core) {
    'use strict';

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

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
