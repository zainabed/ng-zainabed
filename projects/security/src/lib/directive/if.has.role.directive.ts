import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { AbstractRoleDirective } from "./abstract.role.directive";
import { Template } from '../template/template';
import { RoleValidatorContext } from '../validator/role.validator.context';
import { ROLE_VALIDATOR_TYPE } from '../validator/role.validator.type';
import { Injector } from '@angular/core';

@Directive({
    selector: '[ifHasRole]'
})
export class IfHasRoleDirective extends AbstractRoleDirective {

    constructor(
        protected templateRef: TemplateRef<any>,
        protected viewContainerRef: ViewContainerRef,
        protected roleValidatorContext: RoleValidatorContext,
        protected template: Template<any>) {
        super( templateRef, viewContainerRef, roleValidatorContext,template);
        this.roleValidator = this.roleValidatorContext.get(ROLE_VALIDATOR_TYPE.SINGLE);
    }

    @Input()
    set ifHasRole(role: string) {
       this.setRoles([role]);
    }
}
