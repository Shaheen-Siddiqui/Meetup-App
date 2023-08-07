import { useContext } from "react";
import { MeetupContext } from "../hook/MeetupContext";

export const Header = () => {
  const { dispatchMeetupState, search } = useContext(MeetupContext);

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        <h2>Meetups</h2>
        <div>
          <div class="input-group mb-3">
            <input
              value={search}
              type="text"
              class="form-control"
              placeholder="search by name and tag"
              onChange={(event) =>
                dispatchMeetupState({
                  type: "FILTER_BY_TITLE",
                  payload: event.target.value
                })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
