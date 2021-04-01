import SideMenu from './components/side-menu/side-menu';
import Header from './components/header/header';
import DataCardSmall from './components/data-cards/data-card-small/data-small-card';
import DataCardBig from "./components/data-cards/data-card-big/data-big-card";
import DataBigCardCategory from "./components/category-card/data-big-card-category"; 
import ProductDetailCard from "./components/product-detail-card/ProductDetail";
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div id='wrapper'>
        <SideMenu/>
        <div id='content-wrapper' className='d-flex flex-column'>
          <div id='content'>
            <Header/>
          </div>
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <div className="row">
              <DataCardSmall title= 'Products in Data Base' value='13' icon='fa-clipboard-list' color= 'primary'/>
              <DataCardSmall title= 'Amount in products' value='$ 23000' icon='fa-dollar-sign' color= 'success'/>
              <DataCardSmall title= 'Users quantity' value='20' icon='fa-user-check' color= 'warning'/>
            </div>
            <div className="row">
                <DataCardBig />
                <DataBigCardCategory />
            </div>
            <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            <div className="card shadow mb-4">
              <ProductDetailCard />
            </div>
          </div>
          < Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
