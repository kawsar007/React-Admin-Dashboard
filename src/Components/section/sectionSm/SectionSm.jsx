import React from "react";
import "./SectionSm.css";
import { Visibility } from "@material-ui/icons";

const SectionSm = ({newUser}) => {
  return (
    <div className="sectionSm">
      <span className="sectionSmTitle">New Join Members</span>
      {newUser.map((user, i) => (
        <ul className="sectionSmList">
        <li className="sectionSmListItem">
          <img className="sectionSmImg" src={user.img} alt="" />
          <div className="sectionSmUser">
            <span className="sectionSmUsername">{user.userName}</span>
            <span className="sectionSmUserTitle">{user.userTitle}</span>
          </div>
          <button className="sectionSmButton">
            <Visibility className="iconView" />
            Display
          </button>
        </li>
      </ul>
      ))}
      
    </div>
  );
};

export default SectionSm;
