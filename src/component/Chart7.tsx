import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";

export const Chart7 = ()=>{
    const divRef = useRef(null);
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
    }, []);
    return (
        <div ref={divRef} className="chart">7</div>
    )
}