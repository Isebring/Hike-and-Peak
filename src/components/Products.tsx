import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  List,
  Text,
} from '@mantine/core';

import { Product } from '../data/products';

function Products({ product }: { product: Product }) {
  return (
    <>
      <Card sx={{}} shadow="xl">
        <Card.Section>
          <Image src={product.image} height={230} fit="cover"></Image>
          <Box pl="md" pr="md">
            <Group
              mt="xl"
              mb="xl"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text sx={{ fontSize: '24px' }}>{product.title}</Text>
              <Badge color="blue" variant="light" size="lg">
                New!
              </Badge>
            </Group>
            <List>
              {Array.isArray(product.summary) &&
                product.summary.map((item) => (
                  <List.Item key={item}>{item}</List.Item>
                ))}
            </List>
          </Box>
        </Card.Section>
        <Group position="left" mt="md" mb="xs">
          <Button variant="outline" mt="md" radius="md">
            Buy now
          </Button>
          <Button variant="light" mt="md" radius="md">
            Add to cart
          </Button>
          <Text
            sx={{ marginLeft: 'auto', marginTop: '.5rem', fontSize: '21px' }}
          >
            {product.price}€
          </Text>
        </Group>
      </Card>
    </>
  );
}

export default Products;
