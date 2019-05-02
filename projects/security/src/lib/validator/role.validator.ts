export abstract class RoleValidator {
    
    /**
     * 
     * @param roles 
     */
    abstract isValid(roles: string | Set<string>): boolean;
    
}