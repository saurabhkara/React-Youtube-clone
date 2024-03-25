import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <div className="shortcut-link">
          <div className="side-link">
            <img src={home} alt="home icon" />
            <p>Home</p>
          </div>
          <div className="side-link">
            <img src={game_icon} alt="game icon" />
            <p>Gaming</p>
          </div>
          <div className="side-link">
            <img src={automobiles} alt="automobile icon" />
            <p>Automobiles</p>
          </div>
          <div className="side-link">
            <img src={sports} alt="sports icon" />
            <p>Sports</p>
          </div>
          <div className="side-link">
            <img src={entertainment} alt="entertainment icon" />
            <p>Entertainment</p>
          </div>
          <div className="side-link">
            <img src={tech} alt="tech icon" />
            <p>Tech</p>
          </div>
          <div className="side-link">
            <img src={music} alt="music icon" />
            <p>Music</p>
          </div>
          <div className="side-link">
            <img src={blogs} alt="blog icon" />
            <p>Blog</p>
          </div>
          <div className="side-link">
            <img src={news} alt="News icon" />
            <p>News</p>
          </div>
          <hr />
        </div>
        <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link">
            <img src={jack} alt="jack icon" />
            <p>PewDiePie</p>
          </div>
          <div className="side-link">
            <img src={simon} alt="simon icon" />
            <p>Mr. Beast</p>
          </div>
          <div className="side-link">
            <img src={tom} alt="tom icon" />
            <p>Megan</p>
          </div>
          <div className="side-link">
            <img src={megan} alt="Megan icon" />
            <p>Megan</p>
          </div>
          <div className="side-link">
            <img src={cameron} alt="Cameron icon" />
            <p>5 min Craft</p>
          </div>
        </div>
      </div>
    </div>
  );
}
