import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
//the if statement will run the first time the application boots up. without it, this.props.book is null and the app throws an error/doesn't render.
    if(!this.props.book){
        return <div>Select a book to get started.</div>
    }
    //else, return items below to render on page
        return (
            <div>
                <h3>Details for:</h3>
                <div>{this.props.book.title}</div>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        //this below comes from the ActiveBook reducer, which creates the active book state.
        book: state.activeBook
        //and we can now make use of this.props.book.
    };
}


export default connect(mapStateToProps)(BookDetail);
