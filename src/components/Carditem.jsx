import React from "react";

const Carditem = ({product, addInCart}) =>{
  return(
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={product.smallImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{product.productName}</h2>
    <h2 className="card-title">price: {product.productPrice} $</h2>
    <p>Lorem ipsum dolor sit amet consectetur </p>
    <div className="card-actions">
        {/* this addInCart is really important concept */}
      <button onClick={()=> addInCart(product)} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>

  )
}

export default Carditem;