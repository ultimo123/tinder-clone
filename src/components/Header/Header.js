import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

export const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {!backButton ? (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};
