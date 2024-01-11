import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality} from "./sections";

const App = () => (
  <main className="relative">
    Nav
    <section className="xl:padding-1 wide:padding-r padding-b">
    <Hero/>
    </section>

    <section className="padding">
      <PopularProducts/>
    </section>
 
    <section className="padding-x py-10">
      <SuperQuality/>
    </section>

    <section className="padding">
      <Services/>
    </section>

    <section className="padding">
      <SpecialOffers/>
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>

    <section className="padding-x padding-t pb-8 bg-black ">
      <Footer/>
    </section>
 
  </main>
  );

  export default App;
  