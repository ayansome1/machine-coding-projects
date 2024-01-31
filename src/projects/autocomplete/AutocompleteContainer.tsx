import { useState } from 'react';
import Autocomplete from './Autocomplete';

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
  const onInputChange = (val) => {
    console.log(val);
    if (val === '') {
      setFilteredOptions([]);
      return;
    }
    const res = options.filter((option) => {
      if (option.city.includes(val) || option.state.includes(val)) {
        return option;
      }
    });
    console.log(res);
    setFilteredOptions(res);
  };
  return (
    <Autocomplete
      options={filteredOptions}
      renderOption={(val) => (
        <div>
          <strong>{val.city}</strong>
          {val.state}
        </div>
      )}
      onInputChange={onInputChange}
      maxSize={5}
    />
  );
};

export default AutocompleteContainer;
