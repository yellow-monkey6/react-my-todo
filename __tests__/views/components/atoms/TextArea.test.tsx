import {render, screen} from "@testing-library/react";

import TextArea from "../../../../src/views/components/atoms/TextArea";

test("テキストエリアの表示", () => {
    // arrange
    render(<TextArea text="Sample Label 03"></TextArea>);
    // action
    const display = screen.getByLabelText("Sample Label 03");
    // assert
    expect(display).toBeInTheDocument();
});

test("テキストエリアの高さ", () => {
    // arrage
    render(<TextArea text="Sample Label 03" rows={4}></TextArea>);
    // action
    const display = screen.getByLabelText("Sample Label 03");
    // assert
    expect(display).toHaveAttribute("rows", "4");
});
