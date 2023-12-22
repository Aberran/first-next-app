const ProductDeatil = ( { params }: {
    params: { productId: string };
} ) => {
  return (
    <div>Detail { params.productId }</div>
  )
}

export default ProductDeatil