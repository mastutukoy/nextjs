import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    MenuItem,
    Box,
} from "@material-ui/core";
  
import classes from "./AppBar.module.css";
import {AccessibleForward} from '@material-ui/icons';
import Router from "next/router";
  
export type AppBarProps = {
    inverted?: boolean;
    logo?:string,
    title?:string,
    enableBack?:boolean,
    closeButton?:boolean,
    backLink?:string,
    position?:"fixed" | "absolute" | "sticky" | "static" | "relative",
    onClose?:(event: any) => void | Function,
    children?:any
};
    
  export const EnviteAppBar = (props: AppBarProps) => {
    const fontColor = props.inverted ? "black" : "white";
    return (
      <AppBar
        position={props.position? props.position:"fixed"}
        elevation={0}
        style={props.inverted ? { backgroundColor: "white" } : {}}
      >
        <Toolbar>
          {props.enableBack && (
            <Box mr="15px">
              <IconButton
                style={{padding:"3px"}}
                onClick={() => {
                  if (props.backLink == undefined) {
                    Router.back();
                  } else {
                    Router.push(props.backLink);
                  }
                }}
              >
                <AccessibleForward/>
              </IconButton>
            </Box>
          )}
  
          {(props.logo || props.title) && (
            <div className={classes.header}>
              {props.logo && <img alt="Logo" src={props.logo}></img>}
              {props.title && (
                <Typography
                  variant="h6"
                  style={{
                    color: fontColor,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace:"nowrap",
                    maxWidth:"75vw",
                  }}
                >
                  {props.title}
                </Typography>
              )}
            </div>
          )}
          {props.children}
          {props.closeButton && (
            <>
              <Typography style={{ flex: 1 }}></Typography>
              <IconButton onClick={props.onClose}>
                <AccessibleForward></AccessibleForward>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  