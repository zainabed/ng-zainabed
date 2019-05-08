import { SingleRoleValidator } from "../../lib/validator/single.role.validator";
import { Security, SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { AuthorizationManagerFactory } from '../../lib/security/security.factory';

describe("Unit test for SingleRoleValidator class.\n", () => {
    let validator: SingleRoleValidator;
    let authorizationManager: any;
    let securityFactory: any;
    let roles: Set<string>;

    beforeEach(() => {
        authorizationManager = jasmine.createSpyObj("AuthorizationManager", ["isLogged", "hasRole"]);
        securityFactory = jasmine.createSpyObj("SecurityFactory", ["getAuthorizationManager"]);
        securityFactory.getAuthorizationManager.and.returnValue(authorizationManager);
        validator = new SingleRoleValidator(securityFactory);
    });

    it("Object of class can be instantiated.\n", () => {
        expect(validator).toBeTruthy();
    });

    it("securityFactory method should have been called on constructor call.\n", () => {
        expect(securityFactory.getAuthorizationManager).toHaveBeenCalled();
    });

    describe("Unit test for isValid & validateRole method.\n", () => {
        beforeEach(() => {
            roles = new Set(["test"]);
            authorizationManager.isLogged.and.returnValue(true);
        });

        it("isValid method should invoke methods of authorizationManager.\n", () => {
            validator.isValid(roles);
            expect(authorizationManager.isLogged).toHaveBeenCalled();
            expect(authorizationManager.hasRole).toHaveBeenCalled();
        });

        it("iValid should return false when isLogged method return false.\n", () => {
            authorizationManager.isLogged.and.returnValue(false);
            expect(validator.isValid(roles)).toEqual(false);
        });

        it("iValid should return false when hasRole method return false.\n", () => {
            authorizationManager.hasRole.and.returnValue(false);
            expect(validator.isValid(roles)).toEqual(false);
        });

        it("iValid should return true when hasRole & isLogged methods return true.\n", () => {
            authorizationManager.hasRole.and.returnValue(true);
            expect(validator.isValid(roles)).toEqual(true);
        });

        it("validateRole method should invoke hasRole method of manager.\n", () => {
            validator.validateRole(roles);
            expect(authorizationManager.hasRole).toHaveBeenCalled();
        });
    });


}); 