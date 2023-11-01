import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import style from "./style.module.css";
import { Card } from "./Card";
import { Navbar } from "./navbar";
import {Corousel} from './corousel'

export function Main() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
      <Corousel/>
      </div>
      <h2>Womens Clothing</h2>
      <div className={style["card"]}>
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
      </div>
      <h2>Mens Clothing</h2>
      <div className={style["card"]}>
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
      </div>
      <h2>Electronics</h2>
      <div className={style["card"]}>
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
      </div>
      <h2>Jewellery</h2>
      <div className={style["card"]}>
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
        <Card
          ImageUrl={
            "https://images.meesho.com/images/products/60422990/hhmpo_400.webp"
          }
        />
      </div>
    </div>
  );
}
