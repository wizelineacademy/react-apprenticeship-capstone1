import React from "react";
import { screen, render } from "@testing-library/react";

import Search from "./Search.component";

beforeEach(()=> {
    render(<Search/>);
})

test('There should be a input and a button', () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
})