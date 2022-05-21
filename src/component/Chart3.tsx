import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart3 = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        myChart.setOption( {
            legend: {
                data: ['盗窃', '两抢', '诈骗', "敲诈", '勒索'],
                textStyle:{
                    color:"#7B9FC1",
                    fontSize:px(12)
                },
                bottom:px(0),
                itemWidth: px(30),
                itemHeight: px(16)
            },
            grid:{
                x:px(50),
                y:px(40),
                x2:px(30),
                y2:px(90)
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2011', '2013', '2015', '2017', '2019'],
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#0A2351"
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#0A2351"
                    }
                }
            },
            series: [
                {
                    name: '盗窃',
                    type: 'line',
                    stack: 'Total',
                    data: [12, 12, 11, 13, 9, 23, 21]
                },
                {
                    name: '两抢',
                    type: 'line',
                    stack: 'Total',
                    data: [22, 18, 19, 23, 29, 33, 31]
                },
                {
                    name: '诈骗',
                    type: 'line',
                    stack: 'Total',
                    data: [15, 23, 20, 15, 19, 33, 41]
                },
                {
                    name: '敲诈',
                    type: 'line',
                    stack: 'Total',
                    data: [32, 33, 30, 33, 39, 33, 32]
                },
                {
                    name: '勒索',
                    type: 'line',
                    stack: 'Total',
                    data: [82, 93, 90, 93, 12, 13, 13]
                }
            ]
        });
    }, []);
    return (
        <div ref={chartRef} className="chart 趋势分析"/>

    )
}
