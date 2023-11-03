import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "../../../src/views/components/Form";

test("名前の表示", () => {
    render(<Form name="taro" />);
    // 特定のDOMの要素を取得するアサーション
    expect(screen.getByText("taro")).toBeInTheDocument();
});

test("見出しの表示", () => {
    render(<Form name="taro" />);
    expect(screen.getByRole("heading")).toHaveTextContent("アカウント情報");
});

test("ボタンをクリックすると、イベントハンドラーが実行される", () => {
    const mockFn = jest.fn();
    render(<Form name="taro" onSubmit={mockFn} />);
    fireEvent.click(screen.getByRole("button"));    
    expect(mockFn).toHaveBeenCalled();
});