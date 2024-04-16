import CustomCase from './CustomCase';
import CustomSwitch from './CustomSwitch';
import DefaultCase from './DefaultCase';

const SwitchCaseContainer = () => {
  return (
    <>
      <CustomSwitch value={1000}>
        random text
        <CustomCase value={1000}>hi 1</CustomCase>
        <CustomCase value={(val) => val < 500}>hi 2</CustomCase>
        <CustomCase value={(val) => val < 1001}>hi 3</CustomCase>x
        <DefaultCase>this is default value</DefaultCase>
      </CustomSwitch>
    </>
  );
};

export default SwitchCaseContainer;
