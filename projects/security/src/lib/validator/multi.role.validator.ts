import { AbstractRoleValidator } from './abstract.role.valdator';
import { SecurityFactory } from '@zainabed/security';
import { Injectable } from '@angular/core';

@Injectable()
export class MultiRoleValidator extends AbstractRoleValidator {

    constructor(securityFactory: SecurityFactory) {
        super(securityFactory);
    }

    validateRole(roles: Set<string>): boolean {
        return this.authorizationManager.hasRoles(roles);
    }
}