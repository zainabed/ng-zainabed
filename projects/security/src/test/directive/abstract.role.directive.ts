export function getAbstractRoleDirectivMock() {
    let mock = {
        roleValidatorContext: jasmine.createSpyObj("RoleValidatorContext", ["get"]),
        roleValidator: jasmine.createSpyObj("RoleValidator", ["isValid"]),
        template: jasmine.createSpyObj("Template", ["render"])
    }
    mock.roleValidatorContext.get.and.returnValue(mock.roleValidator);
    return mock;
}