import React from 'react';
import Sidebar from './shared/sidebar';

const AdminDashboard = () => {
    const links = [
        { path: '/admin/users', label: 'Manage Users' },
        { path: '/admin/orders', label: 'Manage Orders' },
        { path: '/admin/products', label: 'Manage Products' },
        { path: '/admin/reports', label: 'Sales Reports' },
        { path: '/logout', label: 'Logout' },
    ];

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar links={links} />
            <div style={{ marginLeft: '220px', padding: '20px', width: '100%' }}>
                <h2>Admin Dashboard</h2>
                <p>Manage users, orders, products, and view reports.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;
