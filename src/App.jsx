import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const tipAmountLogic = (tip, bill, people) => {
    return +(((tip / 100) * bill) / people).toFixed(2);
  };

  const totalAmountLogic = (tip, bill, people) => {
    return +((bill + (tip / 100) * bill) / people).toFixed(2);
  };

  // Application State
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState();
  const [people, setPeople] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (bill && tip && people) {
      setTipAmount(tipAmountLogic(tip, bill, people));
      setTotalAmount(totalAmountLogic(tip, bill, people));
    }
  }, [bill, tip, people]);
  // Bill Amount Handle
  const handleBillChange = e => {
    setBill(+e.target.value);
  };

  // Selected Tip Percentage Handlers
  const handleSelection = e => {
    e.preventDefault();

    e.target.style.backgroundColor = "hsl(172 69% 45%)";
    setTip(+e.currentTarget.value);
  };

  const handleCustomTip = e => {
    e.preventDefault();

    if (+e.target.value <= 100 && +e.target.value > 0) {
      setTip(+e.target.value);
    } else {
      e.target.value = "";
      alert("Please input a valid tip percentage");
    }
  };

  const handlePeopleSelection = e => {
    e.preventDefault();
    if (e.target.value < 0) {
      e.target.classList.add("invalid");
      document.getElementById("error").classList.remove("hidden");
    } else {
      e.target.classList.remove("invalid");
      document.getElementById("error").classList.add("hidden");
      setPeople(+e.target.value);
    }
  };

  const handleReset = () => {
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <main className="bg-lightGrayishCyan min-h-screen flex flex-col justify-center items-center font-monospace">
      {/* Logo */}
      <h1
        className="text-veryDarkCyan text-2xl uppercase font-monospace leading-[1.7em] tracking-[0.4em] pb-12 opacity-80"
        aria-label="Tip Calculator Application Logo"
      >
        Spli {<br></br>} tter
      </h1>
      {/* Tip Calculator Container */}
      <section className="flex flex-col bg-white min-h-[400px] max-w-5xl rounded-[40px] shadow-xl md:flex-row">
        {/* Left Section */}
        <section id="left" className="min-w-[400px]">
          {/* Bill Section */}
          <section id="bill-section" className="m-12">
            <form>
              <label>
                <h3 className="text-darkGrayishCyan">Bill</h3>
                <div className="relative">
                  <input
                    id="bill-selection"
                    type="number"
                    className="bg-veryLightGrayishCyan py-2 px-10 mt-2 rounded text-right text-veryDarkCyan w-full focus:outline-strongCyan"
                    onChange={handleBillChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="17"
                    className="absolute bottom-3 left-4"
                  >
                    <path
                      fill="#9EBBBD"
                      d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"
                    />
                  </svg>
                </div>
              </label>
            </form>
          </section>
          {/* Tip Selection Section */}
          <section id="tip-section" className="mx-12 mt-8">
            <h3 className="text-darkGrayishCyan">Select tip %</h3>
            <form>
              <ul className="grid grid-cols-2 md:grid-cols-3 mt-2 gap-3 text-center">
                <li onClick={handleSelection} value="5">
                  <a href="#">5%</a>
                </li>
                <li onClick={handleSelection} value="10">
                  <a href="#">10%</a>
                </li>
                <li onClick={handleSelection} value="15">
                  <a href="#">15%</a>
                </li>
                <li onClick={handleSelection} value="25">
                  <a href="#">25%</a>
                </li>
                <li onClick={handleSelection} value="50">
                  <a href="#">50%</a>
                </li>
                <li>
                  <input
                    id="tip-selection"
                    type="text"
                    placeholder="Custom"
                    className="bg-veryLightGrayishCyan w-full text-right py-2 px-3 focus:outline-strongCyan"
                    onChange={handleCustomTip}
                  />
                </li>
              </ul>
            </form>
          </section>
          {/* Number of People Selection Section */}
          <section id="people" className="m-12 mt-8">
            <form>
              <label>
                <div className="flex justify-between items-center">
                  <h3 className="text-darkGrayishCyan">Number of people</h3>
                  <h3 className="text-red-400 text-sm hidden" id="error">
                    Try a valid input
                  </h3>
                </div>
                <div className="relative">
                  <input
                    id="people-selection"
                    type="number"
                    placeholder="0"
                    className="bg-veryLightGrayishCyan py-2 px-10 mt-2 rounded text-right text-veryDarkCyan w-full focus:outline-strongCyan"
                    onChange={handlePeopleSelection}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="16"
                    className="absolute bottom-3 left-4"
                  >
                    <path
                      fill="#9EBBBD"
                      d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"
                    />
                  </svg>
                </div>
              </label>
            </form>
          </section>
        </section>

        {/* Right Side Section  */}
        <section
          id="right"
          className=" bg-veryDarkCyan max-w-lg m-5 rounded-2xl flex flex-col justify-center items-center px-8 py-12  md:py-15 md:px-12"
        >
          {/* Tip Amount Section */}
          <section className="relative flex flex-row items-center justify-center space-x-60 mt-6 ">
            <div className="mr-56">
              <h3 className="text-white mb-1">Tip Amount</h3>
              <span className="text-sm text-grayishCyan"> / person</span>
            </div>
            <span
              id="tip-amount"
              className="text-5xl text-strongCyan fixed right-[370px]"
            >
              {`$${tipAmount}`}
            </span>
          </section>

          {/* Total Amount Section */}
          <section className="relative flex flex-row items-center justify-center space-x-60 mt-10">
            <div className="mr-60">
              <h3 className="text-white mb-1">Total</h3>
              <span className="text-sm text-grayishCyan"> / person</span>
            </div>
            <span
              id="total"
              className="text-5xl text-strongCyan fixed right-[370px]"
            >
              {`$${totalAmount}`}
            </span>
          </section>

          {/* Reset Button */}
          <button
            id="reset"
            className=" bg-strongCyan text-veryDarkCyan uppercase text-lg px-36 py-3 rounded-lg mt-10 md:mt-20 hover:bg-hoverCyan"
            onClick={handleReset}
          >
            Reset
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
