
import axios from "axios";
import { useEffect, useState } from "react";

const Topping = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3030/toppings")
      .then((res) => setToppingData(res.data));
  }, []);

  let handleChange=(e,top)=>{
    e.target.checked ? setBasket([...basket, top]) : setBasket(basket.filter((basket) => basket.name !== top.name))
   
  }
  console.log(basket)

  return (
    <div className="container">
      <hr />
      <h1>Sos Çeşitleri:</h1>
      <p>Tanesi 3&#8378; </p>
      <h2>Soslar Ücreti: {basket.length*3}</h2>
      <div className="row gap-3 mt-5 ">
        {toppingData.map((topping, i) => {
          return (
            <div key={i} style={{ width: "150px" }}
              className="d-flex flex-column align-items-center "
            >

              <img src={topping.imagePath} alt="" className="img-fluid" />

              <label className="text-nowrap" htmlFor={topping.name}>
                {topping.name}
              </label>

              <input type="checkbox" className="form-check-input"
                     id={topping.name}
                onChange={(e)=>handleChange(e,topping)}
              />
              
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Topping;
