'use client'

import Head from 'next/head'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Divider,
  Wrap,
  WrapItem,
  SimpleGrid,
  StackDivider,
  Flex

} from '@chakra-ui/react'
import { 
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp
 } from "react-icons/io5";
import { ReactElement } from 'react';

 interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
  }

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }

export default function Hero() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 30, md: 36 }}>

          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'120%'}>
            Bienvenue chez Alain Terrieur <br />
          </Heading>
          <Text color={'gray.500'}>
          Votre Partenaire de Confiance pour les Travaux d'Intérieur Exceptionnels !<br/>
          À  Alain Terrieur, nous sommes passionnés par la création d'espaces intérieurs qui allient fonctionnalité, 
          élégance et confort. Que vous rêviez d'une cuisine moderne, d'une salle de bains luxueuse ou d'un salon chaleureux, 
          notre équipe de professionnels qualifiés est là pour donner vie à votre vision.
          </Text>
          <Divider marginTop="5" />

          <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Une action à 360° sur votre rénovation d’intérieur</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Découvrez nos réalisations précédentes et laissez-vous inspirer par notre portfolio. Contactez-nous dès aujourd'hui pour discuter de votre projet de travaux d'intérieur. Chez Alain Terrieur, nous transformons les espaces sur plusieurs corps de métier pour coller au mieux à vos attentes.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Rénovation Intérieure Complète :'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Revêtements de Sol et de Mur :'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Menuiseries Intérieures :'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>

        <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                
              </Box>
            </Box>
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Approche Personnalisée :
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Nous comprenons que chaque projet est unique. Nous travaillons en étroite collaboration avec vous pour comprendre vos besoins et vos désirs, afin de créer un espace qui vous ressemble.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                
              </Box>
            </Box>
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Transparence et Honnêteté:
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Nous croyons en une communication ouverte et transparente à chaque étape du projet. Pas de surprises désagréables, seulement un service fiable et honnête.
            </Text>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                
              </Box>
            </Box>
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Délais Respectés :
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Nous comprenons l'importance de votre temps. Nous nous engageons à respecter les délais convenus et à livrer votre projet à temps.
            </Text>
          </Box>
        </WrapItem>
      </Wrap>

        </Stack>
      </Container>
    </>
  )
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
})