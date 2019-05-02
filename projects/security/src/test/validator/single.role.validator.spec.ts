import { SingleRoleValidator } from "../../lib/validator/single.role.validator";
import { Security, SecurityFactory, AuthorizationManager } from '@zainabed/security';
import { AuthorizationManagerFactory } from '../../lib/security/security.factory';

describe("Unit test for SingleRoleValidator class.\n", () => {
    let singleRoleValidator: SingleRoleValidator;
    let authorizationManager: any;
    let securityFactory: any;
    let role: string;

    beforeEach(() => {
        authorizationManager = jasmine.createSpyObj("AuthorizationManager", ["isLogged", "hasRole"]);
        securityFactory = jasmine.createSpyObj("SecurityFactory", ["getAuthorizationManager"]);
        securityFactory.getAuthorizationManager.and.returnValue(authorizationManager);
        singleRoleValidator = new SingleRoleValidator(securityFactory);
        role = "test";
    });

    it("Object of class can be instantiated.\n", () => {
        expect(singleRoleValidator).toBeTruthy();
    });

    it("securityFactory method should have been called on constructor call.\n", () => {
        expect(securityFactory.getAuthorizationManager).toHaveBeenCalled();
    });


    it("isValid method should invoke methods of authorizationManager.\n", () => {
        authorizationManager.isLogged.and.returnValue(true);
        singleRoleValidator.isValid(role);
        expect(authorizationManager.isLogged).toHaveBeenCalled();
        expect(authorizationManager.hasRole).toHaveBeenCalled();
    });

    it("iValid should return false when isLogged method return false.\n", () => {
        authorizationManager.isLogged.and.returnValue(false);
        expect(singleRoleValidator.isValid(role)).toEqual(false);
    });

    it("iValid should return false when hasRole method return false.\n", () => {
        authorizationManager.isLogged.and.returnValue(true);
        authorizationManager.hasRole.and.returnValue(false);
        expect(singleRoleValidator.isValid(role)).toEqual(false);
    });
    it("iValid should return true when hasRole & isLogged methods return true.\n", () => {
        authorizationManager.isLogged.and.returnValue(true);
        authorizationManager.hasRole.and.returnValue(true);
        expect(singleRoleValidator.isValid(role)).toEqual(true);
    });
}); 