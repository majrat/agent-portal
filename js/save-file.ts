import path from "path";
import fs from "fs";
export default async function savePDFFile(params: any) {
  // Decode the Base64 string
  const buffer: any = Buffer.from(params.content, "base64");

  // Define the file path
  const filePath = path.join(process.cwd(), "public", "files", params.name);

  // Ensure the directory exists
  fs.mkdirSync(path.dirname(filePath), { recursive: true });

  // Save the file
  fs.writeFileSync(filePath, buffer);

  return filePath;
}
