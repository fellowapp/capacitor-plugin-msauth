import { WebPlugin } from '@capacitor/core';
import type { BaseOptions, MsAuthPlugin } from './definitions';
interface WebBaseOptions extends BaseOptions {
    redirectUri?: string;
}
interface WebLoginOptions extends WebBaseOptions {
    scopes: string[];
}
declare type WebLogoutOptions = WebBaseOptions;
interface AuthResult {
    accessToken: string;
    idToken: string;
    scopes: string[];
}
export declare class MsAuth extends WebPlugin implements MsAuthPlugin {
    login(_options: WebLoginOptions): Promise<AuthResult>;
    logout(_options: WebLogoutOptions): Promise<void>;
    logoutAll(_options: WebLogoutOptions): Promise<void>;
    getCurrentAccount(_options: BaseOptions): Promise<{
        username: string;
        identifier: string;
    }>;
}
export {};
