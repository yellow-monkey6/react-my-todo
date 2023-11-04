import { IUseCase } from "./IUseCase";
import { ToDo } from "../domains/ToDo";
import { IInputData } from "./IInputData";
import { IOutputData } from "./IOutputData";
import { OutputData } from "./outputs/OutputData";

class GetToDoUseCase implements IUseCase {
    constructor() {}
    run(input?: IInputData) : IOutputData
    {
        const output = new OutputData<string, number>();
    }
}