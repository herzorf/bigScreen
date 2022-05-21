import React, {useEffect, useRef} from "react";
import './home.scss';
import headerBg from "../images/header.png"
import * as echarts from 'echarts';
function px(px){
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    let pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
    return px / 2420 * pageWidth
}
export const Home = () => {
    const chartRef = useRef(null)
    useEffect(()=>{
        const myChart = echarts.init(chartRef.current);
        myChart.setOption({
            textStyle:{
                color:"#c8c4c4",
            },
            xAxis: {
                data: ['城关区', '七里桥区', '西周区', '安宁区', '红股区', '长安区','高新区'],
                axisLabel:{
                    fontSize: px(12 ),
                    formatter(value){
                        if(value.length > 2){
                            const array = value.split("")
                            array.splice(2,0,"\n")
                            return array.join("")
                        }else {
                            return value
                        }
                    }
                },

            },
            yAxis: {
                axisLabel:{
                    fontSize: px(18)
                }
            },
            series: [
                {
                    name: '案发数',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20,33]
                }
            ],
            grid:{
                x:px(40),
                y:px(20),
                x2:px(15),
                y2:px(50),
            }
        });
    },[])
    return (
    <div className="home">
        <header style={{backgroundImage: `url(${headerBg})`}}/>
        <main>
            <section className="section1">
                <div className="border 管辖统计">
                    <h2>案发派出所管辖统计</h2>
                    <div ref={chartRef} className="chart">

                    </div>
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
