import React from 'react';
import JobForm from '../components/JobForm1';
import Stepper from '../components/createQuiz/Stepper';

const CreateQuizPage: React.FC = () => {
  return (
    <div className="py-8 flex items-center justify-center">
      <div className="w-full max-w-3xl p-8 shadow-lg rounded-lg">
        <Stepper />
        <div className="mt-8">
          <JobForm />
        </div>
      </div>
    </div>
  );
};

export default CreateQuizPage;
