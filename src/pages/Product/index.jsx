import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { json, useParams } from "react-router-dom";
import p2 from "./icon1.png"// relative path to image 
import './style.css';


const Product = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      async function fetchData() {
        console.log("Fetching data...");
        const response = await fetch("/product.json");
        const json = await response.json();
        console.log("JSON data:", json); // log the JSON data after awaiting the Promise
        const data = json.find((data) => data.id === parseInt(id));
        console.log("Product data:", data);
        setData(data);
        setLoading(false);

      }

      fetchData();

    });

    return (

      <div className="nn">
        <Header />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-content">
           <img
  src={`/images/${data.image}`}
  alt={data.name}
  className="product"
/>
            <div className="product-details">
            <h4><p className="ll">New!</p> Cotton sweatshirt<br/><br/> $1,299 </h4>
          
              
                <p className="p1">Brand: H & M<br/>Relaxed fit Crew neck<br/>
                Drop shoulder sleeves<br/>
                Elasticated neckline, hemline and cuffs<br/>
                Made in Russia<br/><br/>
                Stock & Availability: 10<br/>Size:<br/>
                <p className="size">XS</p><p className="kk">S</p><p className="k1">M</p><p className="k2">L</p></p>
              
                
                <button className="add-to-cart">Add to Cart</button>
              
            </div>
          </div>
        )}
      </div>

    );
  }
    
    export default Product;