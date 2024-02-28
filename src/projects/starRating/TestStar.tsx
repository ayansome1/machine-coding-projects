import StarRating from './StarRating';

const TestStar = () => {
  return (
    <div>
      <StarRating
        max={8}
        onClick={(idx) => {
          // console.log(idx);
        }}
      />
    </div>
  );
};

export default TestStar;
