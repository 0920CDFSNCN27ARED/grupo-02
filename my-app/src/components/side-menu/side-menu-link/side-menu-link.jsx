function SideMenuLink(props) {
    return (
        <li className={props.classLi}>
            <a className='nav-link' href='/'>
                <i className={props.class}></i>
                <span>{props.title}</span>
            </a>
        </li>
    )
}
SideMenuLink.defaultProps = {
    classLi: 'nav-item',
}
export default SideMenuLink;