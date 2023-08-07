import { useContext, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Modal } from "../component/Modal";
import { MeetupContext } from "../hook/MeetupContext";

export const EventDetail = () => {
  const navigate = useNavigate();
  const {
    allMeetup,
    dispatchMeetupState,

    setBtnDisable
  } = useContext(MeetupContext);
  const { eventID } = useParams();
  const [showModal, setShowModal] = useState(false);

  const openModalForRSVP = () => {
    setShowModal(true);
    // setBtnDisable(true);
  };

  const selectedEvent = allMeetup.find((item) => item.id == eventID);

  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    btnDisable,
    speakers: [],
    price,
    additionalInformation: { dressCode, ageRestrictions }
  } = selectedEvent;

  return (
    <>
      <h1
        className="ponter-back"
        onClick={() => {
          navigate("/");
        }}
      >
        &larr;
      </h1>
      {showModal && <Modal setShowModal={setShowModal} indivisualId={id} />}
      <div className="d-flex justify-content-around container">
        <div className="card" style={{ width: "70%" }}>
          <img src={eventThumbnail} className="card-img" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{eventDescription}</p>
            <h2>Additonal Information</h2>
            <strong>Drees code</strong>
            {dressCode}
            <br />
            <strong>Age Restriction</strong>
            {ageRestrictions}
            <br />
            {eventTags.map((item, index) => {
              return (
                <button className="btn btn-danger m-2" key={index}>
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          {!isPaid && (
            <button
              disabled={btnDisable}
              className="btn btn-primary m-5"
              onClick={openModalForRSVP}
            >
              {btnDisable ? "Already RSVPed" : "RSVP"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};
