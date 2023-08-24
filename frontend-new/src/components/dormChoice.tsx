import "./Header.css";

function DormChoice() {
  //Sorry if any of this is mispelled/sorry this looks bad/sorry this is not written well
  //Have fun fixing it!

  return (
    <div className="prof-container">
      <header className="prof-comp">
        <span className="top-bar-title-tutor">Choose Dorm</span>
        <br></br>
        <div className="dropdown">
          <button className="dropbtn">My Dorm</button>
          <div className="dropdown-content">
            <a href="#">Norris</a>
            <a href="#">Millet</a>
            <a href="#">Hallowell</a>
            <a href="#">Forbes</a>
            <a href="#">Wolcott</a>
            <a href="#">Goodwin</a>
            <a href="#">Robins</a>
            <a href="#">Hathaway</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default DormChoice;
