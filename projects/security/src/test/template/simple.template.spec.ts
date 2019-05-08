import { SimpleTemplate } from "../../lib/template/simple.template";

describe("Unit test for SimpleTemplate class.\n", () => {
    let template: SimpleTemplate;
    let view: any;
    let templateRef: any;
    let viewContainerRef: any;

    beforeEach(() => {
        view = jasmine.createSpyObj("view", ["isValid"]);
        viewContainerRef = jasmine.createSpyObj("viewContainerRef", ["remove", "createEmbeddedView"]);
        templateRef = jasmine.createSpyObj("templateRef", [""]);
        template = new SimpleTemplate();
    });

    it("Class should have been defined.\n", () => {
        expect(template).toBeTruthy();
    });

    it("render method should invoke remove and isValid method.\n", () => {
        template.render(view, templateRef, viewContainerRef);
        expect(viewContainerRef.remove).toHaveBeenCalled();
        expect(view.isValid).toHaveBeenCalled();
    });

    it("render method should invoke createEmbeddedView when isValid method return true.\n", () => {
        view.isValid.and.returnValue(true);
        template.render(view, templateRef, viewContainerRef);
        expect(viewContainerRef.createEmbeddedView).toHaveBeenCalled();
    });
});