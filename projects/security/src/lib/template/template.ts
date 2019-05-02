import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplateValidator } from './template.validator';

export abstract class Template<T> {
    abstract render(view: TemplateValidator, templateRef: TemplateRef<T>, viewContainerRef: ViewContainerRef): void;
}