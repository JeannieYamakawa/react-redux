import React, {Component} from 'react';
import { connect } from 'react-redux';

//this started as just a view component, but is now a smart component, or 'container,' because of react-redux connection, because it needed to be aware of the state .
class BookList extends Component {
    renderList(){
        //this.props.book is brought in from the redux state of books property
        return this.props.books.map((book)=>{
            return <li key={book.title} className='list-group-item'>{book.title}</li>
        })
    }
    render(){
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

//this will take the application's state as the argument. it will instantly rerender with new changes.
function mapStateToProps(state){
    //whatever gets returned from here will show up as props inside of BookList above
    return { books: state.books };

}


//this makes use of react-redux connect and says "take the mapStateToProps function and return a container." A container is a 'smart component that's aware of the state returned by Redux.
export default connect(mapStateToProps)(BookList)
