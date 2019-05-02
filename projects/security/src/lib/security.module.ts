import { NgModule } from "@angular/core";
import { RouteSecurity } from "./security/route.security";
import { IfHasAnyRoleDirective } from "./directive/if.has.any.role.directive";
import { IfHasRoleDirective } from "./directive/if.has.role.directive";
import { IfHasRolesDirective } from "./directive/if.has.roles.directive";
import { AuthorizationManager } from '@zainabed/security';
import { AuthorizationManagerFactory } from "./security/security.factory";
import { Template } from './template/template';
import { TemplateFactory } from './template/template.factory';
import { RoleValidatorContextImpl } from './validator/role.validator.context.impl';
import { RoleValidatorContext } from './validator/role.validator.context';

/**
 * 
 */
@NgModule({
    declarations: [
        IfHasAnyRoleDirective,
        IfHasRolesDirective,
        IfHasRoleDirective
    ],
    exports: [
        IfHasAnyRoleDirective,
        IfHasRolesDirective,
        IfHasRoleDirective
    ],
    providers: [
        RouteSecurity,
        {
            provide: AuthorizationManager,
            useFactory: AuthorizationManagerFactory.get,
        }, {
            provide: Template,
            useFactory: TemplateFactory
        }, {
            provide: RoleValidatorContext,
            useClass: RoleValidatorContextImpl
        }
    ]
})
export class SecurityModule {

}