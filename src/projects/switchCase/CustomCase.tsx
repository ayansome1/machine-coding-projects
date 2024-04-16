interface CustomCaseProps {
  children: React.ReactNode;
  value: any;
}

const CustomCase = ({ children, value }: CustomCaseProps) => {
  return <>{children}</>;
};

export default CustomCase;
