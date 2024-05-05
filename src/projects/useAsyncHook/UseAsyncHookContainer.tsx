import useAsync from './useAsync';

function fetchData() {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve, reject) => {
    const resultData = 'Hi testing';
    // const sampleFeatures = {
    //   abc: true,
    //   def: false,
    // };
    // setTimeout(resolve, 3000, resultData);
    const random_boolean = Math.random() < 0.5;
    if (random_boolean) {
      setTimeout(resolve, 3000, resultData);
    } else {
      setTimeout(() => {
        reject('error here');
      }, 3000);
    }
  });
}

const UseAsyncHookContainer = () => {
  // const { state, value, error } = useAsync(
  //   fetch('https://jsonplaceholder.typicode.com/todos/1'),
  //   false
  // );
  const { state, value, error, refetch } = useAsync(fetchData, false);
  return (
    <div>
      <div>State: {state}</div>
      <div>Value: {value}</div>
      <div>Error: {error}</div>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default UseAsyncHookContainer;
