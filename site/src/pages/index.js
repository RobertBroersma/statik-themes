import React from 'react'
import css from '@styled-system/css'
import { Link } from 'gatsby'
import {
  Header30,
  Layout,
  Faq6,
  Cta2,
  Button,
  TextField,
  Testimonials7,
} from '@statikly/ui-kit'

const Home = () => (
  <Layout>
    <Header30
      title="Statik"
      body="Website laten maken bij Statik"
      icon="/images/uploads/website.svg"
    />
    <Faq6
      title="Questions? Look here"
      intro="A Tweet to Kurt Eichenwald, a Strobe and a Seizure. Now, an Arrest."
      faqs={[
        {
          question: 'Starting Up a Business, With Little Ones Close By?',
          answer:
            'Every new computer that’s brought home from the store has an operating system installed onto it. But what most new computer users don’t realize, is that without an operating system, that computer would be a simple shell of possibilities. A powered computer lacking an operating system wouldn’t display anything more than a bunch of confusing text messages that describe the computer’s boot process. At the very end of this process, the computer looks for an operating system and if not found, it will prompt the user to tell it where it is.',
        },
        {
          question: 'Tech Roundup: How Trump Plans to Dump Net Neutrality?',
          answer:
            'Every new computer that’s brought home from the store has an operating system installed onto it. But what most new computer users don’t realize, is that without an operating system, that computer would be a simple shell of possibilities. A powered computer lacking an operating system wouldn’t display anything more than a bunch of confusing text messages that describe the computer’s boot process. At the very end of this process, the computer looks for an operating system and if not found, it will prompt the user to tell it where it is.',
        },
        {
          question: 'Gaymoji: A New Language for That Search?',
          answer:
            'Every new computer that’s brought home from the store has an operating system installed onto it. But what most new computer users don’t realize, is that without an operating system, that computer would be a simple shell of possibilities. A powered computer lacking an operating system wouldn’t display anything more than a bunch of confusing text messages that describe the computer’s boot process. At the very end of this process, the computer looks for an operating system and if not found, it will prompt the user to tell it where it is.',
        },
        {
          question:
            'Farhad’s and Mike’s Week in Tech: Is Juice the Next Tech Platform?',
          answer:
            'Every new computer that’s brought home from the store has an operating system installed onto it. But what most new computer users don’t realize, is that without an operating system, that computer would be a simple shell of possibilities. A powered computer lacking an operating system wouldn’t display anything more than a bunch of confusing text messages that describe the computer’s boot process. At the very end of this process, the computer looks for an operating system and if not found, it will prompt the user to tell it where it is.',
        },
        {
          question: 'Why Instagram Is Becoming Blazeon’s Next Blazeon?',
          answer:
            'Every new computer that’s brought home from the store has an operating system installed onto it. But what most new computer users don’t realize, is that without an operating system, that computer would be a simple shell of possibilities. A powered computer lacking an operating system wouldn’t display anything more than a bunch of confusing text messages that describe the computer’s boot process. At the very end of this process, the computer looks for an operating system and if not found, it will prompt the user to tell it where it is.',
        },
      ]}
    />
    <Cta2
      title="Money Back Guarantee"
      body="If I haven't any talent for writing books or newspaper articles, well, then I can always write for myself."
      widget={
        <Button as={Link} to="/home" variant="secondary" mode="light">
          View
        </Button>
      }
    />

    <Cta2
      title="Get It Now!"
      body="Criticism, even when you try to ignore it, can hurt. I have cried over many articles written about me, but I move on and I don't hold on to that."
      widget={
        <TextField
          label="E-mail"
          addOn={
            <Button
              size="large"
              variant="secondary"
              mode="light"
              shape="square"
              css={css({ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 })}
            >
              Send
            </Button>
          }
        />
      }
    />

    <Testimonials7
      title="What People Say"
      slides={[
        {
          avatar: 'http://placehold.it/180x180?text=Avatar 1',
          name: 'Brent Hudson',
          personTitle: 'Lawyer',
          body:
            'Under the Articles of Confederation, the national government had the power to issue commands to the several sovereign states, but it had no authority to govern individuals directly.',
        },
        {
          avatar: 'http://placehold.it/180x180?text=Avatar 2',
          name: 'Hud Brenson',
          personTitle: 'Attorney',
          body:
            'The national government had the power to issue commands to the several sovereign states, but it had no authority to govern individuals directly, under the Articles of Confederation.',
        },
        {
          avatar: 'http://placehold.it/180x180?text=Avatar 3',
          name: 'Brud Henson',
          personTitle: 'Counselor',
          body:
            'The national government had the power to issue commands to the several sovereign states, under the Articles of Confederation, but it had no authority to govern individuals directly.',
        },
        {
          avatar: 'http://placehold.it/180x180?text=Avatar 4',
          name: 'Hens Brudson',
          personTitle: 'Advocate',
          body:
            'But it had no authority to govern individuals directly, The national government had the power to issue commands to the several sovereign states, under the Articles of Confederation. Extra text to make it longer than the others. But it had no authority to govern individuals directly, The national government had the power to issue commands to the several sovereign states, under the Articles of Confederation. Extra text to make it longer than the others.',
        },
        {
          avatar: 'http://placehold.it/180x180?text=Avatar 5',
          name: 'Bren Husron',
          personTitle: 'Jurist',
          body:
            'The national government had the power to issue commands to the several sovereign states, under the Articles of Confederation, but it had no authority to govern individuals directly. Extra',
        },
      ]}
    />
  </Layout>
)

export default Home
