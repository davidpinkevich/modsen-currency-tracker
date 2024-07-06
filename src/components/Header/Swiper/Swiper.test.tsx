import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";

import { Swiper } from ".";

import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
const store = mockStore({
  sliceMemory: {
    theme: "dark"
  }
});
describe("Swiper component", () => {
  test("changing theme on button click", () => {
    render(
      <Provider store={store}>
        <Swiper />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(store.getActions()).toEqual([{ type: "sliceMemory/changeTheme" }]);
  });
});
