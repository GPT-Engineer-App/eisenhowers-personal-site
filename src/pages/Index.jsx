import { Box, Flex, Heading, Text, Image, VStack, SimpleGrid } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Heading as="h1" size="2xl" mb={2}>Dwight D. Eisenhower</Heading>
        <Text fontSize="xl">34th President of the United States</Text>
      </Flex>
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">Biography</Heading>
          <Text mt={4}>
            Dwight David Eisenhower was an American military officer and statesman who served as the 34th president of the United States from 1953 to 1961. During World War II, he became a five-star general in the Army and served as Supreme Commander of the Allied Expeditionary Forces in Europe.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">Achievements</Heading>
          <Text mt={4}>
            Eisenhower's tenure as president was marked by prosperity and peace. He managed Cold War-era tensions with the Soviet Union under the looming threat of nuclear weapons, ended the Korean War, authorized the establishment of NASA, and launched the Interstate Highway System.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg">Photo Gallery</Heading>
          <SimpleGrid columns={3} spacing={4}>
            <Image src="/images/eisenhower1.jpg" alt="Eisenhower in military uniform" boxSize="250px" />
            <Image src="/images/eisenhower2.jpg" alt="Eisenhower giving a speech" boxSize="250px" />
            <Image src="/images/eisenhower3.jpg" alt="Eisenhower with other world leaders" boxSize="250px" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;