import { RoleValidator } from './role.validator';
import { AuthorizationManager, SecurityFactory } from '@zainabed/security';
import { AuthorizationManagerFactory } from '../security/security.factory';
import { Injectable } from '@angular/core';

@Injectable()
export class SingleRoleValidator implements RoleValidator {

    private authorizationManager: AuthorizationManager;

    constructor(securityFactory: SecurityFactory) {
        this.authorizationManager = securityFactory.getAuthorizationManager();
    }

    isValid(role: string): boolean {
        return this.authorizationManager.isLogged() && this.authorizationManager.hasRole(role);
    }
} 