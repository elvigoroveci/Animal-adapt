import { useState } from 'react';
import './singleCategory.scss';
const AddCategoryPopup = () => {

    const [userInput,setUserInput] = useState('');

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    };

    console.log(userInput);
    
    return (
        <div className="popup">
            <h3>Select new category</h3>
            <select value={userInput} onChange={handleUserInput}>
                <option value='Squirrel'>Squirrel</option>
                <option value='Fish'>Fish</option>
                <option value='Horse'>Horse</option>
                <option value='Snakes'>Snakes</option>
            </select>
            <button type='submit' className='add-category' >Submit</button>
        </div>
    )

}

export default AddCategoryPopup;