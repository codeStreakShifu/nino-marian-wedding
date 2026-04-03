import { useState } from 'react'
import Hero from "../sections/Hero"
import Couple from "../sections/Couple"
import Story from "../sections/Story"
import EventDetails from "../sections/EventDetails"
import Gallery from "../sections/Gallery"
import Location from "../sections/Location"
import Countdown from "../sections/Countdown"
import RSVP from "../sections/RSVP"
import EnvelopeReveal from "../animations/EnvelopeReveal"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      {!showContent && <EnvelopeReveal onOpen={() => setShowContent(true)} />}
      {showContent && (
        <>
          <Hero />
          <Couple />
          <Story />
          <EventDetails />
          <Gallery />
          <Location />
          <Countdown />
          <RSVP />
        </>
      )}
    </>
  )
}