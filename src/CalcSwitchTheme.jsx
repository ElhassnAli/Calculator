import { useMainContext } from "./context/MainContext";

function CalcSwitchTheme() {
  const { themeNum, setThemeNum } = useMainContext();

  return (
    <div
      className={`md:w-130 w-[95%] flex items-center justify-between mb-3 ${themeNum === 1 && " text-t1-text-on"} `}
    >
      <p className="text-[32px]">Calc</p>
      <div className="flex items-center justify-center relative gap-3">
        <p>THEME</p>
        <div className={` flex flex-col w-25 relative  `}>
          <div
            className={` flex absolute -top-6 w-full justify-around rounded-2xl  items-center gap-2 `}
          >
            <label htmlFor="one" className="cursor-pointer">
              1
            </label>
            <label htmlFor="two" className="cursor-pointer">
              2
            </label>
            <label htmlFor="three" className="cursor-pointer">
              3
            </label>
          </div>
          <div
            className={`flex justify-around  py-2 w-full rounded-2xl ${themeNum === 1 && "bg-t1-bg-toggle "} ${themeNum === 2 && "bg-t2-bg-toggle "} ${themeNum === 3 && "bg-t3-bg-toggle "}`}
          >
            <input
              type="radio"
              id="one"
              onChange={() => setThemeNum(1)}
              name="theme"
              className={`appearance-none w-4 h-4  cursor-pointer rounded-[50%] ${themeNum === 1 && "bg-t1-key-bg-toggle"}  `}
              checked={themeNum === 1}
            />
            <input
              type="radio"
              id="two"
              onChange={() => setThemeNum(2)}
              name="theme"
              className={`appearance-none w-4 h-4 cursor-pointer rounded-[50%] ${themeNum === 2 && "bg-t2-key-bg-toggle"}`}
              checked={themeNum === 2}
            />
            <input
              type="radio"
              id="three"
              onChange={() => setThemeNum(3)}
              name="theme"
              className={`appearance-none w-4 h-4 cursor-pointer rounded-[50%] ${themeNum === 3 && "bg-t3-key-bg-toggle"}`}
              checked={themeNum === 3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcSwitchTheme;
