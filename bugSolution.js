```javascript
import { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      // Check if timeout exists before clearing to prevent errors
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return <div>Count: {count}</div>;
}
```