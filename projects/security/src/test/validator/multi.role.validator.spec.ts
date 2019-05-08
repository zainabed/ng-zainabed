import { MultiRoleValidator } from "../../lib/validator/multi.role.validator";

describe("Unit test for MultiRoleValidator class.\n", () => {
    let validator: MultiRoleValidator;
    let securityFactory: any;
    let authorizationManager: any;

    beforeEach(() => {
        authorizationManager = jasmine.createSpyObj("AuthorizationManager", ["isLogged", "hasRoles"]);
        securityFactory = jasmine.createSpyObj("SecurityFactory", ["getAuthorizationManager"]);
        securityFactory.getAuthorizationManager.and.returnValue(authorizationManager);
        validator = new MultiRoleValidator(securityFactory);
    });

    it("class should have been defined.\n", () => {
        expect(validator).toBeTruthy();
    });

    it("Constructor method should call method of SecurityFactory.\n", () => {
        expect(securityFactory.getAuthorizationManager).toHaveBeenCalled();
    });

    describe("Unit test for isValid & validateRole method.\n", () => {
        let roles: Set<string>;

        beforeEach(() => {
            roles = new Set(["ADMIN", "USER"]);
            authorizationManager.isLogged.and.returnValue(true);
        });

        it("isValid method should invoke isLogged & hasRoles method of manager.\n", () => {
            validator.isValid(roles);
            expect(authorizationManager.isLogged).toHaveBeenCalled();
            expect(authorizationManager.hasRoles).toHaveBeenCalled();
        });

        it("iValid should return false when isLogged method return false.\n", () => {
            authorizationManager.isLogged.and.returnValue(false);
            expect(validator.isValid(roles)).toEqual(false);
        });
    
        it("iValid should return false when hasRoles method return false.\n", () => {
            authorizationManager.hasRoles.and.returnValue(false);
            expect(validator.isValid(roles)).toEqual(false);
        });

        it("iValid should return true when hasRoles & isLogged methods return true.\n", () => {
            authorizationManager.hasRoles.and.returnValue(true);
            expect(validator.isValid(roles)).toEqual(true);
        });

        it("validateRole method should invoke hasRoles method of manager.\n", () => {
            validator.validateRole(roles);
            expect(authorizationManager.hasRoles).toHaveBeenCalled();
        });
    });


})