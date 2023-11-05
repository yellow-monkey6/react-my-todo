import { IOutputData } from "../IOutputData";

export class ToDoList<ToDo> implements IOutputData
{
    private items : Array<ToDo>;

    constructor (n? : number, defaultValue? : ToDo) {
        if (n === undefined)
        {
            this.items = [];
        }
        else
        {
            if (n && defaultValue)
            {
                this.items = Array(n).fill(defaultValue);
            }
            else
            {
                this.items = Array(n);
            }
        }
    }

    push(item : ToDo)
    {
        this.items.push(item);
    }

    pushBulk(items: Array<ToDo>)
    {
        this.items.concat(items);
    }

    pop()
    {
        return this.items.pop();
    }

    set(index : number, item: ToDo)
    {
        this.items[index] = item;
    }

    getItems() : Array<ToDo> 
    {
        return this.items;
    }
}