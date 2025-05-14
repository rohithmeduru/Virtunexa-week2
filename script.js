// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Line Chart (Dynamic)
const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false
    }]
  },
  options: {
    responsive: true
  }
});

// Update Chart Data
document.getElementById('updateData').addEventListener('click', () => {
  lineChart.data.datasets[0].data = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  lineChart.update();
});
