/**
 * @description Mock Test, to see if test works
 * @TODO Rewrite this test when the component is actually done.
 * - Button is currently just a placeholder button for testing purposes
 */

import { render, screen } from "@testing-library/react";
import Button from "../../src/app/components/Button";

test("Button should be in the document", () => {
  render(<Button variant="primary">Click Me</Button>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
