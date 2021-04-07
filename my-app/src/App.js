import './App.css';
import SideMenu from './components/side-menu/side-menu';
import Header from './components/header/header';
import DataCardSmall from './components/data-cards/data-card-small/data-small-card';
import DataCardBig from "./components/data-cards/data-card-big/data-big-card";
import DataBigCardCategory from "./components/data-categories-cards/data-big-card-category"; 
import ProductDetailCard from "./components/product-detail-card/ProductDetail";
import Footer from './components/footer/footer';
import { Component } from "react";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardSmallValue: [
        {
          title: 'Products in Data Base',
          value:'N/A',
          icon:'fa-clipboard-list',
          color: 'primary',
        },
        {
          title: 'Amount in products',
          value:'N/A',
          icon:'fa-dollar-sign',
          color: 'success',
        },
        {
          title: 'Users quantity',
          value:'N/A',
          icon:'fa-user-check',
          color: 'warning',
        },
      ],
    };
  }
  async componentDidMount() {
    const productos = await fetch('http://localhost:3000/api/products/count');
    const count = await productos.json();
    const cardSmallValue = [
        {
          title: 'Products in Data Base',
          value: count.count,
          icon:'fa-clipboard-list',
          color: 'primary',
        },
        {
          title: 'Amount in products',
          value: `$ ${count.totalPrice}`,
          icon:'fa-dollar-sign',
          color: 'success',
        },
        {
          title: 'Users quantity',
          value:'N/A',
          icon:'fa-user-check',
          color: 'warning',
        },
      ];
    this.setState({
      cardSmallValue,
    })
  }
  
  render() {
    return (
      <div className ='App'>
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
                {
                  this.state.cardSmallValue.map ((indice, index) => {
                    return <DataCardSmall
                      key={index}
                      title={indice.title}
                      value={indice.value}
                      icon={indice.icon}
                      color={indice.color}/>
                  })
                }
              </div>
              <div className="row">
                  <DataCardBig />
                  <DataBigCardCategory />
              </div>
              <h1 className="h3 mb-2 text-gray-800">All Database Products</h1>
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
}

export default App;
