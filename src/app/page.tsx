import { getImagesFromCloudinary } from "@/lib/cloudinary";
import ImageModal from "@/app/components/ImageModal";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const images = await getImagesFromCloudinary();

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-7xl mx-auto">
        <ImageModal images={images} />
      </main>
    </div>
  );
}
