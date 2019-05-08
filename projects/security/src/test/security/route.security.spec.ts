import { RouteSecurity } from "../../lib/security/route.security";
import { RoleParameter } from '../../lib/validator/role.paramater';

describe("Unit test for RouteSecurity class.\n", () => {
    let routeSecurity: RouteSecurity;
    let roleValidatorContext: any;
    let roleValidator: any;
    let route: any;
    let state: any;
    let roleType: string;
    let roles: string[];

    beforeEach(() => {
        roleValidator = jasmine.createSpyObj("RoleValidator", ["isValid"]);
        roleValidatorContext = jasmine.createSpyObj("roleValidatorContext", ["get"]);
        roleValidatorContext.get.and.returnValue(roleValidator);
        routeSecurity = new RouteSecurity(roleValidatorContext);
        roleType = "SINGLE";
        roles = ["USER"];
        route = {
            type: roleType,
            roles: roles
        };
        state = {};
    });

    afterEach(() => {
        routeSecurity = null;
        roleValidatorContext = null;
        roleValidator = null;

    });

    it("RouteSecurity instance should have been define.\n", () => {
        expect(routeSecurity).toBeTruthy();
    });

    it("canActivate method should invoke validateRoles method.\n", () => {
        spyOn(routeSecurity, "validateRoles");
        routeSecurity.canActivate(route, state);
        expect(routeSecurity.validateRoles).toHaveBeenCalledWith(route, state);
    });

    it("canActivateChild method should invoke validateRoles method.\n", () => {
        spyOn(routeSecurity, "validateRoles");
        routeSecurity.canActivateChild(route, state);
        expect(routeSecurity.validateRoles).toHaveBeenCalledWith(route, state);
    });

    it("getRoleParameter method should return instance of RoleParameter.\n", () => {
        let roleParameter: RoleParameter = routeSecurity.getRoleParameter(route);
        expect(roleParameter.type).toEqual(Symbol.for(roleType));
        expect(roleParameter.roles.size).toEqual(roles.length);
    });

    describe("Test cases for validateRoles method.\n", () => {
        let data: any;
        beforeEach(() => {
            data = {
                data: route
            };
        });

        it("validateRoles should invoke isValid method of validator class.\n", () => {
            routeSecurity.validateRoles(data, state);
            expect(roleValidator.isValid).toHaveBeenCalled();
        });

        it("validateRoles should return false value when exception is thrown.\n", () => {
            roleValidator.isValid.and.throwError("some error");
            expect(routeSecurity.validateRoles(data, state)).toEqual(false);
        });
    });

});