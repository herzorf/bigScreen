import React from "react";
import './home.scss';
import headerBg from "../images/header.png"
import {Chart1} from "../component/Chart1";
import {Chart2} from "../component/Chart2";
import {Chart3} from "../component/Chart3";
import {Chart4} from "../component/Chart4";
import {TableData} from "../component/TableData";
import {MapChart} from "../component/MapChart";


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
                <div className="border 破获排名">
                    <h2>案件破获排名</h2>
                    <Chart2/>
                </div>
            </section>
            <section className="section2">
                <div className="border 趋势分析">
                    <h2>发案趋势分析</h2>
                    <Chart3/>
                </div>
                <div className="border 趋势分析">
                    <h2>发案趋势分析</h2>
                    <Chart4/>
                </div>
            </section>
            <section className="border section3">
                <div>
                    <h2>往年战果数对比</h2>
                    <TableData/>
                </div>
            </section>
            <section className=" section4">
                <div className="border 籍贯">
                    <h2>全兰州市犯罪人员籍贯分布地</h2>
                    <MapChart/>
                </div>
            </section>
            <section className="border section5"></section>
        </main>
        <footer>
            大屏数据平台利用大数据技术采集犯罪作案信息是一套实时 监控的数据系统Copyright©2017兰州市公安局
        </footer>
    </div>
  );
};
