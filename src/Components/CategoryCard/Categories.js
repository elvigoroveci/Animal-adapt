import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import PetsIcon from '@mui/icons-material/Pets';
// import TwitterIcon from '@mui/icons-material/Twitter';
import CategoryCard from './CategoryCard';
import "./Categories.scss";
import logo from '../assets/img/logo.png';
import dog from '../assets/img/cats&dogs.jpg';
import AddCategoryPopup from './AddCategoryPopup';
import CategoryGrid from './CategoryGrid';
import httpClient from '../../HttpClient';


const Categories = () => {

    
    const [showPopup, setShowPopup] = useState(false);
    // fix an error on the console for using conditional on classname
    const [makeBlur, setMakeBlur] = useState('');
    const [categories, setCategories] = useState();

    const getCategories = async () => {
        const { status, categories, message } = await httpClient.get(`categories`); 
    debugger
        if (status === 'success') {
          setCategories(categories);
        } else {
          alert(message);
        }
      };
  
      
    getCategories();

      console.log(categories);

    const handleAddCategory = (newCategory) => {
        const newItem = { id: categories.length + 1, logo: 'doing', title: newCategory }
        setCategories([...categories, newItem]);
        console.log(categories);
    };
    // set popup true to show AddCategoryPopup
    const handleAddCategoryPopup = () => {
        setShowPopup(true);
        setMakeBlur('blur');
    };
    // check if popup active and on outclick disappear
    const handlePopupBlur = (event) => {
        if (event.target !== <AddCategoryPopup /> && showPopup) {
            setShowPopup(false);
            setMakeBlur('');
        }
    }
    //disappear Popup after submit
    const handlePopupOnSubmit = () => {
        setShowPopup(false);
        setMakeBlur('');
    }

    

  

    return (
        <>
            <div className={makeBlur} onClick={handlePopupBlur}>
                <img src={logo} alt='logo' className='logo'></img>
                <div className='page-container'>
                    <button className='add-category' onClick={handleAddCategoryPopup}>Add Category</button>
                    <div className='search-container'>
                        <SearchIcon />
                        <input type="search" className="categories-search" placeholder='search your favourite animal...'></input>
                    </div>
                    <div className='photo-container'>
                        <h1 className="categories-title">Pet Categories</h1>
                        <img src={dog} alt="img" ></img>
                    </div>
                </div>
            </div>
            <>
                <CategoryCard category={categories}/>
            </>
            <>
                <CategoryGrid/>
            </>
        <>
                {showPopup && <AddCategoryPopup addCategory={handleAddCategory} showPopup={handlePopupOnSubmit}/>}
                </>
        </>
    )

}

export default Categories;