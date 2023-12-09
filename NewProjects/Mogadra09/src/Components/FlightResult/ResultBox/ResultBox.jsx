import React, { useState } from "react";
import dateFormat from "dateformat";
import ChildRoute from "./ChildRoute/ChildRoute";
import "./ResultBox.css";
import { useNavigate } from "react-router-dom";

const ResultBox = ({ flightinfo, sc }) => {
  const [showRoutes, setShowRoutes] = useState(false);
  const [routeType, setRouteType] = useState("");

  const navigate = useNavigate();

  console.log("flightinfo", flightinfo);
  const handleBookNow =()=> {
  navigate(`/flightdetails/${sc}/${flightinfo?.Offercode}`)

  };

  const handleRoutes = (type) => {
    setRouteType(type);

    setShowRoutes(!showRoutes);
  };

  console.log("routeType", routeType);
  return (
    <>
      <div className="resultBoxLeft">
        {flightinfo?.OutboundInboundlist?.map((element, index) => {
          const minutes = element?.totaltime % 60;
          const hours = Math.floor(element?.totaltime / 60);
          const time = `${hours}:${minutes}`;
          const ImgPath = `/assets/images/airlinelogo/${element?.flightlist[0]?.OperatingAirline?.code}.png`;

          console.log("ImgPath", ImgPath);
          return (
            <>
              <div className="flightresutlgroup">
                <div className="resultrow1">
                  <div className="row_label_col">
                    <div className="row_label">
                      <span className="fl_dir_on"></span>
                      {index === 0 ? "Departure" : "Return"}
                      <span className="top_l_triangle"></span>
                    </div>
                  </div>
                  <div className="empty_col">&nbsp;</div>
                  <div className="fl_locations">
                    {element?.flightlist[0]?.Departure?.city}
                  </div>
                  <div className="fl_locations">
                    {" "}
                    {
                      element?.flightlist[element?.flightlist?.length - 1]
                        ?.Arrival?.city
                    }
                  </div>
                </div>
                <div className="resultrow2">
                  <figure>
                    <img src={ImgPath} alt="Img" />
                  </figure>
                  <div className="textrow">
                    <strong>{element?.flightlist[0]?.Departure?.time}</strong>
                    <span>
                      {dateFormat(
                        element?.flightlist[0]?.Departure?.Datetime,
                        "ddd, dd mmm yyyy"
                      )}
                    </span>
                  </div>
                  <div className="textrow">
                    <strong>
                      {" "}
                      {
                        element?.flightlist[element?.flightlist?.length - 1]
                          ?.Arrival?.time
                      }
                    </strong>
                    <span>
                      {dateFormat(
                        element?.flightlist[element?.flightlist?.length - 1]
                          ?.Arrival?.Datetime,
                        "ddd, dd mmm yyyy"
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mobile_stopes_content">
                {element?.flightlist?.length === 1 ? (
                  <span>Direct</span>
                ) : element?.flightlist?.length === 2 ? (
                  <span
                    onClick={(e) => handleRoutes(index)}
                    style={{ cursor: "pointer" }}
                  >
                    1 stop
                  </span>
                ) : (
                  <span
                    onClick={(e) => handleRoutes(index)}
                    style={{ cursor: "pointer" }}
                  >
                    More than one stop
                  </span>
                )}
                <div className="parentStop">
    
                  {showRoutes &&
                    routeType === index &&
                    element?.flightlist?.map((element) => {
                      return (
                        <ChildRoute
                          key={element?.Aircraft}
                          element1={element}
                          index={index}
                          ImgPath={ImgPath}
                          time={time}
                        />
                      );
                    })}
                </div>
              </div>
            </>
          );
        })}

        <div className="resultprice">
          <div className="left">
            <strong>
              {flightinfo?.price?.currency} {flightinfo?.price?.total_price}{" "}
            </strong>
          </div>
          <div className="left">
            <span>
              {
                flightinfo?.OutboundInboundlist[0]?.flightlist[0]
                  ?.CabinClassText
              }
            </span>
            <button onClick={handleBookNow}>Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultBox;
