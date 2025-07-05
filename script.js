document.addEventListener('DOMContentLoaded', function() {
    renderProgressChart();
    setupNav();
});

function renderProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Calories',
                    data: [400, 600, 500, 700, 800, 900, 650],
                    backgroundColor: '#6366f1',
                    borderRadius: 8
                },
                {
                    label: 'Steps',
                    data: [7000, 8500, 9000, 10000, 12000, 11000, 9500],
                    backgroundColor: '#f59e0b',
                    borderRadius: 8
                },
                {
                    label: 'Workouts',
                    data: [1, 1, 1, 1, 2, 2, 1],
                    backgroundColor: '#10b981',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
            },
            scales: {
                x: {
                    grid: { display: false },
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    grid: { color: '#e2e8f0' },
                    stacked: true
                }
            }
        }
    });
}

function setupNav() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
} 