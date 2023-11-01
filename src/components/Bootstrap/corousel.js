import style from './style.module.css'

export function Corousel() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img className={style['corouselimage']} src="https://blog.grabon.in/wp-content/uploads/2021/05/best-online-shopping.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img className={style['corouselimage']} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl4R4M029t9c0xyejOpPneQYVdWvvxY1zgIqXZoD6CXF1vbVczrN_zeCaQ2fewVuXCWZM&usqp=CAU" class="d-block w-100 h-900px" alt="..." />
          </div>
          <div class="carousel-item">
            <img className={style['corouselimage']} src="https://www.europarl.europa.eu/resources/library/images/20160609PHT31661/20160609PHT31661_original.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
