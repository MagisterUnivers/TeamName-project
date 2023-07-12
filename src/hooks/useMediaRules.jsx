import { useMediaQuery } from "react-responsive";

export const useMediaRules = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  
  const isTablet = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1440px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });

  return { isMobile, isTablet, isDesktop };
};
