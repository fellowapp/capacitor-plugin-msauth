import { WebPlugin } from '@capacitor/core';

import type { BaseOptions, MsAuthPlugin } from './definitions';

interface WebBaseOptions extends BaseOptions {
  redirectUri?: string;
}

interface WebLoginOptions extends WebBaseOptions {
  scopes: string[];
}

type WebLogoutOptions = WebBaseOptions;

interface AuthResult {
  accessToken: string;
  idToken: string;
  scopes: string[];
}

export class MsAuth extends WebPlugin implements MsAuthPlugin {
  async login(_options: WebLoginOptions): Promise<AuthResult> {
    return Promise.reject(new Error('Not implemented on web.'));
  }

  logout(_options: WebLogoutOptions): Promise<void> {
    return Promise.reject(new Error('Not implemented on web.'));
  }

  logoutAll(_options: WebLogoutOptions): Promise<void> {
    return Promise.reject(new Error('Not implemented on web.'));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCurrentAccount(_options: BaseOptions): Promise<{ username: string; identifier: string }> {
    return Promise.reject(new Error('Not implemented on web.'));
  }
}
