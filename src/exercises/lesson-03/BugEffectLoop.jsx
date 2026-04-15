//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// The bug happened because useEffect was running after every render.
// Inside the effect, setCount updates the state, which causes another render.
// That made the effect run again and again.
// I fixed it by adding an empty dependency array so the effect runs only once when the component mounts.
