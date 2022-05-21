import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

function px(px) {
    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.clientWidth;
    let pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
    return px / 2420 * pageWidth;
}

export const Chart1 = () => {
    const chartRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(chartRef.current);
        myChart.setOption({
            textStyle: {
                color: "#c8c4c4",
            },
            xAxis: {
                data: ["城关区", "七里桥区", "西周区", "安宁区", "红股区", "长安区", "高新区"],
                axisLabel: {
                    fontSize: px(12),
                    formatter(value) {
                        if (value.length > 2) {
                            const array = value.split("");
                            array.splice(2, 0, "\n");
                            return array.join("");
                        } else {
                            return value;
                        }
                    }
                },

            },
            yAxis: {
                axisLabel: {
                    fontSize: px(18)
                }
            },
            series: [
                {
                    name: "案发数",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20, 33]
                }
            ],
            grid: {
                x: px(40),
                y: px(20),
                x2: px(15),
                y2: px(50),
            }
        });
    }, []);
    return (
        <div ref={chartRef} className="chart">

        </div>
    );
};
