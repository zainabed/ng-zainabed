import { IfHasRoleDirective } from "../../lib/directive/if.has.role.directive";
import { RoleValidator } from '../../lib/validator/role.validator';
import { getAbstractRoleDirectivMock } from './abstract.role.directive';

describe("Unit test for IfHasRoleDirective class.\n", () => {

    let directive: IfHasRoleDirective;
    let role: string;
    let mock: any;
    let roles: string[];

    beforeEach(() => {
        mock = getAbstractRoleDirectivMock();
        directive = new IfHasRoleDirective(
            mock.templateRef,
            mock.viewContainerRef,
            mock.roleValidatorContext,
            mock.template);
        role = "USER";
        roles = [role];
    });

    afterEach(() => {
        role = null;
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

    it("Setter & getter should work for field role.\n", () => {
        directive.setRoles(roles);
        expect(directive.getRoles().size).toEqual(1);
    });

    it("ifHasRole set should invoke setRoles method of directive.\n", () => {
        spyOn(directive, "setRoles");
        directive.ifHasRole = role;
        expect(directive.setRoles).toHaveBeenCalled();
    });
});