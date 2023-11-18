import { IInputData } from "./IInputData";
import { IOutputData } from "./IOutputData";

export interface IUseCase {
    run(input?: IInputData): IOutputData
}