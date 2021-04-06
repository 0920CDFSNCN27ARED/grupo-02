function SmallCAtegories(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    <p>{props.category}</p>
                    <p>{props.cantidadDisponible}</p>
                </div>
            </div>
        </div>
    )
};
export default SmallCAtegories;