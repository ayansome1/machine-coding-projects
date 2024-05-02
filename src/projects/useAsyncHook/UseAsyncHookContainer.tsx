import useAsync from './useAsync';

const UseAsyncHookContainer = () => {
  const { state, value, error } = useAsync(
    fetch('https://jsonplaceholder.typicode.com/todos/1'),
    false
  );
  return (
    <div>
      <div>State: {state}</div>
      <div>Value: {value}</div>
      <div>State: {error}</div>
    </div>
  );
};

export default UseAsyncHookContainer;
