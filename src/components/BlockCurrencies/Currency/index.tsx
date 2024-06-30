import classNames from "classnames";

import { ThemeMode } from "@constants/themeMode";
import { createRealRate } from "@utils/helpers/createRealRate";
import { useAppDispatch } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import {
  changeConversionISOFrom,
  changeModal
} from "@redux/slices/sliceTracker";
import { type CurrencyItem } from "@src/types";

import { Loading } from "@components/Loading";

import styles from "./styles.module.scss";

const Currency: React.FC<CurrencyItem> = ({
  title,
  value,
  loading,
  iso,
  img
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (iso) {
      dispatch(changeModal());
      dispatch(changeConversionISOFrom(iso));
    }
  };

  return (
    <div
      onClick={handleClick}
      className={
        theme === ThemeMode.DARK
          ? styles.currency
          : classNames(styles.currency, styles.currency_white)
      }>
      <img src={img} alt={iso} />
      <div
        className={
          theme === ThemeMode.DARK
            ? styles.currency_info
            : classNames(styles.currency_info, styles.currency_info_white)
        }>
        <h3>{title}</h3>
        {loading ? <Loading value="" /> : <p>{createRealRate(value)}</p>}
      </div>
    </div>
  );
};

export { Currency };
