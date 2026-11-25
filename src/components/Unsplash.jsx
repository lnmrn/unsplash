import { useEffect, useState } from "react";

function Unsplash() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    function hideUnsplash() {
      setIsVisible(window.scrollY === 0);
    }
    window.addEventListener("scroll", hideUnsplash);

    return () => {
      window.removeEventListener("scroll", hideUnsplash);
    };
  });
  return (
    <>
      {isVisible && (
        <div className="unsplash">
          <p className="unsplash-text">
            Over <span className="highlight">8,000,000 curated images</span>!
            They hand-select every image and accept{" "}
            <span className="highlight">only the best</span>, so that no matter
            what you need, you’ll find exactly what you’re looking for.
          </p>
          <a className="link" href="https://unsplash.com/">
            Visit Unsplash today!
          </a>
        </div>
      )}
    </>
  );
}

export default Unsplash;
