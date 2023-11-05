import { ToDoListRepository } from "../../src/gateways/ToDoListRepository"

test('toDoListRepository test', () => {
    const toDoListRepository = new ToDoListRepository();
    const result = toDoListRepository.getToDoList();
    expect(result).not.toBeNull();
});