import { useMainContext } from "./context/MainContext";

function DotButton() {
  const { dot, themeNum } = useMainContext();
  return (
    <button
      type="button"
      className={`md:py-5 md:px-10 p-3 flex justify-center items-center md:m-3 m-2 cursor-pointer bg-red-400  text-[32px] font-bold rounded-2xl row-start-4 row-end-5 ${themeNum === 1 && "hover:bg-t1-text-on bg-t1-key-bg-2 shadow-[0_4px_0_0_var(--color-t1-key-shadow-3)] text-t1-text-primary"} ${themeNum === 2 && "bg-t2-key-bg-2 shadow-[0_4px_0_0_var(--color-t2-key-shadow-3)] hover:bg-t1-text-on"} ${themeNum === 3 && " hover:bg-t3-key-bg-1 bg-t3-key-bg-2 shadow-[0_4px_0_0_var(--color-t3-key-shadow-3)] text-t3-text-accent"}`}
      onClick={dot}
    >
      .
    </button>
  );
}

export default DotButton;
