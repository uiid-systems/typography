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
      <>
        <Text render={<h1 />} />
        <Text render={() => <h2>{text}</h2>} />
      </>
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    const h2 = screen.getByRole("heading", { level: 2 });
    const lorem = screen.getByText(text);

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
    expect(lorem).toBeInTheDocument();
  });

  test("supports style props", () => {
    render(<Text data-testid="Text" visibility="hidden" />);
    const text = screen.getByTestId("Text");
    expect(text).toHaveStyle("visibility: hidden");
  });

  // test("supports ref", () => {
  //   const ref = createRef();
  //   render(<Text data-testid="Text" ref={ref} />);
  //   const element = screen.getByTestId("Text");
  //   expect(ref.current).toBe(element);
  // });
});
