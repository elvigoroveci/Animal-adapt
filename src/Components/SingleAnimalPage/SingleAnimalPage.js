import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SingleAnimalPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouseli from "./Carouseli";
import InfotTabela from "./InfotTabela";
import Ikona from "./Ikonat";
import Slideshow from "./Slideshow";
import { Card } from "react-bootstrap";




const SingleAnimalPage =() =>{
    
         return (
            <div className="container"> {/* kontaineri kryesor, permban te gjithe elementet */}

                <div className="row border rounded mt-5"> {/* Permban Carouselin */}
                    <div className="col-sm mt-3">
                        <div className = "carousel"
                        >
                           <Carouseli />

                           <div className="bg-warning p-1 rounded">
                             <h3 class="text-white ">  {<Ikona />}  <small class="text-muted ">100% health guarantee for pets</small> </h3>   
                           </div>

                           <div className="share mt-3">
                                <button type="button" class="btn btn-light disabled"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                                    </svg> Share :  
                                </button>

                                <button type="button" class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" color="gray">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                    </svg></button> 

                                <button type="button" class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16" color="gray">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                    </svg>
                                </button>

                                <button type="button" class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" color="gray">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </button>
                           </div>
                        </div>
                    </div>

                    <div className="col-sm m-1 align-baseline">
                        <div className="container-2 mt-3">
                            <h3>Emri i qenit</h3>
                            <h4>Bio, infot per qenin ... </h4>
                        <hr />
                            <InfotTabela />         {/* Permban Tabelen me infot e kafshes */}                   
                        </div>
                    </div>

                </div>

                <h2 style={{textAlign: "left", marginTop: 100,}}>Ower lovely customer</h2>

                <div className="container-3 mt-1">      {/* Permban modelin e pare te fotove */}    
                       
                         <div className="container-1">
                            <div className="row mt-1">
                                <div className="col-sm">
                                     <Slideshow />        
                                </div>
                            </div>
                        </div>                          
                 </div>

                 <div className="container-4">       {/* Permban modelin e dyte te fotove te fotove */}   
                    <div className="row">
                        <div className="col">
                        <img id="fotot" src="https://www.tuttogreen.it/wp-content/uploads/2017/05/shutterstock_1018149943.jpg" alt="..." class="img-thumbnail"/>
                        <img id="fotot" src="https://www.tuttogreen.it/wp-content/uploads/2017/05/shutterstock_1018149943.jpg" alt="..." class="img-thumbnail"/>
                        <img id="fotot" src="https://amicaveterinaria.com/wp-content/uploads/2022/06/unnamed-scaled-e1655126628569-1024x891.jpg" alt="..." class="img-thumbnail"/>
                        <img id="fotot" src="https://www.tuttogreen.it/wp-content/uploads/2017/05/shutterstock_1018149943.jpg" alt="..." class="img-thumbnail"/>
                        <img id="fotot" src="https://www.tuttogreen.it/wp-content/uploads/2017/05/shutterstock_1018149943.jpg" alt="..." class="img-thumbnail"/>
                        </div>
                    </div>
                 </div>

                 <div className="container-5">   {/* Permban kardat per kafshe te */}   
                    <div className="row">
                        <div className="col-sm">
                                <p style={{textAlign: "left", marginTop: 60, fontSize: 25, fontFamily: "fantasy",}}>Whats new?</p>
                                <h3 style={{textAlign: "left", marginTop: 20, fontSize: 35, fontFamily: "Cursive", color: "blue"}}>See More Puppies</h3>
                                <div style={{marginTop: 30,}}>
                                 
                                     <div className="row kartat text-center">
                                        <div className="col-sm">
                                            <Card className="border border-white">
                                                    <Card.Img variant="top" className="rounded mx-auto d-block" style={{width: 300, height: 300}}  src="https://www.zooplus.it/magazine/wp-content/uploads/2018/08/Siberian-Husky-mit-Welpe-768x512.jpg" />
                                                        <Card.Body>
                                                        <Card.Title>Emri i kafshes</Card.Title>
                                                            <Card.Text>
                                                            Pershkrimi, mosha, ngjyra, gjinia...
                                                            </Card.Text>
                                                        </Card.Body>
                                                        {/* <Card.Footer>
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                        </Card.Footer> */}
                                                </Card>
                                        </div>
                                        <div className="col-sm">
                                            <Card className="border border-white">
                                                <Card.Img variant="top" className="rounded mx-auto d-block" style={{width: 300, height: 300}}  src="https://www.zooplus.it/magazine/wp-content/uploads/2018/08/Siberian-Husky-mit-Welpe-768x512.jpg" />
                                                    <Card.Body>
                                                    <Card.Title>Emri i kafshes</Card.Title>
                                                        <Card.Text>
                                                        Pershkrimi, mosha, ngjyra, gjinia...
                                                        </Card.Text>
                                                    </Card.Body>
                                                    {/* <Card.Footer>
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                    </Card.Footer> */}
                                            </Card>
                                        </div>
                                        <div className="col-sm">
                                        <Card className="border border-white">
                                                <Card.Img variant="top" className="rounded mx-auto d-block" style={{width: 300, height: 300}}  src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" />
                                                    <Card.Body>
                                                    <Card.Title>Emri i kafshes</Card.Title>
                                                        <Card.Text>
                                                        Pershkrimi, mosha, ngjyra, gjinia...
                                                        </Card.Text>
                                                    </Card.Body>
                                                    {/* <Card.Footer>
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                    </Card.Footer> */}
                                            </Card>
                                        </div>
                                        <div className="col-sm">
                                            <Card className="border border-white">
                                                    <Card.Img variant="top" className="rounded mx-auto d-block" style={{width: 300, height: 300}}  src="https://www.zooplus.it/magazine/wp-content/uploads/2018/08/Siberian-Husky-mit-Welpe-768x512.jpg" />
                                                        <Card.Body>
                                                        <Card.Title>Emri i kafshes</Card.Title>
                                                            <Card.Text>
                                                            Pershkrimi, mosha, ngjyra, gjinia...
                                                            </Card.Text>
                                                        </Card.Body>
                                                        {/* <Card.Footer>
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                        </Card.Footer> */}
                                                </Card>

                                    </div>
                                 </div>
                                 </div>
                             
                        </div>

                    </div>
                    

                    </div>
                 </div>
            
            
            
            
    );
}

export default SingleAnimalPage;
