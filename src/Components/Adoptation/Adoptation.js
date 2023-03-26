import { useState, useEffect } from "react";
import "./Adoptation.scss";

const Adoptation = () => {
  const [Popup, setPopup] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    lastname: "",
    email: "",
    location: "",
    age: 0,
  });

  const [userList, setUserList] = useState([])

  const handleUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInput),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Adoptation Request Successfully");
        localStorage.setItem("userInput", JSON.stringify(userInput));
        setUserInput({
          name: "",
          lastname: "",
          email: "",
          location: "",
          age: 0,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      const deleteUser = (index) => {
        const updatedList = [...userList];
        updatedList.splice(index, 1);
        setUserList(updatedList);
        localStorage.setItem("userList", JSON.stringify(updatedList));
      };
  };
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userInput"));
    if (storedData) {
      setUserList((prevState) => [...prevState, storedData]);
    }
    const storedList = JSON.parse(localStorage.getItem("userList"));
    if (storedList) {
      setUserList(storedList);
    }
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setPopup(true)} className="AdoptBtn">
          Adopt
        </button>
      </div>
      {Popup ? (
        <div className="PopUp">
          <form className="UserData" onSubmit={submithandler}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={userInput.name}
              onChange={handleUserInput}
            />
            <input
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={userInput.lastname}
              onChange={handleUserInput}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={userInput.email}
              onChange={handleUserInput}
            />
            <input
              type="text"
              placeholder="Enter Your Location"
              name="location"
              value={userInput.location}
              onChange={handleUserInput}
            />
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={userInput.age}
              onChange={handleUserInput}
            />
            <div className="buttons">
              <button className="ClosePopup" onClick={() => setPopup(false)}>
                Cancel
              </button>
              <button type="submit" className="Adopt" >
                Adopt
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="UserList">
        <h2>Adoptation Requests</h2>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>
              <button className="Deletebtn">Delete Adoptation</button>
              <p>Name: {user.name}</p>
              <p>Lastname: {user.lastname}</p>
              <p>Email: {user.email}</p>
              <p>Location: {user.location}</p>
              <p>Age: {user.age}</p>
            </li>
          ))}
        </ul>
      </div>  
    </>
  );
};

export default Adoptation;