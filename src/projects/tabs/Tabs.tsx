import { useState } from 'react';
import styles from './Tabs.module.scss';
interface Tab {
  header: React.ReactNode;
  description: React.ReactNode;
}

interface TabProps {
  data: Tab[];
}

const Tabs = ({ data }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {data.map((val, index) => {
        return (
          <button
            role='tab'
            onClick={() => setActiveTab(index)}
            key={index}
            aria-selected={activeTab === index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ''
            }`}
          >
            {val.header}
          </button>
        );
      })}
      <div role='tabpanel'>{data[activeTab].description}</div>
    </>
  );
};

export default Tabs;
