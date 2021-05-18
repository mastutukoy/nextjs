import { updateTemplateType } from '../../Infrastructure/Redux/Store/TemplateStore';
import {
  Box, Typography,
} from '@material-ui/core'
import {default as React, useEffect, useState} from 'react'
import withLoader, { withLoaderProps } from '../../HOC/withLoader'
import { ApplicationReducers } from '../../Infrastructure/Redux/Store'

import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import AppContainer from '../../components/AppContainer';

type Props = withLoaderProps &
  ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> & {guestId: string}

const Test = (props: Props) => {
  return (
    <AppContainer>
      <Box bgcolor='#FFFFFF' p='24px'>
        <Typography> Eh! {props.test} </Typography>
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
