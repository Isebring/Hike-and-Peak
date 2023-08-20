import { Accordion, Container, createStyles, rem, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    fontSize: '24px',
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholderText =
  ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus repellat sint accusamus cum in, esse delectus odit consequuntur harum! Sit provident, accusamus ipsa quisquam ducimus minima facere ullam aspernatur ex.';

export function Faq() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Text align="center" className={classes.title}>
        Frequently Asked Questions
      </Text>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I reset my password?</Accordion.Control>
          <Accordion.Panel>{placeholderText}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Do you have a loyalty program?</Accordion.Control>
          <Accordion.Panel>{placeholderText}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How can I cancel an order?</Accordion.Control>
          <Accordion.Panel>{placeholderText}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Do you store credit card information securely?
          </Accordion.Control>
          <Accordion.Panel>{placeholderText}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            Where do I find my tracking number?
          </Accordion.Control>
          <Accordion.Panel>{placeholderText}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
