import Trello from './projects/trello/Trello';
import AutocompleteContainer from './projects/autocomplete/AutocompleteContainer';
import Test from './projects/test/Test';
import Modal from './projects/modal/Modal';
import ModalTest from './projects/modal/ModalTest';
import Light from './projects/gridLights/Light';

function App() {
  return (
    <>
      <div>{/* <Trello /> */}</div>
      <div>{/* <AutocompleteContainer /> */}</div>
      <div>{/* <Test /> */}</div>
      <div>{/* <ModalTest /> */}</div>
      <div>
        <Light />
      </div>
    </>
  );
}

export default App;
