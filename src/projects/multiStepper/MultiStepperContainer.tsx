import { useState } from 'react';
import MultiStepper from './MultiStepper';

const Step1 = ({ handleNextClick, handlePrevClick }) => {
  return (
    <>
      <div>Hi 1</div>
      <button onClick={handleNextClick}>Next 1</button>
      <button onClick={handlePrevClick}>Previous 1</button>
    </>
  );
};

const Step2 = ({ handleNextClick, handlePrevClick }) => {
  return (
    <>
      <div>Hi 2</div>
      <button onClick={handleNextClick}>Next 2</button>
      <button onClick={handlePrevClick}>Previous 2</button>
    </>
  );
};

const Step3 = ({ handleNextClick, handlePrevClick }) => {
  return (
    <>
      <div>Hi 3</div>
      <button onClick={handleNextClick}>Next 3</button>
      <button onClick={handlePrevClick}>Previous 3</button>
    </>
  );
};

const Step4 = ({ handleNextClick, handlePrevClick }) => {
  return (
    <>
      <div>Hi 4</div>
      <button onClick={handleNextClick}>Next 4</button>
      <button onClick={handlePrevClick}>Previous 4</button>
    </>
  );
};

const componentList = [Step1, Step2, Step3, Step4];

const MultiStepperContainer = () => {
  return (
    <>
      <MultiStepper data={componentList} />
    </>
  );
};

export default MultiStepperContainer;
