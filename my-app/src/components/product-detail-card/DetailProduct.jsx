function DetailProduct (props){
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <td>{props.category}</td>
            </tr>
        </tbody>
    )
}
export default DetailProduct;