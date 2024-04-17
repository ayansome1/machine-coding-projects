import { useContext } from 'react';
import { FeatureFlagContext } from './Context';

const Feature1 = () => {
  const { feature1 } = useContext(FeatureFlagContext);
  if (!feature1) {
    return <></>;
  }
  return <div>this is feature 1</div>;
};

export default Feature1;
