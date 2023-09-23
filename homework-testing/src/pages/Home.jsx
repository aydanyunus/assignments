import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
import {  useState } from "react";
import { SwitchContext } from "../context/SwitchContext";


const Home = () => {
  const products = useSelector((state) => state.products.products);
  const [currentView, setCurrentView] = useState("grid");

  return (
    <SwitchContext.Provider value={currentView}>
      <div className="container">
        <div className="view">
          <button
            className="btn-view btn-grid"
            onClick={() =>
              setCurrentView((prev) => (prev === "grid" ? "list" : "grid"))
            }
            data-testid='grid-btn'
          >
            {currentView === "grid" ?  <BsList /> : <BsFillGrid3X3GapFill />}
          </button>
        </div>
        <ProductList products={products} />
      </div>
    </SwitchContext.Provider>
  );
};

export default Home;
