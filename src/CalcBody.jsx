import Button from "./Button";
import { useMainContext } from "./context/MainContext";
import DeleteButton from "./DeleteButton";
import DotButton from "./DotButton";
import EqualButton from "./EqualButton";
import ResetButton from "./ResetButton";

function CalcBody({ data }) {
  const { themeNum } = useMainContext();

  return (
    <div
      className={`grid grid-cols-4 grid-rows-5  md:w-130 w-[95%] p-2 md:p-5 rounded-2xl ${themeNum === 1 && "bg-t1-bg-toggle"} ${themeNum === 2 && "bg-t2-bg-toggle"} ${themeNum === 3 && "bg-t3-bg-toggle"}`}
    >
      <DeleteButton />
      <DotButton />
      {data.map((ele) => (
        <Button value={ele} key={ele} />
      ))}

      <ResetButton />
      <EqualButton />
    </div>
  );
}

export default CalcBody;
