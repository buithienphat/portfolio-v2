import { getExplorer } from "@/actions/actions";
import CubeSnipener from "@/components/CubeSnipener";
import HomeLeft from "@/components/homepage/HomeLeft";
import Start from "@/components/homepage/Start";

type Props = {};

const Home = async (props: Props) => {
  const res: any = await getExplorer();

  const { pages } = res[0];

  return (
    <div>
      <section className="h-full">
        <div className="container">
          <div className="flex flex-col xl:flex-row justify-between items-center xl:pt-8 xl:pb-24 gap-10">
            <HomeLeft cv={pages.home} />
            <div className="flex items-center justify-center relative xl:pr-32">
              <CubeSnipener />
            </div>
          </div>
        </div>
      </section>

      <Start />
    </div>
  );
};

export default Home;
