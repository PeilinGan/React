import React from 'react';

class SearchBar extends React.Component {
  state = { query: '' };

  onInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.query);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>video search</label>
            <input type="text" value={this.state.query} onChange={this.onInputChange}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
