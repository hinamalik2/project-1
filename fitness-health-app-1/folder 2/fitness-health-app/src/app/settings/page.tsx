import React from 'react';

const SettingsPage = () => {
    return (
        <div className="settings-container">
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="mt-4">Manage your profile and preferences here.</p>
            {/* Add form elements for user settings management */}
            <form className="mt-6">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium">Username</label>
                    <input type="text" id="username" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium">Password</label>
                    <input type="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
            </form>
        </div>
    );
};

export default SettingsPage;