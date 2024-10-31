import Elevate from "@/app/products/Elevate"
import Hero from "./Hero"
import OurProducts from "@/app/products/OurProducts"
import NewArrival from "./NewArriwal"
import { Products1 } from "@/data/data"

const Home = () => {
   const title="Our Products"
const name="Explore Our Products"
  return (
    <div>
        <Hero/>
    <OurProducts  products={Products1} time={true} title="Today's" name="Flash Sales" />
    <OurProducts  products={Products1} time={true} title="This Month" name="Flash Sales" />
    <div className="mt-[40px] mb-[24px] "><Elevate/></div>
    <OurProducts products={Products1} title={title} name={name} time={false} />
    <NewArrival/>
    </div>
  )
}

export default Home