import { AnyRoleValidator } from "../../lib/validator/any.role.validator";

describe("Unit test for AnyRoleValidator class.\n", () => {
    let validator: AnyRoleValidator;
    let securityFactory: any;
    let authorizationManager: any;

    beforeEach(() => {
        authorizationManager = jasmine.createSpyObj("AuthorizationManager", ["isLogged", "hasAnyRoles"]);
        securityFactory = jasmine.createSpyObj("SecurityFactory", ["getAuthorizationManager"]);
        securityFactory.getAuthorizationManager.and.returnValue(authorizationManager);
        validator = new AnyRoleValidator(securityFactory);
    });

    it("class should have been defined.\n", () => {
        expect(validator).toBeTruthy();
    });

    it("Constructor method should call method of SecurityFactory.\n", () => {
        expect(securityFactory.getAuthorizationManager).toHaveBeenCalled();
    });

    describe("Unit test for isValid method.\n", () => {
        let roles: Set<string>;

        beforeEach(() => {
            roles = new Set(["ADMIN", "USER"]);
            authorizationManager.isLogged.and.returnValue(true);
            validator.isValid(roles);
        });

        it("isValid method should invoke isLogged & hasAnyRoles method of manager.\n", () => {
            expect(authorizationManager.isLogged).toHaveBeenCalled();
            expect(authorizationManager.hasAnyRoles).toHaveBeenCalled();
        });

        it("iValid should return false when isLogged method return false.\n", () => {
            authorizationManager.isLogged.and.returnValue(false);
            expect(validator.isValid(roles)).toEqual(false);
        });
    
        it("iValid should return false when hasAnyRoles method return false.\n", () => {
            authorizationManager.hasAnyRoles.and.returnValue(false);
            expect(validator.isValid(roles)).toEqual(false);
        });
        it("iValid should return true when hasAnyRoles & isLogged methods return true.\n", () => {
            authorizationManager.hasAnyRoles.and.returnValue(true);
            expect(validator.isValid(roles)).toEqual(true);
        });
    });


})