import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { Template } from '../template/template';
import { TemplateValidator } from '../template/template.validator';
import { RoleValidator } from '../validator/role.validator';
import { RoleValidatorContext } from '../validator/role.validator.context';
import { ROLE_VALIDATOR_TYPE } from "../validator/role.validator.type";

@Directive({ 
    selector: "[ifHasAnyRole]"
})
export class IfHasAnyRoleDirective implements TemplateValidator {

    roleValidator: RoleValidator;
    roles: Set<string>;

    constructor(
        private template: Template<any>,
        protected templateRef: TemplateRef<any>,
        protected viewContainerRef: ViewContainerRef,
        private roleValidatorContext: RoleValidatorContext) {
        this.roleValidator = this.roleValidatorContext.get(ROLE_VALIDATOR_TYPE.SINGLE);
    }

    @Input()
    set ifHasAnyRole(roles: string[]) {
        this.roles = new Set(roles);
        this.template.render(this, this.templateRef, this.viewContainerRef);
    }

    isValid(): boolean {
        return this.roleValidator.isValid(this.roles);
    }
}