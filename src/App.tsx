import Trello from './projects/trello/Trello';
import AutocompleteContainer from './projects/autocomplete/AutocompleteContainer';
import Test from './projects/test/Test';
import Modal from './projects/modal/Modal';
import ModalTest from './projects/modal/ModalTest';
import Light from './projects/gridLights/Light';
import Carousel from './projects/imageCarousel/Carousel';
import Menu from './projects/menu/Menu';
import MenuTarget from './projects/menu/MenuTarget';
import MenuList from './projects/menu/MenuList';
import MenuItem from './projects/menu/MenuItem';
import InfiniteScroll from './projects/infiniteScroll/InfiniteScroll';
import HeaderFooter from './projects/headerFooterLayout/HeaderFooter';
import ProgressBars from './projects/progressBars1/ProgressBars';
import Tabs from './projects/tabs1/Tabs';
import TabsTest from './projects/tabs1/TabsTest';
import Like from './projects/like/Like';
import ProgressBarsSequential from './projects/progressBars2/ProgressBarsSequential';
import StarRating from './projects/starRating/StarRating';
import TestStar from './projects/starRating/TestStar';
import TrafficLight from './projects/trafficLight/TrafficLight';
import TrafficLightTest from './projects/trafficLight/TrafficLightTest';
import HackerNewsJobBoard from './projects/hackerNewsJobBoard/HackerNewsJobBoard';
import StopwatchContainer from './projects/stopwatch/StopwatchContainer';
import TransferListContainer from './projects/transferList/TransferListContainer';
import UndoableCounter from './projects/undoableCounter/UndoableCounter';
import MemoryGame from './projects/memoryGame/MemoryGame';
import FlightBooker from './projects/flightBooker/FlightBooker';
import GenerateTable from './projects/generateTable/GenerateTable';
import MultiStepperContainer from './projects/multiStepper/MultiStepperContainer';
import SwitchCaseContainer from './projects/switchCase/SwitchCaseContainer';
import Tictactoe from './projects/tictactoe/Tictactoe';

function App() {
  return (
    <>
      <div>{/* <Trello /> */}</div>
      <div>{/* <AutocompleteContainer /> */}</div>
      <div>{/* <Test /> */}</div>
      <div>{/* <ModalTest /> */}</div>
      <div>{/* <Light /> */}</div>
      <div>
        {/* <Carousel
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
        /> */}
      </div>
      <div>
        {/* <Menu>
          <MenuTarget>
            <button>Actions</button>
          </MenuTarget>
          <MenuList>
            <MenuItem>open modal</MenuItem>
            <MenuItem disabled>new tab</MenuItem>
            <MenuItem
              onClick={() => {
                console.log('clicked me');
              }}
            >
              item 3
            </MenuItem>
          </MenuList>
        </Menu> */}
      </div>
      <div>{/* <InfiniteScroll /> */}</div>
      <div>{/* <HeaderFooter /> */}</div>
      <div>{/* <ProgressBars /> */}</div>
      <div>{/* <TabsTest /> */}</div>
      <div>{/* <Like /> */}</div>
      <div>{/* <ProgressBarsSequential /> */}</div>
      <div>{/* <TestStar /> */}</div>
      <div>{/* <TrafficLightTest /> */}</div>
      <div>{/* <HackerNewsJobBoard /> */}</div>
      <div>{/* <StopwatchContainer /> */}</div>
      <div>{/* <TransferListContainer /> */}</div>
      <div>{/* <UndoableCounter /> */}</div>
      <div>{/* <MemoryGame /> */}</div>
      <div>{/* <FlightBooker /> */}</div>
      <div>{/* <GenerateTable /> */}</div>
      <div>{/* <MultiStepperContainer /> */}</div>
      <div>{/* <SwitchCaseContainer /> */}</div>
      <div>
        <Tictactoe />
      </div>
    </>
  );
}

export default App;
