import { useEffect } from 'react';

export const useInfiniteScroll = (
  isLoading: boolean,
  callbackFn: () => void,
  ref: React.MutableRefObject<Element | null>
) => {
  useEffect(() => {
    let currentRef: Element;
    let observer: IntersectionObserver;
    if (isLoading === false) {
      observer = new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          callbackFn();
        }
      });
      if (ref.current) {
        currentRef = ref.current;
        observer.observe(currentRef);
      }
    }
    return () => {
      console.log(isLoading, observer, currentRef);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoading]);
};
