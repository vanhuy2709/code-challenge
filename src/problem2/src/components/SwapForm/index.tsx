import './index.css';
import { useState } from 'react';
import CurrencyInput from '@components/CurrencyInput';
import SwapButton from '@components/SwapButton';

const SwapForm = () => {
  const [amount, setAmount] = useState('1.000');
  const [converted, setConverted] = useState('23.000');
  const [fromCurrency, setFromCurrency] = useState('EUR');
  const [toCurrency, setToCurrency] = useState('VND');

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setAmount(converted)
    setConverted(amount)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* Exchange rate info */}
      <div className="text-center mb-4">
        <div className="text-3xl font-semibold">Swap Currency</div>
      </div>

      {/* Input amount */}
      <CurrencyInput
        label='Amount'
        value={amount}
        onChange={(e) => { setAmount(e.target.value) }}
        currency={fromCurrency}
        onCurrencyChange={(e) => { setFromCurrency(e.target.value) }}
      />

      {/* Swap icon */}
      <SwapButton className='w-10' onClick={handleSwap} />

      {/* Output amount */}
      <CurrencyInput
        label="Converted to"
        value={converted}
        readOnly
        currency={toCurrency}
        onCurrencyChange={(e) => { setToCurrency(e.target.value) }}
      />

      {/* Buttons */}
      {/* <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 rounded-full mb-2">
        Gửi tiền
      </button>
      <button className="w-full border border-black text-black font-medium py-2 rounded-full hover:bg-gray-100">
        Track exchange rate
      </button> */}
    </div>
  )
}

export default SwapForm;