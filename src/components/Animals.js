import React, {Component} from 'react'
import Sidecard from './SideCard';
import './Animals.css';

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
     
      }, 
      {
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
     
      }, 
      {
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
    constructor(){
    super()
    this.state = {
        animals,
        liked:[],
        disliked:[],
        sidebar: '',
    };
    this.onDelete = this.onDelete.bind(this)
}

onDelete(id){
    const updatedAnimals = this.state.animals.filter((item)=> item.animalId !== id);

        this.setState({animals: updatedAnimals})
        console.log('Delete item with id: ', id);
}

onLike = (animalId) => {
    const likedAnimal = this.state.animals.filter(animal=> animal.animalId === animalId)[0]
    const liked = [...this.state.liked]
    console.log(liked)
    if(!liked.includes(likedAnimal)){
       if(!this.state.disliked.includes(likedAnimal)){
          liked.push(likedAnimal)
       }
    }
    this.setState({liked})
 };
    

onDislike = (animalId) => {
        const dislikedAnimal = this.state.animals.filter(animal=> animal.animalId === animalId)[0]
        const disliked = [...this.state.disliked]
        console.log(disliked)
        if(!disliked.includes(dislikedAnimal)){
           if(!this.state.liked.includes(dislikedAnimal)){
           disliked.push(dislikedAnimal)
           }
        }
        this.setState({disliked})
};

deleteLiked = (id) => {
  const deletedAnimal = [...this.state.likes].filter(({animalId}) => animalId !== id);
  this.setState({ liked: deletedAnimal });
};

deleteDisliked = (id) => {
  const deletedAnimal = [...this.state.dislikes].filter(({animalId}) => animalId !== id);
  this.setState({ disliked: deletedAnimal });
};


    render(){
      return(
        <div style={{display: 'inlineBlock'}}>
    {this.state.animals
.map(({image, type, name, description, animalId}) =>{
    return(
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
        onClick={() => this.onLike(animalId)}
       >
        Like
       </button>
       <button 
        className="ui red button" 
        style={{margin:'10px 15px'}} 
        onClick={() => this.onDislike(animalId)}
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
<div className='side'>
    <div>
        <h3>Likes</h3>
        <ul style={{listStyleType: 'none'}}>
            {this.state.liked.map(({image, name, animalId}) => {
                return (
                <div className='sidecard' onClick={() => this.deleteLiked(animalId)}>
                    <img src={image} alt="..." />
                    <p>{name}</p>
                </div>
                    
                )
            })}
        </ul>
    </div>
    <div>
        <h3>Dislikes</h3>
        <ul style={{listStyleType: 'none'}}>
        {this.state.disliked.map(({image, name, animalId}) => {
                return (
                <div className='sidecard' onClick={() => this.deleteDisliked(animalId)}>
                    <img src={image} alt="..." />
                    <p>{name}</p>
                </div>
                )
            })}
        </ul>
    </div>
</div>
        </div>
      )
    }

  }




  export default Animals;