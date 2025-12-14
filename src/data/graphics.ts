import fullChristmasGreeting from "../assets/images/christmas-greeting-card.jpg";
import thumbChristmasGreeting from "../assets/images/thumb-christmas-greeting.jpg";

import fullCupOfCoffee from "../assets/images/cup-of-coffee.jpg";
import thumbCupOfCoffee from "../assets/images/thumb-cup-of-coffee.jpg";

import fullCutePug from "../assets/images/cute-pug.jpg";
import thumbCutePug from "../assets/images/thumb-cute-pug.jpg";

import fullHappyNewYear from "../assets/images/happy-new-year-card.jpg";
import thumbHappyNewYear from "../assets/images/thumb-happy-new-year.jpg";

import fullKittenCoffee from "../assets/images/kitten-with-coffee.jpg";
import thumbKittenCoffee from "../assets/images/thumb-kitten-with-coffee.jpg";

import fullPerfumeBottle from "../assets/images/perfume-bottle.jpg";
import thumbPerfumeBottle from "../assets/images/thumb-perfume-bottle.jpg";

import fullTiger from "../assets/images/tiger.jpg";
import thumbTiger from "../assets/images/thumb-tiger.jpg";

import fullTomato1 from "../assets/images/tomato-mozzarella-1.jpg";
import thumbTomato1 from "../assets/images/thumb-tomato-mozzarella.jpg";

export type GraphicItem = {
  id: string;
  thumbSrc: string;
  fullSrc: string;
  alt: string;
};

export const graphics: GraphicItem[] = [
  {
    id: "1-kitten-coffee",
    thumbSrc: thumbKittenCoffee,
    fullSrc: fullKittenCoffee,
    alt: "Illustration d’un chaton avec une tasse de café",
  },
  {
    id: "2-happy-new-year",
    thumbSrc: thumbHappyNewYear,
    fullSrc: fullHappyNewYear,
    alt: "Carte de vœux : bonne année, ambiance festive",
  },
  {
    id: "3-christmas-greeting",
    thumbSrc: thumbChristmasGreeting,
    fullSrc: fullChristmasGreeting,
    alt: "Carte de Noël avec branche de sapin et décorations",
  },
  {
    id: "4-perfume-bottle",
    thumbSrc: thumbPerfumeBottle,
    fullSrc: fullPerfumeBottle,
    alt: "Illustration d’un flacon de parfum",
  },
  {
    id: "5-tomato-mozzarella-1",
    thumbSrc: thumbTomato1,
    fullSrc: fullTomato1,
    alt: "Illustration culinaire : tomate mozzarella, version 1",
  },
  {
    id: "8-cup-of-coffee",
    thumbSrc: thumbCupOfCoffee,
    fullSrc: fullCupOfCoffee,
    alt: "Illustration : tasse de café",
  },
  {
    id: "9-tiger",
    thumbSrc: thumbTiger,
    fullSrc: fullTiger,
    alt: "Illustration : tête de tigre",
  },
  {
    id: "10-cute-pug",
    thumbSrc: thumbCutePug,
    fullSrc: fullCutePug,
    alt: "Illustration : carlin mignon",
  },
];
