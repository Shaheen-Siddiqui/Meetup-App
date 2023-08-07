import { useContext } from "react";
import { MeetupContext } from "../hook/MeetupContext";

export const Modal = ({ setShowModal, indivisualId }) => {
  const { rsvpUser, dispatchMeetupState } = useContext(MeetupContext);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatchMeetupState({ type: "SET_DETAIL", payload: { name, value } });
  };

  const rsvpSubmitHandler = (event) => {
    event.preventDefault();
    setShowModal(false);

    dispatchMeetupState({ type: "GET_DETAL", payload: indivisualId });
    dispatchMeetupState({ type: "RESET_DETAIL" });
  };

  return (
    <form className="modal-box" onSubmit={rsvpSubmitHandler}>
      <div className="modal-content">
        <h3>Compleate your RSVP</h3>
        <p>fill in your personal information </p>
        <div className="input-group mb-3">
          <input
            required
            name="name"
            value={rsvpUser?.name}
            onChange={inputHandler}
            type="text"
            className="form-control"
            placeholder="Username"
          />
        </div>
        <div className="input-group mb-3">
          <input
            required
            name="email"
            value={rsvpUser?.email}
            onChange={inputHandler}
            type="email"
            className="form-control"
            placeholder="Enter Email"
          />
        </div>

        <p>*you have to make the pament at the venue</p>
        <div className="container">
          <button className="btn btn-danger">RSVP</button>
        </div>
      </div>
    </form>
  );
};
