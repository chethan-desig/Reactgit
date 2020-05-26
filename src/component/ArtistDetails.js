import React,{Component} from 'react';
import Header from './Header';
import Albums from './Album';

const url="http://localhost:8900/artists"
  
class Artistdetails extends Component{
    constructor(){
        super()
        this.state={
            details:''
        }
    }
    render(){
        const mydetails=this.state.details
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${mydetails.cover}.jpg')`}}></span>
                        <h3>{mydetails.name}</h3>
                        <div className="bio_text">
                            {mydetails.bio}
                        </div>
                    </div>
                </div>
                <Albums albumdata={mydetails.albums}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(`${url}/${this.props.match.params.id}`,{
            method:'GET'
        })
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({details:data})
        })
    
}
    
    
}
export default Artistdetails;