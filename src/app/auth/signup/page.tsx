"use client";

import { useState } from 'react';
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
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Check if all dynamic fields are filled
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

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image src="/logo.png" alt='prism logo' className='w-full h-full' width={100} height={100}/>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-[#1A2A4E] mb-1 text-center">Create your Prismix account</h1>
        <h2 className="text-base font-normal text-[#4B5563] mb-6 text-center">
          Join the movement for transparency
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:ring-2 focus:ring-[#1A2A4E]/50 focus:border-transparent flex items-center justify-between hover:bg-gray-50 transition-colors"
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
                        userType === type.value ? 'bg-[#1A2A4E]/5 text-[#1A2A4E]' : 'text-gray-900'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${userType === type.value ? 'text-[#1A2A4E]' : 'text-gray-400'}`} />
                      <div>
                        <div className={`font-medium ${userType === type.value ? 'text-[#1A2A4E]' : 'text-gray-900'}`}>{type.label}</div>
                        <div className="text-sm text-gray-500">{type.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* Dynamic fields based on user type */}
          {(userType === 'citizen' ? citizenFields : officialFields).map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A4E]/50 focus:border-transparent"
                required
              />
            </div>
          ))}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A4E]/50 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A4E]/50 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2A4E]/50 focus:border-transparent"
              required
            />
          </div>
          
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          
          <button
            type="submit"
            className="w-full bg-[#1A2A4E] text-white h-10 px-4 rounded-lg hover:bg-[#17213D] transition-colors duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            className="text-[#1A2A4E] hover:underline font-medium"
            onClick={() => router.push('/auth/signin')}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
