import { useState } from 'react';

type AutocompleteProps = {
  renderOption: (data: any) => React.ReactNode;
  options: Array<any>;
  onInputChange: (val: string) => void;
  maxSize: number;
};

const Autocomplete = ({
  renderOption,
  options,
  onInputChange,
  maxSize = 3,
}: AutocompleteProps) => {
  const [inputText, setInputText] = useState<string>('');

  const handleOnInputchange = (e) => {
    setInputText(e.target.value);
    onInputChange(e.target.value);
  };
  return (
    <div>
      <input onChange={handleOnInputchange} value={inputText} />
      {options.map((val) => renderOption(val)).slice(0, maxSize)}
    </div>
  );
};

export default Autocomplete;
