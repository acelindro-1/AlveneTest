import React from 'react'
import ListingImg from './listings/ListingImg'
import Container from './Container'

export const listImages = [
    {
      id:'01',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/arctic.jpg'
    },
    {
      id:'02',
      label: 'Barns',
    //   icon: IoDiamond,
    imgLoc: '/images/barns.jpeg'
    },
    {
      id:'03',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/beach.jpg'
    },
    {
      id:'04',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/camping.jpg'
    },
    {
      id:'05',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/castle.jpg'
    },
    {
      id:'06',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/cave.jpg'
    },
    {
      id:'07',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/countryside.jpg'
    },
    {
      id:'08',
      label: 'Arctic',
    //   icon: GiBarn,
      imgLoc: '/images/desert.jpg'
    },
      {
        id:'09',
        label: 'Island',
      //   icon: GiBarn,
        imgLoc: '/images/island.jpg'
      },
      {
        id:'10',
        label: 'Lakes',
      //   icon: GiBarn,
        imgLoc: '/images/lakes.jpg'
      },
      {
        id:'11',
        label: 'Lux',
      //   icon: GiBarn,
        imgLoc: '/images/lux.jpg'
      },
      {
        id:'12',
        label: 'Modern',
      //   icon: GiBarn,
        imgLoc: '/images/modern.jpg'
      },
      {
        id:'13',
        label: 'Pools',
      //   icon: GiBarn,
        imgLoc: '/images/pools.jpg'
      },
      {
        id:'14',
        label: 'Skiing',
      //   icon: GiBarn,
        imgLoc: '/images/skiing.jpg'
      },
      {
        id:'15',
        label: 'Windmill',
      //   icon: GiBarn,
        imgLoc: '/images/windmill.jpg'
      },
      
]

function Images({}) {
  return (
    <Container>
    <div
      className="
      mt-10
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8
    "
    >
      {listImages.map((item) => (
        <ListingImg 
          key={item.id}
          // label={item.label}
        //   icon={item.icon}
        //   selected={category === item.label}
           imgLoc={item.imgLoc}
        />
      ))}
    </div>

    </Container>
  )
}

export default Images