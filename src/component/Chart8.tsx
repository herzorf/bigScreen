import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart8 = ()=>{
    const divRefLeft = useRef(null);
    const divRefRight = useRef(null);
    const colors = ['#F46064', '#F38E1C', '#1CDB7C', '#8D70F8', '#33A4FA'];
    useEffect(() => {
        const myChart = echarts.init(divRefLeft.current);
        myChart.setOption(({
            xAxis: {
                data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {color: '#083B70'}
                },
                axisLabel: {
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('');
                        } else {
                            return val;
                        }
                    }
                },
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    show: true,
                    lineStyle: {color: '#083B70'}
                }
            },
            series: [{
                type: 'bar',
                data: [40, 22, 20, 18, 32],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#0A97FB'
                }, {
                    offset: 1,
                    color: '#1E34FA'
                }]),
            }],
            grid:{
                x:px(60),
                y:px(40),
                x2:px(20),
                y2:px(50)
            }
        }));
    }, []);
    useEffect(() => {
        const myChart = echarts.init(divRefRight.current);
        myChart.setOption({
            color: colors,
            xAxis: {show: false},
            yAxis: {show: false},
            legend: {show: false},
            series: [
                {
                    startAngle: -20,
                    type: 'pie',
                    radius: ['25%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true, position: 'outside', textStyle: {color: 'white', fontSize: px(20)},
                        distanceToLabelLine: 0,
                        formatter(options) {
                            return options.value * 100 + '%';
                        }
                    },
                    labelLine: {show: true, length: 0},
                    roseType: 'area',
                    itemStyle: {
                        shadowBlur: px(200),
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    data: [
                        {value: 0.36, name: '刑事案件'},
                        {value: 0.20, name: '民事案件'},
                        {value: 0.18, name: '经济案件'},
                        {value: 0.24, name: '其他案件'},
                    ]
                }
            ],

        });
    }, []);
    return (
        <div>
            <div className="chart" ref={divRefLeft}/>
            <div>
                <div className="chart" ref={divRefRight}/>
                <div className="legend">
                    <span style={{background: colors[0]}} />刑事
                    <span style={{background: colors[1]}} />民事
                    <span style={{background: colors[2]}} />经济
                    <span style={{background: colors[3]}} />其他
                </div>
            </div>
        </div>
    )
}