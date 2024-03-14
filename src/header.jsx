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
          placeholder="Search for any IP address or domain"
          aria-label="Search for any IP address or domain"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
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
