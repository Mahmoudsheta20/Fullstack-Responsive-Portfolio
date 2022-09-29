import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'va6i9pj8',
    dataset: 'production',
    apiVersion: '2022-09-01',
    useCdn: true,
    token: 'skKtccZX0v0h7e8OH7vxiSg3rBIzH0MHwLkIg0b7wmrmS5Vv1t0HcPzeWdcv2ulpRVjg69rKvjov0CxL1rchJhMSbRHL4iCIOb92eZhPpbYAr0jhImiL9TzCOn0OeUapYNWt0662hwpyVe2OOYsVZk6S0BWZA7UNLqIih991cyMdAqI4rnmm'
})

const builder = imageUrlBuilder(client)
export const urlFor = source => builder.image(source)