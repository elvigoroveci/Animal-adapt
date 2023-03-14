import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./SingleAnimalPage.css"
import { useState } from "react";
import "./SingleAnimalPage.scss";

function Carouseli() {
        const imageData = [
            { 
              label: "Image 1",
              alt: "image1",
              url:"https://media-be.chewy.com/wp-content/uploads/siberian-husky-woods-shutterstock_558432511.jpg"
            },
            {
              label: "Image 2",
              alt: "image2",
              url:"https://canem.dk/cache/1/9/8/1/4/7/4/siberian-husky-fit-2000x2000x80.webp"
            },
            {
              label: "Image 3",
              alt: "image3",
              url:"https://cdn.pixabay.com/photo/2020/01/02/14/01/siberian-husky-4735878_1280.jpg"
            },
            {
              label: "Image 4",
              alt: "image4",
              url:"https://www.greenme.it/wp-content/uploads/2021/08/husky.jpg"
            },
            {
                label: "Image 5",
                alt: "image4",
                url:"https://www.zooplus.it/magazine/wp-content/uploads/2018/08/Siberian-Husky-mit-Welpe-768x512.jpg"
            },
            {
                label: "Image 6",
                alt: "image4",
                url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F06%2F14%2Fsiberian-husky-puppy-grass-146571433-2000.jpg"
            },
            {
                label: "Image 7",
                alt: "image4",
                url:"https://www.tuttogreen.it/wp-content/uploads/2017/05/shutterstock_1018149943.jpg"
            },
          ];

          const renderSlides = imageData.map((image) => (
            <div key={image.alt}>
              <img src={image.url} alt={image.alt} />
              {/* <p className="legend">{image.label}</p> */}
            </div>
          ));
    
          const [currentIndex, setCurrentIndex] = useState();
                function handleChange(index) {
                    setCurrentIndex(index);
                }
                return (   
                <Carousel showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    selectedItem={imageData[currentIndex]}
                    onChange={handleChange}
                    stopOnHover={true}
                   className="carousel-container"
                   >
                   {renderSlides}

                </Carousel>
            );
        } 

export default Carouseli;