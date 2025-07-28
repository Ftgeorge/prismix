"use client";

import { useState } from 'react';
import AnimatedOverlayTexts from './AnimatedOverlayTexts';
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (userType === 'official') {
      alert('Login for government officials is not available yet.');
      return;
    }
    // Citizen login: go to portal
    router.push('/portal');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] w-full">
      <div className='w-full md:w-1/2 h-full'>
        <div className="bg-white p-6 lg:p-3 xl:p-8 rounded-2xl shadow-xl w-full max-w-xs lg:max-w-[250px] xl:max-w-sm 2xl:max-w-md mx-auto">
          
          <div className="flex justify-center mb-3">
            <div className="relative h-6 md:h-5 lg:h-6 xl:h-8 2xl:h-10 flex items-center justify-center">
              <img src="https://yzub7xjzmf.ufs.sh/f/p5WCAJ95HVcjpWCwrj295HVcjyE3Xs0mkUNIQflGw8evWqRA" alt='prism logo' className='w-full h-full' width={100} height={100} />
            </div>
          </div>

          <h1 className="text-lg lg:text-base xl:text-xl 2xl:text-2xl font-bold text-black text-center mb-0 lg:mb-0 xl:mb-0 2xl:mb-1">Sign in to Prism</h1>
          <h2 className="text-[11px] lg:text-[9px] xl:text-[13px] 2xl:text-base font-normal text-[#4B5563] mb-4 lg:mb-3 xl:mb-6 2xl:mb-6 text-center">
            Monitoring and Evaluation for Abia State
          </h2>

          <div className="space-y-1">
            {/* <div className="relative">
              <label className="block text-xs 2xl:text-sm font-medium text-gray-700 mb-1">Account Type</label>
              <button
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full text-sm 2xl:text-base px-2 2xl:px-4 py-2 2xl:py-3 border border-gray-300 rounded-md 2xl:rounded-lg bg-white text-left focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <selectedUserType.icon className="size-4 2xl:size-5 text-gray-400" />
                  <span className="text-gray-900">{selectedUserType.label}</span>
                </div>
                <ChevronDown className={`size-3 2xl:size-4 text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
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
                        className={`w-full text-sm 2xl:text-base px-2 2xl:px-4 py-2 2xl:py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors ${userType === type.value ? 'bg-[#008753]/5 text-[#008753]' : 'text-gray-900'
                          }`}
                      >
                        <IconComponent className={`size-4 2xl:size-5 ${userType === type.value ? 'text-[#008753]' : 'text-gray-400'}`} />
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
            </div> */}
            <div className='flex flex-col gap-3'>
              <div>
                <label htmlFor="email" className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 xl:px-4 py-2 2xl:py-3 text-[10px] lg:text-[10px] xl:text-sm 2xl:text-base border border-gray-300 rounded-sm xl:rounded-md 2xl:rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 xl:px-4 py-2 2xl:py-3 text-[10px] lg:text-[10px] xl:text-sm 2xl:text-base border border-gray-300 rounded-sm xl:rounded-md 2xl:rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className='flex flex-col gap-1 lg:gap-0 xl:gap-1 2xl:gap-1'>
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs lg:text-[10px] xl:text-sm 2xl:text-sm text-[#008753] font-medium hover:underline"
                  onClick={() => router.push('/auth/forgot')}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#008753] lg:text-xs xl:text-base text-white h-8 lg:h-8 xl:h-9 2xl:h-10 px-3 lg:px-2 xl:px-4 2xl:px-4 rounded-md lg:rounded-sm xl:rounded-lg 2xl:rounded-lg transition-colors duration-200"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between gap-3 my-4">
              <div className="h-0.5 w-full bg-gray-200" />
              <span className="text-gray-400 text-[9px] lg:text-[7px] xl:text-xs 2xl:text-xs">OR</span>
              <div className="h-0.5 w-full bg-gray-200" />
            </div>

            <div className="flex gap-3">
            <button
  type="button"
  className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md 2xl:rounded-lg h-8 xl:h-9 2xl:h-10 bg-white hover:bg-gray-50 transition-colors"
  onClick={() => alert('Microsoft login would be implemented here')}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="20" height="20">
    <rect width="10" height="10" fill="#F35325" />
    <rect x="12" width="10" height="10" fill="#81BC06" />
    <rect y="12" width="10" height="10" fill="#05A6F0" />
    <rect x="12" y="12" width="10" height="10" fill="#FFBA08" />
  </svg>
  <span className="text-xs xl:text-sm 2xl:text-base text-gray-700 font-medium">Continue with Microsoft</span>
</button>

            </div>
          </div>

          <p className="mt-3 lg:mt-2 xl:mt-4 2xl:mt-4 text-center text-[10px] lg:text-[9px] xl:text-sm 2xl:text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-[#008753] hover:underline font-medium"
            >
              Request Access
            </button>
          </p>
        </div>
      </div>

      <div className='hidden md:block relative w-1/2 h-screen bg-red-200'>
        <Image src="/auth.png" alt='signin illustration' className='w-full h-full object-cover' width={500} height={500} />
        <div className='absolute inset-0 bg-[#008753e6] h-full w-full flex flex-col items-center justify-center'>
          <AnimatedOverlayTexts />
        </div>
      </div>
    </div>
  );
}