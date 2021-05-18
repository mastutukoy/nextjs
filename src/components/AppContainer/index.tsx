import {
    Box,
    FormControl,
    FormHelperText, IconButton,
  } from '@material-ui/core'
  import { motion } from 'framer-motion';
  import { EnviteAppBar } from '../AppBar/Default';
  import useDialog from '../../HOC/withDialog';
  import { ReactNode } from 'react';
  import pageTransition from '../../Infrastructure/Animation/pageTransition';
  
  
  const AppContainer = (props: {
    children:ReactNode,
  }) => {
    const { Dialog, showMessage } = useDialog()
  
    return (
      <motion.div
        variants={pageTransition}
        animate='active'
        exit='inactive'
        initial={pageTransition.initial}
        transition={pageTransition.transition}
        style={{ display: 'flex', flex: 1 }}
      >
        <EnviteAppBar
          title='Test1'
          enableBack={true}
        />
        <Dialog></Dialog>
        <Box
            flex={1}
            display='flex'
            flexDirection='column'
            minHeight='100vh'
            bgcolor='#F1F2F3'
        >
          <Box
            maxWidth='576px'
            width='100%'
            mx='auto'
            flex={1}
            display='flex'
            flexDirection='column'
          >
            <Box flex={1} flexDirection='column' mt='56px' display='flex'>
              {props.children}
            </Box>
          </Box>
        </Box>
      </motion.div>
    )
  }
  
  export default AppContainer