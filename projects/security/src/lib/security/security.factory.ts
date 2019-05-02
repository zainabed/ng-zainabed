import { AuthorizationManager, SecurityFactory, Security } from '@zainabed/security';

export class AuthorizationManagerFactory {
    static get(): AuthorizationManager {
        let securityFactory: SecurityFactory = Security.getSecurityFactory();
        return securityFactory.getAuthorizationManager();
    }
} 