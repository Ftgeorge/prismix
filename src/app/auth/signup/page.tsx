"use client";

import { useState } from 'react';
import AnimatedOverlayTexts from './AnimatedOverlayTexts';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChevronDown, User, Shield } from 'lucide-react';

const userTypes = [
  { value: 'citizen', label: 'Citizen', icon: User, description: 'Access citizen features and participate in governance.' },
  { value: 'official', label: 'Government Official', icon: Shield, description: 'For authorized government officials only.' }
];

const citizenFields = [
  { label: "Full Name", name: "fullName", type: "text" },
  { label: "Date of Birth", name: "dob", type: "date" },
  { label: "Address", name: "address", type: "text" },
  { label: "Phone Number", name: "phone", type: "tel" },
  { label: "UIT", name: "uit", type: "text" }
];

const officialFields = [
  { label: "Full Name", name: "fullName", type: "text" },
  { label: "Department", name: "department", type: "text" },
  { label: "Govt. ID/Badge Number", name: "badgeId", type: "text" },
  { label: "Work Email", name: "workEmail", type: "email" },
  { label: "UIT", name: "uit", type: "text" }
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('citizen');
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    address: "",
    phone: "",
    uit: "",
    department: "",
    badgeId: "",
    workEmail: ""
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const selectedUserType = userTypes.find(type => type.value === userType) || userTypes[0];

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");
    // Final validation
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const fieldsToCheck = userType === 'citizen' ? citizenFields : officialFields;
    for (const field of fieldsToCheck) {
      if (!formData[field.name as keyof typeof formData]) {
        setError(`${field.label} is required.`);
        return;
      }
    }
    if (userType === 'official') {
      alert('Signup for government officials is not available yet.');
      return;
    }
    // Simulate success and redirect
    alert(`Signup as ${selectedUserType.label} with email: ${email}`);
    router.push('/auth/otp');
  };

  // Step validation and navigation
  const handleNext = () => {
    setError("");
    if (step === 1) {
      // No validation for account type
      setStep(step + 1);
    } else if (step === 2) {
      const fieldsToCheck = userType === 'citizen' ? citizenFields : officialFields;
      for (const field of fieldsToCheck) {
        if (!formData[field.name as keyof typeof formData]) {
          setError(`${field.label} is required.`);
          return;
        }
      }
      setStep(step + 1);
    } else if (step === 3) {
      if (!email || !password || !confirmPassword) {
        setError("All fields are required.");
        return;
      }
      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      setStep(step + 1);
    }
  };
  const handleBack = () => setStep(step - 1);


  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] w-full">
      {/* <div className="absolute top-3 lg:top-2 xl:top-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`h-2 w-8 rounded-full transition-all duration-200 ${step === s ? 'bg-[#008753]' : 'bg-gray-200'}`}></div>
        ))}
      </div> */}
      <div className='w-full md:w-1/2 h-full'>
        <div className="bg-white p-6 lg:p-3 xl:p-8 rounded-2xl shadow-xl w-full max-w-xs lg:max-w-[250px] xl:max-w-sm 2xl:max-w-md mx-auto">
          <div className="flex justify-center mb-3">
            <div className="relative h-6 md:h-5 lg:h-6 xl:h-8 2xl:h-10 flex items-center justify-center">
              <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100} />
            </div>
          </div>
          <h1 className="text-lg lg:text-base xl:text-xl 2xl:text-2xl font-bold text-black text-center mb-0 lg:mb-0 xl:mb-0 2xl:mb-1">Create your Prism account</h1>
          <h2 className="text-[11px] lg:text-[9px] xl:text-[13px] 2xl:text-base font-normal text-[#4B5563] mb-4 lg:mb-3 xl:mb-6 2xl:mb-6 text-center">
            Join the movement for transparency
          </h2>
          <form onSubmit={handleSubmit} className="space-y-1">
            {/* {step === 1 && (
            <div className="space-y-4">
              <div className="relative">
                <label className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">Account Type</label>
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full text-sm lg:text-xs xl:text-base px-2 lg:px-2 xl:px-4 py-2 lg:py-1.5 xl:py-3 border border-gray-300 rounded-md lg:rounded-sm xl:rounded-lg bg-white text-left focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <selectedUserType.icon className="size-4 lg:size-3 xl:size-5 2xl:size-5 text-gray-400" />
                    <span className="text-gray-900">{selectedUserType.label}</span>
                  </div>
                  <ChevronDown className={`size-3 lg:size-3 xl:size-4 2xl:size-4 text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
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
                          className={`w-full text-sm lg:text-xs xl:text-base px-2 lg:px-2 xl:px-4 py-2 lg:py-1.5 xl:py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors ${userType === type.value ? 'bg-[#008753]/5 text-[#008753]' : 'text-gray-900'}`}
                        >
                          <IconComponent className={`size-4 lg:size-3 xl:size-5 2xl:size-5 ${userType === type.value ? 'text-[#008753]' : 'text-gray-400'}`} />
                          <div>
                            <div className={`font-medium ${userType === type.value ? 'text-[#008753]' : 'text-gray-900'}`}>{type.label}</div>
                            <div className="text-sm text-gray-500">{type.description}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )} */}
            {step === 1 && (
              <div className="flex flex-col gap-3">
                {(userType === 'citizen' ? citizenFields : officialFields).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      className="w-full px-3 xl:px-4 py-2 2xl:py-3 text-[10px] lg:text-[10px] xl:text-sm 2xl:text-base border border-gray-300 rounded-sm xl:rounded-md 2xl:rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                      required
                    />
                  </div>
                ))}
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col gap-3">
                <div>
                  <label htmlFor="email" className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">Email</label>
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
                  <label htmlFor="password" className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 xl:px-4 py-2 2xl:py-3 text-[10px] lg:text-[10px] xl:text-sm 2xl:text-base border border-gray-300 rounded-sm xl:rounded-md 2xl:rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs lg:text-[10px] xl:text-sm 2xl:text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 xl:px-4 py-2 2xl:py-3 text-[10px] lg:text-[10px] xl:text-sm 2xl:text-base border border-gray-300 rounded-sm xl:rounded-md 2xl:rounded-lg focus:ring-2 focus:ring-[#008753]/50 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="flex flex-col gap-3 text-xs xl:text-sm text-gray-700">
                <div className="font-semibold text-sm xl:text-base text-center mb-2">Review your details</div>
                <div><span className="font-medium">Account Type:</span> {selectedUserType.label}</div>
                {(userType === 'citizen' ? citizenFields : officialFields).map((field) => (
                  <div key={field.name}><span className="font-medium">{field.label}:</span> {formData[field.name as keyof typeof formData]}</div>
                ))}
                <div><span className="font-medium">Email:</span> {email}</div>
              </div>
            )}
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <div className="flex gap-2 mt-4">
              {step > 1 && (
                <button type="button" onClick={handleBack} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 lg:text-xs xl:text-sm 2xl:text-base h-8 lg:h-8 xl:h-9 2xl:h-10 px-3 lg:px-2 xl:px-4 2xl:px-4 rounded-md lg:rounded-sm xl:rounded-lg 2xl:rounded-lg transition-colors duration-200">Back</button>
              )}
              {step < 3 && (
                <button type="button" onClick={handleNext} className="w-full bg-[#008753] lg:text-xs xl:text-sm 2xl:text-base text-white h-8 lg:h-8 xl:h-9 2xl:h-10 px-3 lg:px-2 xl:px-4 2xl:px-4 rounded-md lg:rounded-sm xl:rounded-lg 2xl:rounded-lg transition-colors duration-200">Next</button>
              )}
              {step === 3 && (
                <button type="submit" className="w-full bg-[#008753] lg:text-xs xl:text-sm 2xl:text-base text-white h-8 lg:h-8 xl:h-9 2xl:h-10 px-3 lg:px-2 xl:px-4 2xl:px-4 rounded-md lg:rounded-sm xl:rounded-lg 2xl:rounded-lg transition-colors duration-200">Create</button>
              )}
            </div>
          </form>
          <p className="mt-3 lg:mt-2 xl:mt-4 2xl:mt-4 text-center text-[10px] lg:text-[9px] xl:text-sm 2xl:text-sm text-gray-600">
            Already have an account?{' '}
            <button
              type="button"
              className="text-[#008753] hover:underline font-medium"
              onClick={() => router.push('/auth/signin')}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>

      <div className='hidden md:block relative w-1/2 h-screen bg-red-200'>
        <Image src="/auth.png" alt='signup illustration' className='w-full h-full object-cover' width={500} height={500} />
        <div className='absolute inset-0 bg-[#00875380] h-full w-full flex flex-col items-center justify-center'>
          <AnimatedOverlayTexts />
        </div>
      </div>
    </div>
  );
}
