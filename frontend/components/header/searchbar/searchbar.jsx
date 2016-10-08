import React from 'react';
import { withRouter } from 'react-router';
import Autosuggest from 'react-autosuggest';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: [],
      titles: [
        "Kellogg's Sugar Frosted Flakes Cereal",
        "Weight Loss Commercial from the olden days",
        "Classic Aunt Jemima Commercial (1967)",
        "1960 Commercial for ''Off'' insect repellent",
        "Classic commercial for Wheaties",
        "Fifties Advertising: UNIVAC Computer Commercial (5 February 1956)",
        "Super old Crest Commercial!!",
        "Kennedy 1960's Campaign Commercial",
      ]
    };

    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  getSuggestions(value) {
    const { titles } = this.state;

    const escapedValue = this.escapeRegexCharacters(value.trim());
    const regex = new RegExp(escapedValue, 'i');

    return titles.filter(title => regex.test(title));
  }

  shouldRenderSuggestions() {
    return this.state.value.length > 2;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion}</span>
    );
  }

  handleSubmit(e){
    const { value } = this.state;
    const filter = {title: "%"+value+"%"};
    const router = this.props.router;
    const redirect = () => {
      router.push("/search");
    };
    this.props.someVideos(filter, redirect);
  }

  getSuggestionValue(suggestion){
    return suggestion;
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      value,
      onChange: this.onChange
    };

    return (
      <form className="search group" onSubmit={this.handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          renderSuggestion={this.renderSuggestion}
          onSuggestionSelected={this.handleSubmit}
          inputProps={inputProps} />
        <button type="submit"></button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
