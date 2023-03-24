import React, { RefObject } from "react";

type IModal = {
  setModal: boolean;
};

export default class Modal extends React.Component<
  Record<string, never>,
  IModal
> {
  private closeRef: RefObject<HTMLDivElement> = React.createRef();
  constructor(props: Record<string, never>) {
    super(props);

    this.closeRef = React.createRef();
    this.state = { setModal: true };
    this.onClose = this.onClose.bind(this);
  }

  onClose(): void {
    this.setState({ setModal: false });
  }

  render(): JSX.Element {
    return (
      <>
        {this.state.setModal === true && (
          <>
            <div
              ref={this.closeRef}
              className="modal-bg"
              onClick={() => this.onClose()}
            ></div>
            <div className="modal">
              <div>Форма отправлена!</div>
              <div className="close-modal" onClick={() => this.onClose()}>
                <img src="/cross-close-svgrepo-com.svg" alt="" />
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
