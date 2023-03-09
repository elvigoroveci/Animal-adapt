
const CategoryCard = (props) => {

    return (
        <div className="categories-section">
        {
            props.category.map((item,id) => {
                
                return (
                    <div className='card-container' key={id}>
                        <div>{item.logo}</div>
                        <h3>{item.title}</h3>
                    </div>
                )
            })
        }
        </div>
    )
}

export default CategoryCard;