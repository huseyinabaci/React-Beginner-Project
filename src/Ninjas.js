import React from "react";

const Ninjas = ({ ninjas,deleteNinja }) => {
  //   const ninjasList = ninjas.map((ninja, index) => {
  //     if (ninja.age > 20) {
  //       return (
  //         <div className="ninja" key={index}>
  //           <div>Name: {ninja.name}</div>
  //           <div>Age: {ninja.age}</div>
  //           <div>Belt: {ninja.belt}</div>
  //           <br></br>
  //         </div>
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  return (
    <div className="ninja-list">
      {ninjas.map((ninja) => {
        return ninja.age > 20 ? (
          <div className="ninja" key={ninja.id}>
            <div>Name: {ninja.name}</div>
            <div>Age: {ninja.age}</div>
            <div>Belt: {ninja.belt}</div>
            <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
            <br></br>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Ninjas;
