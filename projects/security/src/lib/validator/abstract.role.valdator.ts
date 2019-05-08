import { RoleValidator } from './role.validator';
import { AuthorizationManager, SecurityFactory } from '@zainabed/security';

export abstract class AbstractRoleValidator implements RoleValidator {

    protected authorizationManager: AuthorizationManager;

    constructor(securityFactory: SecurityFactory) {
        this.authorizationManager = securityFactory.getAuthorizationManager();
    }

    public isValid(roles: Set<string>): boolean {
        return this.authorizationManager.isLogged() && this.validateRole(roles);
    }

    abstract validateRole(roles: Set<string>): boolean;
}