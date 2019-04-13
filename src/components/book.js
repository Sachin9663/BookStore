import React,{Component} from "react";
import './book.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Books extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {match} =  this.props;
        return(
            <div className='container1'>
                <div className='nav'>
                    <h2>Book List</h2>
                    <ul>
                        <li><Link to={`${match.path}/Don-Quixote`}>Don Quixote</Link></li>
                        <li><Link to={`${match.path}/Ulysses`}> Ulysses</Link></li>
                        <li><Link to={`${match.path}/The-Great-Gatsby`}> The Great Gatsby</Link></li>
                        <li><Link to={`${match.path}/Moby-Dick`}> Moby Dick</Link></li>
                        <li><Link to={`${match.path}/Hamlet`}> Hamlet </Link></li>
                    </ul>
                </div>
                <div className="content1">
                    <Route path={`${match.path}/Don-Quixote`} component={Book1}/>
                    <Route path={`${match.path}/Ulysses`} component={Book2}/>
                    <Route path={`${match.path}/The-Great-Gatsby`} component={Book3}/>
                    <Route path={`${match.path}/Moby-Dick`} component={Book4}/>
                    <Route path={`${match.path}/Hamlet`} component={Book5}/>
                </div>
                <div><Link to="/">Logout</Link> </div>
            </div>
        )

    }
}
export default Books;

class Book1 extends Component {
    render() {
        return (
            <div>
                <h2>by Miguel de Cervantes</h2>
                <p>Alonso Quixano, a retired country gentleman in his fifties,
                    lives in an unnamed section of La Mancha with his niece and a housekeeper.
                    He has become obsessed with books of chivalry, and believes th...</p>
            </div>
        );
    }
}
class Book2 extends Component {
    render() {
        return (
            <div>
                <h2>by James Joyce</h2>
                <p>Ulysses chronicles the passage of Leopold Bloom through Dublin
                    during an ordinary day, June 16, 1904. The title parallels and alludes
                    to Odysseus (Latinised into Ulysses), the hero of Homer's Odyss...</p>
            </div>
        );
    }
}
class Book3 extends Component {
    render() {
        return (
            <div>
                <h2>by F. Scott Fitzgerald</h2>
                <p>The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age".
                    Following the shock and chaos of World War I, American society
                    enjoyed unprecedented levels of prosperity during the "roar...</p>
            </div>
        );
    }
}
class Book4 extends Component {
    render() {
        return (
            <div>
                <h2>by Herman Melville</h2>
                <p>First published in 1851, Melville's masterpiece is,
                    in Elizabeth Hardwick's words, "the greatest novel in American
                    literature." The saga of Captain Ahab and his monomaniacal pursuit
                    of the white wh...

                </p>
            </div>
        );
    }
}
class Book5 extends Component {
    render() {
        return (
            <div>
                <h2> by William Shakespeare</h2>
                <p>The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet,
                    is a tragedy by William Shakespeare, believed to have been written
                    between 1599 and 1601.
                    The play, set in Denmark, recounts how Pri...</p>
            </div>
        );
    }
}
