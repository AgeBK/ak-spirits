import { neon } from "@neondatabase/serverless";
import { SpiritProps } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { capitalizeFirstLetter, removeHyphen } from "./utils";
const sql = neon(process.env.DATABASE_URL);

// Promise<Record<string, string | number>>[]
export async function fetchSpirits() {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();

  try {
    // const data: Record<string, string | number>[] = await sql`
    const data: Record<string, SpiritProps>[] = await sql`
      SELECT   
          id,
          brand,
          category, 
          sub_category,
          name,
          short_name,
          price_normal,
          price_current,
          price_2_for,
          price_special,
          ratings_avg,
          packaging
      FROM spirits
      `;

    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch spirits.");
  }
}

export async function fetchSpiritById(query: string) {
  noStore();

  try {
    const data: Record<string, SpiritProps>[] = await sql`
      SELECT
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
          price_special
      FROM spirits
      WHERE id=${query}
      `;

    const product = data[0];
    // return product ? camelise(product) : undefined; // convert db column names to camel case (eg: price_normal to priceNormal)
    return product;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch spirit by id.");
  }
}

// select distinct sub_category from spirits order by sub_category
export async function fetchDistinctSpirits() {
  noStore();

  try {
    const data = await sql`
      SELECT
        DISTINCT sub_category 
        FROM spirits 
        ORRDER BY sub_category
      `;

    // return product ? camelise(product) : undefined; // convert db column names to camel case (eg: price_normal to priceNormal)
    return data;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch distinct spirits.");
  }
}

// export async function fetchProductPageData(id: string, subCat: string) {
//   noStore();

//   console.log("fetchProductPageData DATA");

//   try {
//     const [product, relatedProducts] = await Promise.all([
//       sql`
//       SELECT
//           id,
//           brand,
//           name,
//           short_name,
//           category,
//           sub_category,
//           price_normal,
//           price_current,
//           price_2_for,
//           volume,
//           unit,
//           ratings_avg,
//           ratings_tot,
//           packaging,
//           price_special
//       FROM spirits
//       WHERE id=${id}`,
//       sql`
//       SELECT *
//         FROM spirits
//         WHERE sub_category=${subCat}
//         AND id <> ${id}
//         ORDER BY RANDOM()
//         LIMIT 6`,
//     ]);
//     console.log([product, relatedProducts]);

//     return [product, relatedProducts]; // convert db column names to camel case (eg: price_normal to priceNormal)
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch product page data.");
//   }
// }

export async function fetch6Bot() {
  noStore();

  try {
    const data = await sql`
      SELECT *
        FROM spirits
        ORDER BY RANDOM()
        LIMIT 6
      `;

    return data; // convert db column names to camel case (eg: price_normal to priceNormal)
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch 6 bottles by subcategory.");
  }
}

export async function fetch6BotBySubCategory(query: string, id: string) {
  noStore();

  try {
    const data = await sql`
      SELECT *
        FROM spirits
        WHERE sub_category=${query}
        AND id <> ${id}
        ORDER BY RANDOM()
        LIMIT 6
      `;

    return data; // convert db column names to camel case (eg: price_normal to priceNormal)
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch 6 bottles by subcategory.");
  }
}

export async function fetchSalesItems(query: number) {
  noStore();

  // fetch 6 random spirits that are on sale
  try {
    // const data: Record<string, SpiritProps>[] = await sql`
    const data: Record<string, SpiritProps>[] = await sql`
      SELECT * FROM spirits
      WHERE price_special = true
      AND packaging <> 'Box'
      OR price_2_for > 0 
      AND packaging = 'Box'
      ORDER BY RANDOM()
      LIMIT ${query}
      `;
    // const spirits = data;
    return data as unknown as SpiritProps;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch sales 6 bottles.");
  }
}
