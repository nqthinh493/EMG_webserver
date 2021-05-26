var fft = new FFT();
var url = 'https://raw.githubusercontent.com/nqthinh493/EMG_signal/main/data.json'
var x_data = []
var y_data = []
var x = []
var y = []


Plotly.d3.json(url, function(figure) {

    let data = figure.data
    for (var i = 0; i < data.length; i++) {
        y_data.push(data[i])
        x_data.push(0)
    }

    re = y_data;
    im = x_data;
    console.log(re.length);
    var NFFT = fft.dim(re, im);
    console.log(NFFT);

    fft.calc(1, re, im);
    console.log(re, im);


    var frequencies = fft.frequencies(y_data, x_data, 1000)
    var amplitude = fft.amplitude(y_data, x_data);
    console.log(frequencies, amplitude);
    let trace2 = {
        x: frequencies,
        y: amplitude,
        line: {
            color: 'rgb(219, 64, 82)'
        }

    }
    let type_of_sensor = "Ag/AgCl";
    let layout_freqdomain = {
        title: {
            text: 'EMG Signal' + ' ' + '(' + type_of_sensor + ')' + ' / Frequency Domain',
            font: {
                family: 'Roboto',
                size: 24
            },

        },

        xaxis: {
            title: {
                text: 'Frequency (Hz)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Atitude (mV)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    Plotly.plot(document.getElementById('stage5'), [trace2], layout_freqdomain); //signal in Time Domain


})
Plotly.d3.json(url, function(figure) {
    let data = figure.data
    for (var i = 0; i < data.length; i++) {
        y.push(data[i])
        x.push(i / 1000)
    }
    let trace = {
        x: x,
        y: y
    }

    let type_of_sensor = "Ag/AgCl";
    let layout_timedomain = {
        title: {
            text: 'EMG Signal' + ' ' + '(' + type_of_sensor + ')' + ' / Time Domain',
            font: {
                family: 'Roboto',
                size: 24
            },

        },
        xaxis: {
            title: {
                text: 'Time (s)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Atitude (mV)',
                font: {
                    family: 'Roboto',
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    Plotly.plot(document.getElementById('stage4'), [trace], layout_timedomain); //signal in Time Domain


})