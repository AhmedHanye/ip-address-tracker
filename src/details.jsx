import propTypes from "prop-types";

function Details({ ipData }) {
  if (!ipData) {
    return;
  }
  return (
    <div className="details bg-white rounded-4 container p-4">
      <div className="row h-100">
        <div className="col-12 col-md-3">
          <p className="title">IP ADDRESS</p>
          <p className="detail pe-2">{ipData.ip}</p>
        </div>
        <div className="col-12 col-md-3 position-relative">
          <p className="title">LOCATION</p>
          <p className="detail pe-2">{ipData.location.city}</p>
        </div>
        <div className="col-12 col-md-3 position-relative">
          <p className="title">TIMEZONE</p>
          <p className="detail pe-2">
            {ipData.location.timezone ? "UTC " + ipData.location.timezone : ""}
          </p>
        </div>
        <div className="col-12 col-md-3 position-relative">
          <p className="title">ISP</p>
          <p className="detail pe-2">{ipData.isp}</p>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  ipData: propTypes.object,
};
export default Details;
