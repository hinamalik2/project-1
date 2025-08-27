import React from 'react';
import DashboardOverview from '../../components/Dashboard/DashboardOverview';

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <DashboardOverview />
        </div>
    );
};

export default DashboardPage;