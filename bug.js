```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: componentWillUnmount is not called if the component unmounts before the timeout
    const timeoutId = setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearTimeout(timeoutId); // This won't always prevent memory leak
  }, []);

  return <div>Count: {count}</div>;
}
```