import { SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { RoleValidator } from './role.validator';

export class AnyRoleValidator implements RoleValidator {


    private authorizationManager: AuthorizationManager;

    constructor(securityFactory: SecurityFactory) {
        this.authorizationManager = securityFactory.getAuthorizationManager();
    }

    isValid(roles: Set<string>): boolean {
        return this.authorizationManager.isLogged() && this.authorizationManager.hasAnyRoles(roles);
    }
}