import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Text } from "../components/text";
import { UIID } from "../constants";

const text = "lorem ipsum";

describe(`Text`, () => {
  test("accepts children", () => {
    render(<Text>{text}</Text>);
    const lorem = screen.getByText(text);
    expect(lorem).toBeInTheDocument();
  });

  test("supports render prop", () => {
    render(
      <Text render={<h1 />} className="hidden" style={{ display: "block" }}>
        {text}
      </Text>
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveClass("hidden");
    expect(h1).toHaveStyle("display: block;");
    expect(h1).toHaveTextContent(text);
  });

  test("uiid can't be overridden", () => {
    render(<Text uiid="xxx">{text}</Text>);
    const textEl = screen.getByText(text);
    expect(textEl).toHaveAttribute("uiid", UIID);
  });
  // test("supports style props", () => {
  //   render(<Text data-testid="Text" visibility="hidden" />);
  //   const text = screen.getByTestId("Text");
  //   expect(text).toHaveStyle("visibility: hidden");
  // });
});
