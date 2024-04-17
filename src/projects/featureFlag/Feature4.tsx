import { useContext } from 'react';
import { FeatureFlagContext } from './Context';

const Feature4 = () => {
  const { feature4 } = useContext(FeatureFlagContext);
  if (!feature4) {
    return <></>;
  }
  return <div>this is feature 4</div>;
};

export default Feature4;
