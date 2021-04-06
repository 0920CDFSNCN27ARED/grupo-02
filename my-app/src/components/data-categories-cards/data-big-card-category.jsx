import Category from './data-small-category';
function DataBigCardCategory (){
    const categoryValue = [
        {
            category: 'Clásica',
            cantidadDisponible: '4',
        },
        {
            category: 'Decorada',
            cantidadDisponible: '3',
        },
      ]
    
    
    return (
        <div className='col-lg-6 mb-4'>
            <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>Categories in Data Base</h6>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        {
                            categoryValue.map ((indice, index) => {
                                return <Category
                                key={index}
                                category={indice.category}
                                cantidadDisponible={indice.cantidadDisponible}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DataBigCardCategory;