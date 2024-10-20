"use client";
import {useEffect, useState} from "react";

export default function getData() {
    const api = 'https://jsonplaceholder.typicode.com/users';
    let [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch(api)
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.log(error));
      }, []);

      return (
        <div
        style={{ margin: "auto", width: "600px", padding: "20px" }}>
          <h2>Datos de usuarios de la empresa "El buen trabajador" 🤣🤣</h2>
          <hr />
        <ul>
          {
            users.map((item, index) => 
            <li key={item.id} style={{margin: "20px"}}>
                <h3 style={{color: "green", textTransform: "UPPERCASE"}}>{item.id} - {item.name} <span style={{color: "cyan"}}>{item.username}</span></h3>
                <h4 style={{color: "cyan"}}>{item.email}</h4>
                <h5 style={{color: "white"}}>{item.address.street} - <span style={{color: "gray"}}>{item.address.city}</span> </h5>
            </li>
        )
          }
        </ul>
        <hr />
        <p>No hay más datos!</p>
        </div>
      )
}