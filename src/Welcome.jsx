// Welcome.jsx
import { useEffect, useState } from 'react';

function Welcome() {
  const [data, setData] = useState(null);


  return (
    <div>
      <h2>Welcome Component</h2>
      {data ? (
        <div>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Welcome;
