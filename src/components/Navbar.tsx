import {
  Burger,
  Container,
  Group,
  Header,
  Paper,
  Transition,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

const headerHeight = rem(65);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    borderBottom: 'none',
    transition: 'transform 0.3s ease-in-out',
  },

  dropdown: {
    position: 'absolute',
    top: headerHeight,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    background: '#070B2F',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    background: '#F5F5FA',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: '#000000',
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,

    '&:hover': {
      backgroundColor: '#BF7015',
      color: '#FFFF',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: '#BF7015',
      color: '#FFFF',
    },
  },
}));

export interface NavbarProps {
  links: { link: string; label: string }[];
}

export function Navbar({ links }: NavbarProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const onScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollingDown = currentScrollTop > lastScrollTop;

      if (scrollingDown) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const headerTransform = isVisible ? 'translateY(0)' : 'translateY(-100%)';

  function handleReturnClick() {
    setActive(links[0].link);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function scrollBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const navigate = useNavigate();

  const handleNavigateClick = (link: string) => {
    setActive(link);
    navigate(link);
    close();
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={() => handleNavigateClick(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header
      height={headerHeight}
      className={classes.root}
      style={{ transform: headerTransform }}
    >
      <Container fluid className={classes.header}>
        <Group ta="start">
          <Link to="./" onClick={handleReturnClick}>
            <img
              alt="Logo of Hike and Peak"
              src={logo}
              width="192"
              height="54"
            ></img>
          </Link>
        </Group>
        <Group onClick={scrollBackToTop} spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          color="white"
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="md"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper
              onClick={scrollBackToTop}
              className={classes.dropdown}
              style={styles}
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}
