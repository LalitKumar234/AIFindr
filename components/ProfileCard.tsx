import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  full_name: string;
  email: string;
  interests: string[];
  goals: string[];
  vibe: string;
  imageUrl?: string;
}

const ProfileCard = ({
  full_name = "Sarah Johnson",
  email = "sarah.j@example.com",
  interests = ["Photography", "Hiking", "Jazz Music", "Film"],
  goals = ["Collaborate on art projects", "Find creative partners"],
  vibe = "Creative & enthusiastic, with a touch of vintage aesthetic",
  imageUrl = "https://randomuser.me/api/portraits/women/44.jpg"
}: Partial<ProfileCardProps>) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 p-4">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Left side - Avatar */}
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-indigo-100">
            <Image 
              src={imageUrl} 
              alt={full_name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="flex-grow">
          {/* User basic info */}
          <div className="mb-2">
            <h2 className="text-lg font-bold text-gray-800">{full_name}</h2>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
          
          {/* Vibe badge */}
          <div className="mb-3">
            <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs py-1 px-2 rounded-lg">
              {vibe}
            </span>
          </div>
          
          {/* Two column layout for interests and goals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Interests */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1">Interests</h3>
              <div className="flex flex-wrap gap-1">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Goals */}
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-1">Goals</h3>
              <div className="flex flex-wrap gap-1">
                {goals.map((goal, index) => (
                  <span 
                    key={index}
                    className="px-2 py-0.5 bg-purple-100 text-purple-800 text-xs rounded-full font-medium"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Connect button */}
          <button className="mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-1.5 px-4 rounded-lg font-medium text-xs hover:opacity-90 transition-opacity">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
