import { useState } from "react";
import InputBox from "./components/InputBox";
import useData from "./hooks/useData";
const App = () => {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const currencyData = useData(from);
  const options = Object.keys(currencyData);

  const convert = () => {
    const newAmount = amount * currencyData[to];
    setConvertedAmount(Number(newAmount.toFixed(2)));
  };
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(0);
    setAmount(convertedAmount);
  };
  return (
    <div className="h-screen w-screen bg-[url('https://plus.unsplash.com/premium_photo-1676673189320-76524a64684a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D')] bg-center bg-cover">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="w-md bg-white/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-sm border border-black p-4 flex flex-col items-center gap-2.5"
      >
        <div className="space-y-2 relative w-full">
          <InputBox
            label="from"
            amount={amount}
            currentCurrency={from}
            currencyOptions={options}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
          />
          <button
            type="button"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 py-1 rounded-lg text-white active:scale-95 cursor-pointer"
            onClick={swap}
          >
            Swap
          </button>
          <InputBox
            label="to"
            amount={convertedAmount}
            currentCurrency={to}
            currencyOptions={options}
            amountDisabled
            onCurrencyChange={(currency) => setTo(currency)}
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-2 py-1 rounded-lg active:scale-95 cursor-pointer"
        >
          Convert
        </button>
      </form>
    </div>
  );
};

export default App;
