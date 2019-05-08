import { IfHasAnyRoleDirective } from "../../lib/directive/if.has.any.role.directive";
import { RoleValidator } from '../../lib/validator/role.validator';
import { getAbstractRoleDirectivMock } from './abstract.role.directive';

describe("Unit test for IfHasAnyRoleDirective class.\n", () => {

    let directive: IfHasAnyRoleDirective;
    let roles: string[];
    let mock: any;

    beforeEach(() => {
        mock = getAbstractRoleDirectivMock();
        directive = new IfHasAnyRoleDirective(
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

    it("ifHasAnyRole set should invoke setRoles method of directive.\n", () => {
        spyOn(directive, "setRoles");
        directive.ifHasAnyRole = roles;
        expect(directive.setRoles).toHaveBeenCalled();
    });
});