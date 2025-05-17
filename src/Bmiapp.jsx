import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bmigif from './assets/Bmi-img/Gym.gif';

export const Bmiapp = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);

  const calculateBMI = () => {
    const isHeight = /^\d+$/.test(height);
    const isWeight = /^\d+$/.test(weight);

    if (isHeight && isWeight) {
      const h = height / 100;
      const bmiVal = weight / (h * h);
      setBmi(bmiVal.toFixed(2));

      if (bmiVal < 18.5) setStatus('Underweight');
      else if (bmiVal < 25) setStatus('Normal');
      else if (bmiVal < 30) setStatus('Overweight');
      else setStatus('Obese');

      setError(false);
    } else {
      setError(true);
      setBmi(false);
    }
  };

  const reset = () => {
    setHeight('');
    setWeight('');
    setBmi(false);
    setStatus('');
    setError(false);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-700 to-blue-800  text-white px-6">
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl p-8 rounded-2xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md flex flex-col md:flex-row gap-8 items-center z-10"
      >
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={bmigif} alt="BMI" className="w-60 rounded-2xl md:w-72 drop-shadow-xl" />
        </div>

        {/* Right Calculator */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-extrabold text-center uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-blue-200">
            BMI Calculator
          </h2>

          {error && <p className="text-red-400 text-center">⚠️ Enter valid numeric height and weight</p>}

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Height (cm)</label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full mt-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Weight (kg)</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full mt-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={calculateBMI}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition px-4 py-2 rounded font-bold text-white"
            >
              Calculate BMI
            </button>
            <button
              onClick={reset}
              className="flex-1 bg-red-500 hover:bg-orange-500 transition px-4 py-2 rounded font-bold text-white"
            >
              Clear
            </button>
          </div>

          {/* Result */}
          {bmi && (
            <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 text-center space-y-2">
              <p className="text-lg">Your BMI is: <span className="font-bold text-pink-300">{bmi}</span></p>
              <p>Status: <span className="text-blue-300 font-medium">{status}</span></p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="absolute bottom-6 text-sm text-white/80 z-10 text-center">
        Developed with 💖 by <span className="font-bold text-blue-200 hover:underline">Saktrix</span> © {new Date().getFullYear()}
      </div>
    </div>
  );
};
