import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '6gizdono',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skiGmqyntVWvfljOBYLs9DNG4UkxQovpnEPDU0aiyU7JTCuwr5le8o24Bpp36gsddngHvgaVjRcakXRVvXwlxRvMPOZ6hKqfDcwsqQ924iXss2jxehY7rNoRDMv28zu2TuyGctAvHN97pBHwtZVbSETKHq76vPWORK8V8M3oHkmd1yVQEq5B',
  useCdn: false,
})
