import { useEffect, useState } from 'react';
import { FeatureFlagContext } from './Context';
import Feature1 from './Feature1';
import Feature4 from './Feature4';

const FeatureFlag = () => {
  const [featureData, setFeatureData] = useState({});
  useEffect(() => {
    // fetch('https://run.mocky.io/v3/2bc9b342-a4f4-400d-ab4b-79660159efce')
    //   .then((res) => {
    //     console.log(res);
    //     return res.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setFeatureData(response);
    //   });
    setFeatureData({
      feature1: true,
    });
  }, []);
  return (
    <FeatureFlagContext.Provider value={featureData}>
      <Feature1 />
      <Feature4 />
    </FeatureFlagContext.Provider>
  );
};

export default FeatureFlag;
