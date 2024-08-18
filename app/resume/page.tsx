import { getPage } from "@/actions/actions";
import SectionResume from "./SectionResume";

const Resume = async () => {
  const res: any = await getPage();
  const dataResume: any = res[0].resume;

  return <SectionResume data={dataResume} />;
};

export default Resume;
