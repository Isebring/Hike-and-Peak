import { Box, Container, Text, Title } from '@mantine/core';
import Contact from '../components/Contact';
import { Faq } from '../components/Faq';

function Contactpage() {
  return (
    <Container>
      <Box sx={{ marginTop: '6rem' }}>
        <Title sx={{ fontSize: '44px' }} ta="center" mt="xl" order={1}>
          Get in touch
        </Title>
        <Text
          sx={{ fontSize: '14px', marginBottom: '5rem' }}
          mt="md"
          ta="center"
        >
          Feel free to get in touch with us regarding any questions that you
          might have and we will get back to you as fast as possible, usually
          within 24 hours.{' '}
        </Text>
        <Text sx={{ fontSize: '14px', marginBottom: '5rem' }}>
          If you are in a rush you can visit any of our stores or{' '}
          <a href="tel:00000000">call us at +46123456789</a>
        </Text>
        <Contact />
        <Faq />
      </Box>
    </Container>
  );
}

export default Contactpage;
