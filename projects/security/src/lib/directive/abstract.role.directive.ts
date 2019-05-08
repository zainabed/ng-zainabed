import { Input, ViewContainerRef, TemplateRef, OnInit, Injector } from "@angular/core";
import { AuthorizationManager, Security, SecurityFactory } from '@zainabed/security';
import { Template } from '../template/template';
import { RoleValidatorContext } from '../validator/role.validator.context';
import { RoleValidator } from '../validator/role.validator';
import { TemplateValidator } from '../template/template.validator';


export abstract class AbstractRoleDirective implements TemplateValidator {

    protected roleValidator: RoleValidator;
    protected roles: Set<string>;
   
    constructor(
        protected templateRef: TemplateRef<any>,
        protected viewContainerRef: ViewContainerRef,
        protected roleValidatorContext: RoleValidatorContext,
        protected template: Template<any>) {
    }
    
    isValid(): boolean {
        return this.roleValidator.isValid(this.roles);
    }

    setRoles(roles: string[]) {
        this.roles = new Set(roles);
        this.template.render(this, this.templateRef, this.viewContainerRef);
    }

    getRoles(){
        return this.roles;
    }
}