import { Box, Flex, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joel Modesto</Text>
          <Text color="gray.300" fontSize="small">
            joelmss93@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Joel Modesto"
        src="https://github.com/joelmss93.png"
      />
    </Flex>
  );
}
