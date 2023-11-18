import {render, screen,waitFor,act, fireEvent} from "@testing-library/react";
import TodoListLayout from "../../../../src/views/components/templates/TodoListLayout"


// TodoList表示用モックデータ
const mockTodos = [
  {
    id: 1,
    subject: "宿題をやる",
    status: "未完了",
    scheduledStartDate: "2023年11月11日",
    scheduledCompletedDate: "2023年11月12日",
    completedDate: "2023年11月13日"
  },
  {
    id: 2,
    subject: "会議の準備",
    status: "進行中",
    scheduledStartDate: "2023年11月10日",
    scheduledCompletedDate: "2023年11月15日",
    completedDate: "2023年11月16日"
  },
  {
    id: 3,
    subject: "プロジェクト計画の提出",
    status: "完了",
    scheduledStartDate: "2023年11月05日",
    scheduledCompletedDate: "2023年11月10日",
    completedDate: "2023年11月09日"
  },
  {
    id: 4,
    subject: "テコキの実施",
    status: "完了",
    scheduledStartDate: "2023年11月05日",
    scheduledCompletedDate: "2023年11月10日",
    completedDate: "2023年11月09日"
  },
  {
    id: 5,
    subject: "プロジェクト計画のてこき",
    status: "完了",
    scheduledStartDate: "2023年11月05日",
    scheduledCompletedDate: "2023年11月10日",
    completedDate: "2023年11月09日"
  }
];

// fetchのモック
const mockFetch  = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockTodos),
    ok: true,
  } as Response)
);

// グローバルなfetchにモックを割り当て
global.fetch = mockFetch;

describe('TodoListLayout', () => {

  // beforeEach(() => {
  //   mockFetch.mockClear();
  // });

  test("TodoList画面のタイトル表示テスト", async () => {
    await act(async () => {
      render(<TodoListLayout />);
    });
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  });
  
  test("TodoList画面のリスト表示テコキ", async() => {
    await act(async () => {
      render(<TodoListLayout />);
    });
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
      const element01 = screen.getByText(/宿題をやる/i);
      const element02 = screen.getByText(/会議の準備/i);
      const element03 = screen.getByText(/プロジェクト計画の提出/i);
      // const element04 = screen.getByText(/テコキの実施/i);
      // const element05 = screen.getByText(/プロジェクト計画のてこき/i);

      expect(element01).toBeInTheDocument();
      expect(element02).toBeInTheDocument();
      expect(element03).toBeInTheDocument();
      // expect(element04).toBeInTheDocument();
      // expect(element05).toBeInTheDocument();
      
    });

  });


});
