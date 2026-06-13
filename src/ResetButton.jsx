import { useMainContext } from "./context/MainContext";

function ResetButton() {
  const { reset, themeNum } = useMainContext();
  return (
    <button
      type="button"
      className={`md:py-5 md:px-10 p-3 flex justify-center items-center md:m-3 m-2 cursor-pointer bg-red-400  text-[32px] font-bold rounded-2xl col-span-2  ${themeNum === 1 && "bg-t1-key-bg-1 shadow-[0_4px_0_0_var(--color-t1-key-shadow-1)] text-t1-text-on"} ${themeNum === 2 && "bg-t2-key-bg-1 shadow-[0_4px_0_0_var(--color-t2-key-shadow-1)] text-t2-text-on"} ${themeNum === 3 && "bg-t3-key-bg-1 shadow-[0_4px_0_0_var(--color-t3-key-shadow-1)] text-t3-text-on"}`}
      onClick={reset}
    >
      RESET
    </button>
  );
}

export default ResetButton;
