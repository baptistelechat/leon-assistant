import { Map } from "@/components/Map";

const Home = () => {
  return (
    <main className="relative h-screen w-screen">
      <Map />
      <div className="absolute top-4 right-4 bg-card/90 p-4 rounded shadow-md z-10">
        <h1 className="text-xl font-bold">🌍 Map</h1>
      </div>
    </main>
  );
};

export default Home;
