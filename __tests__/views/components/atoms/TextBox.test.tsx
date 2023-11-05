import {render, screen} from "@testing-library/react";
import TextBox from "../../../../src/views/components/atoms/TextBox";

test("テキストボックスの表示", () => {
    // arrange
    render(<TextBox text="Sample Label 01"></TextBox>);
    // action
    const element = screen.getByLabelText("Sample Label 01");
    // assert
    expect(element).toBeInTheDocument();
});