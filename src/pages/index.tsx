import { MapProps } from 'components/Map'
import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import { GetPlacesQuery } from 'grapqhl/generated/graphql'
import { GetStaticProps } from 'next'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
