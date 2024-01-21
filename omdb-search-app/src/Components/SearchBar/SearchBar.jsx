import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  onInputClear = () => {
    this.setState({ term: '' });
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit} className="search-form">
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            placeholder="Search for movies..."
            className="search-input"
            autoComplete="off"
          />
          {this.state.term && (
            <button type="button" onClick={this.onInputClear} className="clear-button">
              &times;
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default SearchBar;
