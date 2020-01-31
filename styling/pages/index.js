
import { ThemeProvider, CSSReset, Box, Heading, Grid, Switch, Flex, FormLabel } from '@chakra-ui/core';

export default () => (
    <ThemeProvider>
        <CSSReset />
        <Heading fontSize={['xs', 'xl', '4xl']}>Mastering Next.js</Heading>
        <Box
            bg="teal.400"
            height="40px"
            width={['100%', '50%']}
        />
        <Grid templateColumns="repeat(2, 1fr)" gap={6} >
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
        </Grid>
        <Flex justify="center" align="center">
            <FormLabel htmlFor="email-alerts">Enable email alerts?</FormLabel>
            <Switch id="email-alerts" />
        </Flex>
    </ThemeProvider>
);