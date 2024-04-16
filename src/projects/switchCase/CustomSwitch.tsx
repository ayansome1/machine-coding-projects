import React, { Children } from 'react';

interface CustomSwitchProps {
  value: any;
  children: React.ReactNode;
}

const CustomSwitch = ({ value, children }: CustomSwitchProps) => {
  const getValidChildren = () => {
    const childrenArray = Children.toArray(children);
    const filteredChildrenArray = childrenArray
      .filter((child) => {
        if (React.isValidElement(child)) {
          const childPropValue = child?.props?.value;
          if (
            typeof childPropValue === 'function' &&
            childPropValue(value) === true
          ) {
            return true;
          } else if (childPropValue === value) {
            return true;
          }
          return false;
        }
      })
      .map((child) => {
        return child;
      });
    if (filteredChildrenArray.length === 0) {
      const defaultChild = childrenArray.find(
        (child) => child?.type?.name === 'DefaultCase'
      );
      if (!defaultChild) {
        return <></>;
      }
      return defaultChild;
    }

    return filteredChildrenArray;
  };
  return <>{getValidChildren()}</>;
};

export default CustomSwitch;
