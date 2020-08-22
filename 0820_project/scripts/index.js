const WIDTH_THRESHOLD = 728;
const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumSignificantDigits: 10
});


(function () {
  const menuBtn = document.getElementById('nav-button')
  const menu = document.getElementById('nav-menu')

  menuBtn.addEventListener('click', _ => {
    menu.classList.toggle('show')
  })

  const ctx = document.getElementById('stats').getContext('2d')
  const type = window.innerWidth > WIDTH_THRESHOLD ? 'bar' : 'horizontalBar'

  const data = {
    labels: [
      'CGDQ 2010',
      'AGDQ 2011',
      'SGDQ 2011',
      'AGDQ 2012',
      'SGDQ 2012',
      'AGDQ 2013',
      'SGDQ 2013',
      'AGDQ 2014',
      'SGDQ 2014',
      'AGDQ 2015',
      'SGDQ 2015',
      'AGDQ 2016',
      'SGDQ 2016',
      'AGDQ 2017',
      'SGDQ 2017',
      'AGDQ 2018',
      'SGDQ 2018',
      'AGDQ 2019',
      'SGDQ 2019',
      'AGDQ 2020',
    ],
        datasets: [{
          label: 'Amount raised',
          data: [
            10532,
            52520,
            21397,
            149045,
            46279,
            448425,
            257181,
            1031667,
            718235,
            1576085,
            1215601,
            1216309,
            1294139,
            2222791,
            1792342,
            2295191,
            2168913,
            2425790,
            3039596,
            3164002
          ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 99, 132, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
  }

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          fontColor: '#fff',
          fontSize: window.innerWidth > WIDTH_THRESHOLD ? 20 : 16
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: false,
          fontColor: '#fff',
          fontSize: window.innerWidth > WIDTH_THRESHOLD ? 20 : 16
        }
      }]
    },
    legend: {
      labels: {
        fontColor: '#fff',
        fontSize: window.innerWidth > WIDTH_THRESHOLD ? 20 : 16
      },
    },
    tooltips: {
      titleFontSize: window.innerWidth > WIDTH_THRESHOLD ? 20 : 16,
      bodyFontSize: window.innerWidth > WIDTH_THRESHOLD ? 18 : 14,
      callbacks: {
        label: function (item) {
          const { value } = item;

          return currencyFormat.format(parseInt(value));
        }
      }
    },
    maintainAspectRatio: false,
    responsiveAnimationDuration: 300,
  }

  new Chart(ctx, {
    type,
    data,
    options
  })
})()


