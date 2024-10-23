import ErrorBoundary from "./error-boundry";

const CustomErrorMessage = () => {
  return (
    <div className="">
      <h2>Oops! Something went wrong!</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <div>this is not wrapped with the error</div>
      <ErrorBoundary fallbackComponent={<CustomErrorMessage />} showError>
        <div>This is wrapped with error boundary </div>
        <FaultyComponent />
      </ErrorBoundary>
    </>
  );
};

export default App;

const FaultyComponent = () => {
  return <div>count is {count}</div>;
};
