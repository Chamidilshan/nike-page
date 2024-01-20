import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import {statistics} from '../constants'

const Hero = () => {
  return (
    <section
    id="home" 
    className="w-full 
    flex border-2 border-red-500 p-2
    xl:flex-row flex-col justify-center
    min-h-screen gap-10 max-container 
    "
    >

      <div className="relative 
      xl:w-2/5 flex flex-col
      justify-center items-start
      w-full max-xl:padding-x pt-28
      ">
        <p className="text-xl font-montserrat
        text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin
         text-8xl max-sm:text-[72px] max-sm:leading-[82]
         font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap
          relative z-10 pr-10">Our New Arrival</span>
          <br/>
          <span className="text-coral-red
          inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat
        text-slate-gray text-lg
        leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, Quality
          and comfort all in one place. Make your 
          life easier and more comfortable with
          our collection.
        </p>
        <Button
        label='Show now' 
        iconUrl={arrowRight}
        />

        <div className="flex 
        items-start flex-wrap w-full 
        mt-20 justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl
              font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7
              font-montserrat text-slate-gray">{stat.label}</p>
              </div>
              ))} 
        </div>
      </div>

    </section>
  ) 
}

export default Hero