"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Wait for the page to be fully loaded
    const handleRouteChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              // block: "start",
            });
          }
        }, 100);
      }
    };

    handleRouteChange();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleRouteChange);

    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, [pathname, searchParams]);

  return null;
}