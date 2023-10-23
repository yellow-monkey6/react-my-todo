import { ToDo } from "../ToDo";
import { Validator } from 'fluentvalidation-ts';

export class ToDoValidator extends Validator<ToDo> {
    constructor() {
        super();
        this.ruleFor('title').notEmpty().withMessage('Please enter titile');
    }
}