import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart2 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        myChart.setOption({
            color: ["#1177FB", "#9843E5",],
            textStyle: {
                color: "#c8c4c4",
            },
            legend: {
                bottom: 10,
                right: 10,
                textStyle: {
                    color: "#c8c4c4",
                    fontSize:px(16)
                },

            },
            xAxis: {
                type: "value",
                show: false
            },
            yAxis: {
                type: "category",
                data: ["城关区公安局", "七里河区公安局", "西固区公安局", "安宁区公安局", "红古区公安局", "长安区公安局", "高新区公安局", "柳林区公安局", "佛陀区公安局"],
                axisLabel: {
                    fontSize: px(16),
                    formatter(value){
                        return value.replace("公安局","\n公安局")
                    }
                }
            },
            grid: {
                x: px(80),
                y: px(20),
                x2: px(15),
                y2: px(60),
            },
            series: [
                {
                    name: "破案排名1",
                    type: "bar",
                    data: [18, 23, 29, 104, 131, 63,67,90,89]
                },
                {
                    name: "破案排名2",
                    type: "bar",
                    data: [19, 23, 31, 124, 131, 67,90,87,61]
                }
            ]

        });
    }, []);
    return (
        <div ref={chartRef} className="chart">

        </div>
    );
};