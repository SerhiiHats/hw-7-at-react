import styles from "./FormDialog.module.scss"
import React, {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleClickOpen = () => {
    setNewTask("");
    setOpen(true);
  };

  const handleClose = () => {
    setNewTask("");
    setOpen(false);
  };

  function handleValue() {
    const {addItem} = props;

    if (!newTask) {
      return;
    }
    const tempNewTask = newTask.trim();
    if (tempNewTask.length) {
      addItem({value: newTask, id: Date.now()});
    }
  }

  return (
    <div>
      <Button style={{padding: `8px 152px`}} className={styles.btnAddMui} variant="contained" onClick={handleClickOpen}
              disabled={open}>
        Add new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Додавання нового завдання</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Щоб додати завдання до списку ваших завдань, будь ласка, введіть своє нове завдання тут. Воно буде додано до
            списку ваших завдань.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Task"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={
            () => {
              handleClose();
              handleValue();
            }
          }>Готово</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}