import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PetsIcon from '@mui/icons-material/Pets';
import TwitterIcon from '@mui/icons-material/Twitter';
import CategoryCard from './CategoryCard/CategoryCard';
import "./singleCategory.scss";
import logo from '../logo.png'
import dog from '../cats&dogs.jpg'
import AddCategoryPopup from './AddCategoryPopup';


const SingleCategory = () => {

    const [showPopup, setShowPopup] = useState(false);
    const [categories, setCatedories] = useState([
        {
            id: 1,
            logo: <PetsIcon />,
            title: 'Dogs'
        },
        {
            id: 2,
            logo: <TwitterIcon />,
            title: 'Birds'
        },
        {
            id: 3,
            logo: <PetsIcon />,
            title: 'Cats'
        }
    ]);
// set popup true to show AddCategoryPopup
    const handleAddCategoryPopup = () => {
        setShowPopup(true);
    }
// check if popup active and on out 
    const handlePopupBlur = (event) => {
        if (event.target !== <AddCategoryPopup/> && showPopup){
            setShowPopup(false);
        }
    };

   const handleAddCategory = () => {
            setCatedories(...categories);
   };

    return (
        <>
        <div className={showPopup && 'blur'} onClick={handlePopupBlur}>
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
            <>
                <CategoryCard category={categories} />
            </>
        </div>
                {showPopup && <AddCategoryPopup data={handleAddCategory}/>}
        </>
    )




}

export default SingleCategory;