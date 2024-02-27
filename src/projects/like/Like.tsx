import { useState } from 'react';
import styles from './Like.module.scss';
import { HeartIcon, SpinnerIcon } from './icons/icons';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = () => {
    async function postLike() {
      setIsLoading(true);
      let response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'x',
          userId: 5,
        }),
      });
      response = await response.json();
      response.likeStatus = Math.random() < 0.5;
      setIsLoading(false);
      setIsLiked(response.likeStatus);
      console.log(response);
    }
    postLike();
  };
  return (
    <>
      <button
        className={`${styles['btn']} ${isLiked ? styles['btn-liked'] : ''}`}
        onClick={handleLike}
      >
        {/* {isLiked && <HeartIcon />} */}
        {isLoading ? <SpinnerIcon /> : <HeartIcon />} Like
      </button>
    </>
  );
};

export default Like;
