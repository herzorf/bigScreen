import React, {useEffect, useRef} from "react";
import china from "../geo/china.json";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const MapChart = () => {
    const divRef = useRef(null);
    const colors = {"青海省": "#BB31F7", "甘肃省": "#15B8FD", "四川省": "#06E1EE"};
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        // @ts-ignore
        echarts.registerMap("CN", china);
        myChart.setOption({
            textStyle: {
                fontSize: px(18),
                color: '#79839E'
            },
            title: {show: false},
            legend: {show: true},
            grid: {
                x: px(20),
                y: px(20),
                x2: px(20),
                y2: px(20),
                containLabel: true
            },
            series: [
                {
                    type: "map",
                    map: "CN", // 自定义扩展图表类型
                    data: [
                        {name: "甘肃省", value: 1},
                    ],
                    itemStyle: {
                        areaColor: "#010D3D",
                        color: colors["甘肃省"],
                        borderColor: "#01A7F7",
                    },
                },
                {
                    type: "map",
                    map: "CN", // 自定义扩展图表类型
                    data: [
                        {name: "四川省", value: 100},
                    ],
                },
                {
                    type: "map",
                    map: "CN", // 自定义扩展图表类型
                    data: [
                        {name: "青海省", value: 100},
                    ],
                },

            ]
        });
    }, []);
    return (
        <div ref={divRef} className="chart"/>
    );
};