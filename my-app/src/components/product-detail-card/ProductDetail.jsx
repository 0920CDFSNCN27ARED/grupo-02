import DetailProduct from './DetailProduct';
function ProductDetailCard () {
    const ProductsValue = [
        {
            name: 'Rogel',
            description: 'Rogel clásico con merengue italiano, relleno de dulce de leche.',
            price: '1230',
            category: 'Clásica',
        },
        {
            name: 'Cheesecake Frutos Rojos',
            description: '4Base de galletitas crocante, relleno de queso crema y cobertura de frutos rojos según estación (compota casera, con frutillas y arandanos en temporada o frutos rojos congelados fuera de temporada).',
            price: '1200',
            category: 'Clásica',
        },
        {
            name: 'Moana',
            description: '3 capas de bizcochuelo humedecido con almíbar y 2 capas de relleno. Bizcochuelo vainilla o chocolate relleno de 1 capa de ganache de chocolate semiamargo y 1 capa de compota de frambuesas y buttercream de vainilla.',
            price: '3050',
            category: 'Decorada',
        },
    ]
    return (
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
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
                        ProductsValue.map ((indice, index) => {
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
export default ProductDetailCard;