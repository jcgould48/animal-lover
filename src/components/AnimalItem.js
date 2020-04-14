import React from 'react'


const AnimalItem =({
    onDelete, 
    onDislike, 
    onLike, 
    animal : {image, name, type, description, animalId}}) =>{
    return(
<div className = 'animal'>
        <div className="ui six column grid">
  <div className="column">
    <div className="ui fluid card">
      <div className="image">
        <img src={image} alt="..."/>
      </div>
      <div className="content">
          <a className="header">{name}</a>
          <div className="meta">{type}</div>
      <div className="description">
      {description}
      </div>
        </div>
        <div className="extra content">
          <a>
          <button 
        className="ui blue button" 
        style={{margin:'10px 15px'}} 
        onClick={() => {
          return  onLike(animalId)
        } 
        } 
       >
        Like
       </button>
       <button 
        className="ui red button" 
        style={{margin:'10px 15px'}} 
        onClick={() => {
           return onDislike(animalId)
        }}
       >
        Dislike
       </button>
       <button 
        className="ui grey button" 
        style={{margin:'10px 15px'}} 
        onClick={() =>{
            return onDelete(animalId)
        }}
       >
        Discard
       </button>
          </a>
        </div>
    </div>
  </div>
  </div>
  </div>
    )
}


export default AnimalItem;