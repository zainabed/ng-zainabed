import { Template } from './template';
import { TemplateValidator } from './template.validator';
import { TemplateRef, ViewContainerRef } from '@angular/core';

export class SimpleTemplate implements Template<any> {
    private static singletone: SimpleTemplate = null;

    render(view: TemplateValidator, templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef): void {
        viewContainerRef.remove();
        if (view.isValid()) {
            viewContainerRef.createEmbeddedView(templateRef);
        }
    }

    public static get() {
        if (SimpleTemplate.singletone == null) {
            SimpleTemplate.singletone = new SimpleTemplate();
        }
        return SimpleTemplate.singletone;
    }

}