import react from 'react';
import Card from "./Card";


const CardList = ( { robots }) =>{
    const cardComponents = robots.map( (val,ind) => {
        return <Card key={ind} id = {val.id} name = {val.name} email = {val.email}/>
    });
    return (
        <div>
            {cardComponents}
        </div>
    )
}
export default CardList;