import fs from 'fs';
import path from 'path';
import Categories from '@/components/Categories';
import ListingCard from '@/components/ListingCard';
import Footer from '@/components/Footer';

export default async function Home() {
  // Read mock data
  const filePath = path.join(process.cwd(), 'src', 'data', 'listings.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const listings = JSON.parse(fileContents);

  return (
    <div className="min-h-screen flex flex-col">
      <Categories />
      
      <main className="flex-1 max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-6 pb-20 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
          {listings.map((listing: any) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
