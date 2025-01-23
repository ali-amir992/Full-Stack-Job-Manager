import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface JobFormInputs {
  jobName: string;
  jobDescription: string;
  difficultyLevel: string;
}

const JobForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<JobFormInputs>();

  const submitJobForm: SubmitHandler<JobFormInputs> = (data) => {
    console.log('Form Data:', data);
    try {
      // Simulated form submission
      const response = { status: 'OK' };
      console.log('Submission Response:', response);
    } catch (error: any) {
      console.log('Error:', error.message);
    }
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        jobName: '',
        jobDescription: '',
        difficultyLevel: '',
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitJobForm)}>
      <div className="flex flex-col gap-6">
        {/* Job Name */}
        <div className="flex flex-col">
          <label className="text-richblack-5 text-sm mb-2" htmlFor="jobName">
            Job Name
          </label>
          <input
            type="text"
            id="jobName"
            placeholder="Enter job name"
            className="text-white border-b border-b-richblack-400 bg-richblack-700 focus:outline-none p-3 rounded-md placeholder:text-richblack-200"
            {...register('jobName', { required: true })}
          />
          {errors.jobName && <span>Please enter the job name</span>}
        </div>

        {/* Job Description */}
        <div className="flex flex-col">
          <label className="text-richblack-5 text-sm mb-2" htmlFor="jobDescription">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            rows={7}
            placeholder="Enter job description"
            className="text-white border-b border-b-richblack-400 bg-richblack-700 focus:outline-none p-3 rounded-md placeholder:text-richblack-200"
            {...register('jobDescription', { required: true })}
          />
          {errors.jobDescription && <span>Please enter the job description</span>}
        </div>

        {/* Difficulty Level */}
        <div className="flex flex-col">
          <label className="text-richblack-5 text-sm mb-2" htmlFor="difficultyLevel">
            Difficulty Level
          </label>
          <select
            id="difficultyLevel"
            className="bg-richblack-700 border-b border-b-richblack-400 p-3 rounded-md focus:outline-none"
            {...register('difficultyLevel', { required: true })}
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          {errors.difficultyLevel && <span>Please select a difficulty level</span>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="rounded-md bg-primary text-center py-3 tracking-wide text-[18px] font-bold text-white hover:bg-hover">
          Next
        </button>
      </div>
    </form>
  );
};

export default JobForm;
