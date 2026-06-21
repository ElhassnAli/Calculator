import { useState, useMemo } from "react";
import CalcBody from "./CalcBody";
import CalcHeader from "./CalcHeader";
import CalcSwitchTheme from "./CalcSwitchTheme";
import MainContextProvider from "./context/MainContext";
const CalcNumAndOpertions = [7, 8, 9, 4, 5, 6, "+", 1, 2, 3, "-", 0, "/", "×"];
// const StyledThemes = [
//   {
//     ThemeOnemainbg: "#3a4764",
//     ThemeOnetogglebgAndkeypadbackground: "#232c43",
//     ThemeOnescreenBg: "#182034",
//     keys: {
//       ThemeOnekeybackground1: "#637097",
//       ThemeOnekeyshadow1: "#404e72",
//       ThemeOnekeybackgroundAndtoggle: "#d03f2f",
//       ThemeOnekeyshadow2: "#93261a",
//       ThemeOnekeybackground2: "#e6e6e6",
//       ThemeOnekeyshadow3: "#b4a597",
//     },
//     text: {
//       ThemeOneNavy750: "#444b5a",
//       ThemeOneWhite: "#ffffff",
//     },
//   },
//   {
//     ThemeTwomainbg: "#e6e6e6",
//     ThemeTwotogglebgAndkeypadbackground: "#d1cccc",
//     ThemeTwoscreenBg: "#ededed",
//     keys: {
//       ThemeTwokeybackground1: "#377f86",
//       ThemeTwokeyshadow1: "#1b5f65",
//       ThemeTwokeybackgroundAndtoggle: "#ca5502",
//       ThemeTwokeyshadow2: "#893901",
//       ThemeTwokeybackground2: "#e6e6e6",
//       ThemeTwokeyshadow3: "#a69d91",
//     },
//     text: {
//       ThemeTwoGray900: "#35352c",
//       ThemeTwoWhite: "#ffffff",
//     },
//   },
//   {
//     ThemeThreemainbg: "#160628",
//     ThemeThreetogglebgAndkeypadbackground: "#1d0934",
//     ThemeThreescreenBg: "#1d0934",
//     keys: {
//       ThemeThreekeybackground1: "#58077d",
//       ThemeThreekeyshadow1: "#bc15f4",
//       ThemeThreekeybackgroundAndtoggle: "#00e0d1",
//       ThemeThreekeyshadow2: "#6cf9f2",
//       ThemeThreekeybackground2: "#341c4f",
//       ThemeThreekeyshadow3: "#871c9c",
//     },
//     text: {
//       ThemeThreeYellow300: "#ffe53d",
//       ThemeThreeBlue950: "#1b2428",
//       ThemeThreeWhite: "#ffffff",
//     },
//   },
// ];
function App() {
  const [firstValue, setFirstValue] = useState("");
  const [operation, setOperation] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [themeNum, setThemeNum] = useState(1);
  function calc() {
    if (firstValue === "" || operation === "" || currentValue === "") return;
    if (operation === "+") {
      setCurrentValue(parseFloat(firstValue) + parseFloat(currentValue));
      setFirstValue("");
      setOperation("");
    }
    if (operation === "-") {
      setCurrentValue(parseFloat(firstValue) - parseFloat(currentValue));
      setFirstValue("");
      setOperation("");
    }
    if (operation === "/") {
      setCurrentValue(parseFloat(firstValue) / parseFloat(currentValue));
      setFirstValue("");
      setOperation("");
    }
    if (operation === "×") {
      setCurrentValue(parseFloat(firstValue) * parseFloat(currentValue));
      setFirstValue("");
      setOperation("");
    }
  }

  function reset() {
    setOperation("");
    setCurrentValue("");
    setFirstValue("");
  }

  function deleteDigit() {
    setCurrentValue(currentValue.toString().slice(0, -1));
  }

  function dot() {
    if (currentValue === "") {
      setCurrentValue("0.");
    } else if (currentValue.includes(".")) {
      setCurrentValue(currentValue);
    } else {
      setCurrentValue((e) => e + ".");
    }
  }
  const contextValue = useMemo(
    () => ({
      firstValue,
      operation,
      currentValue,
      themeNum,
      setFirstValue,
      setOperation,
      setCurrentValue,
      calc,
      reset,
      deleteDigit,
      dot,
      setThemeNum,
    }),
    [firstValue, operation, currentValue, themeNum],
  );
  return (
    <div
      className={`flex  justify-center flex-col items-center w-dvw  h-dvh font-League font-bold tracking-widest  ${themeNum === 1 && "bg-t1-bg-main text-t1-text-on"} ${themeNum === 2 && "bg-t2-bg-main "} ${themeNum === 3 && "bg-t3-bg-main text-t3-text-accent"}  `}
    >
      <MainContextProvider value={contextValue}>
        <CalcSwitchTheme />
        <CalcHeader />
        <CalcBody data={CalcNumAndOpertions} />
      </MainContextProvider>
    </div>
  );
}

export default App;
