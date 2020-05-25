import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails =(props) => {
    console.log(props)
    return(
        <Fragment>
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h2>Profile Details Page for {props.match.params.para}</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <h2>{props.match.params.para}</h2>
                        <p>
                        {props.match.params.para} an action film directed by Raghava Lawrence. His next film was Mirchi. He rendered voice for a short cameo for the film Denikaina Ready.[15] Sashidhar from The Times of India stated, "The film belongs to hard-core Prabhas fans as the movie is stylish and visually rich but not much in content".[16] Purnima Ranawat from NDTV said, "Rebel serves up fare for the mass audience. The film will be definitely liked by Prabhas' fans. Watch it for the dancing talent of Tamannaah Bhatia and action skills of Prabhas."[17] Radhika Rajamani from Rediff.com gave the movie one and half stars out of five and said, "Working with hardly any storyline, director Raghava Lawrence had made a film that is arduous to watch... Rebel is a movie for the masses and certainly not for the discerning audience."[18]

Jeevi gave a rating of 3.25 out of 5, commenting that "First half of Mirchi is decent. Flashback episode which occupies 100% of second half is good. Climax could have been better. The plus points of the film are Prabhas, music and all-round orientation. On a whole, Mirchi has all the ingredients of a commercial potboiler".[19] Mahesh S Koneru gave his verdict that "At the Box Office, the film will turn in a good commercial performance", giving the film a score of 3.25/5.[20] Way2movies also gave a rating of 3.25/5, giving the verdict that "Prabhas rocks the show in this decent yet formulaic commercial entertainer".[21] Super good movies gave the film 3 stars in a scale of 5, reviewing that "Go and Watch Mirchi, It entertains both Class and Mass. It is a worth watch."[22]

In 2015 he appeared as Shivudu/Mahendra Baahubali and Amarendra Baahubali in S.S. Rajamouli's epic Baahubali: The Beginning which is the fourth-highest-grossing Indian film to date.[23][24][25] Prabhas reprised his role in its sequel, Baahubali 2: The Conclusion (2017), which became the first Indian film ever to gross over ₹1,000 crore (US$155 million) in all languages in just ten days, and it is the second highest-grossing Indian film to date.[26][27][28]

Saaho's first look poster released on 23 October 2017, on the occasion of Prabhas' birthday.[29] A second teaser released on 23 October 2018, once again on the occasion of
                        </p>
                    </div>
                    <Link to="/profile" className="btn btn-danger">
                        Back
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileDetails;