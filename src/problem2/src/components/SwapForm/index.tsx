import './index.css';
import { useState, useEffect, useMemo } from 'react';
import CurrencyInput from '@components/CurrencyInput';
import SwapButton from '@components/SwapButton';
import { fetchData, type FetchResult } from '@utils/fetch';
import { API_TOKEN_INFO } from '@constants/api';
import { type TCurrency } from '@constants/token';
import { ErrorIcon } from '@components/ErrorIcon';

const SwapForm = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');

  const [currencies, setCurrencies] = useState<FetchResult<TCurrency[]>>({
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
      });
      setCurrencies(result);
    };
    loadCurrencies();
  }, []);

  useEffect(() => {
    if (!fromCurrency && currencies.data) {
      setFromCurrency(currencies.data[0].currency);
    }
    if (!toCurrency && currencies.data) {
      setToCurrency(currencies.data[1]?.currency ?? currencies.data[0].currency);
    }
  }, [currencies.data]);

  const convertedValue = useMemo(() => {
    if (!currencies.data) return '0';
    const from = currencies.data.find(c => c.currency === fromCurrency);
    const to = currencies.data.find(c => c.currency === toCurrency);
    const amountValue = parseFloat(amount || '1');
    if (!from || !to || isNaN(amountValue)) return '0';
    return ((amountValue * to.price) / from.price).toFixed(3);
  }, [amount, fromCurrency, toCurrency, currencies.data]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedValue);
  };

  if (currencies.loading) {
    return (
      <div className="flex items-center justify-center py-6">
        <div className="w-6 h-6 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (currencies.error) {
    return (
      <ErrorIcon message={currencies.error.message} />
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">💱 Swap Currency</h2>
        <p className="text-sm text-gray-500">Easily convert between tokens</p>
      </div>

      <CurrencyInput
        label="From"
        value={amount || '1'}
        onChange={(e) => setAmount(e.target.value)}
        currency={fromCurrency}
        onCurrencyChange={(e) => setFromCurrency(e.target.value)}
        currencies={currencies.data ?? []}
      />

      <div className="flex justify-center my-4">
        <SwapButton className="w-10 h-10 transform hover:rotate-180 transition duration-300" onClick={handleSwap} />
      </div>

      <CurrencyInput
        label="To"
        value={convertedValue}
        readOnly
        currency={toCurrency}
        onCurrencyChange={(e) => setToCurrency(e.target.value)}
        currencies={currencies.data ?? []}
      />
    </div>
  );
};

export default SwapForm;
