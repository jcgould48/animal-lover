import React, {Component} from 'react'
import animals from './data/data'
import SideCard from './SideCard';
import Animals from './Animals'
import './Animals.css';


  class App extends Component{
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
  const deletedAnimal = [...this.state.liked].filter(({animalId}) => animalId !== id);
  this.setState({ liked: deletedAnimal });
};

deleteDisliked = (id) => {
  const deletedAnimal = [...this.state.disliked].filter(({animalId}) => animalId !== id);
  this.setState({ disliked: deletedAnimal });
};


    render(){
      return(
        <div>
         <Animals 
animals={this.state.animals}
onLike={this.onLike} 
onDislike={this.onDislike} 
onDelete={this.onDelete} 
/>  
    {/* {this.state.animals
.map(({image, type, name, description, animalId}) =>{
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
  </div>
    )
})}  */}
<SideCard 
liked={this.state.liked} 
disliked={this.state.disliked} 
deleteLiked={this.deleteLiked} 
deleteDisliked={this.deleteDisliked} 
/>  
{/* <div className='sidebar'>
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
</div> */}
        </div>
      )
    }

  }


  export default App;