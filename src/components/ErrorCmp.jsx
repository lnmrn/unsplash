function ErrorCmp({ isError }) {
  return (
    <div className="error">
      <p>{isError && "There has been an error. Please refresh the page."}</p>
    </div>
  );
}

export default ErrorCmp;
