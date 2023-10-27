
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Services() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}>
              Notre Engagement :
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
            L'excellence
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          À Alain Terrieur, nous nous engageons à offrir un service exceptionnel à chaque étape de votre projet. De la planification minutieuse à l'exécution précise, notre équipe s'efforce continuellement d'atteindre l'excellence. Votre satisfaction est notre priorité absolue.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
              En savoir plus
            </Button>
           
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'data:image/jpeg;base64,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'
              }
            />
          </Box>
        </Flex>
      </Stack>


      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
                    <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          />
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <IconButton
              aria-label={'Play Button'}
              variant={'ghost'}
              _hover={{ bg: 'transparent' }}
              icon={<PlayIcon w={12} h={12} />}
              size={'lg'}
              color={'white'}
              position={'absolute'}
              left={'50%'}
              top={'50%'}
              transform={'translateX(-50%) translateY(-50%)'}
            />
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'https://brandbyme.co.uk/wp-content/uploads/2023/04/5-1.png'
              }
            />
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.300',
                zIndex: -1,
              }}>
              Rencontrez 
            </Text>
            <br />
            <Text as={'span'} color={'red.300'}>
            Notre Équipe Passionnée
            </Text>
          </Heading>
          <Text color={'gray.600'}>
          Derrière chaque transformation intérieure réussie se trouve une équipe passionnée. Chez  Alain Terrieur, nous sommes fiers de notre équipe dévouée de professionnels expérimentés. Chacun de nos membres apporte une expertise unique, garantissant un résultat final exceptionnel.
          </Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.300' }}>
              Nous contacter
            </Button>
          </Stack>
        </Stack>

      </Stack>

    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column', md: 'row' }}>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '30%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'red.400',
              zIndex: -1,
            }}>
            Innovation et Créativité 
          </Text>
          <br />
          <Text as={'span'} color={'red.400'}>
          au cœur de Notre Travail 

          </Text>
        </Heading>
        <Text color={'gray.500'}>
        Nous croyons en l'innovation constante et en la créativité sans limites. En combinant les dernières tendances avec des idées originales, nous repoussons les limites du design intérieur. Laissez-nous réinventer votre espace de vie avec des concepts novateurs et un design à couper le souffle.
        </Text>
        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <Button
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            >
            Acceuil
          </Button>
        </Stack>
      </Stack>
      <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
        <Blob
          w={'150%'}
          h={'150%'}
          position={'absolute'}
          top={'-20%'}
          left={0}
          zIndex={-1}
          color={useColorModeValue('red.50', 'red.400')}
        />
        <Box
          position={'relative'}
          height={'300px'}
          rounded={'2xl'}
          boxShadow={'2xl'}
          width={'full'}
          overflow={'hidden'}>
          <IconButton
            aria-label={'Play Button'}
            variant={'ghost'}
            _hover={{ bg: 'transparent' }}
            icon={<PlayIcon w={12} h={12} />}
            size={'lg'}
            color={'white'}
            position={'absolute'}
            left={'50%'}
            top={'50%'}
            transform={'translateX(-50%) translateY(-50%)'}
          />
          <Image
            alt={'Hero Image'}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={'100%'}
            src={
              'data:image/jpeg;base64,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'
            }
          />
        </Box>
      </Flex>
    </Stack>
  </Container>
  
  )
}

const PlayIcon = createIcon({
  displayName: 'PlayIcon',
  viewBox: '0 0 58 58',
  d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
})

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  )
}