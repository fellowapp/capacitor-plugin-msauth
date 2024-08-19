import { WebPlugin } from '@capacitor/core';
export class MsAuth extends WebPlugin {
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
//# sourceMappingURL=web.js.map