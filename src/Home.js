import { useState } from "react";
import Buttons from "./Buttons";
import Clothes from "./Clothes";
import { data } from "./data";


function Home() {

  const [dresses, setDresses] = useState(data);

  const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setDresses(newClothes);
  }

  return(
    <div>
      <div className='cont'>
        <h2 className='back'>Free Standard Shipping</h2>
      </div>
      <Buttons filteredClothes={chosenClothes}/>
      <Clothes dresses = {dresses}/>
    </div>
  )
}
export default Home;