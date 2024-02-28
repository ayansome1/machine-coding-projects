import TrafficLight from './TrafficLight';

const TrafficLightTest = () => {
  return (
    <TrafficLight
      config={[
        {
          color: 'red',
          duration: 4000,
        },
        {
          color: 'green',
          duration: 3000,
        },
        {
          color: 'yellow',
          duration: 1000,
        },
      ]}
    />
  );
};

export default TrafficLightTest;
