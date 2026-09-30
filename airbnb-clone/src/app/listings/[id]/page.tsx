import fs from 'fs';
import path from 'path';
import ImageGallery from '@/components/ImageGallery';
import ListingInfo from '@/components/ListingInfo';
import ReservationSidebar from '@/components/ReservationSidebar';
import Footer from '@/components/Footer';

export default async function ListingPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  
  // Read mock data
  const filePath = path.join(process.cwd(), 'src', 'data', 'listings.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const allListings = JSON.parse(fileContents);
  
  const listing = allListings.find((l: any) => l.id === id);

  if (!listing) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h1 className="text-2xl font-bold">Listing not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-[1120px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-6">
        
        {/* Title header for mobile */}
        <div className="md:hidden flex flex-col gap-1 mb-4">
          <h1 className="text-[26px] font-semibold text-neutral-900 tracking-tight leading-tight">
            {listing.title}
          </h1>
          <div className="flex flex-row items-center gap-1 font-semibold text-[14px]">
            <span className="underline">{listing.reviews} reviews</span>
            <span>·</span>
            <span className="text-neutral-500">{listing.location}</span>
          </div>
        </div>

        <ImageGallery images={listing.images} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 relative">
          <ListingInfo listing={listing} />
          <ReservationSidebar 
            price={listing.price} 
            rating={listing.rating}
            reviews={listing.reviews}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
