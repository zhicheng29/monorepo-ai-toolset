import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

interface RouterGuardProps {
  children: React.ReactNode;
}

const RouterGuard: React.FC<RouterGuardProps> = props => {
  const loader = useLoaderData();

  useEffect(() => {}, [loader]);

  return props.children;
};

export default RouterGuard;
