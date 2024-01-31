import { useState } from 'react';

type AutocompleteProps = {
  renderOption: (data: any) => React.ReactNode;
  options: Array<any>;
  onInputChange: (val: string) => void;
  onSelect: (val: any) => void;
  maxSize: number;
  debounceDuration?: number;
  inputValue: string;
  // getOptionLabel: (val: any) => string;
};

// const debounced

const Autocomplete = ({
  renderOption,
  options,
  onInputChange,
  maxSize = 3,
  // debounceDuration = 0,
  onSelect,
  inputValue,
}: // getOptionLabel,
AutocompleteProps) => {
  // const [inputText, setInputText] = useState<string>('');

  const handleOnInputchange = (e) => {
    // setInputText(e.target.value);
    onInputChange(e.target.value);
  };
  const onOptionSelect = (option: any) => {
    onSelect(option);
  };
  return (
    <div>
      <input onChange={handleOnInputchange} value={inputValue} />
      {options.slice(0, maxSize).map((val) => (
        <div onClick={() => onOptionSelect(val)}>{renderOption(val)}</div>
      ))}
    </div>
  );
};

export default Autocomplete;

// TODO
// onselect, debounce
