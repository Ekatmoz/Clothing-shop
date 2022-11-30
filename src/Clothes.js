function Clothes({dresses}){
  return(
    <div className="products">
      {dresses.map((dress => {
        const {id, name, price, image} = dress;
        return(
            <div className="product-card" key={id}>
              <img src={image} alt='Short' width="350px" height="450px"/>
              <div className="product-info">
              <h3>{name}</h3>
              <h4>$ {price} </h4>
            </div>
            </div>
            
        )
      }))}
    </div>
  )
}
export default Clothes;