import { useContext } from "react";
import { Events } from "../component/Events";
import { Header } from "../component/Header";
import { MeetupContext } from "../hook/MeetupContext";

export const EventListing = () => {
  const { filterMeetups, dispatchMeetupState, searchFilter } = useContext(
    MeetupContext
  );
  return (
    <>
      <Header />

      <div className="d-flex justify-content-between">
        <h1>Meetup Events</h1>

        <div>
          <button
            className="btn btn-danger m-2"
            onClick={() =>
              dispatchMeetupState({ type: "EVENT_TYPE", payload: "Offline" })
            }
          >
            Offline
          </button>
          <button
            className="btn btn-danger"
            onClick={() =>
              dispatchMeetupState({ type: "EVENT_TYPE", payload: "Online" })
            }
          >
            Online
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-5">
        {searchFilter.map((item, index) => {
          return <Events item={item} key={index} />;
        })}
      </div>
    </>
  );
};
