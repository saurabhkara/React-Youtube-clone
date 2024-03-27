/* eslint-disable react/prop-types */
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

export default function Home({ openSidebar }) {
  return (
    <>
      <Sidebar openSidebar={openSidebar} />
      <div className={`container ${openSidebar ? "large-container" : ""}`}>
        <Feed />
      </div>
    </>
  );
}
