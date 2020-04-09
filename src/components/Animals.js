import React, {Component} from 'react'

let animals = [
    {
        name: 'Mary',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image1.jpeg',
        animalId: '1',
      },
      {
        name: 'Tim',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image2.jpeg',
        animalId: '2',
      },
      {
        name: 'Larry',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image3.jpeg',
        animalId: '3',
      }, {
        name: 'Sam',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image4.jpeg',
        animalId: '4',
      },
      {
        name: 'Mary',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog1.jpeg',
        animalId: '5',
      },
      {
        name: 'Tim',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog2.jpeg',
        animalId: '6',
      },
      {
        name: 'Larry',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog3.jpeg',
        animalId: '7',
      }, {
        name: 'Sam',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog4.jpeg',
        animalId: '8',
      },
      {
        name: 'Mary',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat1.jpeg',
        animalId: '9',
      },
      {
        name: 'Tim',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat2.jpeg',
        animalId: '10',
      },
      {
        name: 'Larry',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat3.jpeg',
        animalId: '11',
      }, 
      {
        name: 'Sam',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat4.jpeg',
        animalId: '12',
      },

  ];


  class Animals extends Component{
    state = {
      animals,
  };
    render(){
      return(
        <div>
    {this.state.animals
.map((animal,idx) =>{
    return(
        <div class="ui four column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src={animal.image}/>
      </div>
      <div class="content">
          <a class="header">{animal.name}</a>
          <div class="meta">{animal.type}</div>
      <div class="description">
      {animal.description}
      </div>
        </div>
        <div class="extra content">
          <a>
          <button 
        className="ui blue button" 
        style={{margin:'10px 15px'}} 
        onClick=''
       >
        Like
       </button>
       <button 
        className="ui red button" 
        style={{margin:'10px 15px'}} 
        onClick=''
       >
        Dislike
       </button>
       <button 
        className="ui grey button" 
        style={{margin:'10px 15px'}} 
        onClick=''
       >
        Discard
       </button>
          </a>
        </div>
    </div>
  </div>
  </div>
    )
})} 
        </div>
      )
    }
  }




  export default Animals;