import { useMemo } from "react";
import { getTokenIcon, type TCurrency } from "@constants/token";

type CurrencyInputProps = {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currency: string;
  onCurrencyChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  readOnly?: boolean;
  currencies: TCurrency[];
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
  currency,
  onCurrencyChange,
  readOnly = false,
  currencies,
}) => {
  const icon = useMemo(() => {
    const exists = currencies.some((item) => item.currency === currency);
    return exists ? getTokenIcon(currency) : null;
  }, [currency, currencies]);

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <div className="flex items-center border rounded-lg px-3 py-2 relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className="flex-1 outline-none text-lg font-medium bg-transparent"
          inputMode="decimal"
        />

        {icon && (
          <img
            src={icon}
            alt={currency}
            className="w-4 h-4 absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none"
          />
        )}

        <select
          className="ml-2 bg-transparent text-sm font-medium focus:outline-none pl-5 pr-2"
          value={currency}
          onChange={onCurrencyChange}
        >
          {currencies.map((item, idx) => (
            <option key={item.currency + idx} value={item.currency}>
              {item.currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;
