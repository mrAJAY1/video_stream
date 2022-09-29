import "./index.scss";

function PageNotFound() {
  return (
    <div className='notfound-wrapper'>
      <img src='https://i.imgur.com/qIufhof.png' alt='page not found' />
      <div className='info'>
        <h3>This page could not be found</h3>
      </div>
    </div>
  );
}

export default PageNotFound;
