import React, {memo, useEffect, useState} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {TotalSumType} from "../../redux/totalSpends-reducer";
import styles from "./ChartDounat.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

type PropsType =  {
    totalSum: TotalSumType[]
}

const ChartDounat = memo(( {totalSum}: PropsType) => {

    console.log("Chart")
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
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 20, 64, 1)",
                        "rgba(25, 159, 4, 1)",
                        "rgba(205, 159, 164, 1)",
                        "rgba(55, 59, 64, 1)",
                        "rgba(80, 19, 64, 1)",
                        "rgba(25, 59, 4, 1)",
                        "rgba(175, 99, 64, 1)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 158, 64, 1)",

                        "rgba(255, 20, 64, 1)",
                        "rgba(25, 159, 4, 1)",
                        "rgba(205, 159, 164, 1)",
                        "rgba(55, 59, 64, 1)",
                        "rgba(80, 19, 64, 1)",
                        "rgba(25, 59, 4, 1)",
                        "rgba(175, 99, 64, 1)",
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

