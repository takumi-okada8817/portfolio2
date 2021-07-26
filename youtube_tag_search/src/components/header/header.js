import React, {Component} from 'react';
import './header.css';

class Header extends Component {

    //state
    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
    }

    handleChange = (e) =>{

        const val = document.querySelector("#searchField").value;
        if(val !== ""){
            document.querySelector("#searchButton").disabled = false;
            this.setState({
                term: e.target.value
            });
        }
    }

    handleSubmit = (e) =>{

        const val = document.querySelector("#searchField").value;
        if(val !== ""){
            e.preventDefault();
            this.props.getYoutubeList(this.state.term);
        }
    }

    render(){
        

        return(
            <div style={{textAlign: 'center'}}>
                <div>
                    <h2>Youtube Tag Search</h2>
                </div>
                <form className="row justify-content-start" id="searchWrapper" onSubmit={this.handleSubmit}>
                    <input className="col-9" id="searchField" autoComplete="off" onChange={this.handleChange}/>
                    <button type="submit" className="col-3" id="searchButton" disabled={true}>検索</button>
                </form>
            </div>
        );
    }
}

export default Header;