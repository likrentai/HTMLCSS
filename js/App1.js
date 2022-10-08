function abc() {
  return <h1>TEST</h1>;
}

const root = ReactDOM.createRoot(document.querySelector('#react1'));
root.render(
  <>
    <abc />
  </>
);