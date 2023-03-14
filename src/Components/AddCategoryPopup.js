import { useState } from 'react';
import './singleCategory.scss';
const AddCategoryPopup = (props) => {

    const [userInput, setUserInput] = useState('');

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleCategories = () => {
        props.addCategory(userInput);
        props.showPopup();
    };

    return (
        <div className="popup">
            <h3>Select new category</h3>
            <select value={userInput} onChange={handleUserInput}>
                <option>Select Category</option>
                <option>Squirrel</option>
                <option>Fish</option>
                <option>Horse</option>
                <option>Snakes</option>
            </select>
            <button className='add-category' onClick={handleCategories}>Submit</button>
        </div>
    )
}

export default AddCategoryPopup;