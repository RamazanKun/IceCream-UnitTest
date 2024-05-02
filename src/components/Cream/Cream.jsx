
import { useEffect, useState } from "react"
import Card from "../Card/Card"
import axios from "axios"



const Cream = () => {

    let [creamData, setCreamData]= useState([])
    let [totalCream, setTotalCream]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3030/scoops')
        .then((res) => setCreamData(res.data))
      }, [])
  

  return (
    <div className='container'>

    <h1>Dondurma Çeşitleri</h1>
    <p>Tanesi 20₺ </p>
    <h2>Çeşitler Ücreti: {totalCream.length*20}</h2>

    <div className='row gap-5 justify-content-between'>
        {creamData.map((item,i)=>(
           <Card key={i} 
           totalCream={totalCream} 
           setTotalCream={setTotalCream}  
           item={item}/>
        ))}
    </div>

    </div>
  )
}

export default Cream;