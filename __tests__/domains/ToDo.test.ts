import {ToDo} from "../../src/domains/ToDo";

test('todo test', () => {
    let todo1 = new ToDo(
        "0000-0001",
        "test",
        "new",
        new Date(Date.now()),
        new Date(Date.now()),
        Date.now.toString(),
        Date.now.toString()
    );
    expect(todo1).toBe(todo1);
});