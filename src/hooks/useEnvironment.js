import { useEffect, useState } from 'react';

const useEnvironment = () => {
  const [environment, setEnvironment] = useState('production'); // default to production

  useEffect(() => {
    const { hostname } = window.location;

    // If the hostname starts with "dev", then it's staging
    if (hostname.includes('.dev.')) {
      setEnvironment('staging');
    } else {
      setEnvironment('production');
    }
  }, []); // Empty dependency array to run only once after initial render

  return environment;
};

export default useEnvironment;
