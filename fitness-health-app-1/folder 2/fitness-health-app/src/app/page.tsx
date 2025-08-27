import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Fitness & Health App</h1>
            <p className="text-lg text-center mb-8">
                Track your workouts, manage your nutrition, and monitor your progress all in one place.
            </p>
            <a href="/dashboard" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                Get Started
            </a>
        </div>
    );
};

export default HomePage;