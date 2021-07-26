import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function Chart(props) {
  const [chartData, setChartData] = useState({});
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setorders] = useState([]);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [dataType, setDataType] = useState({
    labels: months,
    datasets: [
      {
        label: "Total Purchases",
        data: [],
        backgroundColor: "rgba(255, 255, 132)",
      },
    ],
  });

  const getPurchaseLessonsPerMonth = () => {
    var dataArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    axios
      .get("http://localhost:5000/api/order/getChartDetailsTwo")
      .then((response) => {
        response.data.forEach((element) => {
          var month = parseInt(element._id);
          dataArray[month - 1] = element.total;
          //dataArray.splice(month - 1, 0, element.total)
        });

        setDataType({
          datasets: [
            {
              label: "Revenue By Month",
              data: dataArray,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getPurchaseLessonsPerMonth();
  }, []);

  return (
    <div>
      <Line
        data={dataType}
        height={400}
        width={600}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}
