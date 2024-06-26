import classNames from "classnames";

import { CURRENCY_ITEMS } from "@constants/currencyItems";
import { ThemeMode } from "@constants/themeMode";
import { getConversion } from "@utils/helpers/getConversion";
import { useConversion } from "@hooks/useConversion";
import { changeConversionISOTo } from "@redux/slices/sliceTracker";

import styles from "./styles.module.scss";

const Conversion = () => {
  const { input, setInput, result, theme, conversionISO, dispatch } =
    useConversion();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(getConversion(event.target.value));
  };

  const handleClick = (value: string) => {
    dispatch(changeConversionISOTo(value));
  };

  return (
    <div
      className={
        theme === ThemeMode.DARK
          ? styles.conversion
          : classNames(styles.conversion, styles.conversion_white)
      }>
      <div className={styles.conversion_info}>
        From: <span>{conversionISO.from}</span>
      </div>
      <input
        className={styles.conversion_input}
        value={input}
        onChange={handleChange}
        placeholder="Enter amount"
      />
      <div className={styles.conversion_info}>
        To: <span>{conversionISO.to}</span>
        <p>{result}</p>
      </div>
      <div className={styles.conversion_items}>
        {CURRENCY_ITEMS.QUOTES.map((item, index) => {
          return (
            <div
              onClick={() => handleClick(item.iso)}
              className={
                conversionISO.to === item.iso
                  ? classNames(
                      styles.conversion_item,
                      styles.conversion_item_active
                    )
                  : styles.conversion_item
              }
              key={index}>
              <img src={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Conversion };
