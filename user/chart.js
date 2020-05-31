
var chart = document.getElementById("last-week-this-week");

var chart_area = new Chart(chart, {
    type: 'bar',
    responsive: true,
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Last week',
                data: [8, 1.3, 5, 15, 8, 3, 5],
                backgroundColor: "#3e65b1"
            },
            {
                label: 'This week',
                data: [4, 3, 5, 9, 8, 3, 2],
                backgroundColor: "#6283c5"
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
    type: 'line',
    responsive: true,
    data: {
        labels: ['Weddings', 'MeetUps', 'Birthdays'],
        datasets: [
            {
                label: 'Last week',
                data: [5000, 3200, 500],
                backgroundColor: ["#3e65b1", "#6283c5", "#204ea8"]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Amount Ticket Sales by categories'
        }
    }
})


var cart_chart = document.getElementById("bought-category-chart")

var category_chart = new Chart(cart_chart, {
    type: 'pie',
    responsive: true,
    data: {
        labels: ['Weddings', 'MeetUps', 'Birthdays'],
        datasets: [
            {
                label: 'Last week',
                data: [1000, 3200, 700],
                backgroundColor: ["#ffbf47", "#cf8801", "#ffce70"]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Ticket bought by categories'
        }
    }
})