import { Template } from './template';
import { SimpleTemplate } from './simple.template';

export let TemplateFactory = (): Template<any> => {
    return SimpleTemplate.get();
}
