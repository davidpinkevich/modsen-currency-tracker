import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { type MockStoreEnhanced } from "redux-mock-store";
import { BlockCurrencies } from ".";
import { RootState, AppDispatch } from "@redux/store";

import { mockDataStore } from "@mocks/mockStore";

const mockStore = configureStore<RootState, AppDispatch>();

describe("BlockCurrencies component", () => {
  let store: MockStoreEnhanced<RootState, AppDispatch>;
  let renderedComponent: RenderResult;

  beforeEach(() => {
    store = mockStore(mockDataStore);
    renderedComponent = render(
      <Provider store={store}>
        <BlockCurrencies />
      </Provider>
    );
  });

  test("check Euro conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$1.075")).toBeInTheDocument();
  });

  test("check Argentine Peso conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$0.001")).toBeInTheDocument();
  });

  test("check Canadian Dollar conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$0.731")).toBeInTheDocument();
  });

  test("check Yen conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$0.006")).toBeInTheDocument();
  });

  test("check Australian Dollar conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$0.667")).toBeInTheDocument();
  });

  test("check Yuan conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$0.138")).toBeInTheDocument();
  });

  test("check Bitcoin conversion", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$62072.861")).toBeInTheDocument();
  });

  test("Libra", () => {
    const { getByText } = renderedComponent;

    expect(getByText("R$1.269")).toBeInTheDocument();
  });
});
