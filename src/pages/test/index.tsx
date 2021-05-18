import { updateTemplateType } from '../../Infrastructure/Redux/Store/TemplateStore';
import {
  Box, Button, Typography,
} from '@material-ui/core'
import Router from 'next/router'
import {default as React, useEffect, useState} from 'react'
import useDialog from '../../HOC/withDialog'
import withLoader, { withLoaderProps } from '../../HOC/withLoader'
import { ApplicationReducers } from '../../Infrastructure/Redux/Store'

import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import AppContainer from '../../components/AppContainer';

type Props = withLoaderProps &
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> & {guestId: string}

const Test = (props: Props) => {
  const { Dialog, showMessage } = useDialog()

  const handleClick = (params) => {
    Router.push('../test2')
  }

  
  return (
    <AppContainer>
      <Box bgcolor='#FFFFFF' p='24px'>
        <Typography> {props.test} </Typography>
        <Button
          disabled={false}
          onClick={handleClick}
          variant='contained'
          disableElevation
          color='primary'
          size='large'
          className={'lowercase'}
        >
          Test
        </Button>
      </Box>
    </AppContainer>
  )
}

const mapStateToProps = (state : ApplicationReducers) => ({
  test: state.templateStore.TempTypeOne.variable1
})
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateTemplateType,
    },
    dispatch
  )
export default compose(
  withLoader,
  connect(mapStateToProps, mapDispatchToProps)
)(Test)
