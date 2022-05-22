import React from "react";
import "./home.scss";
import headerBg from "../images/header.png";
import {Chart1} from "../component/Chart1";
import {Chart2} from "../component/Chart2";
import {Chart3} from "../component/Chart3";
import {Chart4} from "../component/Chart4";
import {TableData} from "../component/TableData";
import {MapChart} from "../component/MapChart";
import {Chart5} from "../component/Chart5";
import {Chart6} from "../component/Chart6";
import {Chart7} from "../component/Chart7";
import {Chart8} from "../component/Chart8";
import {Chart9} from "../component/Chart9";
import {Chart10} from "../component/Chart10";


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
                    <div className="border 年龄">
                        <h2>兰州市犯罪人员年龄段分布</h2>
                        <div>
                            <Chart5/>
                            <Chart6/>
                            <Chart7/>
                        </div>
                    </div>
                </section>
                <section className="section5">
                    <div className="border 案发统计">
                        <h2>兰州市案发类型统计</h2>
                        <Chart8/>
                    </div>
                    <div className="border 街道统计">
                        <h2>兰州市案发街道统计</h2>
                        <Chart9/>
                    </div>
                    <div className="border 手段分析">
                        <h2>作案手段分析</h2>
                        <Chart10/>
                    </div>
                </section>
            </main>
            <footer>
                大屏数据平台利用大数据技术采集犯罪作案信息是一套实时 监控的数据系统Copyright©2017兰州市公安局
            </footer>
        </div>
    );
};
