// sanityClient.ts
import { createClient } from "@sanity/client";
import dotenv from "dotenv";

dotenv.config();
export const client = createClient({
  projectId: "7kulyf0f", // Replace with your project ID
  dataset: "production_sanity", // Or your dataset name
  apiVersion: "2024-01-19", // Today's date or latest API version
  useCdn: false, // Disable CDN for real-time updates
  token:
    "skULNQOK7f62kVgViXCSD2a6p5NsIP51wiBq6VqES3BNxyhMijLUjHu27u8CiUQxZpEvV5l8KJmdX8mc5TefzSSJqZ93bRNKS4Wg9wMF9eNl3fdozTHFbZ4gk1kdUEt8d0L904JtDsqSKHEd4LBniGfbInzkmfxIn7UK2nxkHL5ptNzy4U1e",
});
