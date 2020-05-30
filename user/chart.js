
var chart = document.getElementById("last-week-this-week");

var chart_area = new Chart(chart, {
    type: 'bar',
    responsive: true,
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Last week',
                data: [8, 0, 5, 15, 8, 3, 5],
                backgroundColor: "#3e65b1"
            },
            {
                label: 'This week',
                data: [4, 3, 5, 9, 8, 3, 2],
                backgroundColor: "#ffbf47"
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Ticket Sales this week and last'
        }
    }
})

var cart_chart = document.getElementById("category-chart")

var category_chart = new Chart(cart_chart, {
    type: 'pie',
    responsive: true,
    data: {
        labels: ['One', 'Two', 'Three'],
        datasets: [
            {
                label: 'Last week',
                data: [8, 10, 5],
                backgroundColor: ["#3e65b1", "#6283c5", "#204ea8"]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Ticket Sales by categories'
        }
    }
})