import { v2 as cloudinary } from "cloudinary";
import { CloudinaryImage, CloudinaryResource } from "./types";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getImagesFromCloudinary(): Promise<CloudinaryImage[]> {
  try {
    const { resources } = await cloudinary.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}`)
      .sort_by("created_at", "desc")
      .with_field(["tags", "context"])
      .max_results(100)
      .execute();

    return resources.map((resource: CloudinaryResource) => ({
      id: resource.asset_id,
      title: resource.filename,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
      format: resource.format,
      public_id: resource.public_id,
      tags: resource.tags,
      context: resource.context,
    }));
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return [];
  }
}
