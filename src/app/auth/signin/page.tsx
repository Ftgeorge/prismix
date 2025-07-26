"use client";

import { useState } from 'react';
import { User, Shield, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('citizen');
  const [showDropdown, setShowDropdown] = useState(false);

  const userTypes = [
    { 
      value: 'citizen', 
      label: 'Citizen', 
      icon: User, 
      description: 'Access public services and submit requests' 
    },
    { 
      value: 'official', 
      label: 'Government Official', 
      icon: Shield, 
      description: 'Administrative access and case management' 
    }
  ];

  const selectedUserType = userTypes.find(type => type.value === userType) || userTypes[0];

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (userType === 'official') {
      alert('Login for government officials is not available yet.');
      return;
    }
    // Citizen login: go to portal
    router.push('/portal');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100}/>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#008753] mb-1 text-center">Welcome to Prismix</h1>
        <h2 className="text-base font-normal text-[#4B5563] mb-6 text-center">
          Empowering Transparency and Citizen Engagement
        </h2>

        <div className="space-y-4">
          {/* Dropdown User Type Selector */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <selectedUserType.icon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-900">{selectedUserType.label}</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                {userTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => {
                        setUserType(type.value);
                        setShowDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors ${
                        userType === type.value ? 'bg-[#008753]/5 text-[#008753]' : 'text-gray-900'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${userType === type.value ? 'text-[#008753]' : 'text-gray-400'}`} />
                      <div>
                        <div className={`font-medium ${userType === type.value ? 'text-[#008753]' : 'text-gray-900'}`}>
                          {type.label}
                        </div>
                        <div className="text-sm text-gray-500">{type.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
              required
            />
          </div>

          <div className="text-right">
            <button 
              type="button"
              className="text-sm text-[#008753] font-medium hover:underline"
              onClick={() => router.push('/auth/forgot')}
            >
              Forgot Password?
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-[#008753] text-white h-10 px-4 rounded-lg hover:bg-[#17213D] transition-colors duration-200"
          >
            Login
          </button>

          <div className="flex items-center justify-between gap-3">
            <div className="h-0.5 w-full bg-gray-200" />
            <span className="text-gray-400 text-xs">OR</span>
            <div className="h-0.5 w-full bg-gray-200" />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg h-10 bg-white hover:bg-gray-50 transition-colors"
              onClick={() => alert('Google login would be implemented here')}
            >
              <Image src="/google.png" alt='google logo' className='size-5' width={40} height={40}/>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 rounded-lg h-10 bg-white hover:bg-gray-50 transition-colors"
              onClick={() => alert('Facebook login would be implemented here')}
            >
                            <Image src="/facebook.png" alt='facebook logo' className='size-8' width={40} height={40}/>

            </button>
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <button 
            type="button"
            className="text-[#008753] hover:underline font-medium"
            onClick={() => router.push('/auth/signup')}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}