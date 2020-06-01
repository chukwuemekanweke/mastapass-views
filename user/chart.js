
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
                backgroundColor: "#bc5299"
            },
            {
                label: 'This week',
                data: [4, 3, 5, 9, 8, 3, 2],
                backgroundColor: "#1e3d69"
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


var cart_chart = document.getElementById("bought-category-chart")

var category_chart = new Chart(cart_chart, {
    type: 'pie',
    responsive: true,
    data: {
        labels: ['Weddings', 'MeetUps', 'Birthdays','Ashebi'],
        datasets: [
            {
                data: [1000, 1200, 700, 2050],
                backgroundColor: ["#f4a300", "#cc5299", "#c83e6a", "#1e3d69"]
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

var horizontal_chart  = document.getElementById("horizontal_chart")
var money_chart = new Chart(horizontal_chart, {
    type:"horizontalBar",
    responsive:true,
    data: {
        labels: ['Weddings', 'MeetUps', 'Birthdays', 'Ashebi'],
        datasets: [
            {
                data: [1000, 1200, 700, 2050],
                backgroundColor: ["#f4a300", "#cc5299", "#c83e6a", "#1e3d69"]
            }
        ]
    }
})
