import React from 'react'
import Head from 'next/head'
const HeadComponent = ({title}:{title:string}) => {
  return (
    <Head>
        <link rel="icon" type="image/png" href='/devchallenges.png' />
        <title>{title}</title>
    </Head>
  )
}

export default HeadComponent