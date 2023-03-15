import { useState } from 'react';
import './singleCategory.scss';
const AddCategoryPopup = (props) => {

<<<<<<< HEAD
    const [userInput,setUserInput] = useState('');
=======
    const [userInput, setUserInput] = useState('');

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleCategories = () => {
        props.addCategory(userInput);
        props.showPopup();
    };
>>>>>>> a9f142f346ed0d3a72d437cb9607ac9c9c5394a9

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    };

    console.log(userInput);
    
    return (
        <div className="popup">
            <h3>Select new category</h3>
            <select value={userInput} onChange={handleUserInput}>
<<<<<<< HEAD
                <option value='Squirrel'>Squirrel</option>
                <option value='Fish'>Fish</option>
                <option value='Horse'>Horse</option>
                <option value='Snakes'>Snakes</option>
            </select>
            <button type='submit' className='add-category' >Submit</button>
=======
                <option>Select Category</option>
                <option>Squirrel</option>
                <option>Fish</option>
                <option>Horse</option>
                <option>Snakes</option>
            </select>
            <button className='add-category' onClick={handleCategories}>Submit</button>
>>>>>>> a9f142f346ed0d3a72d437cb9607ac9c9c5394a9
        </div>
    )
}

export default AddCategoryPopup;