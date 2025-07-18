import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen text-sm">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-700 mb-1">Settings</h1>
      <p className="text-gray-500 mb-6">Manage your account and notification preferences</p>

      <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Panel - Notification Preferences */}
        <div className="col-span-1 border-r lg:border-r-gray-200 pr-0 lg:pr-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Notification Preferences</h2>

          <div className="space-y-4">
            <div>
              <label className="inline-flex items-center space-x-2">
                <input type="checkbox" checked readOnly className="form-checkbox accent-green-600" />
                <span>Issue Updates</span>
              </label>
            </div>
            <div className="flex flex-col space-y-3 ml-4">
              <label className="flex items-center justify-between">
                <span>Email Notifications</span>
                <input type="checkbox" readOnly className="toggle toggle-success" />
              </label>
              <label className="flex items-center justify-between">
                <span>SMS Notifications</span>
                <input type="checkbox" readOnly className="toggle toggle-success" />
              </label>
            </div>

            <div>
              <p className="font-medium text-gray-600 mb-1">Notification Frequency</p>
              <div className="space-y-2 ml-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="frequency" />
                  <span>Real-time</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="frequency" />
                  <span>Daily digest</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="frequency" />
                  <span>Weekly digest</span>
                </label>
              </div>
            </div>

            <button className="mt-4 bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md">
              Save Preferences
            </button>
          </div>
        </div>

        {/* Right Panel - Account Info & Privacy Settings */}
        <div className="col-span-2 space-y-8">
          {/* Account Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Account Information</h2>

            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  JS
                </div>
                <div>
                  <p className="font-semibold">John Samuel</p>
                  <p className="text-sm text-gray-500">Community Member</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <input value="john.sam@example.com" readOnly className="w-full bg-white border rounded-md p-2 mt-1" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <input value="234900000000000" readOnly className="w-full bg-white border rounded-md p-2 mt-1" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">State</p>
                  <input value="Ogun State" readOnly className="w-full bg-white border rounded-md p-2 mt-1" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Local Government</p>
                  <input value="Abeokuta South" readOnly className="w-full bg-white border rounded-md p-2 mt-1" />
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 text-sm">Neighbourhood</p>
                  <input value="Iyana Tekobo" readOnly className="w-full bg-white border rounded-md p-2 mt-1" />
                </div>
              </div>

              <button className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md mt-2">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Privacy Settings</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Share my reported issues publicly</p>
                  <p className="text-sm text-gray-500">Your name will be to others</p>
                </div>
                <input type="checkbox" checked readOnly className="toggle toggle-success" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Allow location tracking for nearby issues</p>
                  <p className="text-sm text-gray-500">Get notified about issues in your area</p>
                </div>
                <input type="checkbox" checked readOnly className="toggle toggle-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
