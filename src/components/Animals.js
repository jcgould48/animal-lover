import React, {Component} from 'react'

let animals = [
    {
        name: 'Mary',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image1.jpeg',
        animalId: '1',
        liked: '',
      },
      {
        name: 'Tim',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image2.jpeg',
        animalId: '2',
        liked: '',
      },
      {
        name: 'Larry',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image3.jpeg',
        animalId: '3',
        liked: '',
      }, 
      {
        name: 'Sam',
        type: 'bird',
        description: 'Parrot with wings',
        image: 'images/image4.jpeg',
        animalId: '4',
        liked: '',
      },
      {
        name: 'Mary',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog1.jpeg',
        animalId: '5',
        liked: '',
      },
      {
        name: 'Tim',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog2.jpeg',
        animalId: '6',
        liked: '',
      },
      {
        name: 'Larry',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog3.jpeg',
        animalId: '7',
        liked: '',
      }, 
      {
        name: 'Sam',
        type: 'dog',
        description: 'Parrot with wings',
        image: 'images/dog4.jpeg',
        animalId: '8',
        liked: '',
      },
      {
        name: 'Mary',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat1.jpeg',
        animalId: '9',
        liked: '',
      },
      {
        name: 'Tim',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat2.jpeg',
        animalId: '10',
        liked: '',
      },
      {
        name: 'Larry',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat3.jpeg',
        animalId: '11',
        liked: '',
      }, 
      {
        name: 'Sam',
        type: 'cat',
        description: 'Parrot with wings',
        image: 'images/cat4.jpeg',
        animalId: '12',
        liked: '',
      },

  ];


  class Animals extends Component{
    constructor(){
    super()
    this.state = {
        animals,
        liked: '',
    };
    this.onDelete = this.onDelete.bind(this)
}

onDelete(id){
    const updatedAnimals = this.state.animals.filter((item)=> item.animalId !== id);

        this.setState({animals: updatedAnimals})
        console.log('Delete item with id: ', id);
}

onLike = (event) => {
    this.setState({liked: 'yes'}, ()=>{console.log(this.state.animals)})
    
};

onDislike = (id) => {
    const updatedAnimal = this.state.animals.filter((item) => {
        if(item.animalId === id){
            this.setState({liked: 'no'})
        }
    });

    
    console.log('Delete item with id: ', id);
};


    render(){
      return(
        <div>
    {this.state.animals
.map(({image, type, name, description, animalId}) =>{
    return(
        <div class="ui four column grid">
  <div class="column">
    <div class="ui fluid card">
      <div class="image">
        <img src={image}/>
      </div>
      <div class="content">
          <a class="header">{name}</a>
          <div class="meta">{type}</div>
      <div class="description">
      {description}
      </div>
        </div>
        <div class="extra content">
          <a>
          <button 
        className="ui blue button" 
        style={{margin:'10px 15px'}} 
        onClick={this.onLike}
       >
        Like
       </button>
       <button 
        className="ui red button" 
        style={{margin:'10px 15px'}} 
        onClick={() =>{
            return this.onDislike(animalId)
        }}
       >
        Dislike
       </button>
       <button 
        className="ui grey button" 
        style={{margin:'10px 15px'}} 
        onClick={() =>{
            return this.onDelete(animalId)
        }}
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