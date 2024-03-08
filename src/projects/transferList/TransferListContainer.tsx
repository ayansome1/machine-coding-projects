import TransferList from './TransferList';

const TransferListContainer = () => {
  return (
    <TransferList
      data={[
        {
          item: 'HTML',
          id: 'x-html',
          list: 'row-1',
        },
        {
          item: 'React',
          id: 'x-react',
          list: 'row-2',
        },
        {
          item: 'Javascript',
          id: 'x-js',
          list: 'row-1',
        },
        {
          item: 'CSS',
          id: 'x-css',
          list: 'row-1',
        },
        {
          item: 'Typescript',
          id: 'x-ts',
          list: 'row-1',
        },
        {
          item: 'Angular',
          id: 'x-angular',
          list: 'row-2',
        },
        {
          item: 'Vue',
          id: 'x-vue',
          list: 'row-2',
        },
        {
          item: 'Svelte',
          id: 'x-svelte',
          list: 'row-2',
        },
      ]}
    />
  );
};

export default TransferListContainer;
