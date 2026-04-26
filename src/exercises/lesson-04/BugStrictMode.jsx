// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// In StrictMode, React runs effects more than once in development to help find bugs.
// This effect creates a setInterval, but without cleanup, multiple intervals can run at the same time.
// This causes the counter to increase faster than expected.
// By returning a cleanup function and calling clearInterval(intervalId),
// we remove the old interval and prevent duplicate timers.
