
import { SearchBar } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-rows-5 justify-items-center content-center">
        <h1 className="row-start-2 text-7xl standard-border font-main-grey p-10 m-2"> Birdie Picks </h1>
        <p className="row-start-3"> A League of Legends Statistic Tracker</p>
        <div className="row-start-4">
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
