import { Component } from 'react';
import Category from './data-small-category';

class DataBigCardCategory extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoryValue: [
                {
                    category: 'N/A',
                    cantidadDisponible: 'N/A',
                },
            ]
        }
    }

    async componentDidMount(){
        let categories = await fetch('http://localhost:3000/api/products/categories');
        categories = await categories.json();

        const categoryValue = [];
        categories.data.map((category) => {
            return categoryValue.push(category)
        })
        this.setState({
            categoryValue,
        })
    }

    render(){
        return (
            <div className='col-lg-6 mb-4'>
                <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                        <h6 className='m-0 font-weight-bold text-primary'>Categories in Database</h6>
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            {
                                this.state.categoryValue.map ((indice, index) => {
                                    return <Category
                                    key={index}
                                    category={indice.category.toUpperCase()}
                                    cantidadDisponible={indice.categoryCount}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default DataBigCardCategory;