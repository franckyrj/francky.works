import Image from "next/image";
import "./Hero/hero.css";
import { heroHeading, heroSubheading, heroText } from "../data/hero";

export default function Hero() {
  return (
    <div className="lg:mx-24 flex gap-8 flex-col lg:flex-row lg:items-center justify-center">
      <Image
        src="/img/hero.webp"
        className="avatar-shape"
        width={500}
        height={500}
        alt="Francky in photo"
        draggable="false"
        priority
      />
      <div className="max-lg:bottom-0 lg:-bottom-2">
        <div className="max-lg:text-2xl lg:text-5xl font-bold text-emerald-400 font-secondary">
          {heroHeading}
        </div>
        <div className="mt-4 mb-8 max-lg:text-xl lg:text-3xl text-slate-400">
          {heroSubheading}
        </div>
        <p className="max-w-screen-xl lg:mx-auto text-lg dark:text-slate-500">
          {heroText}
        </p>
      </div>
    </div>
  );
}
