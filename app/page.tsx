import Footer from '@/library/components/organisms/Footer'
import HeroPage from '@/library/components/organisms/HeroPage'
import StickyScrollPage from '@/library/components/organisms/StickyScrollPage'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroPage />
      <StickyScrollPage />
      <Footer />
    </div>
  )
}

export default page