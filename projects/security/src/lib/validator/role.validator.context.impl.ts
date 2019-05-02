import { RoleValidator } from './role.validator';
import { SingleRoleValidator } from './single.role.validator';
import { RoleValidatorContext } from './role.validator.context';

export class RoleValidatorContextImpl implements RoleValidatorContext {
    roleValidatorMap: Map<Symbol, RoleValidator>;

    constructor(){
        this.roleValidatorMap = new Map();
    }

    set(type: Symbol, roleValidator: RoleValidator) {
        this.roleValidatorMap.set(type, roleValidator);
    }

    get(type: Symbol): RoleValidator {
       return this.roleValidatorMap.get(type);
    }
}