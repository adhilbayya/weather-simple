import Cities from "./components/Cities";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4 min-h-full p-10">
      <Cities name="Delhi" city="New Delhi" />
      <Cities name="New York" city="New York" />
      <Cities name="London" city="London" />
      <Cities name="Tokyo" city="Tokyo" />
      <Cities name="Paris" city="Paris" />
      <Cities name="Bengaluru" city="Bengaluru" />
      <Cities name="Buenos Aires" city="Buenos Aires" />
      <Cities name="Sydney" city="Sydney" />
      <Cities name="Cape Town" city="Cape Town" />
    </div>
  );
}
