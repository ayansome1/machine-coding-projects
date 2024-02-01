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
  const onInputChange = (val) => {
    console.log(val);
  };
  const onSelect = (option) => {
    console.log(option);
  };
  const optionsFilter = (option, inputText) => {
    return (
      option.city.toLowerCase().includes(inputText.toLowerCase()) ||
      option.state.toLowerCase().includes(inputText.toLowerCase())
    );
  };
  return (
    <div className={styles.autocompleteContainer}>
      <Autocomplete
        options={options}
        renderOption={(val) => (
          <div className={styles.option}>
            <strong>{val.city}</strong>,{val.state}
          </div>
        )}
        onInputChange={onInputChange}
        maxSize={5}
        onSelect={onSelect}
        getOptionLabel={(val) => val.city}
        filterCriteria={optionsFilter}
      />
      <Autocomplete
        options={['ayan', 'debjit', 'some', 'aryan']}
        onInputChange={onInputChange}
        maxSize={5}
        onSelect={onSelect}
      />
    </div>
  );
};

export default AutocompleteContainer;
