import React from "react";

type MyProps = { inputValue: string };
type MyState = { inputValue: string };

export default class Search extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.addLocalStorage = this.addLocalStorage.bind(this);
  }
  addLocalStorage() {
    const data = this.state.inputValue;
    localStorage.setItem("myInputValue", JSON.stringify(data));
  }
  getLocalStorage() {
    const data = String(localStorage.getItem("myInputValue"));
    this.setState({
      inputValue: JSON.parse(data),
    });
  }
  //для доп вычислений перед итоговым рендорингом
  /*   componentDidMount():void {
    this.setState({ inputValue: this.getLocalStorage() });
  } */

  /*   componentWillUnmount() {
    clearInterval(this.timerID);
  } */

  render() {
    return (
      <>
        <form id="search-form" role="search">
          <input
            placeholder="Search"
            type="search"
            value={this.state.inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
        </form>
        <form>
          <button onClick={this.addLocalStorage}>Search</button>
        </form>
      </>
    );
  }
}
