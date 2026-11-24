import { HiOutlineArrowNarrowUp } from "react-icons/hi";

function Arrow() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <button onClick={scrollTop} className="arrow-btn">
      <HiOutlineArrowNarrowUp className="arrow" />
    </button>
  );
}

export default Arrow;
