import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  pageNumber,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="sm"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: 'pink.500', cursor: 'not-allowed' }}
      >
        {pageNumber}
      </Button>
    );
  }
  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{ bg: 'gray.500' }}
      onClick={() => onPageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );
}
