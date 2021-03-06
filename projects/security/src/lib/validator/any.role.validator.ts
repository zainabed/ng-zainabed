import { SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { RoleValidator } from './role.validator';
import { AbstractRoleValidator } from './abstract.role.valdator';
import { Injectable } from '@angular/core';

@Injectable()
export class AnyRoleValidator extends AbstractRoleValidator {

    constructor(securityFactory: SecurityFactory) {
        super(securityFactory);
    }

    validateRole(roles: Set<string>): boolean {
        return this.authorizationManager.hasAnyRoles(roles);
    }
}