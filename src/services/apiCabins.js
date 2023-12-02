import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export default async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function creatEditCabin(NewCabin, id) {
  // https://zenweiswpivszgkjxlcl.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  console.log(NewCabin);

  const hasImagePath = NewCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${NewCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? NewCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //creat/edit cabin
  let query = supabase.from("cabins");
  //creat cabin
  if (!id) query = query.insert([{ ...NewCabin, image: imagePath }]);

  //edit cabin
  if (id)
    query = query
      .update({ ...NewCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  // 2. Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, NewCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be delete:(");
  }
}
