import { useEffect, useState } from 'react';

const limit = 3;
const HackerNewsJobBoard = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(
        'https://hacker-news.firebaseio.com/v0/jobstories.json'
      );
      res = await res.json();
      setData(res);
    }
    getData();
  }, []);

  useEffect(() => {
    console.log(start, ' ', data);
    if (!data.length) {
      return;
    }
    async function getJobDetails() {
      const urls = [];
      for (let i = start; i < Math.min(start + limit, data.length); i++) {
        urls.push(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`);
      }

      const res = await Promise.all(urls.map((url) => fetch(url)));
      const jobData = await Promise.all(res.map((response) => response.json()));

      // const jobData = await Promise.all(
      //   urls.map(async (url) => {
      //     const res = await fetch(url);
      //     return res.json();
      //   })
      // );

      setJobs((data) => [...data, ...jobData]);
    }
    getJobDetails();
  }, [data, start]);

  const handleMoreClick = () => {
    setStart((val) => val + limit);
  };
  // const { data, isError, isPending, error } = useQuery({
  //   queryKey: ['news'],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       'https://4366a769780a4f87991d3cda26d5e237.api.mockbin.io/'
  //     );
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   },
  //   // queryFn: () =>
  //   //   fetch('https://hacker-news.firebaseio.com/v0/jobstories.json').then(
  //   //     (res) => res.json()
  //   //   ),
  // });
  // if (isPending) {
  //   return 'Loading....';
  // }
  // if (isError) {
  //   return error.message;
  // }

  return (
    <div>
      {jobs.map((val) => (
        <div key={val.id}>{val.title}</div>
      ))}
      {jobs.length < data.length && (
        <button onClick={handleMoreClick}>More</button>
      )}
      <div>Total jobs: {data.length}</div>
      <div>Visible jobs: {jobs.length}</div>
    </div>
  );
};

export default HackerNewsJobBoard;
