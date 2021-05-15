import { Box, Button, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Todo = ({ todo }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Box
        w="300px"
        borderWidth="1px"
        borderRight="lg"
        overflow="hidden"
        bg="white"
        m={5}
      >
        <Box p="6" display="flex" flexDirection="column">
          <Text> {todo.description}</Text>
          <Button
            mt="10"
            bg="#7928CA"
            _hover={{
              bg: '#9e47f5',
              fontWeight: '700',
            }}
            color="white"
            fontWeight="600"
          >
            Complete!
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Todo;
