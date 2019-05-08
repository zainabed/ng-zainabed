import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { RoleValidator } from '../validator/role.validator';
import { RoleValidatorContext } from '../validator/role.validator.context';
import { RoleParameter } from '../validator/role.paramater';
import { Observable } from 'rxjs';

/**
 * 
 */
@Injectable()
export class RouteSecurity implements CanActivate, CanActivateChild {

    constructor(private roleValidatorContext: RoleValidatorContext) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.validateRoles(next, state);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.validateRoles(childRoute, state);
    }

    validateRoles(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        try {
            const roleParameter: RoleParameter = this.getRoleParameter(next.data);
            let roleValidator: RoleValidator = this.roleValidatorContext.get(roleParameter.type);
            return roleValidator.isValid(roleParameter.roles);
        } catch (error) {
            return false;
        }
    }

    getRoleParameter(data): RoleParameter {
        let roleParameter: RoleParameter = {
            type : Symbol.for(data.type),
            roles : new Set(data.roles)
        };
        return roleParameter;
    }



}