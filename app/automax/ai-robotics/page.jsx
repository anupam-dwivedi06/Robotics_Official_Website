import WorkshopForm from "../WorkshopForm";
import { workshops } from "../workshopData";

export default function AiRoboticsPage() {
  return <WorkshopForm workshop={workshops.ai} />;
}