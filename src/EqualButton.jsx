import { useMainContext } from "./context/MainContext";

function EqualButton() {
  const { calc, themeNum } = useMainContext();

  return (
    <button
      type="button"
      className={`md:py-5 md:px-10 p-3 flex justify-center items-center md:m-3 m-2 cursor-pointer   text-[32px] font-bold rounded-2xl col-span-2 ${themeNum === 1 && "bg-t1-key-bg-toggle shadow-[0_4px_0_0_var(--color-t1-key-shadow-2)] "} ${themeNum === 2 && "text-t1-text-on bg-t2-key-bg-toggle shadow-[0_4px_0_0_var(--color-t2-key-shadow-2)]"} ${themeNum === 3 && "bg-t3-key-bg-toggle shadow-[0_4px_0_0_var(--color-t3-key-shadow-2)]"} text-t3-text-primary`}
      onClick={calc}
    >
      =
    </button>
  );
}

export default EqualButton;
