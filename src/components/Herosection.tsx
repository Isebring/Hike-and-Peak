import {
  Box,
  Button,
  Container,
  Text,
  Title,
  createStyles,
  rem,
} from '@mantine/core';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 95%), url(https://images.unsplash.com/photo-1587221703223-181d78a8fc4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80)',
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontWeight: 700,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.9,
    maxWidth: rem(500),

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  cta: {
    paddingLeft: rem(40),
    paddingRight: rem(40),
  },
}));

function Herosection() {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Container size="lg">
        <Box className={classes.inner}>
          <Box className={classes.content}>
            <Title className={classes.title}>
              We are{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue' }}
              >
                one
              </Text>{' '}
              with nature
            </Title>

            <Text className={classes.description} mt={30}>
              Everything you'll need for your next hiking adventure awaits.
            </Text>
            <Link to="/about">
              <Button
                variant="gradient"
                gradient={{ from: 'cyan', to: 'blue' }}
                size="lg"
                className={classes.cta}
                mt={40}
              >
                Discover
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Herosection;
