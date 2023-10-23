import {ToDo} from "../../../src/domains/ToDo";
import {ToDoValidator} from "../../../src/domains/validators/ToDoValidator";

test('toDoValidator test', () => {
    const toDoValidator = new ToDoValidator();
    const todo2 = new ToDo(
        "id",
        "title",
        "new",
        new Date(Date.now()),
        new Date(Date.now()),
        Date.now().toString(),
        Date.now().toString()
    );
    const result = toDoValidator.validate(todo2);
    const expectObj = {};
    expect(expectObj).toEqual(result);
});