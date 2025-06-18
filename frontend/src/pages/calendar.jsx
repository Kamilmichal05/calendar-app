
const events = [
  { title: 'Meeting with Anna', day: 'Mon', time: '8' },
  { title: 'Available', day: 'Mon', time: '9', type: 'available' },
  { title: 'Lunch', day: 'Mon', time: '12' },
  { title: 'Check-in', day: 'Mon', time: '13', type: 'alt' },
  { title: 'Work Block', day: 'Mon', time: '15' },
  { title: 'Available', day: 'Mon', time: '17', type: 'available' },

  { title: 'Available', day: 'Tue', time: '9', type: 'available' },
  { title: 'Standup', day: 'Tue', time: '10' },
  { title: 'Work Block', day: 'Tue', time: '12' },

  { title: 'Available', day: 'Wed', time: '9', type: 'available' },
  { title: 'Design Review', day: 'Wed', time: '13', type: 'alt' },
  { title: '1:1 Sync', day: 'Wed', time: '14' },

  { title: 'Sprint Planning', day: 'Thu', time: '8' },
  { title: 'Available', day: 'Thu', time: '10', type: 'available' },
  { title: 'Retro', day: 'Thu', time: '13', type: 'alt' },
  { title: 'Wrap-up', day: 'Thu', time: '15' },

  { title: 'Available', day: 'Fri', time: '9', type: 'available' },
  { title: 'Check-ins', day: 'Fri', time: '11' },
  { title: 'Block', day: 'Fri', time: '13' },
  { title: 'Available', day: 'Fri', time: '17', type: 'available' },
]

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const dates = ['17', '18', '19', '20', '21'] // Example: add real date logic if needed
const hours = [1,2,3,4,5,6,7,8, 9, 10, 11, 12, 1,2,3,4,5,6,7,8, 9, 10, 11, 12]

export default function Calendar() {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">My Calendar</div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded text-sm">Today</button>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 border rounded text-sm">Week</button>
            <button className="text-lg">→</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[80px_repeat(5,1fr)] text-sm">
        <div className="bg-white h-12"></div>
        {days.map((day, index) => (
          <div
            key={day}
            className={`text-center h-12 font-semibold text-gray-600 border-b border-gray-200 border-l border-gray-200`}
          >
            <div>{day}</div>
            <div className="text-xs text-gray-400">{dates[index]}</div>
          </div>
        ))}

        {hours.map((hour) => (
          <>
            <div
              key={`label-${hour}`}
              className="text-right pr-2 py-2 text-gray-400"
            >
              {hour} AM
            </div>
            {days.map((day, index) => {
              const block = events.find((e) => e.day === day && +e.time === hour)
              return (
                <div
                  key={`${day}-${hour}`}
                  className={`h-16 px-1 py-1 relative border-b border-gray-200 border-l border-gray-200`}
                >
                  {block && (
                    <div
                      className={`absolute top-1 left-1 right-1 px-2 py-1 text-xs rounded text-white whitespace-nowrap overflow-hidden text-ellipsis
                        ${block.type === 'available' ? 'bg-gray-300 text-gray-700' : block.type === 'alt' ? 'bg-purple-400' : 'bg-blue-500'}`}
                    >
                      {block.title}
                    </div>
                  )}
                </div>
              )
            })}
          </>
        ))}
      </div>
    </div>
  )
}
