
import { defineEventHandler } from "#imports";

interface Mountain {
    title: string;
    description: string;
}

const mountainDb: Mountain[] = [
    {
    title: 'Mount Everest',
    description: 'The highest mountain in the world, located in the Himalayas.'
    },
    {
        title: 'Mount Fuji',
        description: 'An active stratovolcano in Japan, famous for its symmetrical cone shape.'
    },
]

export default defineEventHandler((event) => {
    // Extract the slug from the URL params
    // const { slug } = event.context.params
    // const slug = route.params as { slug: any }
    const params = event.context.params;
    if (!params || !params.slug) {
        return { message: 'Slug is missing or invalid' };
    }

    const slug = params.slug;

    // Find the mountain data based o the slug
    const mountain = mountainDb.find((m) => m.title.toLowerCase().replace(/\s+/g, '-') === slug)

    // If the mountain is found, return it, otherwise return a 404
    if (mountain) {
        return mountain
    } else {
        return { message: 'mountain not found' }
    }
})




// Connecting to real Database (Optional)
// import { defineEventHandler } from 'h3'
// import { prisma } from '~/server/db'

// export default defineEventHandler(async (event) => {
//   const { slug } = event.context.params

//   // Query the database for the mountain by slug
//   const mountain = await prisma.mountain.findUnique({
//     where: {
//       slug: slug
//     }
//   })

//   if (mountain) {
//     return mountain
//   } else {
//     return { message: 'Mountain not found' }
//   }
// })