import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { AbstractRoleDirective } from "./abstract.role.directive";

@Directive({
    selector: "[ifHasRoles]"
})
export class IfHasRolesDirective extends AbstractRoleDirective {

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
    @Input() set ifHasRoles(roles: string[]) {
        this.setGrantedRoles(roles);
        this.updateView();
    }

    isValidRoles() {
        return this.authorizationManager.hasRoles(this._grantedRoles);
    }
}