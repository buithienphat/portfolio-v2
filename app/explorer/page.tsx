import { explorerService } from "@/api/service";
import ListExplorer from "./ListExplorer";

type Props = {};

export type Service = {
  href: string;
  num: string;
  title: string;
  desc: string;
};

const Explorer = async (props: Props) => {
  const res = await explorerService.getExplorer();
  const dataExplorer: any = res || [];

  return (
    <section className="md:pt-20 pt-10 select-text">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {dataExplorer.map((service: Service, index: number) => (
            <ListExplorer service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorer;
