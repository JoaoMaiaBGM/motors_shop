export function scrollLeftAuction() {
  const left = document.querySelector(".carouselAuctionCardsContainer");
  left?.scrollBy(-700, 0);
}

export function scrollRightAuction() {
  const right = document.querySelector(".carouselAuctionCardsContainer");
  right?.scrollBy(700, 0);
}

export function scrollLeftCar() {
  const leftCar = document.querySelector(".carouselSaleCars");
  leftCar?.scrollBy(-350, 0);
}

export function scrollRightCar() {
  const right = document.querySelector(".carouselSaleCars");
  right?.scrollBy(350, 0);
}

export function scrollLeftMotorcycle() {
  const leftMotorcycle = document.querySelector(".carouselSaleMotorcycle");
  leftMotorcycle?.scrollBy(-350, 0);
}

export function scrollRightMotorcycle() {
  const right = document.querySelector(".carouselSaleMotorcycle");
  right?.scrollBy(350, 0);
}
