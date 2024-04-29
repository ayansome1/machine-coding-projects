import ToggleSwitch from './ToggleSwitch';

const ToggleSwitchContainer = () => {
  const onChange = (val) => {
    console.log(val);
  };
  return (
    <div>
      <ToggleSwitch defaultChecked={true} onChange={onChange} />
    </div>
  );
};

export default ToggleSwitchContainer;
