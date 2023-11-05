import { GetToDoUseCase } from "../../src/useCases/GetToDoUseCase";
import { ToDoListRepository } from "../../src/gateways/ToDoListRepository";
import { ToDo } from "../../src/domains/ToDo";

test('getToDoListUseCase test', () => {
    const repository = new ToDoListRepository<ToDo>();
    const getToDoUseCase = new GetToDoUseCase(repository);
    const result = getToDoUseCase.run();
    expect(result).not.toBeNull();
});