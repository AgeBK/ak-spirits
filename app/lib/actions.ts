"use server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);
// const sql = neon(process.env.NEON_DATABASE_URL!); TODO:?? https://www.freecodecamp.org/news/nextjs-clerk-neon-fullstack-development/
import { z } from "zod";

const minStr2 = z
  .string()
  .min(2, { message: "Must be 2 or more characters long" });
const minStr3 = z
  .string()
  .min(3, { message: "Must be 3 or more characters long" });
const gt0 = z
  .number()
  .gt(0, { message: "Please enter an amount greater than 0." });
const nonNeg = z.coerce.number().nonnegative();

const FormSchema = z.object({
  id: z.string().min(5, { message: "Id must be 5 or more characters long" }),
  brand: minStr3,
  name: minStr3,
  short_name: minStr3,
  category: minStr3,
  sub_category: minStr3,
  price_normal: gt0,
  price_current: gt0,
  price_2_for: nonNeg,
  volume: gt0,
  unit: minStr2,
  ratings_avg: nonNeg,
  ratings_tot: nonNeg,
  packaging: minStr3,
});

const UpdateSchema = FormSchema.omit({ id: true });

const validateFormData = (Schema: SchemaProps, formData: FormData) => {
  return Schema.safeParse({
    id: formData.get("id"),
    brand: formData.get("brand"),
    name: formData.get("name"),
    short_name: formData.get("short_name"),
    category: formData.get("category"),
    sub_category: formData.get("sub_category"),
    price_normal: Number(formData.get("price_normal")),
    price_current: Number(formData.get("price_current")),
    price_2_for: Number(formData.get("price_2_for")),
    volume: Number(formData.get("volume")),
    unit: formData.get("unit"),
    ratings_avg: Number(formData.get("ratings_avg")),
    ratings_tot: Number(formData.get("ratings_tot")),
    packaging: formData.get("packaging"),
  });
};

export async function addProduct(
  prevState: FormStateProps,
  formData: FormData,
) {
  const validatedFields = validateFormData(FormSchema, formData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to add new product. Please check the fields above",
    };
  }

  const {
    id,
    brand,
    name,
    short_name,
    category,
    sub_category,
    price_normal,
    price_current,
    price_2_for,
    volume,
    unit,
    ratings_avg,
    ratings_tot,
    packaging,
  } = validatedFields.data;

  console.log("validatedFields.data");
  console.log(validatedFields.data);

  // Insert data into the database

  try {
    await sql`
      INSERT INTO "spirits" (
        "id", 
        "brand",
        "name",
        "short_name",
        "category",
        "sub_category",
        "price_normal",
        "price_current",
        "price_2_for",
        "volume",
        "unit",
        "ratings_avg",
        "ratings_tot",
        "packaging"
       )

        VALUES(
          ${id},
          ${brand},
          ${name},
          ${short_name},
          ${category},
          ${sub_category},
          ${price_normal},
          ${price_current},
          ${price_2_for},
          ${volume},
          ${unit},
          ${ratings_avg},  
          ${ratings_tot},
          ${packaging})
    `;
  } catch (error) {
    console.log("Failed to add new product: " + error);
    return {
      message: "Database Error - Failed to add new product: \n" + error,
      errors: JSON.parse(JSON.stringify(error)),
    };
  }
  return {
    success: true,
  };
}

export async function updateProduct(
  id: string,
  prevState: { message: unknown },
  formData: FormData,
) {
  const validatedFields = validateFormData(UpdateSchema, formData); // TODO: update schema vs add??
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Failed to update product. Please check the fields above",
    };
  }
  const {
    brand,
    name,
    short_name,
    category,
    sub_category,
    price_normal,
    price_current,
    price_2_for,
    volume,
    unit,
    ratings_avg,
    ratings_tot,
    packaging,
  } = validatedFields.data;

  // Insert data into the database
  try {
    await sql`
      UPDATE spirits
        SET 
          brand = ${brand},
          name = ${name},
          short_name = ${short_name},
          category = ${category},
          sub_category = ${sub_category},
          price_normal = ${price_normal},
          price_current = ${price_current},
          price_2_for = ${price_2_for},
          volume= ${volume},
          unit = ${unit},
          ratings_tot = ${ratings_tot},
          ratings_avg = ${ratings_avg},
          packaging = ${packaging}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.log("Failed to update product: " + error);
    return {
      message: "Database Error - Failed to update product: \n" + error,
    };
  }
  return {
    success: true,
  };
}

export async function deleteProduct(id: string) {
  console.log("delete Product");
  console.log(id);

  try {
    await sql`DELETE FROM spirits WHERE id = ${id}`;
    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to delete product: " + error);
    return {
      message: "Database Error - Failed to delete product:" + error,
    };
  }
}
