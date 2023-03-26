import { useState } from 'react';
import './Categories.scss';
const AddCategoryPopup = (props) => {

    const [userInput, setUserInput] = useState('');

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const handleCategories = () => {
        props.addCategory(userInput);
        props.showPopup();
    };

    console.log(userInput);

    return (
        <div className="popup">
            <h3>Select new category</h3>
            <form value={userInput} onChange={handleUserInput}>
                <div className='form-container'>
                    <input name='photo' type="photo" placeholder='Logo' />
                    <input name='category' type="text" placeholder='Enter Category' />
                    <input name='bredd' type="text" placeholder='Enter Breed' />
                </div>
            </form>
            <button className='add-category' onClick={handleCategories}>Submit</button>
        </div>
    )
}

export default AddCategoryPopup;