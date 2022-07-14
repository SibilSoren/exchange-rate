import { useDispatch } from "react-redux/es/hooks/useDispatch";

export function CurrencyCodePicker({ supportedCurrencies, currencyCode }) {
  const dispatch = useDispatch();
  function onChange(e) {
    dispatch({ type: "rate/changeCurrencyCode", payload: e.target.value });
  }
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedCurrencies.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
