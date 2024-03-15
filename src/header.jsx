import PropType from "prop-types";
function Header({ onTrackButtonClick }) {
  return (
    <header className="d-flex flex-column align-items-center py-4 gap-4">
      <h1 className="text-white responsive-font-example">IP Address Tracker</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          name="ip-address"
          className="form-control py-2 px-3 "
          placeholder="Search for any IP address"
          aria-label="Search for any IP address"
          aria-describedby="basic-addon2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onTrackButtonClick();
            }
          }}
        />
        <div className="input-group-append">
          <button
            className="track-button d-flex justify-content-center align-items-center border-0 h-100"
            aria-label="Track"
            // eslint-disable-next-line no-undef
            onClick={onTrackButtonClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14">
              <path fill="none" stroke="#FFF" d="M2 1l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  onTrackButtonClick: PropType.func.isRequired,
};

export default Header;
