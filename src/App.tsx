import React, { useState } from 'react';
import { Shield, Clock, Brain, Activity, AlertTriangle, Info, Settings, User } from 'lucide-react';

function App() {
  const [playTime, setPlayTime] = useState(0);
  const [skillScore, setSkillScore] = useState(75);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">GameGuardian</h1>
            </div>
            <nav className="flex space-x-2 sm:space-x-4">
              <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                <Settings className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
        {/* Player Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Daily Play Time</p>
                <p className="text-xl sm:text-2xl font-semibold">{playTime} mins</p>
              </div>
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
            </div>
            {playTime > 120 && (
              <div className="mt-3 flex items-center text-amber-600 bg-amber-50 p-2 rounded-md">
                <AlertTriangle className="h-4 w-4 mr-1 flex-shrink-0" />
                <span className="text-sm">Consider taking a break</span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Skill Assessment</p>
                <p className="text-xl sm:text-2xl font-semibold">{skillScore}%</p>
              </div>
              <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" />
            </div>
            <div className="mt-3 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 rounded-full h-2 transition-all duration-500" 
                style={{ width: `${skillScore}%` }}
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Game Type</p>
                <p className="text-xl sm:text-2xl font-semibold">Skill-Based</p>
              </div>
              <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Based on pattern recognition and strategic decisions
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Transparency Score</p>
                <p className="text-xl sm:text-2xl font-semibold">95%</p>
              </div>
              <Info className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            </div>
            <p className="mt-3 text-sm text-gray-600">
              Game mechanics and odds fully disclosed
            </p>
          </div>
        </div>

        {/* Responsible Gaming Features */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Responsible Gaming Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-3 sm:p-4 hover:border-indigo-200 transition-colors">
              <h3 className="font-medium mb-2">Set Daily Limits</h3>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <input 
                  type="range" 
                  min="0" 
                  max="240" 
                  value={playTime}
                  onChange={(e) => setPlayTime(parseInt(e.target.value))}
                  className="w-full"
                />
                <span className="text-sm text-gray-600 whitespace-nowrap">{playTime} mins</span>
              </div>
            </div>
            <div className="border rounded-lg p-3 sm:p-4 hover:border-indigo-200 transition-colors">
              <h3 className="font-medium mb-2">Skill Assessment</h3>
              <p className="text-sm text-gray-600">
                Your gameplay patterns indicate this is a skill-based activity.
                Continue developing strategic thinking and decision-making skills.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-8 sm:mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            GameGuardian promotes responsible gaming practices and transparency in the Indian gaming ecosystem.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;