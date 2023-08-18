import {
  Box,
  Container,
  List,
  Text,
  ThemeIcon,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { Check } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}));

function About() {
  const { classes } = useStyles();
  return (
    <Box>
      <Container size="xl">
        <Box className={classes.inner}>
          <Box className={classes.content}>
            <Title className={classes.title}>
              A{' '}
              <span
                style={{
                  background: '#BF7015',
                  color: 'white',
                  paddingRight: '0.5rem',
                  paddingLeft: '0.5rem',
                }}
              >
                story
              </span>{' '}
              of <br />
              passion for hiking
            </Title>
            <Text mt="md">
              Hike and Peak was born out of a shared passion for the great
              outdoors and a desire to equip adventurers with the finest hiking
              gear. Founded by a group of avid hikers, Hike and Peak aims to be
              the go-to destination for outdoor enthusiasts seeking high-quality
              equipment that can withstand the rigors of nature.
            </Text>
            <Text mt="md">
              With a deep understanding of the challenges faced by hikers, Hike
              and Peak curates a meticulously selected collection of hiking
              equipment, ranging from sturdy backpacks and durable footwear to
              reliable navigation tools and essential camping gear. Each product
              undergoes rigorous testing to ensure it meets the highest
              standards of performance and durability. At Hike and Peak, we
              believe that the right equipment can make all the difference in an
              unforgettable hiking experience. Our team of outdoor enthusiasts
              is dedicated to providing exceptional customer service, expert
              advice, and reliable recommendations to help our customers embark
              on their next adventure with confidence.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon
                  style={{ background: '#BF7015' }}
                  size={20}
                  radius="xl"
                >
                  <Check
                    style={{ background: '#BF7015', border: 'none' }}
                    size={rem(12)}
                    strokeWidth={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>High-quality gear</b> – Hike and Peak offers a curated
                selection of high-quality hiking equipment that has been
                rigorously tested for performance and durability.
              </List.Item>
              <List.Item>
                <b>Expert advice</b> – Hike and Peak provides expert advice and
                reliable recommendations to help customers choose the right gear
                for their hiking adventures.
              </List.Item>
              <List.Item>
                <b>Embrace the wilderness</b> – Hike and Peak encourages you to
                embrace the wilderness and connect with nature by offering gear
                that enhances your outdoor experience, allowing you to truly
                become "One With Nature."
              </List.Item>
            </List>
          </Box>
          <img
            width="50%"
            height="100%"
            src="https://images.unsplash.com/photo-1634305388037-919237cf12a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            className={classes.image}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default About;
