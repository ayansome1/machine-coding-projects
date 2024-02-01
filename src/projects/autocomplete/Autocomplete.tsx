import { useRef, useState } from 'react';
import styles from './Autocomplete.module.scss';
import { useClickOutside } from './utils';

type AutocompleteProps = {
  renderOption?: (data: any) => React.ReactNode;
  options: Array<any>;
  onInputChange: (val: string) => void;
  onSelect: (val: any) => void;
  maxSize: number;
  debounceDuration?: number;
  getOptionLabel?: (val: any) => string;
  filterCriteria?: (option, inputText) => any;
};

// const debounced

const Autocomplete = ({
  renderOption,
  options,
  onInputChange,
  maxSize = 3,
  // debounceDuration = 0,
  onSelect,
  getOptionLabel = (val) => val,
  filterCriteria,
}: AutocompleteProps) => {
  const [inputText, setInputText] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const divRef = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useClickOutside(divRef, handleClickOutside);

  const handleOnInputchange = (e) => {
    setInputText(e.target.value);
    onInputChange(e.target.value);
  };
  const onOptionSelect = (option: any) => {
    onSelect(option);
    setInputText(getOptionLabel(option));
    setIsOpen(false);
  };
  const getOptions = () => {
    return options
      .filter((option) => {
        return filterCriteria(option, inputText);
      })
      .slice(0, maxSize)
      .map((val) => (
        <div className={styles.option} onClick={() => onOptionSelect(val)}>
          {renderOption ? renderOption(val) : getOptionLabel(val)}
        </div>
      ));
  };

  return (
    <div className={styles.autocompleteParent} ref={divRef}>
      <input
        onChange={handleOnInputchange}
        value={inputText}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && <div className={styles.optionsParent}>{getOptions()}</div>}
    </div>
  );
};

export default Autocomplete;

// TODO
// onselect, debounce
