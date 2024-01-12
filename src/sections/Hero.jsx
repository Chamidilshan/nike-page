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
        <p>Our Summer Collection</p>
        <h1>
          <span>Our New Arrival</span>
          <br/>
          <span>Nike</span>
          Shoes
        </h1>
        <p>Discover stylish Nike arrivals, Quality
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
              <p>{stat.value}</p>
              <p>{stat.label}</p>
              </div>
              ))} 
        </div>
      </div>

    </section>
  ) 
}

export default Hero