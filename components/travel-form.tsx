import { useState } from 'react';

export function TravelForm({ onSubmit }) {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [season, setSeason] = useState('');
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ destination, duration, season, apiKey });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">Destination</label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter your destination"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Trip Duration (days)</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Enter trip duration"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div>
        <label htmlFor="season" className="block text-sm font-medium text-gray-700">Season</label>
        <select
          id="season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">Select a season</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>
      </div>
      <div>
        <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">API Key</label>
        <input
          type="text"
          id="api-key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Dify API key"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Generate Packing List
      </button>
    </form>
  );
}

