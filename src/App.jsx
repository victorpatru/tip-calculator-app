import "./App.css";

function App() {
  return (
    <main className="bg-lightGrayishCyan min-h-screen flex flex-col justify-center items-center">
      {/* Logo */}
      <h1
        className="text-veryDarkCyan text-2xl uppercase font-monospace leading-[1.7em] tracking-[0.4em] pb-12 opacity-80"
        aria-label="Tip Calculator Application Logo"
      >
        Spli {<br></br>} tter
      </h1>
      {/* Tip Calculator Container */}
      <section className="flex flex-col bg-white min-h-[400px] max-w-4xl rounded-[40px] shadow-xl md:flex-row">
        {/* Left Section */}
        <section id="left">
          {/* Bill Section */}
          <section>
            <h2>Bill</h2>
            <form>
              <input type="text" className="bg-gray-300" />
            </form>
          </section>
          {/* Tip Selection Section */}
          {/* Number of People Selection Section */}
        </section>

        {/* Right Side Section  */}
        <section
          id="right"
          className="max-w-[500px] bg-veryDarkCyan m-5 rounded-2xl font-monospace flex flex-col justify-center items-center px-8 py-12  md:py-15 md:px-12"
        >
          {/* Tip Amount Section */}
          <section className="flex flex-row items-center justify-between space-x-24 ">
            <div>
              <h3 className="text-white mb-1">Tip Amount</h3>
              <span className="text-sm text-grayishCyan"> / person</span>
            </div>
            <span id="tip-amount" className="text-5xl text-strongCyan">
              $4.27
            </span>
          </section>

          {/* Total Amount Section */}
          <section className="flex flex-row items-center justify-between space-x-24 mt-10">
            <div>
              <h3 className="text-white mb-1">Total</h3>
              <span className="text-sm text-grayishCyan"> / person</span>
            </div>
            <span id="total" className="text-5xl text-strongCyan">
              $32.79
            </span>
          </section>

          {/* Reset Button */}
          <button
            id="reset"
            className=" bg-strongCyan text-veryDarkCyan uppercase text-lg px-36 py-3 rounded-lg mt-10 md:mt-24"
          >
            Reset
          </button>
        </section>
      </section>
    </main>
  );
}

export default App;
