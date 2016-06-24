setInterval(function(){
    $('.oList1 li:nth-child(3)').hide(); }, 500
);

// Create the chart
$('#columnChart').highcharts({
    title:{
        text:''
    },
    credits: {
        enabled: false
    },
    chart: {
        type: 'column',
        backgroundColor: '#fff'
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                fontSize: '14',
                color: '#666666',
                fontWeight: 'normal'
            }
        }
    },
    yAxis: {
        title: {
            text: null
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%',
                style: {
                    fontSize: '14',
                    color: '#333',
                    fontWeight: 'normal'
                }
            }
        }
    },
    tooltip: {
        enabled: false
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: '주택',
            y: 86.8,
            color:'#fca727'
        }, {
            name: '건축',
            y: 79.2,
            color:'#0bbdb9'
        }, {
            name: '토목',
            y: 66.3,
            color:'#948c8c'
        }, {
            name: '플랜트',
            y: 80.2,
            color:'#ed5252'
        }]
    }]
});