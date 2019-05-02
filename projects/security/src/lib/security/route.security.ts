import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { RoleValidator } from '../validator/role.validator';
import { RoleValidatorContext } from '../validator/role.validator.context';

/**
 * 
 */
@Injectable()
export class RouteSecurity implements CanActivate {

    constructor(private roleValidatorContext: RoleValidatorContext) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let roleValidator: RoleValidator = this.roleValidatorContext.get(next.data.type);
        return roleValidator.isValid(next.data.roles);
    }

}