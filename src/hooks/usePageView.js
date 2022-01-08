import { useEffect } from 'react';
import {ga} from 'react-ga';
import { useLocation } from 'react-router-dom';

const usePageView =()=> {
  let location = useLocation();
  useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

export default usePageView;
