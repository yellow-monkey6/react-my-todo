import {fireEvent, render, screen} from "@testing-library/react";

import ContainedButton from "../../../../src/views/components/atoms/ContainedButton";

test("ボタンの表示", () => {
    render(<ContainedButton text="contained-button"></ContainedButton>);
    expect(screen.getByText("contained-button")).toBeInTheDocument();
});

test("onclickイベントの発火", () => {
    const mockFn = jest.fn();
    render(<ContainedButton text="contained-button" onClick={mockFn}></ContainedButton>);
    fireEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalled();
});