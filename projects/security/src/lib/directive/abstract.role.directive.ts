import { Input, ViewContainerRef, TemplateRef, OnInit } from "@angular/core";
import { AuthorizationManager, Security, SecurityFactory } from '@zainabed/security';


export abstract class AbstractRoleDirective implements OnInit {

    protected _grantedRoles: Set<string>;
    protected authorizationManager: AuthorizationManager;

    constructor(
        protected templateRef: TemplateRef<any>,
        protected viewContainerRef: ViewContainerRef) {
        this.setGrantedRoles(null);
        let securityFactory: SecurityFactory = Security.getSecurityFactory();
        this.authorizationManager = securityFactory.getAuthorizationManager();
    }

    ngOnInit(): void {
       
    }

    /**
     * 
     * @param roles 
     */
    setGrantedRoles(roles: string[]) {
        this._grantedRoles = new Set(roles);
    }

    /**
     * 
     * @param role 
     */
    setGrantedRole(role: string) {
        this._grantedRoles = new Set(role);
    }

    /**
     * 
     */
    get grantedRoles(): Set<string> {
        return this._grantedRoles;
    }


    /**
     * 
     */
    updateView() {
        console.log(this.viewContainerRef);
        this.viewContainerRef.remove();
        if (this.isValidRoles()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }

    /**
     * 
     */
    abstract isValidRoles();
}