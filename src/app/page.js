import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";
import image from "@/public/image.png"
import image2 from "@/public/image_copy.png"
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { SVGMaskEffectDemo } from "@/components/ui/SVGMaskEffectDemo";
import { SparklesPreview } from "@/components/ui/SparklesPreview";
const products = [
  {
    title: "Wireless Bluetooth Headphones",
    link: "https://example.com/products/wireless-bluetooth-headphones",
    thumbnail: image,
  },
  {
    title: "Smartphone with Triple Camera",
    link: "https://example.com/products/smartphone-triple-camera",
    thumbnail: image2,
  },
  {
    title: "4K Ultra HD Smart TV",
    link: "https://example.com/products/4k-ultra-hd-smart-tv",
    thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fall-images-hd&psig=AOvVaw1hWS6Tr6pPgUpIMq5Y01jD&ust=1730284079902000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPimo-Ows4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Portable Power Bank 10000mAh",
    link: "https://example.com/products/portable-power-bank-10000mah",
    thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fall-images-hd&psig=AOvVaw1hWS6Tr6pPgUpIMq5Y01jD&ust=1730284079902000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPimo-Ows4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Wireless Gaming Mouse",
    link: "https://example.com/products/wireless-gaming-mouse",
    thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fall-images-hd&psig=AOvVaw1hWS6Tr6pPgUpIMq5Y01jD&ust=1730284079902000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPimo-Ows4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Noise-Canceling Earbuds",
    link: "https://example.com/products/noise-canceling-earbuds",
    thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fall-images-hd&psig=AOvVaw1hWS6Tr6pPgUpIMq5Y01jD&ust=1730284079902000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPimo-Ows4kDFQAAAAAdAAAAABAE"
  },
  {
    title: "Laptop Stand with Adjustable Height",
    link: "https://example.com/products/laptop-stand-adjustable-height",
    thumbnail: "https://example.com/images/laptop-stand-adjustable-height.jpg"
  },
  {
    title: "Waterproof Fitness Tracker",
    link: "https://example.com/products/waterproof-fitness-tracker",
    thumbnail: "https://example.com/images/waterproof-fitness-tracker.jpg"
  },
  {
    title: "Bluetooth Speaker with Bass Boost",
    link: "https://example.com/products/bluetooth-speaker-bass-boost",
    thumbnail: "https://example.com/images/bluetooth-speaker-bass-boost.jpg"
  },
  {
    title: "Portable SSD 1TB",
    link: "https://example.com/products/portable-ssd-1tb",
    thumbnail: "https://example.com/images/portable-ssd-1tb.jpg"
  },
  {
    title: "Smartwatch with Heart Rate Monitor",
    link: "https://example.com/products/smartwatch-heart-rate-monitor",
    thumbnail: "https://example.com/images/smartwatch-heart-rate-monitor.jpg"
  },
  {
    title: "Wireless Keyboard and Mouse Combo",
    link: "https://example.com/products/wireless-keyboard-mouse-combo",
    thumbnail: "https://example.com/images/wireless-keyboard-mouse-combo.jpg"
  },
  {
    title: "HD Webcam with Microphone",
    link: "https://example.com/products/hd-webcam-microphone",
    thumbnail: "https://example.com/images/hd-webcam-microphone.jpg"
  },
  {
    title: "Smart Home Security Camera",
    link: "https://example.com/products/smart-home-security-camera",
    thumbnail: "https://example.com/images/smart-home-security-camera.jpg"
  },
  {
    title: "Portable Mini Projector",
    link: "https://example.com/products/portable-mini-projector",
    thumbnail: "https://example.com/images/portable-mini-projector.jpg"
  },
  {
    title: "Mechanical Gaming Keyboard",
    link: "https://example.com/products/mechanical-gaming-keyboard",
    thumbnail: "https://example.com/images/mechanical-gaming-keyboard.jpg"
  },
  {
    title: "Smart Air Purifier",
    link: "https://example.com/products/smart-air-purifier",
    thumbnail: "https://example.com/images/smart-air-purifier.jpg"
  },
  {
    title: "High-Speed HDMI Cable",
    link: "https://example.com/products/high-speed-hdmi-cable",
    thumbnail: "https://example.com/images/high-speed-hdmi-cable.jpg"
  },
  {
    title: "Ergonomic Office Chair",
    link: "https://example.com/products/ergonomic-office-chair",
    thumbnail: "https://example.com/images/ergonomic-office-chair.jpg"
  },
  {
    title: "Multi-Port USB Charger",
    link: "https://example.com/products/multi-port-usb-charger",
    thumbnail: "https://example.com/images/multi-port-usb-charger.jpg"
  }
];


export default function Home() {
  return (
      //  <HeroParallax products={products} />
      // <SVGMaskEffectDemo/>
      <SparklesPreview/>
  );
}
