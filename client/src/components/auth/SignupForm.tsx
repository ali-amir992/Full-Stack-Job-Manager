import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Tab from './Tab';
import Button from '../Button';
import { Link } from 'react-router-dom';
// Dummy Tab component for the account type selection
// const Tab = ({ tabData, field, setField }: any) => (
//   <div className="tabs">
//     {tabData.map((tab: any) => (
//       <button
//         key={tab.id}
//         className={`tab-button ${field === tab.type ? 'active' : ''}`}
//         onClick={() => setField(tab.type)}
//       >
//         {tab.tabName}
//       </button>
//     ))}
//   </div>
// );

// Dummy constants for account types
const ACCOUNT_TYPE = {
  STUDENT: 'STUDENT',
  COMPANY: 'COMPANY',
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignupForm: React.FC = () => {
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const signUpData = {
      ...formData,
      accountType,
    };

    console.log('Sign Up Data:', signUpData);

    // Reset the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  const tabData = [
    { id: 1, tabName: 'Student', type: ACCOUNT_TYPE.STUDENT },
    { id: 2, tabName: 'Company', type: ACCOUNT_TYPE.COMPANY },
  ];

  return (
    <div className=''>
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <label className="flex-1">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              style={{ boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)' }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label className="flex-1">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              style={{ boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)' }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            style={{ boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)' }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
          />
        </label>
        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <label className="relative flex-1">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{ boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)' }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative flex-1">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              style={{ boxShadow: 'inset 0px -1px 0px rgba(255, 255, 255, 0.18)' }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <Button
          type="primary"
        // className="mt-6 rounded-[8px] bg-primary py-[8px] px-[12px] font-medium text-white"
        >
          Sign Up
        </Button>
        <Link to='/login'>Already have an account? Login here</Link>
      </form>

    </div>
  );
};
