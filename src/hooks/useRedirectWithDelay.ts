import { useNavigate } from "react-router-dom";

export const useRedirectWithDelay = (onClose: () => void) => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    onClose();

    setTimeout(() => {
      navigate(`${link}`);
    }, 300);
  };

  return { handleClick };
};
