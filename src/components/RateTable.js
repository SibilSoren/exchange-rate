import { useSelector } from "react-redux/es/hooks/useSelector";
import { getName } from "../store/userReducer";
export function RateTable({ currencyData, amount }) {
  const name = useSelector(getName);
  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(currencyData).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr key="name" colSpan={2}>
          Prepared table for {name}
        </tr>
      </tfoot>
    </table>
  );
}
