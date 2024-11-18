import { Button } from "../Button";
import { Layout } from "../Layout";
import { SpecialsPost } from "../SpecialsPost";
import "./styles.css";

export const Specials = () => {
  const onOrderOnline = () => {};

  return (
    <Layout>
      <div className="specials">
        <div className="heading">
          <h2>This week’s specials!</h2>
          <Button className="primary" onClick={onOrderOnline}>
            Order Online
          </Button>
        </div>
        <section>
          <SpecialsPost
            src="images/greek_salad.jpg"
            alt="greek salad"
            title="Greek salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and
                feta cheese, garnished with crunchy garlic and rosemary crutons."
          />
          <SpecialsPost
            src="images/bruchetta.svg"
            alt="bruchetta"
            title="Bruchetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bred that has been smeared
                with garlic and seasoned with salt and live oil."
          />
          <SpecialsPost
            src="images/lemon_dessert.jpg"
            alt="lemon dessert"
            title="Lemon Dessert"
            price="$5.00"
            description=" This comes straight from grandmas recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined."
          />
        </section>
      </div>
    </Layout>
  );
};
