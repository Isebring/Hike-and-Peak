import {
  Button,
  Group,
  Modal,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';

function Contact() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) =>
        value.trim().length < 2
          ? 'Your name must have atleast 2 characters'
          : null,
      email: (value) => (!/^\S+@\S+$/.test(value) ? 'Invalid email' : null),
      subject: (value) =>
        value.trim().length < 3
          ? 'Your subject needs to have atleast 3 characters'
          : null,
      message: (value) =>
        value.trim().length < 10
          ? 'Your message needs to have atleast 10 characters'
          : null,
    },
  });
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <form
        onSubmit={form.onSubmit(() => {
          console.log('Form values:', form.values);
          setModalVisible(true);
        })}
      >
        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <TextInput
            withAsterisk
            label="Name"
            autoComplete="name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Email"
            autoComplete="email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <TextInput
          withAsterisk
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          withAsterisk
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />
        <Group position="center" mt="xl">
          <Button sx={{ background: '#1564BF' }} type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
      <Modal
        title="Message Sent"
        centered
        opened={modalVisible}
        onClose={closeModal}
        size="xs"
        zIndex={10}
      >
        <Text size="xs">
          Thank you! We'll get back to you as fast as possible.
        </Text>
        <Group position="right" mt="xl">
          <Button sx={{ background: '#1564BF' }} onClick={closeModal}>
            Close
          </Button>
        </Group>
      </Modal>
    </>
  );
}

export default Contact;
