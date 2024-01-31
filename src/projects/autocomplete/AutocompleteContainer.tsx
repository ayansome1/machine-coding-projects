import { useState } from 'react';
import Autocomplete from './Autocomplete';
import styles from './Autocomplete.module.scss';

const options = [
  { city: 'Burdwan', state: 'West Bengal' },
  { city: 'Kolkata', state: 'West Bengal' },
  { city: 'Bengaluru', state: 'Karnataka' },
  { city: 'Mumbai', state: 'Maharashtra' },
  { city: 'Chennai', state: 'Tamil Nadu' },
  { city: 'Jaipur', state: 'Rajasthan' },
  { city: 'Ahmedabad', state: 'Gujarat' },
  { city: 'Delhi', state: 'Delhi' },
  { city: 'Patna', state: 'Bihar' },
  { city: 'Lucknow', state: 'Uttar Pradesh' },
  { city: 'Hyderabad', state: 'Telangana' },
  { city: 'Bhubaneswar', state: 'Odisha' },
  { city: 'Trivandrum', state: 'Kerala' },
  { city: 'Goa', state: 'Goa' },
  { city: 'Chandigarh', state: 'Chandigarh' },
  { city: 'Puducherry', state: 'Puducherry' },
  { city: 'Srinagar', state: 'Jammu and Kashmir' },
  { city: 'Shimla', state: 'Himachal Pradesh' },
];

const AutocompleteContainer = () => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (val) => {
    setInputValue(val);
    console.log(val);
    if (val === '') {
      setFilteredOptions([]);
      return;
    }
    const res = options.filter((option) => {
      if (
        option.city.toLowerCase().includes(val.toLowerCase()) ||
        option.state.toLowerCase().includes(val.toLowerCase())
      ) {
        return option;
      }
    });
    console.log(res);
    setFilteredOptions(res);
  };
  const onSelect = (option) => {
    console.log(option);
    setValue(option);
    setInputValue(option.city);
    setFilteredOptions([]);
  };
  return (
    <Autocomplete
      options={filteredOptions}
      renderOption={(val) => (
        <div className={styles.option}>
          <strong>{val.city}</strong>
          {val.state}
        </div>
      )}
      onInputChange={onInputChange}
      maxSize={5}
      onSelect={onSelect}
      inputValue={inputValue}
      // value={value}
      // getOptionLabel={(val) => val.city}
    />
  );
};

export default AutocompleteContainer;
