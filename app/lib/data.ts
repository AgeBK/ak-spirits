import { neon } from "@neondatabase/serverless";
import { SpiritProps } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
// console.log("data.ts");

// console.log(process.env.DATABASE_URL);

const sql = neon(process.env.DATABASE_URL);

export async function fetchSpirits() {
  // noStore() prevents the response from being cached. (good for dev) TODO
  noStore();

  try {
    const data = await sql`
      SELECT   
          id,
          brand,
          category, 
          sub_category,
          name,
          short_name,
          price_normal,
          price_current,
          price_2_for      
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
    const data = await sql`
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
          packaging
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

    const product = data;
    console.log(product);

    // return product ? camelise(product) : undefined; // convert db column names to camel case (eg: price_normal to priceNormal)
    return product;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch distinct spirits.");
  }
}

// export async function fetchspiritsByCategory(query: string) {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE category=${query}
//       ORDER BY ratings_average DESC
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits); // convert db column names to camel case (eg: price_normal to priceNormal)
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits by category.");
//   }
// }

// export async function fetchspiritsByCategoryAndVariety(
//   category: string,
//   variety: string,
// ) {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE category=${category} AND variety=${variety}
//       ORDER BY ratings_average DESC
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits); // convert db column names to camel case (eg: price_normal to priceNormal)
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits by category and variety.");
//   }
// }

// export async function fetchspiritsPriceTwoFor(price: number) {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_two_for=${price}
//       ORDER BY ratings_average DESC
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits price 2 for.");
//   }
// }

// export async function fetchspiritsOnSpecial() {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_current < price_normal
//       ORDER BY ratings_average DESC
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits on special.");
//   }
// }

// export async function fetchspiritsBySearchTerm(query: string) {
//   noStore();

//   try {
//     const data = await sql`
//     SELECT *
//     FROM spirits
//     WHERE name ILIKE ${`%${query}%`}
//     `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits by search term.");
//   }
// }

// export async function fetchspiritsByBrand(query: string) {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE brand=${query}
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits); // convert db column names to camel case (eg: price_normal to priceNormal)
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits by brand.");
//   }
// }

// export async function fetchspiritsPriceTwoForDeals() {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_two_for > 0
//       ORDER BY ratings_average DESC
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits two for deals.");
//   }
// }

// export async function fetchspiritsPriceTenPercentOff() {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_percent_off = 10
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits ten percent off.");
//   }
// }

// export async function fetchspiritsTenAndLess() {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_current <= 10 OR price_normal <= 10
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits ten and less.");
//   }
// }

// export async function fetchspiritsPriceTenFor100() {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_ten_for = 100
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits ten for 100.");
//   }
// }
// export async function fetchspiritsPriceDrop() {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT *
//       FROM spirits
//       WHERE price_current < price_normal
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch spirits price drop.");
//   }
// }

// export async function fetchCarouselspirits() {
//   noStore();

//   // fetch 12 random spirits that are on sale
//   try {
//     const data = await sql`
//       SELECT * FROM spirits
//       WHERE price_current != price_normal
//       ORDER BY RANDOM()
//       LIMIT 12
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch carousel spirits.");
//   }
// }

// export async function fetchCarouselspiritsByVariety(query: string) {
//   noStore();

//   try {
//     const data = await sql`
//       SELECT * FROM spirits
//       WHERE variety=${query}
//       LIMIT 12
//       `;

//     const spirits = data.rows;
//     return cameliseArr(spirits);
//   } catch (err) {
//     console.error("Database Error:", err);
//     throw new Error("Failed to fetch carousel spirits by variety.");
//   }
// }
