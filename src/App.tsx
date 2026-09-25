import Navbar from "./Navbar";
import Banner from "./Banner";
import Technologies from "./Technologies";
import { Suspense, useState } from "react";
import type { technologiesTypes } from "./types/technologiesTypes";
import toast from "react-hot-toast";
import Stack from "./Stack";
import Footer from "./Footer";

const fetchTech = async () => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const techPromise = fetchTech();

const App = () => {
  const [selectedStack, setSelectedStack] = useState<technologiesTypes[]>([]);

  const addStack = (tech: technologiesTypes) => {
    setSelectedStack((prev) => {
      const alreadAdded = prev.some((item) => item.id === tech.id);
      if (alreadAdded) {
        return prev;
      }
      return [...prev, tech];
    });
    toast.success(`${tech.stackName} ✓Added to Stack`);
  };
  const removetoStack = (id: string) => {
  setSelectedStack((prev) => prev.filter((item) => item.id !== id))
}
const removeAll = () =>{
  setSelectedStack([])
}
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <main>
        <section className="container mx-auto my-10">
          <div className=" mb-10">
            <h1 className=" text-3xl font-extrabold ">
              Explore The <span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h1>
            <p className="text-gray-400">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Suspense fallback={"loading...."}>
              <Technologies techPromise={techPromise} selectedStack = {selectedStack} onAdd = {addStack}></Technologies>
              <Stack selectedStack = {selectedStack} onRemove = {removetoStack} onRemoveAll = {removeAll}></Stack>
            </Suspense>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
