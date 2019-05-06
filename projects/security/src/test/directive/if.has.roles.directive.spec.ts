import { IfHasRolesDirective } from "../../lib/directive/if.has.roles.directive";
import { RoleValidator } from '../../lib/validator/role.validator';
import { getAbstractRoleDirectivMock } from './abstract.role.directive';

describe("Unit test for IfHasRolesDirective class.\n", () => {

    let directive: IfHasRolesDirective;
    let roles: string[];
    let mock: any;

    beforeEach(() => {
        mock = getAbstractRoleDirectivMock();
        directive = new IfHasRolesDirective(
            mock.templateRef,
            mock.viewContainerRef,
            mock.roleValidatorContext,
            mock.template);
        roles = ["USER"];
    });

    afterEach(() => {
        roles = null;
        directive = null;
        mock = null;
    });

    it("Directive class should have been defined.\n", () => {
        expect(directive).toBeTruthy();
    });

    it("Directive method isValid should invoke isValid method of RoleValidator.\n", () => {
        directive.isValid();
        expect(mock.roleValidator.isValid).toHaveBeenCalled();
    });

    it("Directive method setRoles should invoke method of Template class.\n", () => {
        directive.setRoles(roles);
        expect(mock.template.render).toHaveBeenCalledWith(directive, mock.templateRef, mock.viewContainerRef);
    });

    it("Setter & getter should work for field roles.\n", () => {
        directive.setRoles(roles);
        expect(directive.getRoles().size).toEqual(1);
    });

    it("ifHasRoles set should invoke setRoles method of directive.\n", () => {
        spyOn(directive, "setRoles");
        directive.ifHasRoles = roles;
        expect(directive.setRoles).toHaveBeenCalled();
    });
});