"use client";

import React, { useRef } from "react";
import Styles from "./ShortProduct.module.css";
import BlackNavButton from "../Buttons/BlackNavButton/BlackNavButton";
import { ROUTES } from "@/data/const/routes";
import { Product } from "@/data/product";
import Image from "next/image";

const ShortProduct = () => {
  const products: Product[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    imageUrl: `/images/products/${index + 1}.jpg`,
    price: 19.99,
  }));

  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDragging.current = true;
    slider.classList.add("active");
    startX.current = e.pageX - slider.offsetLeft;
    scrollLeft.current = slider.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    isDragging.current = false;
    slider.classList.remove("active");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;

    const slider = sliderRef.current;
    if (!slider) return;

    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust scroll speed
    slider.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className={Styles.container}>
      <h2 className={Styles.text}>NEW COLLECTIONS</h2>
      <h1 className={Styles.title}>Featured Products</h1>
      <div
        className={Styles.slider}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
      >
        {products.map((product) => (
          <div key={product.id} className={Styles.slideItem}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={400}
              draggable="false"
            />
            <div className={Styles.description}>
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <BlackNavButton url={ROUTES.CATALOG}>See All Products</BlackNavButton>
    </div>
  );
};

export default ShortProduct;
