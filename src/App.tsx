import Trello from './projects/trello/Trello';
import AutocompleteContainer from './projects/autocomplete/AutocompleteContainer';
import Test from './projects/test/Test';
import Modal from './projects/modal/Modal';
import ModalTest from './projects/modal/ModalTest';
import Light from './projects/gridLights/Light';
import Carousel from './projects/imageCarousel/Carousel';

function App() {
  return (
    <>
      <div>{/* <Trello /> */}</div>
      <div>{/* <AutocompleteContainer /> */}</div>
      <div>{/* <Test /> */}</div>
      <div>{/* <ModalTest /> */}</div>
      <div>{/* <Light /> */}</div>
      <div>
        <Carousel
          images={[
            {
              src: 'https://picsum.photos/id/1/200/300',
              alt: 'man with laptop',
            },
            {
              src: 'https://picsum.photos/id/10/600/700',
              alt: 'forest',
            },
            {
              src: 'https://picsum.photos/id/14/300/300',
              alt: 'Rock beach',
            },
            {
              src: 'https://picsum.photos/id/23/400/200',
              alt: 'fork',
            },
            {
              src: 'https://picsum.photos/id/23/500/100',
              alt: 'fork',
            },
            {
              src: 'https://picsum.photos/id/23/100/500',
              alt: 'fork',
            },
            {
              src: 'https://picsum.photos/id/23/100/200',
              alt: 'fork',
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
