import Tabs from './Tabs';

const TabsTest = () => {
  return (
    <>
      <Tabs
        data={[
          {
            header: 'tab 1',
            description: 'description of tab 1',
          },
          {
            header: 'tab 2',
            description: 'description of tab 2',
          },
          {
            header: 'tab 3',
            description: 'description of tab 3',
          },
        ]}
      />
    </>
  );
};

export default TabsTest;
