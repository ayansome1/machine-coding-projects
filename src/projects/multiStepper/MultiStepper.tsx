import { useState } from 'react';
import styles from './MultiStepper.module.scss';
import Stepper from './Stepper';
import React from 'react';

interface MultiStepperProps {
  data: any[];
}

const MultiStepper = ({ data }: MultiStepperProps) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNextClick = () => {
    setCurrentIndex((val) => Math.min(val + 1, data.length - 1));
  };
  const handlePrevClick = () => {
    setCurrentIndex((val) => Math.max(0, val - 1));
  };
  const Elem = data[currentIndex];
  return (
    <div>
      <Stepper maxSteps={data.length} currentStep={currentIndex + 1} />
      <div className={styles.content}>
        {React.cloneElement(<Elem />, { handlePrevClick, handleNextClick })}
      </div>
    </div>
  );
};

export default MultiStepper;
