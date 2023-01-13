import { useEffect, useState, useRef } from "react";
import Navbar from "../Navbar";
import axios from "axios";
import Description from "./CategoryDetails";
import Pagination from "./Pagination";


export default function Category() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [details, setDetails] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [currentPage , setCurrentPaga] = useState(1);
  const [postPerPage , setPostPerPage] = useState(10);



  const catogeryurl = "https://fakestoreapi.com/products/categories";
  const url = "https://fakestoreapi.com/products"

                          // Fetching
  useEffect(() => {
      axios.get(url)
      .then(res => setProduct(res.data))

    axios.get(catogeryurl).then((response) => {
      setCategory(response.data);
    });
  }, []);
                          //Scrolling
  const scroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth"
    });
  };
  const top = useRef(null);
  const down = useRef(null);

  const descrip = () => {

    setDetails(!details);
  };
                        //Pagination
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentPosts = product.slice(firstIndex , lastIndex);
  return (
    <div>
        <Navbar/>
      <h1 ref={top} style={{textAlign: "center" , fontWeight: "bold"}}>Search Filter</h1>
      <div className="input">
      <input
            type="search"
            placeholder="Search By Title..."
            onChange={(e) => setSearchTitle(e.target.value)} />
            <div>
            <h5>MIN Value</h5>
      <input
            onChange={(e) => setSearchTitle(e.target.value)}
            type="range"
            min="1"
            max="1000"
            value={searchTitle}
          /></div>
         
      <select onChange={(e) => setSearchTitle(e.target.value)}>
        <option>Select Category</option>
        {category?.map((item) => (
            <option value={item}>{item}</option>
        ))
        }
      </select>  </div>
      <hr />
      <button onClick={() => scroll(down.current)} > Down </button>
      <h2 style={{textAlign: "center" , fontWeight: "bold"}}>Data is filtered By {searchTitle}</h2>
      <div className="filter">
     {
      currentPosts?.filter(value => {
        if (searchTitle === "" || searchTitle === "Select Category") {
          return value;
        } else if (
          value.title.toLowerCase().includes(searchTitle.toLowerCase()) ||
          value.category.toLowerCase().includes(searchTitle) ||
          parseFloat(value.price) >= parseFloat(searchTitle)
        ) {
          return value;
        }
      })
      .map(data => {
        return(
          <>
            {/* <div className="filtercontainer"> */}
            <h6 className="categorytitle" key={data.id}>
             <div style={{width: "90%"}}> Title: {data.title} </div> <br />
              Rate:- {data.rating.rate} <br />
              <div className="contain">
                <img src={data.image} alt="images" onClick={descrip} className="categoryimage"/>
                {details ? <Description  data={data} /> : ""}
                <div className="middle">
                  <div className="text">
                  Category:- {data.category} <br /> Price:- ${data.price}
                  <h5>Click and get the more details</h5>
                  </div>
                </div>
              </div>
            </h6>
          </>
        )
      })
     }
     {/* <div ref={down}></div> */}
    
</div>
{/* <Pagination totalPosts={product.length} postPerPage={postPerPage} /> */}
<Pagination
                totalPosts={product.length}
                postsPerPage={postPerPage}
            />
<button onClick={() => scroll(top.current)} ref={down}>
        Top
      </button>
    </div >
  );
}