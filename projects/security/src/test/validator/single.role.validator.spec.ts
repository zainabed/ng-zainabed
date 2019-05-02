import { SingleRoleValidator } from "../../lib/validator/single.role.validator";
import { Security, SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { AuthorizationManagerFactory } from '../../lib/security/security.factory';

describe("Unit test for SingleRoleValidator class.\n", () => {
    let singleRoleValidator: SingleRoleValidator;
    let authorizationManager: any;
    let securityFactory: any;
    let roles: Set<string>;

    beforeEach(() => {
        authorizationManager = jasmine.createSpyObj("AuthorizationManager", ["isLogged", "hasRoles"]);
        securityFactory = jasmine.createSpyObj("SecurityFactory", ["getAuthorizationManager"]);
        securityFactory.getAuthorizationManager.and.returnValue(authorizationManager);
        singleRoleValidator = new SingleRoleValidator(securityFactory);
        roles = new Set("test");
    });

    it("Object of class can be instantiated.\n", () => {
        expect(singleRoleValidator).toBeTruthy();
    });

    it("securityFactory method should have been called on constructor call.\n", () => {
        expect(securityFactory.getAuthorizationManager).toHaveBeenCalled();
    });


    it("isValid method should invoke methods of authorizationManager.\n", () => {
        authorizationManager.isLogged.and.returnValue(true);
        singleRoleValidator.isValid(roles);
        expect(authorizationManager.isLogged).toHaveBeenCalled();
        expect(authorizationManager.hasRoles).toHaveBeenCalled();
    });

    it("iValid should return false when isLogged method return false.\n", () => {
        authorizationManager.isLogged.and.returnValue(false);
        expect(singleRoleValidator.isValid(roles)).toEqual(false);
    });

    it("iValid should return false when hasRoles method return false.\n", () => {
        authorizationManager.isLogged.and.returnValue(true);
        authorizationManager.hasRoles.and.returnValue(false);
        expect(singleRoleValidator.isValid(roles)).toEqual(false);
    });
    it("iValid should return true when hasRoles & isLogged methods return true.\n", () => {
        authorizationManager.isLogged.and.returnValue(true);
        authorizationManager.hasRoles.and.returnValue(true);
        expect(singleRoleValidator.isValid(roles)).toEqual(true);
    });
}); 