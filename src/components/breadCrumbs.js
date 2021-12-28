import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../constants';


export const PathContext = React.createContext({
  path: '',
  setPath: () => {}
});

export const useBreadcrumbs = (path) => {
  const { setPath } = useContext(PathContext);

  useEffect(() => {
    if (setPath) {
      setPath(path);
      return () => {
        setPath(null);
      };
    }
  }, [setPath, path]);
};

export default function BreadCrumbs() {
  let { path } = useContext(PathContext);
  if(path) {
    path = ' > ' + path;
  }

  return (
    <div className="breadcrumbs">
      <Link to={routes.HOME}>Issue Boards</Link>
      {path}
    </div>
  );
}
