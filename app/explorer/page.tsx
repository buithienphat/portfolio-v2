import { getExplorer } from "@/actions/actions";
import ListExplorer from "./ListExplorer";

type Props = {};

export type Service = {
  href: string;
  num: string;
  title: string;
  desc: string;
};

const Explorer = async (props: Props) => {
  const res: any = await getExplorer();
  const dataExplorer: any = res[0].pages.explorer.data;

  return (
    <section className="md:pt-20 pt-10 select-text">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {dataExplorer.map((service: Service, index: number) => (
            <div key={index}>
              <ListExplorer service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorer;
