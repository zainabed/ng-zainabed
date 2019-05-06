import { Template } from './template';
import { TemplateValidator } from './template.validator';
import { TemplateRef, ViewContainerRef } from '@angular/core';

export class SimpleTemplate implements Template<any> {

    render(view: TemplateValidator,
        templateRef: TemplateRef<any>,
        viewContainerRef: ViewContainerRef): void {
        viewContainerRef.remove();
        if (view.isValid()) {
            viewContainerRef.createEmbeddedView(templateRef);
        }
    }

}