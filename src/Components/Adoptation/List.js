
const List = ({Name, Lastname, Email, Location, Age}) =>{
    return(
        <>
        <ul>
            <li>{Name}</li>
            <li>{Lastname}</li>
            <li>{Email}</li>
            <li>{Location}</li>
            <li>{Age}</li>
        </ul>
        </>
    );
}

export default List;