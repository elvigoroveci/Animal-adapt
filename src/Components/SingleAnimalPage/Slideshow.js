
import React from 'react';
import ResponsiveGallery from 'react-responsive-gallery';

function Slideshow() {
  const images=[
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-y5bJ8wJLmlPVN45y_fkV35OrTtEao5S8hJQfxrnoaBONobz20RbML2c8AyQzqVFA_3Y&usqp=CAU'},
    {src: 'https://www.thestar.com/content/dam/thestar/life/together/pets/2021/12/26/how-a-husky-named-akira-became-instagram-famous/instagram_dog_main1.jpg'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQBmN8buWtPccCEi0354mzQgv3a2Qz-9fxA&usqp=CAU'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVziOO2y9pad31U7p5JZou3nSSDClyjaiHA&usqp=CAU'},
    {src: 'https://amicaveterinaria.com/wp-content/uploads/2022/06/unnamed-scaled-e1655126628569-1024x891.jpg' },
    {src: 'https://www.trovapet.it/img/annunci/123604.jpg'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlh76sHpCKabuzHGYhQUo2J-pcQ6hM1VLeS109e213iOjHLbLF0P5Mp_KNQkEogaJ99eA&usqp=CAU'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdHY77ckzAq2Adr547HB9Hjbe9TXP2lmywA&usqp=CAU'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpxKlSOLm-uM0x9KlYraDfTpB4-T7ZHedKQ&usqp=CAU'},
    {src: 'https://www.roofus.it/immagini/blog/150.jpg'}
    
    ];

    return (
      <ResponsiveGallery 
      imageMaxWidth={600}
      screenWidthSizes={"m"}
      useLightBox={true}
      images={images}/>
    );
}


export default Slideshow;

