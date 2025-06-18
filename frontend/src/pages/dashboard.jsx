import { useState } from 'react'
import { Link } from 'react-router-dom'
import Calendar from './calendar'


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const events = [
    {
      title: 'Meeting with Anna',
      date: '2025-06-19',
      time: '10:00 - 11:00'
    },
    {
      title: 'Lunch Break',
      date: '2025-06-19',
      time: '13:00 - 14:00'
    },
    {
      title: 'Team Sync',
      date: '2025-06-20',
      time: '09:00 - 10:30'
    },
    {
      title: 'Project Review',
      date: '2025-06-21',
      time: '15:00 - 16:00'
    },
    {
      title: '1-on-1 with Bob',
      date: '2025-06-22',
      time: '11:00 - 11:30'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <Link to="/" className="text-indigo-600 hover:underline">
          Home
        </Link>
      </header>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === 'overview'
              ? 'bg-indigo-600 text-white'
              : 'bg-white border text-gray-800'
          }`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === 'settings'
              ? 'bg-indigo-600 text-white'
              : 'bg-white border text-gray-800'
          }`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === 'calendar'
              ? 'bg-indigo-600 text-white'
              : 'bg-white border text-gray-800'
          }`}
          onClick={() => setActiveTab('calendar')}
        >
          My Calendar
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Welcome to your dashboard</h2>
            <p className="text-gray-700">Here you can see an overview of your activity.</p>
          </div>
        )}
        {activeTab === 'settings' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <p className="text-gray-700">Manage your preferences and settings here.</p>
          </div>
        )}
        {activeTab === 'calendar' && <Calendar />}

      </div>
    </div>
  )
}
