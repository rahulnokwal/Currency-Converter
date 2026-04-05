import React, { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currentCurrency,
  amountDisabled,
  currencyOptions = [],
}) => {
  const id = useId();
  return (
    <div className="w-full bg-white p-4 text-sm rounded-lg flex">
      <div className="w-1/2">
        <label htmlFor={id} className="">
          {label}
        </label>
        <input
          id={id}
          type="number"
          className="w-full py-1.5 outline-none"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end text-right">
        <p className="w-full text-black/40 mb-2">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currentCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
