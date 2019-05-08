import { NgModule } from "@angular/core";
import { RouteSecurity } from "./security/route.security";
import { IfHasAnyRoleDirective } from "./directive/if.has.any.role.directive";
import { IfHasRoleDirective } from "./directive/if.has.role.directive";
import { IfHasRolesDirective } from "./directive/if.has.roles.directive";
import { AuthorizationManager } from '@zainabed/security';
import { AuthorizationManagerFactory } from "./security/security.factory";
import { Template } from './template/template';
import { RoleValidatorContextImpl } from './validator/role.validator.context.impl';
import { RoleValidatorContext } from './validator/role.validator.context';
import { SimpleTemplate } from './template/simple.template';
import { SingleRoleValidator } from './validator/single.role.validator';
import { AnyRoleValidator } from './validator/any.role.validator';
import { MultiRoleValidator } from './validator/multi.role.validator';

/**
 * 
 */
@NgModule({
    declarations: [
        IfHasAnyRoleDirective,
        IfHasRolesDirective,
        IfHasRoleDirective,

    ],
    providers: [
        SingleRoleValidator,
        AnyRoleValidator,
        MultiRoleValidator,
        RouteSecurity,
        {
            provide: AuthorizationManager,
            useFactory: AuthorizationManagerFactory.get,
        }, {
            provide: Template,
            useClass: SimpleTemplate
        }, {
            provide: RoleValidatorContext,
            useClass: RoleValidatorContextImpl
        }
    ],
    exports: [
       // SingleRoleValidator,
       // AnyRoleValidator,
       // MultiRoleValidator,
       // RouteSecurity,
        IfHasAnyRoleDirective,
        IfHasRolesDirective,
        IfHasRoleDirective
    ]
})
export class SecurityModule {

}