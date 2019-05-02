import { RoleValidator } from '../../lib/validator/role.validator';
import { RoleValidatorContextImpl } from '../../lib/validator/role.validator.context.impl';
import { ROLE_VALIDATOR_TYPE } from "../../lib/validator/role.validator.type";

describe("Unit test for RoleValidatorFactoryImpl class.\n", () => {
    let factory: RoleValidatorContextImpl;

    beforeEach(() => {
        factory = new RoleValidatorContextImpl();
    });

    afterEach(() => {
        factory = null;
    });

    it("Factory class should have been defined.\n", () => {
        expect(factory).toBeTruthy();
    });

    it("setter & getter method should work accordingly.\n", () => {
        let testFactroy = jasmine.createSpyObj("test", ["isValid"]);
        factory.set(ROLE_VALIDATOR_TYPE.SINGLE, testFactroy);
        expect(factory.get(ROLE_VALIDATOR_TYPE.SINGLE)).toEqual(testFactroy);
    });
});