export const MeetupReducer = (state, { type, payload }) => {
  switch (type) {
    case "EVENT_TYPE":
      return {
        ...state,
        filterType: payload
      };
    case "FILTER_BY_TITLE":
      return {
        ...state,
        search: payload
      };

    case "SET_DETAIL":
      const { name, value } = payload;
      return {
        ...state,
        rsvpUser: {
          ...state.rsvpUser,
          [name]: value
        }
      };
    case "GET_DETAL":
      return {
        ...state,
        allMeetup: state.allMeetup.map((item) =>
          item.id === payload ? { ...item, btnDisable: true } : item
        )
      };
    case "RESET_DETAIL":
      return {
        ...state,
        rsvpUser: {
          name: "",
          email: ""
        }
      };
    default:
      break;
  }
};
