import {render, screen} from "@testing-library/react";
import Layout from "../../../../src/views/components/templates/Layout"

test("Layoutコンポーネントの表示", () => {
    // arrange
    render(<Layout></Layout>);

    // action
    const element01 = screen.getByText("Sample Title");
    const element02 = screen.getByLabelText("Sample Label 01");
    const element03 = screen.getByLabelText("Sample Label 02");
    const element04 = screen.getByLabelText("Sample Label 03");
    const element05 = screen.getByText("submit");
    const element06 = screen.getByText("cancel");

    // assert
    expect(element01).toBeInTheDocument();
    expect(element02).toBeInTheDocument();
    expect(element03).toBeInTheDocument();
    expect(element04).toBeInTheDocument();
    expect(element05).toBeInTheDocument();
    expect(element06).toBeInTheDocument();


});