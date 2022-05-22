import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart5 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        myChart.setOption(
            {
                color: ["#8D70F8", "#33A4FA"],
                xAxis: {show: false},
                yAxis: {show: false},
                legend: {
                    show: true,
                    bottom: "center",
                    textStyle: {
                        color: "#fff"
                    }
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["75%", "90%"],
                        label: {
                            show: true, position: "inside", textStyle: {color: "white", fontSize: px(20)},
                            formatter(options) {
                                return options.value * 100 + "%";
                            }
                        },
                        itemStyle: {
                            borderColor: "#0F113A",
                            borderWidth: px(4)
                        },
                        data: [
                            {value: 0.2, name: "女"},
                            {value: 0.8, name: "男"},
                        ]
                    }],
                grid: {
                    x: px(40),
                    y: px(60),
                    x2: px(20),
                    y2: px(200)
                },
            });
    }, []);
    return (
        <div ref={divRef} className="chart">5</div>
    );
};