import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart4 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ["2","4","6","8","10","12","14","16","18","20","22","24"],
                splitLine: {show: true, lineStyle: {color: '#073E78'}},
            },
            yAxis: {
                type: 'value',
                splitLine: {lineStyle: {color: '#073E78'}},
            },
            series: [
                {
                    data: [15,14,25,14,26,24,12,16,12,23,15,22],
                    type: 'line',
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#414a9f'
                        }, {
                            offset: 1,
                            color: '#1b1d52'
                        }]),
                    }
                },

            ],
            grid:{
                x:px(50),
                y:px(40),
                x2:px(30),
                y2:px(90)
            },
        });
    }, []);
    return (
        <div ref={chartRef} className="chart 趋势分析"/>
    );
};