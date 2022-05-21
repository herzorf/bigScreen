import React, {useEffect, useRef} from "react";
import './home.scss';
import headerBg from "../images/header.png"
import * as echarts from 'echarts';
import {Chart1} from "../component/Chart1";
import {Chart2} from "../component/Chart2";

export const Home = () => {

    return (
    <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
            <section className="section1">
                <div className="border 管辖统计">
                    <h2>案发派出所管辖统计</h2>
                    <Chart1/>
                </div>
                <div className="border 管辖统计">
                    <h2>案件破获排名</h2>
                    <Chart2/>
                </div>
            </section>
            <section className="border section2"></section>
            <section className="border section3"></section>
            <section className="border section4"></section>
            <section className="border section5"></section>
        </main>
    </div>
  );
};
