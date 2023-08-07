import { createContext, useReducer, useState } from "react";
import { data } from "../database/data";
import { MeetupReducer } from "./MeetupReducer";

export const MeetupContext = createContext(null);

export const MeetupContextProvider = ({ children }) => {
  // const [btnDisable, setBtnDisable]=useState(false)
  const [
    { allMeetup, filterType, search, rsvpUser },
    dispatchMeetupState
  ] = useReducer(MeetupReducer, {
    allMeetup: data.meetups,
    filterType: "",
    search: "",
    rsvpUser: {
      name: "",
      email: ""
    }
  });

  const filterMeetups =
    filterType === "Offline"
      ? allMeetup.filter((item) => item.eventType === "Offline")
      : filterType === "Online"
      ? allMeetup.filter((item) => item.eventType === "Online")
      : allMeetup;

  const searchFilter =
    search.length > 0
      ? filterMeetups.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      : filterMeetups;

  return (
    <MeetupContext.Provider
      value={{
        allMeetup,
        dispatchMeetupState,
        filterMeetups,
        search,
        searchFilter,
        rsvpUser
        // btnDisable,
        // setBtnDisable
      }}
    >
      {children}
    </MeetupContext.Provider>
  );
};
