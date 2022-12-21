import {GetServerSideProps} from 'next';

function Home(props: any) {
  return (
    <div>
      <h1>Lucas</h1>
    </div>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('executou getServerSideProps');

  return {
    props: {
      players: [{name: 'Lucas'}],
    },
  };
};
