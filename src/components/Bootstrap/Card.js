import style from './style.module.css'

export function Card(props) {
    const{ImageUrl}=props
  return (
    <div className={style['container']}>
      <div className="card" id='card' style={{ width: "20rem" }}>
        <img src={ImageUrl} className="card-img-top" alt="..." style={{width:"150px",height:"150px"}}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            View More...
          </a>
        </div>
      </div>
    </div>
  );
}
