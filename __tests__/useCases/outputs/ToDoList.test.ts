import { ToDo } from "../../../src/domains/ToDo";
import { ToDoList } from "../../../src/useCases/outputs/ToDoList";

test('ToDoList push&pop test', ()=> {
    // arrange
    const toDoList = new ToDoList();
    let todo1 = new ToDo(
        "0000-0001",
        "test",
        "new",
        new Date(Date.now()),
        new Date(Date.now()),
        Date.now.toString(),
        Date.now.toString()
    );
    // act
    toDoList.push(todo1);
    const result = toDoList.pop();
    // assert
    expect(todo1).toEqual(result);
});

test('ToDoList set&getItems test', ()=> {
    // arrange
    let todo1 = new ToDo(
        "0000-0001",
        "test",
        "new",
        new Date(Date.now()),
        new Date(Date.now()),
        Date.now.toString(),
        Date.now.toString()
    );
    const toDoList = new ToDoList(0, todo1);
    let todo2 = new ToDo(
        "0000-0002",
        "test2",
        "new",
        new Date(Date.now()),
        new Date(Date.now()),
        Date.now.toString(),
        Date.now.toString()
    );
    // act
    toDoList.set(0, todo2);
    const result = toDoList.getItems();
    // assert
    expect(result[0]).toEqual(todo2);
});


