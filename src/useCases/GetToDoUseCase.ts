import { IUseCase } from "./IUseCase";
import { ToDo } from "../domains/ToDo";
import { IInputData } from "./IInputData";
import { IOutputData } from "./IOutputData";
import { ToDoList } from "./outputs/ToDoList";
import { ToDoValidator } from "../domains/validators/ToDoValidator";
import { ToDoListRepository } from "../gateways/ToDoListRepository";

export class GetToDoUseCase implements IUseCase {
    private gateway : ToDoListRepository<ToDo>;
    constructor(gateway : ToDoListRepository<ToDo>) 
    {
        this.gateway = gateway;
    }
    run(input?: IInputData) : IOutputData
    {
        const array = this.gateway.getToDoList();
        const output = new ToDoList<ToDo>();
        output.pushBulk(array);
        const validator = new ToDoValidator();
        output.getItems().forEach(o => {
            const result = validator.validate(o);
            if (!result)
            {
                // throw e
            }
        });
        return output;
    }
}