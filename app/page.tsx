type Props = {};

const Home = (props: Props) => {
  return (
    <main className="">
      homePage
      {...Array(6)
        .fill(null)
        .map((item, index) => <div>test</div>)}
    </main>
  );
};

export default Home;
