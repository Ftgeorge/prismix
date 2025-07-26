"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function OTPPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (value: string, idx: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    if (value && idx < 5) {
      document.getElementById(`otp-${idx + 1}`)?.focus();
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (otp.some((digit) => digit === '')) {
      setError('Please enter the complete OTP.');
      return;
    }
    // Simulate OTP verification
    alert('OTP Verified!');
    router.push('/auth/signin');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100}/>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#008753] mb-1 text-center">Verify your account</h1>
        <h2 className="text-base font-normal text-[#4B5563] mb-6 text-center">
          Enter the 6-digit code sent to your email
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(e.target.value, idx)}
                className="w-12 h-12 text-center text-2xl border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                autoFocus={idx === 0}
              />
            ))}
          </div>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#008753] text-white h-10 px-4 rounded-lg hover:bg-[#17213D] transition-colors duration-200"
          >
            Verify
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Didn't receive a code?{' '}
          <button
            type="button"
            className="text-[#008753] hover:underline font-medium"
            onClick={() => alert('Resend OTP logic would go here')}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}
