import styles from './MultiStepper.module.scss';

interface StepperProps {
  maxSteps: number;
  currentStep: number;
}

const Stepper = ({ maxSteps, currentStep }: StepperProps) => {
  const getDivider = (index) => {
    if (index === 0) {
      return <></>;
    }
    const isVisible = index + 1 <= currentStep && index > 0;
    return (
      <span
        className={`${styles.divider} ${
          !isVisible ? styles['divider--hidden'] : ''
        }`}
      ></span>
    );
  };
  return (
    <div className={styles.stepperContainer}>
      {Array(maxSteps)
        .fill(null)
        .map((val, index) => (
          <>
            {getDivider(index)}

            <div
              className={`${styles.step} ${
                index + 1 <= currentStep ? styles['step--active'] : ''
              }`}
            >
              {index + 1}
            </div>
          </>
        ))}
    </div>
  );
};

export default Stepper;
