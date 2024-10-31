'use client'
import OurProducts from './OurProducts'
import Elevate from './Elevate'
import { useProducts } from '@/hooks/useProducts'

const ProductsAll = () => {
const time=false
const title="Our Products"
const name="Explore Our Products"
const {data }=useProducts()
  return (
    <>
  <OurProducts products={data?data:[]} time={time} title={title} name={name}/>
<OurProducts products={data?data:[]} time={time} title={title} name={name}/>
<Elevate/>
<OurProducts products={data?data:[]} time={time} title={title} name={name}/>
    </>
  )
}

export default ProductsAll