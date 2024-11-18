import { CallToAction } from "../CallToAction";
import { Chicago } from "../Chicago";
import { Specials } from "../Specials";
import { CustomersSay } from "../CustomersSay";

export const HomePage = () => {
  return (
    <>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
};
