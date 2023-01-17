"use client";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {GridItem, VStack, Box, Flex, Spacer, Grid, HStack, Text, Stack } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div className='App'>
      <Flex justify={'space-between'} align = 'center'>
    <Box as='section' bg={'green'} w='100px' h={'200px'}>This is1 </Box>
    <Box as='section' bg={'blue'} w='100px' h={'200px'}>This is2</Box>
    <Box as='section' bg={'red'} w='200px' h={'100px'}>This is3</Box>
    <Box as='section' bg={'tomato'} w='100px' h={'200px'}>This is4</Box>
    </Flex>
    
    <Flex>
    <Box p='4' bg='red.400'>
      Box 1
    </Box>
    <Spacer />
    <Box p='4' bg='green.400'>
      Box 2
    </Box>
  </Flex>

  <Box>
  <Text>Flex and Spacer: Full width, equal Spacing</Text>
  <Flex>
    <Box bg={'tomato'} w='150px' h={'50'} />
    <Spacer />
    <Box bg={'tomato'} w='200px' h={'50'} />
    <Spacer />
    <Box bg={'tomato'} w='220px' h={'50'} />
  </Flex>

  <Text>Grid: The children start at the beginning, the 1/3 mark and 2/3 mark</Text>
  <Grid gap='6' templateColumns = 'repeat(4,1fr)'>
    <Box bg={'tomato'} w='150px' h={'50'} />
    <Box bg={'tomato'} w='200px' h={'50'} />
    <Box bg={'tomato'} w='220px' h={'50'} />
  </Grid>
  </Box>

  <Stack spacing='24px' direction={'row'}>
    <Box as='section' bg={'green'} w='100px' h={'200px'}>This is1 </Box>
    <Box as='section' bg={'blue'} w='100px' h={'200px'}>This is2</Box>
    <Box as='section' bg={'red'} w='200px' h={'100px'}>This is3</Box>
    <Box as='section' bg={'tomato'} w='100px' h={'200px'}>This is4</Box>
  </Stack>

  <HStack spacing='24px'>
    <Box as='section' bg={'purple'} w='100px' h={'200px'}>This is1 </Box>
    <Box as='section' bg={'orange'} w='100px' h={'200px'}>This is2</Box>
    <Box as='section' bg={'Yellow'} w='200px' h={'100px'}>This is3</Box>
    <Box as='section' bg={'brown'} w='100px' h={'200px'}>This is4</Box>
  </HStack>
  <VStack spacing='24px'>
    <Box as='section' bg={'purple'} w='100px' h={'200px'}>This is1 </Box>
    <Box as='section' bg={'orange'} w='100px' h={'200px'}>This is2</Box>
    <Box as='section' bg={'Yellow'} w='200px' h={'100px'}>This is3</Box>
    <Box as='section' bg={'brown'} w='100px' h={'200px'}>This is4</Box>
  </VStack>

  <Grid
  h='200px'
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={3} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>


<Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10' bg='tomato' />
  <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
</Grid>

  </div>
  
  )
}
