import { useState } from 'react';

const GenerateTable = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRowInput = (e) => {
    setRows(e.target.valueAsNumber);
    setIsSubmitted(false);
  };

  const handleColumnInput = (e) => {
    setColumns(e.target.valueAsNumber);
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getLabel = (row, col) => {
    let val;
    if (col % 2 === 1) {
      val = rows * (col - 1) + row;
    } else {
      val = rows * (col - 1) + rows - row + 1;
    }

    return val;
  };

  const generateTable = () => {
    const rowsArr = new Array(rows).fill(0).map((val, index) => index + 1);
    const colArr = new Array(columns).fill(0).map((val, index) => index + 1);

    return (
      <table>
        <tbody>
          {rowsArr.map((row) => {
            return (
              <tr key={row}>
                {colArr.map((col, idx) => (
                  <td key={col}>{getLabel(row, col)}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rows <input type='number' onChange={handleRowInput} required />
      </label>
      <label>
        Columns <input type='number' onChange={handleColumnInput} required />
      </label>
      <input type='submit' />
      {isSubmitted && rows && columns && generateTable()}
    </form>
  );
};

export default GenerateTable;
