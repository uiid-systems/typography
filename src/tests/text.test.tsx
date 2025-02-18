import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Text } from "../components/text";

const text = "lorem ipsum";

describe(`Text`, () => {
  test("accepts children", () => {
    render(<Text>{text}</Text>);
    const lorem = screen.getByText(text);
    expect(lorem).toBeInTheDocument();
  });

  test("supports render prop", () => {
    render(
      <Text
        render={<h1>{text}</h1>}
        className="hidden"
        style={{ display: "block" }}
      />
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveClass("hidden");
    expect(h1).toHaveStyle("display: block;");
    expect(h1).toHaveTextContent(text);
  });

  test("supports style props", () => {
    render(<Text data-testid="Text" visibility="hidden" />);
    const text = screen.getByTestId("Text");
    expect(text).toHaveStyle("visibility: hidden");
  });
});
