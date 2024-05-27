
import { Region, SearchBar } from "@/components";

export default function Home() {
  return (
	<main>
		<div className="grid grid-cols-1 min-h-screen justify-items-center content-center">
			<h1 className="text-7xl font-main-grey p-10"> Birdie Picks </h1>
			<div className="grid grid-cols-2">
				<SearchBar />
			</div>
		</div>
	</main>
  );
}
