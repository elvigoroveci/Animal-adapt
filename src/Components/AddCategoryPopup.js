import './singleCategory.scss';
const AddCategoryPopup = () => {


    return (
        <div className="popup">
            <h3>Select new category</h3>
            <select>
            <option>Squirrel</option>
            <option>Fish</option>
            <option>Horse</option>
            <option>Snakes</option>
            </select>
            
        </div>
    )

}

export default AddCategoryPopup;