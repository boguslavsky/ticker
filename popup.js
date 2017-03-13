document.addEventListener('DOMContentLoaded', function() {

    Highcharts.stockChart('chart', {
        chart: {
            spacing: [0, 0, 0, 0],
            backgroundColor: '#272b37'
        },
        rangeSelector: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            lineColor: '#272b37',
            title: {
                enabled: false
            },
            labels: {
                enabled: false
            },
            tickLength: 0
        },
        yAxis: {
            gridLineColor: '#272b37',
            title: {
                enabled: false
            },
            labels: {
                enabled: false
            },
            TickLength: 0
        },
        plotOptions: {
            series: {
                enableMouseTracking: false,
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        series: [{
            data: [
                [1268611200000, 31.98],
                [1268697600000, 32.06],
                [1268784000000, 32.02],
                [1268870400000, 32.09],
                [1268956800000, 31.75],
                [1269216000000, 32.11],
                [1269302400000, 32.62],
                [1269388800000, 32.77],
                [1269475200000, 32.38],
                [1269561600000, 32.99],
                [1269820800000, 33.20],
                [1269907200000, 33.69],
                [1269993600000, 33.57],
                [1270425600000, 34.07],
                [1270512000000, 34.22],
                [1270598400000, 34.37],
                [1270684800000, 34.28],
                [1270771200000, 34.54],
                [1271030400000, 34.61],
                [1271116800000, 34.63],
                [1271203200000, 35.10],
                [1271289600000, 35.56],
                [1271376000000, 35.34],
                [1271635200000, 35.30],
                [1271721600000, 34.94],
                [1271808000000, 37.03],
                [1271894400000, 38.07],
                [1271980800000, 38.69],
                [1272240000000, 38.50],
                [1272326400000, 37.43],
                [1272412800000, 37.37],
                [1272499200000, 38.38],
                [1272585600000, 37.30]
            ],
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            },
            lineColor: '#373d50',
            fillColor: false
        }]
    });

});
