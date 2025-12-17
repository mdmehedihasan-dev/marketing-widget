import React from 'react';
import { Link } from 'react-router-dom';
export const Login = () => (
  <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-black text-gray-900 dark:text-white">Client Login</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Or <Link to="/register" className="font-medium text-primary hover:text-primary-dark">create a new account</Link>
        </p>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(e) => {e.preventDefault(); window.location.href='/#/dashboard'}}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input type="email" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-background-dark rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <input type="password" required className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-background-dark rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-primary hover:text-primary-dark">Forgot password?</a>
          </div>
        </div>
        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Sign in
        </button>
      </form>
    </div>
  </div>
);

export const Register = () => (
  <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800">
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-black text-gray-900 dark:text-white">Create Account</h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Unlock powerful AI marketing tools.
        </p>
      </div>
      <form className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" required className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-background-dark rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="First Name" />
            <input type="text" required className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-background-dark rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Last Name" />
          </div>
          <input type="email" required className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-background-dark rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Email address" />
          <input type="password" required className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-background-dark rounded-lg focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" placeholder="Password" />
        </div>

        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Create Account
        </button>
        <p className="text-center text-sm text-gray-500">
          Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  </div>
);
