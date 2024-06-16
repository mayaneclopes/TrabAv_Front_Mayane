import { Box, Text } from "@chakra-ui/react"

const Header = ({ title }) => {
    return (
        <Box
            bgColor="red.50"
            opacity="40%"
            w="100%"
            padding={4}>
            <Text color="gray.800">{title}</Text>
        </Box>
    );
}

export default Header;