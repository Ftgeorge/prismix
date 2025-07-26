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
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100}/>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#008753] mb-1 text-center">Forgot Password?</h1>
        <h2 className="text-base font-normal text-[#4B5563] mb-6 text-center">
          Enter your email or phone number to receive a verification code
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-1">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#008753] text-white h-10 px-4 rounded-lg hover:bg-[#17213D] transition-colors duration-200"
          >
            Send OTP
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remembered your password?{' '}
          <button
            type="button"
            className="text-[#008753] hover:underline font-medium"
            onClick={() => router.push('/auth/signin')}
          >
            Back to Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
