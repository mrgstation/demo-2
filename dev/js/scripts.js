// var data = [
//     [1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370],
//     [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]
// ];

// raw data is array of x,y values/points
var data1 = [
    [0, 3],
    [4, 8],
    [8, 5],
    [12, 13]
];
var data2 = [
    [0, 12],
    [4, 6],
    [8, 2],
    [12, 0]
];


// data series array consists of multiple pieces of data
// [ series1, series2, ... ]
var dataset = [{
        label: "Up",
        data: data1
    },

    {
        label: "Down",
        data: data2
    }
];


var options = {
    series: {
        lines: {
            show: true,
            lineWidth: 3,
            fillColor: "rgba(20, 181, 101, 0.8)"
        },
        points: {
            radius: 3,
            show: true,
            symbol: "square"
        }
    },
    grid: {
        backgroundColor: "#F5F5F5",
        borderWidth: {
            top: 1,
            right: 1,
            bottom: 3,
            left: 3
        }
    }
};



$(document).ready(function() {
    $.plot($("#placeholder"), dataset, options);
});
