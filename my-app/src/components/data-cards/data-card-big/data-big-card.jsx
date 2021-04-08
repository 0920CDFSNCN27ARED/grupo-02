import productDummy from '../../../assets/product_dummy.svg';
function DataCardBig(props) {
    return (
        <div className='col-lg-6 mb-4'>
            <div className='card shadow mb-4'>
                <div className='card-header py-3'>
                    <h6 className='m-0 font-weight-bold text-primary'>Last product in Data Dase</h6>
                </div>
                <div className='card-body'>
                    <div className='text-center'>
                        <img
                            className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                            style={{ width: '25rem' }}
                            src={productDummy}
                            alt='dummy'
                        />
                    </div>
                    <h2>{props.name}</h2>
                    <h3>$ {props.price}</h3>
                    <p>{props.category}</p>
                    <p>{props.description}</p>
                    <a href='http://localhost:3000/product'>View published products in web</a>
                </div>
            </div>
        </div>
    );
};
export default DataCardBig;