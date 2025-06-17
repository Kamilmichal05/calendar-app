import { useState } from 'react'
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')

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
        {activeTab === 'calendar' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">My Calendar</h2>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridWeek"
              events={[]}
              height={400} // Increased height for longer day columns
            />
          </div>
        )}
      </div>
    </div>
  )
}
