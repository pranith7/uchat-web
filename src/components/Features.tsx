import React from 'react';
import { MessageSquare, DollarSign, PlayCircle, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <PlayCircle className="w-12 h-12 text-purple-600" />,
      title: "Create Events",
      description: "Start engaging events directly from your stream with just a few clicks."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-600" />,
      title: "Real-time Chat",
      description: "Connect with your audience through seamless real-time chat integration."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-600" />,
      title: "Secure Payments",
      description: "Accept donations and payments safely during your streams."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: "Cross-Platform",
      description: "Works seamlessly with YouTube, Twitch, and other streaming platforms."
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Enhance Your Stream</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}