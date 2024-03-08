import { useState } from 'react';
import styles from './TransferList.module.scss';

const TransferList = ({ data }) => {
  const [rowData, setRowData] = useState([...data]);
  const [selectedItems, setSelectedItems] = useState({});
  const rows = { row1: 'row-1', row2: 'row-2' };

  const handleMoveAllToLeftClick = () => {
    const prevItemsInRow = [];
    const newItemsInRow = [];
    for (let i = 0; i < rowData.length; i++) {
      if (rowData[i].list === rows.row1) {
        prevItemsInRow.push(rowData[i]);
      } else {
        newItemsInRow.push({ ...rowData[i], list: 'row-1' });
      }
    }
    setRowData([...prevItemsInRow, ...newItemsInRow]);
  };

  const handleMoveAllToRightClick = () => {
    const prevItemsInRow = [];
    const newItemsInRow = [];
    for (let i = 0; i < rowData.length; i++) {
      if (rowData[i].list === rows.row2) {
        prevItemsInRow.push(rowData[i]);
      } else {
        newItemsInRow.push({ ...rowData[i], list: 'row-2' });
      }
    }
    setRowData([...prevItemsInRow, ...newItemsInRow]);
  };

  const handleInputChange = (e, id) => {
    console.log(e.target.checked);
    setSelectedItems((val) => {
      return {
        ...val,
        [id]: e.target.checked,
      };
    });
  };

  const handleMoveRight = () => {
    const prevItemsInRow = [];
    const newItemsInRow = [];
    for (let i = 0; i < rowData.length; i++) {
      if (
        rowData[i].list === rows.row1 &&
        selectedItems[rowData[i].id] === true
      ) {
        newItemsInRow.push({ ...rowData[i], list: 'row-2' });
      } else {
        prevItemsInRow.push({ ...rowData[i] });
      }
    }
    console.log(prevItemsInRow);
    console.log(newItemsInRow);

    setRowData([...prevItemsInRow, ...newItemsInRow]);
  };

  const handleMoveLeft = () => {
    const prevItemsInRow = [];
    const newItemsInRow = [];
    for (let i = 0; i < rowData.length; i++) {
      if (
        rowData[i].list === rows.row2 &&
        selectedItems[rowData[i].id] === true
      ) {
        newItemsInRow.push({ ...rowData[i], list: 'row-1' });
      } else {
        prevItemsInRow.push({ ...rowData[i] });
      }
    }
    console.log(prevItemsInRow);
    console.log(newItemsInRow);

    setRowData([...prevItemsInRow, ...newItemsInRow]);
  };

  return (
    <div>
      <div className={styles['rows-container']}>
        {[rows.row1, rows.row2].map((row) => (
          <div key={row} className={styles.row}>
            <h2>{row}</h2>
            {rowData
              .filter((val) => val.list === row)
              .map((val) => (
                <div key={val.id}>
                  <label>
                    <input
                      type='checkbox'
                      checked={selectedItems[val.id] === true}
                      onChange={(e) => handleInputChange(e, val.id)}
                    />
                    {val.item}
                  </label>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div>
        <div>
          <button onClick={handleMoveAllToLeftClick}>{'<<'}</button>
          <button onClick={handleMoveLeft}>{'<'}</button>
          <button onClick={handleMoveRight}>{'>'}</button>
          <button onClick={handleMoveAllToRightClick}>{'>>'}</button>
        </div>
      </div>
    </div>
  );
};

export default TransferList;
