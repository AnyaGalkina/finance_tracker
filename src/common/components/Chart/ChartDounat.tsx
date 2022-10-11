import React, {memo, useEffect, useState} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {TotalSumType} from "../../../features/Spends/totalSpends-reducer";
import styles from "./ChartDounat.module.css";
import {Bar} from "react-chartjs-2/dist/typedCharts";

ChartJS.register(ArcElement, Tooltip, Legend);

type PropsType =  {
    totalSum: TotalSumType[]
}

const ChartDounat = memo(( {totalSum}: PropsType) => {

    type DataChartType = {
        labels: string[];
        datasets: DatasetsType[];
    }

    type DatasetsType = {
        label: string;
        data: number[],
        backgroundColor: string[],
        borderColor: string[],
        borderWidth: number,
    }


    const dataDefault: DataChartType  = {
        labels: [],
        datasets: [
            {
                label: "# of Votes",
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1,
            },
        ],
    };


    const [data, setData] = useState<DataChartType>(dataDefault);

    useEffect( () => {
        const newLables = totalSum.map(s => s.categoryName);
        const newData2 =  totalSum.map(s => s.totalSum);
        setData({
            labels: newLables,
            datasets: [
                {
                    label: "# of Votes",
                    data: newData2,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgb(246, 219, 198)",
                        "rgb(255, 181, 255)",
                        "rgb(194, 255, 194 )",
                        "rgba(0, 63, 125, 0.3)",
                        "rgb(217, 217, 217)",
                        "rgba(125, 0, 44, 0.3)",
                        "rgb(119, 187, 175, 0.8)",
                        "rgba(175, 99, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 158, 64, 1)",

                        "rgb(155, 107, 179)",
                        "rgb(136, 179, 136)",
                        "rgba(0, 63, 125, 1)",
                        "rgba(55, 59, 64, 0.2)",
                        "rgba(125, 0, 44, 0.8)",
                        "rgb(40, 163, 148)",
                        "rgba(175, 99, 64, 0.8)",
                    ],
                    borderWidth: 1,
                },
            ],
        })
    } ,[totalSum]);


    return (
        <div className={styles.chartContainer}>
            <Doughnut data={data}/>
        </div>
    );
});

export default ChartDounat;

