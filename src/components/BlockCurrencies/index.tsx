import { CURRENCY_ITEMS } from "@constants/currencyItems";
import { useAppSelector } from "@hooks/useRedux";
import { useTheme } from "@hooks/useTheme";
import {
  getDataCurrencies,
  getLoadCurrencies
} from "@redux/slices/sliceMemory";

import { Currency } from "./Currency";

import styles from "./styles.module.scss";

const BlockCurrencies: React.FC = () => {
  const createClass = useTheme();
  const data = useAppSelector(getDataCurrencies);
  const loading = useAppSelector(getLoadCurrencies);

  const classBlock = createClass(styles.currencies, styles.currencies_white);

  return (
    <div className={styles.currencies_container}>
      <div className={classBlock}>
        <h2>Stocks</h2>
        <div className={styles.block_currencies}>
          {CURRENCY_ITEMS.STOKS.map((item, index) => {
            return <Currency key={index} {...item} />;
          })}
        </div>
      </div>
      <div className={classBlock}>
        <h2>Quotes</h2>
        <div className={styles.block_currencies}>
          {CURRENCY_ITEMS.QUOTES.map((item, index) => {
            return (
              <Currency
                key={index}
                loading={loading}
                value={data ? data[item.iso]?.value : ""}
                {...item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { BlockCurrencies };
