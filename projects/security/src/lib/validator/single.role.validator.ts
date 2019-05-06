import { RoleValidator } from './role.validator';
import { AuthorizationManager, SecurityFactory } from '@zainabed/security';
import { AuthorizationManagerFactory } from '../security/security.factory';
import { Injectable } from '@angular/core';
import { AbstractRoleValidator } from './abstract.role.valdator';

@Injectable()
export class SingleRoleValidator extends AbstractRoleValidator {

    constructor(securityFactory: SecurityFactory) {
        super(securityFactory);
    }

    validateRole(roles: Set<string>): boolean {
        let role: string = roles.values().next().value;
        return this.authorizationManager.hasRole(role);
    }

} 