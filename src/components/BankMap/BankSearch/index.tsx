import { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import { SELECT_QUOTES } from "@constants/index";
import { filterSearchValue } from "@utils/helpers/updateDataBanks";
import search from "@assets/icons/search.svg";
import { type RootState } from "@redux/store";
import { type PropsBankSearch } from "@src/types";

import styles from "./styles.module.scss";

import { ThemeMode } from "@src/constants/themeMode";

class BankSearch extends Component<PropsBankSearch> {
  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handleChangeFilter(e.target.value);
  };

  handleClick = (value: string) => {
    this.props.handleChangeFilter(value);
  };

  render() {
    const { value, theme } = this.props;
    const filters = filterSearchValue(SELECT_QUOTES, value);

    const classBankSearch =
      theme === ThemeMode.DARK
        ? styles.bank
        : classNames(styles.bank, styles.bank_white);

    const classBankSearchInput =
      theme === ThemeMode.DARK
        ? styles.bank_search
        : classNames(styles.bank_search, styles.bank_search_white);

    const classBankSearchPopup =
      theme === ThemeMode.DARK
        ? styles.popup
        : classNames(styles.popup, styles.popup_white);

    return (
      <div className={classBankSearch}>
        <h2>Search currency in the bank</h2>
        <div className={classBankSearchInput}>
          <input
            placeholder="Сurrency search..."
            value={this.props.value}
            onChange={this.handleInput}
          />
          <img src={search} alt="search" />
          {!!value.trim().length &&
            !!filters.length &&
            filters[0].title !== value && (
              <div className={classBankSearchPopup}>
                {filters.map((item) => (
                  <p
                    key={item.title}
                    onClick={() => this.handleClick(item.title)}>
                    {item.title}
                  </p>
                ))}
              </div>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  theme: state.sliceMemory.theme
});

export default connect(mapStateToProps)(BankSearch);
