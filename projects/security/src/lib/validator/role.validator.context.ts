import { RoleValidator } from './role.validator';

export abstract class RoleValidatorContext {
    abstract get(type: Symbol): RoleValidator;
} 