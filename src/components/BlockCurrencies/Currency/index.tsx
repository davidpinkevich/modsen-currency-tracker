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
  const createClass = useTheme();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (iso) {
      dispatch(changeModal());
      dispatch(changeConversionISOFrom(iso));
    }
  };

  const classCurrency = createClass(styles.currency, styles.currency_white);

  const classCurrencyInfo = createClass(
    styles.currency_info,
    styles.currency_info_white
  );

  return (
    <div onClick={handleClick} className={classCurrency}>
      <img src={img} alt={iso} />
      <div className={classCurrencyInfo}>
        <h3>{title}</h3>
        {loading ? <Loading value="" /> : <p>{createRealRate(value)}</p>}
      </div>
    </div>
  );
};

export { Currency };
