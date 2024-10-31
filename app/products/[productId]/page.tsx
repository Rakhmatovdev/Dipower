import Details from "./Details";

const ProductDetails = (params:{params:{productId:string}}) => {
 
  return (
    <div>
      <Details params={params.params}/>
    </div>
  );
};

export default ProductDetails;
