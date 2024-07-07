import { BrowserRouter as Router } from "react-router-dom";
import { expect } from "@jest/globals";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

import { store } from "@redux/store";

import { Header } from ".";

describe("Header component", () => {
  test("render Header", () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    const title = screen.getByText("Timeline");
    expect(title).toBeInTheDocument();
  });
});
