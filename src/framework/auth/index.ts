/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export * from './auth.options';
export * from './auth.module';
export * from './pages/auth/auth-page.component';
export * from './pages/login/login-page.component';
export * from './pages/register/register-page.component';
export * from './pages/request-password/request-password-page.component';
export * from './pages/reset-password/reset-password-page.component';

export * from './services/auth.service';
export * from './services/token.service';
export * from './providers/abstract-auth.provider';
export * from './providers/dummy-auth.provider';
export * from './providers/email-pass-auth.provider';


// TODO: 2) how to reference the theme CSS files?
// TODO: 3) validation
// TODO: 4) custom headers
