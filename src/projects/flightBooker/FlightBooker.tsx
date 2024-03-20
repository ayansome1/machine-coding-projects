import { useId, useState } from 'react';

enum JouneyType {
  DEPARTURE = 'departure',
  RETURN = 'return',
}

const getFormattedDate = (date) => {
  console.log(date);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  console.log(formattedDate);
  return formattedDate;
};

const FlightBooker = () => {
  const departureId = useId();
  const returnId = useId();

  // const [journeyType, setJourneyType] = useState(JouneyType.DEPARTURE);

  const [selectedJourneyType, setSelectedJourneyType] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedJourneyType) {
      alert('No journey type');
      return;
    }
    if (!departureDate) {
      alert('No departure date chosen');
      return;
    }
    if (selectedJourneyType === JouneyType.RETURN && !returnDate) {
      alert('No return date chosen');
      return;
    }
    alert(
      'Departure date=' +
        departureDate +
        ' Return date=' +
        returnDate +
        ' Journey type=' +
        selectedJourneyType
    );
  };

  const handleDateChange = (journeyType, e) => {
    if (journeyType === JouneyType.DEPARTURE) {
      setDepartureDate(e.target.value);
    }
    if (journeyType === JouneyType.RETURN) {
      setReturnDate(e.target.value);
    }
  };

  const getMinReturnDate = () => {
    if (departureDate) {
      return departureDate;
    }
    return getFormattedDate(new Date());
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select journey type:
        <select
          value={selectedJourneyType}
          onChange={(e) => setSelectedJourneyType(e.target.value)}
        >
          <option value='' disabled hidden>
            Choose a journey type
          </option>
          <option value={JouneyType.DEPARTURE}>{JouneyType.DEPARTURE}</option>
          <option value={JouneyType.RETURN}>{JouneyType.RETURN}</option>
        </select>
      </label>
      <div>
        <label htmlFor={departureId}>Departure date</label>
        <input
          type='date'
          id={departureId}
          min={getFormattedDate(new Date())}
          onChange={(e) => handleDateChange(JouneyType.DEPARTURE, e)}
        />
      </div>
      {selectedJourneyType === JouneyType.RETURN && (
        <div>
          <label htmlFor={returnId}>Return date</label>
          <input
            type='date'
            id={returnId}
            min={getMinReturnDate()}
            onChange={(e) => handleDateChange(JouneyType.RETURN, e)}
          />
        </div>
      )}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FlightBooker;
