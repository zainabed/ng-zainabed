import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { AbstractRoleDirective } from "./abstract.role.directive";

@Directive({
    selector: '[ifHasRole]'
})
export class IfHasRoleDirective extends AbstractRoleDirective {

    /**
     * 
     * @param userSecurity 
     * @param templateRef 
     * @param viewContainerRef 
     */
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
        super(templateRef, viewContainerRef);
    }


    /**
     * 
     */
    @Input() set ifHasRole(role: string) {
        this.setGrantedRole(role);
        this.updateView();
    }

    isValidRoles() {
        return this.authorizationManager.hasRoles(this._grantedRoles);
    }
}
