import useIdle from './useIdle';

const UseIdleHookContainer = () => {
  const isIdle = useIdle(3000);
  return <div>{isIdle ? 'Idle now' : 'Active now'}</div>;
};

export default UseIdleHookContainer;
