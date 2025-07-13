import { useEffect, useState } from "react"
import { fetchData, type FetchResult } from "@utils/fetch"
import { API_TOKEN_INFO } from "@constants/api";

type CurrencyInputProps = {
  label: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  currency: string
  onCurrencyChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  readOnly?: boolean
}

type TCurrency = {
  currency: string;
  date: Date;
  price: number;
};

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
  currency,
  onCurrencyChange,
  readOnly = false,
}) => {
  const [currencies, setCurrencies] = useState<FetchResult<Array<TCurrency>>>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    const loadCurrencies = async () => {
      const result = await fetchData(async () => {
        const res = await fetch(API_TOKEN_INFO);
        if (!res.ok) throw new Error('Failed to fetch currencies');
        return res.json();
      })

      setCurrencies(result)
    }

    loadCurrencies();
  }, [])

  if (currencies.loading) return <p>Loading...</p>
  if (currencies.error) return <p className="text-red-400">Error: {currencies.error.message}</p>

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          className="flex-1 outline-none text-lg font-medium bg-transparent"
        />
        <select
          className="ml-2 bg-transparent text-sm font-medium focus:outline-none"
          value={currency}
          onChange={onCurrencyChange}
        >
          {currencies.data && currencies.data.map((item, idx) => {
            return (
              <option
                key={item.currency + idx}
                value={item.currency}
              >
                {item.currency}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default CurrencyInput
