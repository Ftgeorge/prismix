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
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] w-full">
      <div className="bg-white p-6 lg:p-3 xl:p-8 rounded-2xl shadow-xl w-full max-w-xs lg:max-w-[250px] xl:max-w-sm 2xl:max-w-md mx-auto">
        <div className="flex justify-center mb-3">
          <div className="relative h-6 md:h-5 lg:h-6 xl:h-8 2xl:h-10 flex items-center justify-center">
            <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100}/>
          </div>
        </div>
        <h1 className="text-lg lg:text-base xl:text-xl 2xl:text-2xl font-bold text-[#008753] text-center mb-0 lg:mb-0 xl:mb-0 2xl:mb-1">Verify your account</h1>
        <h2 className="text-[11px] lg:text-[9px] xl:text-[13px] 2xl:text-base font-normal text-[#4B5563] mb-4 lg:mb-3 xl:mb-6 2xl:mb-6 text-center">
          Enter the 6-digit code sent to your email
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex justify-center gap-1 lg:gap-1 xl:gap-2 2xl:gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(e.target.value, idx)}
                className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-center text-xs lg:text-xs xl:text-sm 2xl:text-sm border border-gray-300 rounded-sm xl:rounded-sm focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                autoFocus={idx === 0}
              />
            ))}
          </div>
          {error && <div className="text-red-500 text-xs lg:text-xs xl:text-sm 2xl:text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="w-full bg-[#008753] text-white h-7 lg:h-6 xl:h-7 2xl:h-8 px-2 lg:px-1 xl:px-2 2xl:px-2 rounded-sm lg:rounded-sm xl:rounded-sm 2xl:rounded-sm transition-colors duration-200"
          >
            Verify
          </button>
        </form>
        <p className="mt-3 lg:mt-2 xl:mt-4 2xl:mt-4 text-center text-[10px] lg:text-[9px] xl:text-sm 2xl:text-sm text-gray-600">
          Didn't receive a code?{' '}
          <button
            type="button"
            className="text-[#008753] hover:underline font-medium text-xs lg:text-xs xl:text-sm 2xl:text-sm"
            onClick={() => alert('Resend OTP logic would go here')}
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}
