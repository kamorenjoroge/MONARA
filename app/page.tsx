import Hero from "./home/Hero";
import ServicesGrid from "./services/ServicesGrid";
import { getServices } from "@/lib/api";

export default async function Home() {
  const services = await getServices();

  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
    </>
  );
}