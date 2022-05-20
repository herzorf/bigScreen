import React from 'react';
import './home.scss';
import headerBg from "../images/header.png"

export const Home = () => {
  return (
    <div>
        <header style={{backgroundImage: `url(${headerBg})`}}/>
    </div>
  );
};
