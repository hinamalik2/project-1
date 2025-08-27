import React, { useState } from 'react';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            // Simulate API call for password reset
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setMessage('Password reset link sent to your email!');
        } catch (error) {
            setMessage('Error sending password reset link. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
            <form onSubmit={handleResetPassword} className="w-full max-w-sm">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-300 p-2 mb-4 w-full"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={`bg-blue-500 text-white p-2 w-full ${loading ? 'opacity-50' : ''}`}
                >
                    {loading ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
};

export default ResetPassword;