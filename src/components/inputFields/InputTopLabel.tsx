import { SyntheticEvent, useState } from "react";
import classNames from "classnames";

type Props = {
    setValue: (value: string) => void;
    label: string;
    type: string;
};

const InputTopLabel = (props: Props) => {
  const [isFocused, setFocused] = useState<Boolean>(false);
  const [textLength, setTextLength] = useState<number>(0);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const getValues = (value: string) => {
    setTextLength(value.length)
  }

  return (
    <div className="relative border flex items-center rounded-md">
      <label
        htmlFor="floatingInput"
        className={classNames("absolute transition-all bg-white text-sm", {
          "text-gray-500 text-xs px-2": !isFocused,
          "text-blue-500 -top-3 left-4": isFocused || textLength != 0,
        })}
        // className={`absolute transition-all bg-white text-sm ${textLength === 0 ? "text-gray-500 text-xs px-2" : "text-blue-500 -top-3 left-4"}`}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id="floatingInput"
        className={`focus:outline-none focus:border-blue-500 ${textLength === 0 ? "opacity-0" : "opacity-100"} focus:opacity-100 w-full h-full text-sm text-neutral-600 px-3 py-2`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={e => {
          props.setValue(e.target.value)
          getValues(e.target.value)

        }}
      />
    </div>
  );
};

export default InputTopLabel;
