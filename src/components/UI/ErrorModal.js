import Card from "./Card"
import Button from "./Button";
import classes from './ErrorModal.module.css';
import React ,{Fragment}from "react";
import  ReactDOM  from "react-dom";
const ErrorModal=props=>{

  const BackDrop=props=>{
    return <div className={classes.backdrop} onClick={props.onConfirm}/>

  }

  const ModelOverlay=props=>{
    return  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions} onClick={props.onConfirm}>
      <Button>Okay</Button>
    </footer>
  </Card>
  }
    return <Fragment>
   {ReactDOM.createPortal(
    <BackDrop onConfirm={props.onConfirm}/>,
    document.getElementById('backdrop-root')
   )}
   {ReactDOM.createPortal(
    <ModelOverlay title={props.title}
    message={props.message}
    onConfirm={props.onConfirm}/>,
    document.getElementById('overlay-root')
   )}
  </Fragment>
}
export default ErrorModal;