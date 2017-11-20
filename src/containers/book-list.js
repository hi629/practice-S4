import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  //booksリストをmapする、keyも忘れずに
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} 
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-md-4">
        {/* helper functionを呼ぶ */}
        {this.renderList()}
      </ul>
    );
  }
}

//ここの部分が本当の接着剤
function mapStateToProps(state){
  // returnされるものは全てBookListのpropsとして表示される
  return{
    books: state.books
  };
}

// このfunctionから返されるものはBookListのprops
function mapDispatchToProps(dispatch){
  //selectBookが呼ばれた時、結果が全てのreducerへ渡るようにする
  //valueはimportしたもの
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//(A)(B) AというfunctionとBというcomponentを用いてcontainerを作る
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
