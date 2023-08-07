import { Link, useNavigate } from "react-router-dom";
import { formatedDateFunction, formateTimeFunction } from "../utils";

export const Events = ({ item }) => {
  const navigate = useNavigate();

  const navigateToDetail = (detailId) => {
    navigate(`/${detailId}`);
  };

  const { id, title, eventStartTime, eventThumbnail, eventType } = item;

  return (
    <>
      <div
        className="card"
        style={{ width: "18rem" }}
        onClick={() => navigateToDetail(id)}
      >
        <img src={eventThumbnail} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {formatedDateFunction(eventStartTime)} -{" "}
            {formateTimeFunction(eventStartTime)}{" "}
          </p>
          <button
            className={
              eventType === "Offline"
                ? "btn btn-outline-secondary"
                : "btn btn-success"
            }
          >
            {eventType}
          </button>
        </div>
      </div>
    </>
  );
};
