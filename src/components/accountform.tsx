'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLock, FaUser } from 'react-icons/fa';
import Button from './button';

const AccountForm = () => {
  return (
    <div className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Account Form */}
        <div className="bg-white p-8 rounded-lg shadow-none">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form className="space-y-6">
            {/* Username or Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Username or Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Username or Email"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Password"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-blue-500 focus:ring-0" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>

            {/* login Button and Lost your password link */}
            <div className="flex items-center justify-between">
              <Button label="Login" outline={true}  />
              <Link href="/reset-password" className="text-md p-1 mt-6 text-blue-600 hover:text-blue-800">Lost your password?</Link>
            </div>
          </form>
        </div>

        {/* Right Side - Register Form */}
        <div className="bg-white p-8 rounded-lg shadow-none">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <form className="space-y-6">
            {/* Email Address */}
            <div>
              <label htmlFor="registerEmail" className="block text-sm font-semibold text-gray-700">Email Address</label>
              <input
                type="email"
                id="registerEmail"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Notice about password reset */}
            <div className="text-sm text-gray-600">
              <p>A link to set a new password will be sent to your email address.</p>
            </div>

            {/* Personal Data Usage */}
            <div className="text-sm mb-10 text-gray-600">
              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
            </div>

            {/* Register Button */}
            <div className='p-1'>
              <Button label="Register" outline={true}  />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
