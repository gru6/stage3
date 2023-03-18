import React, { ChangeEvent } from "react";

type SearchState = {
  InputValue: string;
};

export default class SearchBar extends React.Component<
  Record<string, never>,
  SearchState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { InputValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ InputValue: event.target.value });
  }

  componentDidMount() {
    if (localStorage.getItem("input"))
      this.setState({
        InputValue: JSON.parse(JSON.stringify(localStorage.getItem("input"))),
      });
  }

  componentWillUnmount(): void {
    localStorage.setItem("input", this.state.InputValue);
  }

  render() {
    return (
      <>
        <form id="search-form" role="search">
          <div>
            <input
              defaultValue={this.state.InputValue}
              type="text"
              onChange={this.handleInputChange}
            />
          </div>
        </form>
        <form>
          <button>Search</button>
        </form>
      </>
    );
  }
}
