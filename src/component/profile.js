import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const Post =() => {
    return(
        <Fragment>
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h2>Profile Page</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <h2>profile Page</h2>
                        <div>
                            <h4>prabhas</h4>
                            <Link to="/profile/prabhas">Details</Link>
                        </div>
                        <div>
                            <h4>ntr</h4>
                            <Link to="/profile/ntr">Details</Link>
                        </div>
                        <div>
                            <h4>surya</h4>
                            <Link to="/rofile/surya">Details</Link>
                        </div><div>
                            <h4>maheshbabu</h4>
                            <Link to="/profile/maheshbabu">Details</Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;