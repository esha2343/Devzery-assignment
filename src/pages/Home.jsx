import React from 'react';
import WorkflowBuilder from '../components/WorkflowBuilder';

const Home = () => {
  return (
    <div className="container mx-auto p-6">
        <header className="mb-6 ">
          <h1 className="text-3xl font-bold ">API Chaining Dashboard</h1>
        </header>

        {/* side drawer */}
        <div className="h-full w-full bg-black">
          {/* WorkflowBuilder component handles API selection, chaining, and data display */}
          <section>
            <WorkflowBuilder />
          </section>
        </div>
    </div>
  );
};

export default Home;
