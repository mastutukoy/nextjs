import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import classes from '../../styles/dialog.module.css'

type Props = { onClose?: () => void; onOk?: () => void }

const useDialog = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(undefined)
  const [title, setTitle] = useState(undefined)
  const [success, setSuccess] = useState(false)

  const showMessage = (title: string, message: string, success?: boolean) => {
    setMessage(message)
    setTitle(title)
    setOpen(true)
    setSuccess(success == undefined ? false : success)
  }
  const onClose = () => {
    setOpen(false)
    setMessage(undefined)
    setTitle(undefined)
  }

  useEffect(() => {
    if (message) {
      setOpen(true)
    }
  }, [message])

  const DialogComponent = (props: Props) => {
    return (
      <Dialog
        fullWidth={true}
        classes={{
          root: classes.background,
        }}
        style={{ width: '100%' }}
        open={open}
        onClose={() => {
          onClose()
          props?.onClose ? props?.onClose() : null
        }}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClose()
              if (success && props?.onClose != undefined) {
                props?.onClose ? props?.onClose() : null
              }
            }}
            color='primary'
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
  const DialogOkCancel = (props: Props) => {
    return (
      <Dialog
        fullWidth={true}
        classes={{
          root: classes.background,
        }}
        style={{ width: '100%' }}
        open={open}
        onClose={() => {
          onClose()
        }}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              onClose()
            }}
            color='default'
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              onClose()
              props?.onOk ? props?.onOk() : null
            }}
            color='primary'
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
  return {
    Dialog: DialogComponent,
    DialogOkCancel,
    open,
    setOpen,
    message,
    showMessage,
  }
}
export default useDialog
