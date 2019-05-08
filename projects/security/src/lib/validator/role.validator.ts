export abstract class RoleValidator {
    
    /**
     * 
     * @param roles 
     */
    abstract isValid(roles: Set<string>): boolean;
    
}