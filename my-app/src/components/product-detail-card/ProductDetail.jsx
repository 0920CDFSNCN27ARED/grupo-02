import DetailProduct from './DetailProduct';
import { Component } from 'react';
class ProductDetailCard extends Component {
        constructor(props){
          super(props);
          this.state = {
            ProductsValue: [
                {
                    name: 'N/A',
                    description: 'N/A',
                    price: 'N/A',
                    category: 'N/A',
                },
            ],
        };
    }
    async componentDidMount() {
        const products = await fetch('http://localhost:3000/api/products');
        const productsJson = await products.json();
        const ProductsValue = [];
        productsJson.data.map ((producto) => {
            ProductsValue.push(producto);
        });
        this.setState({
            ProductsValue,
        });
    }
    render () {
        return (
            <div className= 'card-body'>
                <div className='table-responsive'>
                    <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                            </tr>
                        </tfoot>
                        {
                            this.state.ProductsValue.map ((indice, index) => {
                                return <DetailProduct
                                key={index}
                                name={indice.name}
                                description={indice.description}
                                price={indice.price}
                                category={indice.category} />
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}
export default ProductDetailCard;