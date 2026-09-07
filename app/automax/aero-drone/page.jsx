import WorkshopForm from "../WorkshopForm";
import { workshops } from "../workshopData";

export default function AeroDronePage() {
  return <WorkshopForm workshop={workshops.aero} />;
}