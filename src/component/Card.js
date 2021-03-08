import React from 'react';
const Card = ({id , name, email}) =>{
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <a href={`https://robohash.org/${id}?200x200`}> 
                <img alt = 'robot' src = {`https://robohash.org/${id}?200x200`}/>
                <div>
                <h1>{name}</h1>
                <h2>{email}</h2>
                </div>
            </a>

        </div>
    )
}
export default Card;