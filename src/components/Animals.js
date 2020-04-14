import React from 'react';
import AnimalItem from './AnimalItem';
import './Animals.css';


  const Animals= (props) =>{
    return(
      <div>
        {props.animals
.map((animal, idx) =>{
    return(
      <AnimalItem 
      key={animal.objectId} 
      onLike={props.onLike} 
      onDislike={props.onDislike} 
      onDelete={props.onDelete}
      animal={animal}/>
  //     <div className = 'animal'>
  //       <div className="ui six column grid">
  // <div className="column">
  //   <div className="ui fluid card">
  //     <div className="image">
  //       <img src={image} alt="..."/>
  //     </div>
  //     <div className="content">
  //         <a className="header">{name}</a>
  //         <div className="meta">{type}</div>
  //     <div className="description">
  //     {description}
  //     </div>
  //       </div>
  //       <div className="extra content">
  //         <a>
  //         <button 
  //       className="ui blue button" 
  //       style={{margin:'10px 15px'}} 
  //       onClick={() => this.onLike(animalId)}
  //      >
  //       Like
  //      </button>
  //      <button 
  //       className="ui red button" 
  //       style={{margin:'10px 15px'}} 
  //       onClick={() => this.onDislike(animalId)}
  //      >
  //       Dislike
  //      </button>
  //      <button 
  //       className="ui grey button" 
  //       style={{margin:'10px 15px'}} 
  //       onClick={() =>{
  //           return this.onDelete(animalId)
  //       }}
  //      >
  //       Discard
  //      </button>
  //         </a>
  //       </div>
  //   </div>
  // </div>
  // </div>
  // </div>
    )
})} 
      </div>
    )
  }

  export default Animals;