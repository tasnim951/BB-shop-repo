
export default async function 
  ProductDetails ({params}) {

    const {id} = await params;
    return (
    <div className="p-10">
        <h1 className="font-bold">product details</h1>
        <p>Product ID : {id}</p>
    </div>
  );
}
