import { useState, useEffect } from "react";
const KEY = "b16c5ec4a2375045f43ffe36";

function App() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [baseCurrencyValue, setBaseCurrencyValue] = useState(1);
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const [result, setResult] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${KEY}/pair/${baseCurrency}/${outputCurrency}/${baseCurrencyValue}`
        );
        const data = await res.json();
        setResult(data.conversion_result.toFixed(2));
        setRate(data.conversion_rate);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [baseCurrency, outputCurrency, baseCurrencyValue]);

  return (
    <div className="main-box">
      <Title />
      <Select className="upper">
        <CurrencyList
          className="upper"
          setBaseCurrency={setBaseCurrency}
          value={baseCurrency}
        />
        <Input
          value={baseCurrencyValue}
          setBaseCurrencyValue={setBaseCurrencyValue}
          type="inp"
        />
      </Select>
      <SwapButton
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        outputCurrency={outputCurrency}
        setOutputCurrency={setOutputCurrency}
        rate={rate}
      />

      <Select className="lower">
        <CurrencyList
          className="lower"
          setOutputCurrency={setOutputCurrency}
          value={outputCurrency}
        />
        <Input value={result} type="out" />
      </Select>
    </div>
  );
}

function Title() {
  return (
    <>
      <h1>Currency Exchange Calculator</h1>
      <span>
        <i className="fas fa-calculator fa-8x"></i>
      </span>
    </>
  );
}

function Select({ children, className }) {
  return <div className={`${className} opt-menu`}>{children}</div>;
}

function CurrencyList({
  className,
  setBaseCurrency,
  setOutputCurrency,
  value,
}) {
  function handleChange(e) {
    return className === "upper"
      ? setBaseCurrency(e.target.value)
      : setOutputCurrency(e.target.value);
  }

  return (
    <select className="currencyList" onChange={handleChange} value={value}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="JPY">JPY</option>
      <option value="GBP">GBP</option>
      <option disabled>──────────</option>
      <option value="AED">AED</option>
      <option value="AFN">AFN</option>
      <option value="ALL">ALL</option>
      <option value="AMD">AMD</option>
      <option value="ANG">ANG</option>
      <option value="AOA">AOA</option>
      <option value="ARS">ARS</option>
      <option value="AUD">AUD</option>
      <option value="AWG">AWG</option>
      <option value="AZN">AZN</option>
      <option value="BAM">BAM</option>
      <option value="BBD">BBD</option>
      <option value="BDT">BDT</option>
      <option value="BGN">BGN</option>
      <option value="BHD">BHD</option>
      <option value="BIF">BIF</option>
      <option value="BMD">BMD</option>
      <option value="BND">BND</option>
      <option value="BOB">BOB</option>
      <option value="BRL">BRL</option>
      <option value="BSD">BSD</option>
      <option value="BTN">BTN</option>
      <option value="BWP">BWP</option>
      <option value="BYN">BYN</option>
      <option value="BZD">BZD</option>
      <option value="CAD">CAD</option>
      <option value="CDF">CDF</option>
      <option value="CHF">CHF</option>
      <option value="CLP">CLP</option>
      <option value="CNY">CNY</option>
      <option value="COP">COP</option>
      <option value="CRC">CRC</option>
      <option value="CUC">CUC</option>
      <option value="CUP">CUP</option>
      <option value="CVE">CVE</option>
      <option value="CZK">CZK</option>
      <option value="DJF">DJF</option>
      <option value="DKK">DKK</option>
      <option value="DOP">DOP</option>
      <option value="DZD">DZD</option>
      <option value="EGP">EGP</option>
      <option value="ERN">ERN</option>
      <option value="ETB">ETB</option>
      <option value="EUR">EUR</option>
      <option value="FJD">FJD</option>
      <option value="FKP">FKP</option>
      <option value="GBP">GBP</option>
      <option value="GEL">GEL</option>
      <option value="GGP">GGP</option>
      <option value="GHS">GHS</option>
      <option value="GIP">GIP</option>
      <option value="GMD">GMD</option>
      <option value="GNF">GNF</option>
      <option value="GTQ">GTQ</option>
      <option value="GYD">GYD</option>
      <option value="HKD">HKD</option>
      <option value="HNL">HNL</option>
      <option value="HKD">HKD</option>
      <option value="HRK">HRK</option>
      <option value="HTG">HTG</option>
      <option value="HUF">HUF</option>
      <option value="IDR">IDR</option>
      <option value="ILS">ILS</option>
      <option value="IMP">IMP</option>
      <option value="INR">INR</option>
      <option value="IQD">IQD</option>
      <option value="IRR">IRR</option>
      <option value="ISK">ISK</option>
      <option value="JEP">JEP</option>
      <option value="JMD">JMD</option>
      <option value="JOD">JOD</option>
      <option value="JPY">JPY</option>
      <option value="KES">KES</option>
      <option value="KGS">KGS</option>
      <option value="KHR">KHR</option>
      <option value="KID">KID</option>
      <option value="KMF">KMF</option>
      <option value="KPW">KPW</option>
      <option value="KRW">KRW</option>
      <option value="KWD">KWD</option>
      <option value="KYD">KYD</option>
      <option value="KZT">KZT</option>
      <option value="LAK">LAK</option>
      <option value="LBP">LBP</option>
      <option value="LKR">LKR</option>
      <option value="LRD">LRD</option>
      <option value="LSL">LSL</option>
      <option value="LYD">LYD</option>
      <option value="MAD">MAD</option>
      <option value="MDL">MDL</option>
      <option value="MGA">MGA</option>
      <option value="MKD">MKD</option>
      <option value="MMK">MMK</option>
      <option value="MNT">MNT</option>
      <option value="MOP">MOP</option>
      <option value="MRU">MRU</option>
      <option value="MUR">MUR</option>
      <option value="MVR">MVR</option>
      <option value="MWK">MWK</option>
      <option value="MXN">MXN</option>
      <option value="MYR">MYR</option>
      <option value="MZN">MZN</option>
      <option value="NAD">NAD</option>
      <option value="NGN">NGN</option>
      <option value="NIO">NIO</option>
      <option value="NOK">NOK</option>
      <option value="NPR">NPR</option>
      <option value="NZD">NZD</option>
      <option value="OMR">OMR</option>
      <option value="PAB">PAB</option>
      <option value="PEN">PEN</option>
      <option value="PGK">PGK</option>
      <option value="PHP">PHP</option>
      <option value="PKR">PKR</option>
      <option value="PLN">PLN</option>
      <option value="PRB">PRB</option>
      <option value="PYG">PYG</option>
      <option value="QAR">QAR</option>
      <option value="RON">RON</option>
      <option value="RON">RON</option>
      <option value="RSD">RSD</option>
      <option value="RUB">RUB</option>
      <option value="RWF">RWF</option>
      <option value="SAR">SAR</option>
      <option value="SEK">SEK</option>
      <option value="SGD">SGD</option>
      <option value="SHP">SHP</option>
      <option value="SLL">SLL</option>
      <option value="SLS">SLS</option>
      <option value="SOS">SOS</option>
      <option value="SRD">SRD</option>
      <option value="SSP">SSP</option>
      <option value="STN">STN</option>
      <option value="SYP">SYP</option>
      <option value="SZL">SZL</option>
      <option value="THB">THB</option>
      <option value="TJS">TJS</option>
      <option value="TMT">TMT</option>
      <option value="TND">TND</option>
      <option value="TOP">TOP</option>
      <option value="TRY">TRY</option>
      <option value="TTD">TTD</option>
      <option value="TVD">TVD</option>
      <option value="TWD">TWD</option>
      <option value="TZS">TZS</option>
      <option value="UAH">UAH</option>
      <option value="UGX">UGX</option>
      <option value="USD">USD</option>
      <option value="UYU">UYU</option>
      <option value="UZS">UZS</option>
      <option value="VES">VES</option>
      <option value="VND">VND</option>
      <option value="VUV">VUV</option>
      <option value="WST">WST</option>
      <option value="XAF">XAF</option>
      <option value="XCD">XCD</option>
      <option value="XOF">XOF</option>
      <option value="XPF">XPF</option>
      <option value="ZAR">ZAR</option>
      <option value="ZMW">ZMW</option>
      <option value="ZWB">ZWB</option>
    </select>
  );
}

function Input({ value, setBaseCurrencyValue, type }) {
  return (
    <div className="input-wrapper">
      <input
        type={type === "inp" ? "number" : "text"}
        readOnly={type === "out" ? true : false}
        className="base-input"
        value={value}
        onChange={(e) => setBaseCurrencyValue(Number(e.target.value))}
      />
    </div>
  );
}

function SwapButton({
  baseCurrency,
  setBaseCurrency,
  outputCurrency,
  setOutputCurrency,
  rate,
}) {
  function swap() {
    setBaseCurrency(outputCurrency);
    setOutputCurrency(baseCurrency);
  }

  return (
    <div className="middle opt-menu">
      <button className="swap" onClick={swap}>
        Swap
      </button>
      <p className="exchange-rate">{`1 ${baseCurrency} = ${rate} ${outputCurrency}`}</p>
    </div>
  );
}

export default App;
