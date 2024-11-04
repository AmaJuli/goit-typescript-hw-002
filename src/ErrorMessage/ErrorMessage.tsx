import { useEffect } from "react";
import toast from "react-hot-toast";

const Error: React.FC = () => {
  useEffect(() => {
    toast.error("Whoops, something went wrong! Please try reloading this page!");
  }, []);

  return null;
};

export default Error;