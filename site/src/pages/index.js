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
  </Layout>
)

export default Home
