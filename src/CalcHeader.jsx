import { useMainContext } from "./context/MainContext";

export default function CalcHeader() {
  const { currentValue, themeNum } = useMainContext();

  return (
    <div
      className={`md:w-130 w-[95%] rounded-2xl -400 md:h-25 md:mb-8 mb-4 h-20 flex justify-end px-5 text-4xl items-center ${themeNum === 1 && "bg-t1-bg-screen text-t1-text-on"} ${themeNum === 2 && "bg-t2-bg-screen text-t2-text-primary"} ${themeNum === 3 && "bg-t3-bg-screen text-t3-text-accent"}`}
    >
      {currentValue.toLocaleString("en-US")}
    </div>
  );
}
