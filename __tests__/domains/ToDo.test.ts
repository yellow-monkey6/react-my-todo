import {ToDo} from "../../src/domains/ToDo";

test('todo test', () => {
    let todo1 = new ToDo("test");
    expect(todo1).toBe(todo1);
});