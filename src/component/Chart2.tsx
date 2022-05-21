import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart2 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        myChart.setOption({
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
                    fontSize: px(16)
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
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: "破案排名2",
                    type: "bar",
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]

        });
    }, []);
    return (
        <div ref={chartRef} className="chart">

        </div>
    );
};