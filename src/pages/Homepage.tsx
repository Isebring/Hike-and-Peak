import { Box, Container, SimpleGrid, Title } from '@mantine/core';
import Herosection from '../components/Herosection';
import Products from '../components/Products';
import { products } from '../data/products';

function Homepage() {
  return (
    <Box>
      <Herosection />
      <Title
        sx={{ fontSize: '44px', marginTop: '5rem', marginBottom: '2rem' }}
        ta="center"
      >
        Popular products
      </Title>
      <Container size="xl">
        <SimpleGrid
          cols={3}
          spacing="xl"
          verticalSpacing="xl"
          breakpoints={[
            { maxWidth: '85rem', cols: 2, spacing: 'md' },
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
          ]}
        >
          {products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Homepage;
