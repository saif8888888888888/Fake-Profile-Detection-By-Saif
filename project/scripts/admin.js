// Check if user is admin and show admin link
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const adminLink = document.querySelector('.admin-link');
    
    if (currentUser && currentUser.isAdmin && adminLink) {
        adminLink.style.display = 'block';
    }

    
    // Initialize admin functionality
    initAdminCharts();
    initAdminSectionSwitching();
    initAdminTabSwitching();
    initAdminFilters();
    initAdminPagination();
    initAdminModals();
    initAdminActions();
});

// Initialize admin charts
function initAdminCharts() {
    // User registration chart
    const userRegCtx = document.getElementById('userRegistrationChart').getContext('2d');
    const userRegChart = new Chart(userRegCtx, {
        type: 'line',
        data: {
            labels: ['Oct 1', 'Oct 5', 'Oct 10', 'Oct 15', 'Oct 20', 'Oct 25', 'Oct 30'],
            datasets: [{
                label: 'New Users',
                data: [5, 8, 12, 10, 15, 18, 20],
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
    
    // Scan activity chart
    const scanActivityCtx = document.getElementById('scanActivityChart').getContext('2d');
    const scanActivityChart = new Chart(scanActivityCtx, {
        type: 'bar',
        data: {
            labels: ['Oct 1', 'Oct 5', 'Oct 10', 'Oct 15', 'Oct 20', 'Oct 25', 'Oct 30'],
            datasets: [{
                label: 'Scans Per Day',
                data: [45, 62, 78, 85, 92, 105, 120],
                backgroundColor: 'rgba(138, 43, 226, 0.8)',
                borderColor: 'rgba(138, 43, 226, 1)',
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
}

// Initialize admin section switching
function initAdminSectionSwitching() {
    const menuItems = document.querySelectorAll('.admin-menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(li => li.classList.remove('active'));
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Hide all sections
            const sections = document.querySelectorAll('.admin-section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Show the selected section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
}

// Initialize admin tab switching
function initAdminTabSwitching() {
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

// Initialize admin filters
function initAdminFilters() {
    // User filters
    const applyUserFiltersBtn = document.getElementById('apply-user-filters-btn');
    if (applyUserFiltersBtn) {
        applyUserFiltersBtn.addEventListener('click', function() {
            const statusFilter = document.getElementById('user-status-filter').value;
            const roleFilter = document.getElementById('user-role-filter').value;
            const dateFilter = document.getElementById('user-date-filter').value;
            const searchTerm = document.getElementById('user-search').value;
            
            // In a real application, this would filter the user data
            showNotification('User filters applied successfully!', 'success');
        });
    }
    
    // Scan filters
    const applyScanFiltersBtn = document.getElementById('apply-scan-filters-btn');
    if (applyScanFiltersBtn) {
        applyScanFiltersBtn.addEventListener('click', function() {
            const platformFilter = document.getElementById('scan-platform-filter').value;
            const resultFilter = document.getElementById('scan-result-filter').value;
            const dateFilter = document.getElementById('scan-date-filter').value;
            const searchTerm = document.getElementById('scan-search').value;
            
            // In a real application, this would filter the scan data
            showNotification('Scan filters applied successfully!', 'success');
        });
    }
    
    // Report filters
    const applyReportFiltersBtn = document.getElementById('apply-report-filters-btn');
    if (applyReportFiltersBtn) {
        applyReportFiltersBtn.addEventListener('click', function() {
            const statusFilter = document.getElementById('report-status-filter').value;
            const typeFilter = document.getElementById('report-type-filter').value;
            const dateFilter = document.getElementById('report-date-filter').value;
            const searchTerm = document.getElementById('report-search').value;
            
            // In a real application, this would filter the report data
            showNotification('Report filters applied successfully!', 'success');
        });
    }
    
    // Log filters
    const applyLogFiltersBtn = document.getElementById('apply-log-filters-btn');
    if (applyLogFiltersBtn) {
        applyLogFiltersBtn.addEventListener('click', function() {
            const typeFilter = document.getElementById('log-type-filter').value;
            const userFilter = document.getElementById('log-user-filter').value;
            const dateFilter = document.getElementById('log-date-filter').value;
            const searchTerm = document.getElementById('log-search').value;
            
            // In a real application, this would filter the log data
            showNotification('Log filters applied successfully!', 'success');
        });
    }
    
    // Export buttons
    const exportButtons = [
        'export-users-btn', 'export-scans-btn', 'export-reports-btn', 'export-logs-btn'
    ];
    
    exportButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', function() {
                // In a real application, this would export the data
                showNotification('Exporting data...', 'info');
                
                // Simulate export process
                setTimeout(() => {
                    showNotification('Data exported successfully!', 'success');
                }, 1500);
            });
        }
    });
    
    // Clear logs button
    const clearLogsBtn = document.getElementById('clear-logs-btn');
    if (clearLogsBtn) {
        clearLogsBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear logs older than 30 days?')) {
                // In a real application, this would clear old logs
                showNotification('Clearing old logs...', 'info');
                
                // Simulate clearing process
                setTimeout(() => {
                    showNotification('Old logs cleared successfully!', 'success');
                }, 1500);
            }
        });
    }
    
    // Add user button
    const addUserBtn = document.getElementById('add-user-btn');
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            openUserModal('new');
        });
    }
    
    // Generate API key button
    const generateApiKeyBtn = document.getElementById('generate-api-key-btn');
    if (generateApiKeyBtn) {
        generateApiKeyBtn.addEventListener('click', function() {
            // In a real application, this would generate a new API key
            showNotification('Generating new API key...', 'info');
            
            // Simulate API key generation
            setTimeout(() => {
                showNotification('New API key generated successfully!', 'success');
            }, 1500);
        });
    }
    
    // Refresh data button
    const refreshDataBtn = document.getElementById('refresh-data-btn');
    if (refreshDataBtn) {
        refreshDataBtn.addEventListener('click', function() {
            // In a real application, this would refresh the data
            showNotification('Refreshing data...', 'info');
            
            // Simulate refresh process
            setTimeout(() => {
                showNotification('Data refreshed successfully!', 'success');
            }, 1500);
        });
    }
}

// Initialize admin pagination
function initAdminPagination() {
    // Users pagination
    const prevUsersBtn = document.getElementById('prev-users-page-btn');
    const nextUsersBtn = document.getElementById('next-users-page-btn');
    const usersPageInfo = document.querySelector('#user-management-section .page-info');
    
    if (prevUsersBtn && nextUsersBtn && usersPageInfo) {
        initPagination(prevUsersBtn, nextUsersBtn, usersPageInfo, 1, 5);
    }
    
    // Scans pagination
    const prevScansBtn = document.getElementById('prev-scans-page-btn');
    const nextScansBtn = document.getElementById('next-scans-page-btn');
    const scansPageInfo = document.querySelector('#scans-management-section .page-info');
    
    if (prevScansBtn && nextScansBtn && scansPageInfo) {
        initPagination(prevScansBtn, nextScansBtn, scansPageInfo, 1, 8);
    }
    
    // Reports pagination
    const prevReportsBtn = document.getElementById('prev-reports-page-btn');
    const nextReportsBtn = document.getElementById('next-reports-page-btn');
    const reportsPageInfo = document.querySelector('#reports-management-section .page-info');
    
    if (prevReportsBtn && nextReportsBtn && reportsPageInfo) {
        initPagination(prevReportsBtn, nextReportsBtn, reportsPageInfo, 1, 4);
    }
    
    // Logs pagination
    const prevLogsBtn = document.getElementById('prev-logs-page-btn');
    const nextLogsBtn = document.getElementById('next-logs-page-btn');
    const logsPageInfo = document.querySelector('#audit-logs-section .page-info');
    
    if (prevLogsBtn && nextLogsBtn && logsPageInfo) {
        initPagination(prevLogsBtn, nextLogsBtn, logsPageInfo, 1, 12);
    }
}

// Initialize pagination for a section
function initPagination(prevBtn, nextBtn, pageInfo, currentPage, totalPages) {
    // Update page info
    function updatePagination() {
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        
        // In a real application, this would load the appropriate page of data
        showNotification(`Loaded page ${currentPage}`, 'info');
    }
    
    // Previous page button
    prevBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
        }
    });
    
    // Next page button
    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
        }
    });
    
    // Initial update
    updatePagination();
}

// Initialize admin modals
function initAdminModals() {
    // User modal
    const userModal = document.getElementById('user-modal');
    const userModalBtns = document.querySelectorAll('.view-user-btn, .edit-user-btn');
    
    userModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const userId = this.getAttribute('data-userid');
            const isEdit = this.classList.contains('edit-user-btn');
            openUserModal(isEdit ? 'edit' : 'view', userId);
        });
    });
    
    // Report modal
    const reportModal = document.getElementById('report-modal');
    const reportModalBtns = document.querySelectorAll('.view-report-btn, .process-report-btn');
    
    reportModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const reportId = this.getAttribute('data-reportid');
            const isProcess = this.classList.contains('process-report-btn');
            openReportModal(isProcess ? 'process' : 'view', reportId);
        });
    });
    
    // Close modals
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            closeAllModals();
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                closeAllModals();
            }
        });
    });
}

// Initialize admin actions
function initAdminActions() {
    // Select all users checkbox
    const selectAllUsers = document.getElementById('select-all-users');
    if (selectAllUsers) {
        selectAllUsers.addEventListener('change', function() {
            const userCheckboxes = document.querySelectorAll('.user-checkbox');
            userCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
    
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.delete-user-btn, .delete-scan-btn, .delete-report-btn');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            let itemType = 'item';
            if (this.classList.contains('delete-user-btn')) itemType = 'user';
            if (this.classList.contains('delete-scan-btn')) itemType = 'scan';
            if (this.classList.contains('delete-report-btn')) itemType = 'report';
            
            const itemId = this.getAttribute('data-userid') || 
                           this.getAttribute('data-scanid') || 
                           this.getAttribute('data-reportid');
            
            if (confirm(`Are you sure you want to delete this ${itemType}?`)) {
                // In a real application, this would delete the item
                showNotification(`Deleting ${itemType}...`, 'info');
                
                // Simulate deletion process
                setTimeout(() => {
                    showNotification(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} deleted successfully!`, 'success');
                }, 1500);
            }
        });
    });
    
    // Rescan buttons
    const rescanButtons = document.querySelectorAll('.rescan-btn');
    rescanButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const scanId = this.getAttribute('data-scanid');
            
            // In a real application, this would rescan the profile
            showNotification(`Rescanning profile...`, 'info');
            
            // Simulate rescan process
            setTimeout(() => {
                showNotification(`Rescan completed successfully!`, 'success');
            }, 1500);
        });
    });
    
    // Settings form submissions
    const settingsForms = document.querySelectorAll('.settings-form');
    settingsForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, this would save the settings
            showNotification('Settings saved successfully!', 'success');
        });
    });
    
    // Notification preferences save
    const notificationSaveBtn = document.querySelector('#notification-settings .btn-primary');
    if (notificationSaveBtn) {
        notificationSaveBtn.addEventListener('click', function() {
            // In a real application, this would save notification preferences
            showNotification('Notification preferences saved!', 'success');
        });
    }
}

// Open user modal
function openUserModal(mode, userId = null) {
    const userModal = document.getElementById('user-modal');
    const modalTitle = userModal.querySelector('.modal-header h2');
    const modalBody = userModal.querySelector('.modal-body');
    const saveBtn = userModal.querySelector('.save-user-btn');
    
    // Set modal title and button text based on mode
    if (mode === 'new') {
        modalTitle.textContent = 'Add New User';
        saveBtn.textContent = 'Add User';
    } else if (mode === 'edit') {
        modalTitle.textContent = 'Edit User';
        saveBtn.textContent = 'Save Changes';
    } else {
        modalTitle.textContent = 'User Details';
        saveBtn.textContent = 'Save Changes';
        saveBtn.style.display = 'none';
    }
    
    // In a real application, this would load user data from an API
    // For demo purposes, we'll use mock data
    let userData = {
        id: userId || 'NEW',
        name: userId ? 'John Doe' : '',
        email: userId ? 'john.doe@example.com' : '',
        role: userId ? 'user' : 'user',
        status: userId ? 'active' : 'pending',
        joinDate: userId ? 'Oct 15, 2025' : new Date().toLocaleDateString(),
        scans: userId ? '24' : '0'
    };
    
    // Create form HTML
    modalBody.innerHTML = `
        <div class="form-group">
            <label for="user-modal-name">Full Name</label>
            <input type="text" id="user-modal-name" value="${userData.name}" ${mode === 'view' ? 'disabled' : ''}>
        </div>
        
        <div class="form-group">
            <label for="user-modal-email">Email Address</label>
            <input type="email" id="user-modal-email" value="${userData.email}" ${mode === 'view' ? 'disabled' : ''}>
        </div>
        
        <div class="form-group">
            <label for="user-modal-role">Role</label>
            <select id="user-modal-role" ${mode === 'view' ? 'disabled' : ''}>
                <option value="user" ${userData.role === 'user' ? 'selected' : ''}>User</option>
                <option value="moderator" ${userData.role === 'moderator' ? 'selected' : ''}>Moderator</option>
                <option value="admin" ${userData.role === 'admin' ? 'selected' : ''}>Admin</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="user-modal-status">Status</label>
            <select id="user-modal-status" ${mode === 'view' ? 'disabled' : ''}>
                <option value="pending" ${userData.status === 'pending' ? 'selected' : ''}>Pending</option>
                <option value="active" ${userData.status === 'active' ? 'selected' : ''}>Active</option>
                <option value="suspended" ${userData.status === 'suspended' ? 'selected' : ''}>Suspended</option>
                <option value="banned" ${userData.status === 'banned' ? 'selected' : ''}>Banned</option>
            </select>
        </div>
        
        ${mode !== 'new' ? `
        <div class="form-group">
            <label>Join Date</label>
            <p>${userData.joinDate}</p>
        </div>
        
        <div class="form-group">
            <label>Total Scans</label>
            <p>${userData.scans}</p>
        </div>
        ` : ''}
        
        ${mode === 'new' ? `
        <div class="form-group">
            <label for="user-modal-password">Password</label>
            <input type="password" id="user-modal-password">
        </div>
        
        <div class="form-group">
            <label for="user-modal-confirm-password">Confirm Password</label>
            <input type="password" id="user-modal-confirm-password">
        </div>
        ` : ''}
    `;
    
    // Show modal
    userModal.style.display = 'block';
    
    // Add event listener to save button
    if (mode !== 'view') {
        saveBtn.style.display = 'block';
        saveBtn.onclick = function() {
            // In a real application, this would save the user data
            showNotification(`User ${mode === 'new' ? 'added' : 'updated'} successfully!`, 'success');
            userModal.style.display = 'none';
        };
    }
}

// Open report modal
function openReportModal(mode, reportId) {
    const reportModal = document.getElementById('report-modal');
    const modalTitle = reportModal.querySelector('.modal-header h2');
    const modalBody = reportModal.querySelector('.modal-body');
    const processBtn = reportModal.querySelector('.process-report-btn');
    
    // Set modal title and button text based on mode
    if (mode === 'process') {
        modalTitle.textContent = 'Process Report';
        processBtn.textContent = 'Process Report';
    } else {
        modalTitle.textContent = 'Report Details';
        processBtn.textContent = 'Process Report';
    }
    
    // In a real application, this would load report data from an API
    // For demo purposes, we'll use mock data
    let reportData = {
        id: reportId,
        type: 'Fake Profile',
        profile: 'instagram.com/fake_profile_123',
        platform: 'Instagram',
        submittedBy: '#USR-1005 (Jane Smith)',
        date: 'Oct 18, 2025',
        status: 'pending',
        description: 'This profile is using stolen photos and has been contacting multiple users with suspicious requests.',
        evidence: [
            'Profile photo matches stock image database',
            'Account created very recently',
            'Suspicious messaging patterns'
        ]
    };
    
    // Create report details HTML
    modalBody.innerHTML = `
        <div class="report-details">
            <div class="detail-row">
                <label>Report ID:</label>
                <span>#RPT-${reportData.id}</span>
            </div>
            
            <div class="detail-row">
                <label>Type:</label>
                <span>${reportData.type}</span>
            </div>
            
            <div class="detail-row">
                <label>Profile Reported:</label>
                <span>${reportData.profile}</span>
            </div>
            
            <div class="detail-row">
                <label>Platform:</label>
                <span>${reportData.platform}</span>
            </div>
            
            <div class="detail-row">
                <label>Submitted By:</label>
                <span>${reportData.submittedBy}</span>
            </div>
            
            <div class="detail-row">
                <label>Date Submitted:</label>
                <span>${reportData.date}</span>
            </div>
            
            <div class="detail-row">
                <label>Status:</label>
                <span class="status-badge status-${reportData.status}">${reportData.status.charAt(0).toUpperCase() + reportData.status.slice(1)}</span>
            </div>
            
            <div class="detail-row full-width">
                <label>Description:</label>
                <p>${reportData.description}</p>
            </div>
            
            <div class="detail-row full-width">
                <label>Evidence:</label>
                <ul>
                    ${reportData.evidence.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            ${mode === 'process' ? `
            <div class="form-group">
                <label for="report-action">Action:</label>
                <select id="report-action">
                    <option value="approve">Approve Report</option>
                    <option value="reject">Reject Report</option>
                    <option value="needmore">Need More Information</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="report-notes">Notes:</label>
                <textarea id="report-notes" rows="3" placeholder="Add any additional notes here..."></textarea>
            </div>
            ` : ''}
        </div>
    `;
    
    // Show modal
    reportModal.style.display = 'block';
    
    // Add event listener to process button
    processBtn.onclick = function() {
        // In a real application, this would process the report
        showNotification('Report processed successfully!', 'success');
        reportModal.style.display = 'none';
    };
}

// Close all modals
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
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