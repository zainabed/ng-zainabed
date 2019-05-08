import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { Template } from '../template/template';
import { TemplateValidator } from '../template/template.validator';
import { RoleValidator } from '../validator/role.validator';
import { RoleValidatorContext } from '../validator/role.validator.context';
import { ROLE_VALIDATOR_TYPE } from "../validator/role.validator.type";
import { AbstractRoleDirective } from '../../public_api';
import { Injector } from '@angular/core';

@Directive({
    selector: "[ifHasAnyRole]"
})
export class IfHasAnyRoleDirective extends AbstractRoleDirective {

    constructor(
        protected templateRef: TemplateRef<any>,
        protected viewContainerRef: ViewContainerRef,
        protected roleValidatorContext: RoleValidatorContext,
        protected template: Template<any>) {
        super( templateRef, viewContainerRef, roleValidatorContext,template);
        this.roleValidator = this.roleValidatorContext.get(ROLE_VALIDATOR_TYPE.ANY);
    }

    @Input()
    set ifHasAnyRole(roles: string[]) {
        this.setRoles(roles);
    }

}