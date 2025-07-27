"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
  const [identifier, setIdentifier] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!identifier) {
      setError('Please enter your email or phone number.');
      return;
    }
    // Simulate sending OTP
    alert('OTP sent to your email/phone.');
    router.push('/auth/otp');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] w-full">
      <div className="bg-white p-6 lg:p-3 xl:p-8 rounded-2xl shadow-xl w-full max-w-xs lg:max-w-[250px] xl:max-w-sm 2xl:max-w-md mx-auto">
        <div className="flex justify-center mb-3">
          <div className="relative h-6 md:h-5 lg:h-6 xl:h-8 2xl:h-10 flex items-center justify-center">
            <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100}/>
          </div>
        </div>
        <h1 className="text-lg lg:text-base xl:text-xl 2xl:text-2xl font-bold text-[#008753] text-center mb-0 lg:mb-0 xl:mb-0 2xl:mb-1">Forgot Password?</h1>
        <h2 className="text-[11px] lg:text-[9px] xl:text-[13px] 2xl:text-base font-normal text-[#4B5563] mb-4 lg:mb-3 xl:mb-6 2xl:mb-6 text-center">
          Enter your email or phone number to receive a verification code
        </h2>
        <form onSubmit={handleSubmit} className="space-y-1">
          <div>
            <label htmlFor="identifier" className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-2 lg:px-2 xl:px-3 2xl:px-3 py-1 lg:py-1 xl:py-2 2xl:py-2 text-xs lg:text-xs xl:text-sm 2xl:text-sm border border-gray-300 rounded-sm lg:rounded-sm xl:rounded-md 2xl:rounded-md focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
              required
            />
          </div>
          {error && <div className="text-red-500 text-xs lg:text-xs xl:text-sm 2xl:text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#008753] text-white h-7 lg:h-6 xl:h-7 2xl:h-8 px-2 lg:px-1 xl:px-2 2xl:px-3 rounded-sm lg:rounded-sm xl:rounded-md 2xl:rounded-md transition-colors duration-200"
          >
            Send OTP
          </button>
        </form>
        <p className="mt-3 lg:mt-2 xl:mt-4 2xl:mt-4 text-center text-[10px] lg:text-[9px] xl:text-sm 2xl:text-sm text-gray-600">
          Remembered your password?{' '}
          <button
            type="button"
            className="text-[#008753] hover:underline font-medium text-xs lg:text-xs xl:text-sm 2xl:text-sm"
            onClick={() => router.push('/auth/signin')}
          >
            Back to Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
