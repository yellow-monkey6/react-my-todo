import { ToDo } from "../domains/ToDo";
import toDoList from './dummy.json';
export class ToDoListRepository<ToDo>
{
    constructor(){}

    getToDoList() : Array<ToDo>
    {
        const array = toDoList as Array<any>;
        array.forEach((item) => {
            console.log(item);
        });
        return array;
    }
}