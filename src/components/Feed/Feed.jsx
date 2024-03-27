import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

export default function Feed() {
  return (
    <div className="feed">
      <div className="card">
        <img src={thumbnail1} alt="thumbnail1" />
        <h3>Best Video for React.js</h3>
        <h4>Saurabh</h4>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="thumbnail2" />
        <h3>JavaScript tutorial</h3>
        <h4>Saurabh</h4>
        <p>150k views &bull; 15 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="thumbnail3" />
        <h3>JSX</h3>
        <h4>Coders gyan</h4>
        <p>1k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="thumbnail4" />
        <h3>Introduction to React Native</h3>
        <h4>Vadim</h4>
        <p>10k views &bull; 5 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="thumbnail5" />
        <h3>Music</h3>
        <h4>tseries</h4>
        <p>250k views &bull; 1 day ago</p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="thumbnail6" />
        <h3>Node.js</h3>
        <h4>Hitesh Choudhary</h4>
        <p>25k views &bull; 4 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="thumbnail7" />
        <h3>Express.js crash course</h3>
        <h4>Coders gyan</h4>
        <p>40k views &bull; 7 days ago</p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="thumbnail1" />
        <h3>Mongo DB</h3>
        <h4>mongodb</h4>
        <p>1.5k views &bull; 10 days ago</p>
      </div>
    </div>
  );
}
