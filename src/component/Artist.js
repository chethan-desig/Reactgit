import React from 'react';
import {Link} from 'react-router-dom';

const ArtistList =(props) =>{
    
    const renderlist=({actordata})=>{
        if(actordata){
            return actordata.map((item)=>{
                const myimages ={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }

                return(
                    <Link to = {`/artist/${item.id}`} className="artist_item" style={myimages} key={item.id}>
                        <div>{item.name}</div>
                    </Link>
                )
                
            })
        }else{
            return(
                <img src={'/img/loader1.gif'}/>
            )
        }
       
    }
    return(
        <div className="artist_list">
            <h4>list of artist</h4>
            {renderlist(props)}
        </div>
    )

}
export default ArtistList;