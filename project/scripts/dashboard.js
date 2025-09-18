document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Load user data
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.name;
        document.getElementById('user-name').value = user.name;
        document.getElementById('user-email').value = user.email || 'john.doe@example.com';
    }
    
    // Load scan history
    loadScanHistory();
    
    // Initialize section switching
    initSectionSwitching();
    
    // Initialize tab switching for reports and settings
    initTabSwitching();
    
    // Initialize filter functionality
    initFilters();
    
    // Initialize pagination
    initPagination();
});

// Initialize charts
function initCharts() {
    // Results chart
    const resultsCtx = document.getElementById('resultsChart').getContext('2d');
    const resultsChart = new Chart(resultsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Fake', 'Genuine', 'Suspicious'],
            datasets: [{
                data: [16, 8, 5],
                backgroundColor: [
                    'rgba(255, 7, 58, 0.8)',
                    'rgba(57, 255, 20, 0.8)',
                    'rgba(255, 165, 0, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 7, 58, 1)',
                    'rgba(57, 255, 20, 1)',
                    'rgba(255, 165, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#e0e0ff'
                    }
                }
            }
        }
    });
    
    // Platforms chart
    const platformsCtx = document.getElementById('platformsChart').getContext('2d');
    const platformsChart = new Chart(platformsCtx, {
        type: 'bar',
        data: {
            labels: ['Instagram', 'Facebook', 'Twitter', 'TikTok'],
            datasets: [{
                label: '# of Scans',
                data: [12, 8, 7, 2],
                backgroundColor: [
                    'rgba(225, 48, 108, 0.8)',
                    'rgba(59, 89, 152, 0.8)',
                    'rgba(29, 161, 242, 0.8)',
                    'rgba(0, 0, 0, 0.8)'
                ],
                borderColor: [
                    'rgba(225, 48, 108, 1)',
                    'rgba(59, 89, 152, 1)',
                    'rgba(29, 161, 242, 1)',
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#e0e0ff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#e0e0ff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Analytics charts (initialized when analytics section is opened)
    initAnalyticsCharts();
}

// Initialize analytics charts
function initAnalyticsCharts() {
    // Scans over time chart
    const scansOverTimeCtx = document.getElementById('scansOverTimeChart').getContext('2d');
    const scansOverTimeChart = new Chart(scansOverTimeCtx, {
        type: 'line',
        data: {
            labels: ['Oct 1', 'Oct 5', 'Oct 10', 'Oct 15', 'Oct 20', 'Oct 25', 'Oct 30'],
            datasets: [{
                label: 'Daily Scans',
                data: [3, 5, 2, 6, 4, 7, 5],
                borderColor: 'rgba(0, 243, 255, 1)',
                backgroundColor: 'rgba(0, 243, 255, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#e0e0ff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#e0e0ff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e0e0ff'
                    }
                }
            }
        }
    });
    
    // Platform accuracy chart
    const platformAccuracyCtx = document.getElementById('platformAccuracyChart').getContext('2d');
    const platformAccuracyChart = new Chart(platformAccuracyCtx, {
        type: 'bar',
        data: {
            labels: ['Instagram', 'Facebook', 'Twitter', 'TikTok'],
            datasets: [{
                label: 'Accuracy %',
                data: [94, 88, 92, 76],
                backgroundColor: [
                    'rgba(225, 48, 108, 0.8)',
                    'rgba(59, 89, 152, 0.8)',
                    'rgba(29, 161, 242, 0.8)',
                    'rgba(0, 0, 0, 0.8)'
                ],
                borderColor: [
                    'rgba(225, 48, 108, 1)',
                    'rgba(59, 89, 152, 1)',
                    'rgba(29, 161, 242, 1)',
                    'rgba(0, 0, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#e0e0ff',
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        color: '#e0e0ff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    
    // Detection patterns chart
    const detectionPatternsCtx = document.getElementById('detectionPatternsChart').getContext('2d');
    const detectionPatternsChart = new Chart(detectionPatternsCtx, {
        type: 'radar',
        data: {
            labels: ['Follower Ratio', 'Account Age', 'Post Frequency', 'Bio Completeness', 'Image Quality', 'Engagement Rate'],
            datasets: [
                {
                    label: 'Fake Profiles',
                    data: [85, 92, 45, 30, 78, 20],
                    backgroundColor: 'rgba(255, 7, 58, 0.2)',
                    borderColor: 'rgba(255, 7, 58, 1)',
                    pointBackgroundColor: 'rgba(255, 7, 58, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 7, 58, 1)'
                },
                {
                    label: 'Genuine Profiles',
                    data: [30, 15, 75, 85, 40, 82],
                    backgroundColor: 'rgba(57, 255, 20, 0.2)',
                    borderColor: 'rgba(57, 255, 20, 1)',
                    pointBackgroundColor: 'rgba(57, 255, 20, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(57, 255, 20, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: '#e0e0ff'
                    },
                    ticks: {
                        color: '#e0e0ff',
                        backdropColor: 'transparent'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#e0e0ff'
                    }
                }
            }
        }
    });
}

// Initialize section switching
function initSectionSwitching() {
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(li => li.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Hide all sections
            const sections = document.querySelectorAll('.dashboard-section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Show the selected section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Initialize tab switching for reports and settings
function initTabSwitching() {
    // Reports tabs
    const reportTabs = document.querySelectorAll('.report-tab');
    const reportTabContents = document.querySelectorAll('.report-tab-content');
    
    reportTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            reportTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            reportTabContents.forEach(content => content.classList.remove('active'));
            // Show the selected tab content
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Settings tabs
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const settingsTabContents = document.querySelectorAll('.settings-tab-content');
    
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs
            settingsTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            settingsTabContents.forEach(content => content.classList.remove('active'));
            // Show the selected tab content
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize filter functionality
function initFilters() {
    const applyFiltersBtn = document.getElementById('apply-filters-btn');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const platformFilter = document.getElementById('platform-filter').value;
            const resultFilter = document.getElementById('result-filter').value;
            const dateFilter = document.getElementById('date-filter').value;
            
            // In a real application, this would filter the scan history data
            // For this example, we'll just reload the table with filtered data
            loadScanHistory(platformFilter, resultFilter, dateFilter);
            
            // Show a notification that filters were applied
            showNotification('Filters applied successfully!', 'success');
        });
    }
    
    // Export history button
    const exportHistoryBtn = document.getElementById('export-history-btn');
    if (exportHistoryBtn) {
        exportHistoryBtn.addEventListener('click', function() {
            // In a real application, this would export the scan history
            showNotification('Exporting scan history...', 'info');
            
            // Simulate export process
            setTimeout(() => {
                showNotification('Scan history exported successfully!', 'success');
            }, 1500);
        });
    }
    
    // New report button
    const newReportBtn = document.getElementById('new-report-btn');
    if (newReportBtn) {
        newReportBtn.addEventListener('click', function() {
            showNotification('Opening report creation form...', 'info');
            // In a real application, this would open a modal or navigate to a report creation page
        });
    }
}

// Initialize pagination
function initPagination() {
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const pageInfo = document.querySelector('.page-info');
    
    if (prevPageBtn && nextPageBtn && pageInfo) {
        let currentPage = 1;
        const totalPages = 3;
        
        // Update page info
        function updatePagination() {
            pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
            prevPageBtn.disabled = currentPage === 1;
            nextPageBtn.disabled = currentPage === totalPages;
            
            // In a real application, this would load the appropriate page of data
            // For this example, we'll just show a notification
            showNotification(`Loaded page ${currentPage} of scan history`, 'info');
        }
        
        // Previous page button
        prevPageBtn.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
            }
        });
        
        // Next page button
        nextPageBtn.addEventListener('click', function() {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
            }
        });
        
        // Initial update
        updatePagination();
    }
}

// Load scan history with optional filters
function loadScanHistory(platformFilter = 'all', resultFilter = 'all', dateFilter = 'all') {
    // In a real application, this would come from an API with filtering
    const scanHistory = [
        {
            url: 'https://instagram.com/john.doe',
            platform: 'Instagram',
            date: 'Oct 15, 2025',
            result: 'Fake',
            confidence: '92%'
        },
        {
            url: 'https://instagram.com/jane_smith',
            platform: 'Instagram',
            date: 'Oct 14, 2025',
            result: 'Genuine',
            confidence: '88%'
        },
        {
            url: 'https://facebook.com/robert_jones',
            platform: 'Facebook',
            date: 'Oct 13, 2025',
            result: 'Fake',
            confidence: '95%'
        },
        {
            url: 'https://tiktok.com/@sarah_miller',
            platform: 'TikTok',
            date: 'Oct 12, 2025',
            result: 'Suspicious',
            confidence: '67%'
        },
        {
            url: 'https://twitter.com/david_wilson',
            platform: 'Twitter',
            date: 'Oct 10, 2025',
            result: 'Genuine',
            confidence: '84%'
        },
        {
            url: 'https://instagram.com/michael_brown',
            platform: 'Instagram',
            date: 'Oct 8, 2025',
            result: 'Fake',
            confidence: '91%'
        }
    ];
    
    // Apply filters (simplified for demo)
    let filteredHistory = scanHistory;
    
    if (platformFilter !== 'all') {
        filteredHistory = filteredHistory.filter(scan => 
            scan.platform.toLowerCase() === platformFilter.toLowerCase()
        );
    }
    
    if (resultFilter !== 'all') {
        filteredHistory = filteredHistory.filter(scan => 
            scan.result.toLowerCase() === resultFilter.toLowerCase()
        );
    }
    
    // Date filtering would be more complex in a real application
    if (dateFilter !== 'all') {
        // Simplified date filtering for demo
        filteredHistory = filteredHistory.filter((scan, index) => index < 3);
    }
    
    // Get the table body
    const tableBody = document.getElementById('scan-history-body');
    
    if (tableBody) {
        // Clear existing rows
        tableBody.innerHTML = '';
        
        // Add rows for each scan
        filteredHistory.forEach(scan => {
            const row = document.createElement('tr');
            
            // Determine badge class based on result
            let badgeClass = '';
            if (scan.result === 'Fake') badgeClass = 'badge-fake';
            else if (scan.result === 'Genuine') badgeClass = 'badge-genuine';
            else if (scan.result === 'Suspicious') badgeClass = 'badge-suspicious';
            
            // Platform icon class
            let platformIcon = '';
            if (scan.platform === 'Instagram') platformIcon = 'fab fa-instagram';
            else if (scan.platform === 'Facebook') platformIcon = 'fab fa-facebook';
            else if (scan.platform === 'Twitter') platformIcon = 'fab fa-twitter';
            else if (scan.platform === 'TikTok') platformIcon = 'fab fa-tiktok';
            
            row.innerHTML = `
                <td>${scan.url}</td>
                <td><i class="${platformIcon}"></i> ${scan.platform}</td>
                <td>${scan.date}</td>
                <td><span class="badge ${badgeClass}">${scan.result}</span></td>
                <td>${scan.confidence}</td>
                <td>
                    <button class="icon-btn"><i class="fas fa-eye"></i></button>
                    <button class="icon-btn"><i class="fas fa-download"></i></button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
        
        // If no results after filtering
        if (filteredHistory.length === 0) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="6" style="text-align: center; padding: 20px;">
                    No scan history found matching your filters.
                </td>
            `;
            tableBody.appendChild(row);
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                padding: 15px 20px;
                border-radius: var(--border-radius);
                color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
                min-width: 300px;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-info {
                background: var(--cyber-blue);
            }
            .notification-success {
                background: var(--cyber-green);
            }
            .notification-error {
                background: var(--cyber-red);
            }
            .notification-close {
                background: transparent;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: 15px;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Close button event
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Settings form submission
document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.querySelector('.settings-form');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('user-name').value;
            const email = document.getElementById('user-email').value;
            const company = document.getElementById('user-company').value;
            const role = document.getElementById('user-role').value;
            
            // In a real application, this would save to the server
            // For this example, we'll just update the username display and show a notification
            document.getElementById('username').textContent = name;
            
            // Update user in localStorage
            const user = JSON.parse(localStorage.getItem('user')) || {};
            user.name = name;
            user.email = email;
            localStorage.setItem('user', JSON.stringify(user));
            
            showNotification('Settings saved successfully!', 'success');
        });
    }
    
    // Handle logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real application, this would call a logout API
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }
});