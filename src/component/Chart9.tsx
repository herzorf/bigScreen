import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart9 = () => {
    const divRefLeft = useRef(null);
    const divRefRight = useRef(null);
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    const data : Array<object> = [
        {value: 0.08, name: '东岗路'},
        {value: 0.06, name: '段家滩'},
        {value: 0.11, name: '雁北'},
        {value: 0.09, name: '五泉山'},
        {value: 0.12, name: '中山路'},
        {value: 0.06, name: '庆阳路'},
        {value: 0.08, name: '武都路'},
        {value: 0.08, name: '酒泉路'},
        {value: 0.08, name: '天水路'},
    ];
    useEffect(() => {
        const myChart = echarts.init(divRefLeft.current);
        myChart.setOption({
            xAxis: {show: false},
            yAxis: {show: false},
            grid: {x: 0, x2: 0, y: 0, y2: 0, containLabel: true},
            legend: {
                orient: 'vertical',
                left: 'left',
                top: 'center',
                textStyle: {color: 'white'},
                itemWidth: px(10),
                itemHeight: px(10),
                formatter(name) {
                    // @ts-ignore
                    const value = data.find(i => i.name === name)?.value * 100 + '%';
                    return name + ' ' + value;
                }
            },
            series: [
                {
                    center: ['60%', '50%'],
                    type: 'pie',
                    radius: '80%',
                    label: {show: false},
                    labelLine: {show: false},
                    data: data,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    }, []);


    return (
        <div>
            <div className="chart" ref={divRefLeft}/>
            <div className="chart" ref={divRefRight}/>
        </div>
    );
};