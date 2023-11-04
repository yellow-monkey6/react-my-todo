import { render, screen } from "@testing-library/react";
import DeleteIcon from '@mui/icons-material/Delete';
import SubmitButton from "../../../../src/views/components/atoms/SubmitButton";

test("ボタンの表示", () => {
    render(<SubmitButton text="submit"></SubmitButton>);
    expect(screen.getByText("submit")).toBeInTheDocument();
});