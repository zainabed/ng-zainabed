import { Security } from "@zainabed/security";
import { AuthorizationManagerFactory } from '../../lib/security/security.factory';

describe("Unit test for SecurityFactory class.\n", () => {
    let securityFactory: any;
    let security: Security;

    beforeEach(() => {
        securityFactory = jasmine.createSpyObj("securityFactory", ["getAuthorizationManager"]);
        spyOn(Security, "getSecurityFactory");
        Security.getSecurityFactory.and.returnValue(securityFactory);
    });

    it("Security methods should be invok when get method of class is called.\n", () => {
        AuthorizationManagerFactory.get();
        expect(Security.getSecurityFactory).toHaveBeenCalled();
        expect(securityFactory.getAuthorizationManager).toHaveBeenCalled();
    });
});