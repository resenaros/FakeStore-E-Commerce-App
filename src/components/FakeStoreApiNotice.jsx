import Alert from "react-bootstrap/Alert";

const FakeStoreApiNotice = () => (
  <Alert variant="info" className="mb-3">
    <strong>Note:</strong> This app uses{" "}
    <a
      href="https://fakestoreapi.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      FakeStoreAPI
    </a>{" "}
    for demonstration purposes only. Changes you make (Add, Edit, Delete) will
    appear successful, but the data will reset on refresh or future visits.
  </Alert>
);

export default FakeStoreApiNotice;
