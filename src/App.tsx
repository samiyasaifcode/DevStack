import Navbar from "./Navbar";
import Banner from "./Banner";
import Technologies from "./Technologies";
import { Suspense } from "react";

const fetchTech = async () => {
  const res = await fetch('/technologies.json');
  const data = await res.json();
  return data;
};

const techPromise = fetchTech();

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <main>
        <section className='container mx-auto my-10'>
          <div className=' mb-10'>
              <h1 className=' text-2xl font-bold '>Explore The <span className='text-fuchsia-600'>Technologies</span></h1>
              <p className='text-gray-400'>Pick one technology per category to build your ideal stack.</p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Suspense fallback={"loading...."}>
              <Technologies techPromise={techPromise}></Technologies>
            </Suspense>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
