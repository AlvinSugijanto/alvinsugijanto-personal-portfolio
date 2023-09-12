import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ChakraProvider,
  Text
} from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function PortfolioModal({ isOpen, onOpen, onClose, portofolio }) {

  return (
    <ChakraProvider>
      {portofolio && (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'}>
          <ModalOverlay />
          <ModalContent maxWidth="1000px" marginTop="1rem" marginBottom="1rem" maxHeight="calc(100vh - 50px)">
            <ModalHeader className='font-bricolage'>{portofolio.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Swiper
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {portofolio.image.map((image, index) => (

                  <SwiperSlide key={index}>
                    <img src={image} alt="" className='border-4 border-slate-900 cursor-grab' />
                  </SwiperSlide>
                ))}

              </Swiper>
              <p className='font-bricolage font-semibold mt-2'>Tech Stack</p>
              <div className="flex items-center gap-4 mt-2">
                {portofolio.stack.map((stack) => (
                  <div className="flex gap-2 items-center border rounded-lg py-1 px-2 bg-slate-300" key={stack.name}>
                    <img src={stack.image} alt="" className='w-6 h-6' />
                    <p className='font-semibold text-md font-mono'>{stack.name}</p>
                  </div>
                ))}
              </div>
              <p className='font-bricolage font-semibold mt-2'>Description</p>
              <p className='mt-2'>{portofolio.description}</p>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue'>View Live Website</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </ChakraProvider>
  );
}

export default PortfolioModal;
