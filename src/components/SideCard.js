import React from 'react'

const SideCard = ({
    deleteLiked, 
    deleteDisliked,
    liked,
    disliked
}) =>{
    return(
        <div className='sidebar'>
<div className='side'>
    <div>
        <h3>Likes</h3>
        <ul style={{listStyleType: 'none'}}>
            {liked.map(({image, name, animalId}) => {
                return (
                <div  
                onClick={() => {
                    return deleteLiked(animalId)}}
                    >
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
        {disliked.map(({image, name, animalId}) => {
                return (
                <div className='sidecard' 
                onClick={() => {
                    return deleteDisliked(animalId)}}
                    >
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


export default SideCard;