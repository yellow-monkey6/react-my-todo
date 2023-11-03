import { render, screen } from "@testing-library/react";
import { Form } from "../../../src/views/components/Form";

test("名前の表示", () => {
    render(<Form name="taro" />);
    // 特定のDOMの要素を取得するアサーション
    expect(screen.getByText("taro")).toBeInTheDocument();
});