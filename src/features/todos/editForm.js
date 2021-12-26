import { Link, useNavigate } from 'react-router-dom';
import { priorLevels, statusTypes } from '../../types';
import StoryPoints from '../../components/storyPoints';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function EditForm(props) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: props.initialTodo.title,
      priority: props.initialTodo.priority,
      storyPoints: props.initialTodo.storyPoints,
      status: props.initialTodo.status,
      description: props.initialTodo.description,
    },
  });

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.priority === '') {
      data.priority = priorLevels.NONE;
    }
    if (data.status === '') {
      data.status = statusTypes.TO_DO;
    }

    const state = dispatch({
      type: 'todos/todoSave',
      payload: { id: props.initialTodo.id, ...data },
    });

    navigate('/', { replace: true });
  };

  return (
    <form className="edit-form edit-form_theme-1" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            label="Title *"
            variant="outlined"
            fullWidth
            {...field}
            error={errors.title ? true : false}
            style={{ margin: '1rem' }}
          />
        )}
      />

      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <FormControl style={{ width: '125px', margin: '1rem' }}>
            <InputLabel>Priority</InputLabel>
            <Select label="Priority" {...field}>
              <MenuItem value={priorLevels.CRITICAL}>Critical</MenuItem>
              <MenuItem value={priorLevels.MAJOR}>Major</MenuItem>
              <MenuItem value={priorLevels.MINOR}>Minor</MenuItem>
              <MenuItem value={priorLevels.NORMAL}>Normal</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="storyPoints"
        control={control}
        rules={{ min: 1, max: 10 }}
        render={({ field }) => (
          <TextField
            label="Story points"
            variant="outlined"
            type="number"
            error={errors.storyPoints ? true : false}
            {...field}
            style={{ width: '125px', margin: '1rem' }}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <FormControl style={{ width: '150px', margin: '1rem' }}>
            <InputLabel>Status</InputLabel>
            <Select label="Status" {...field}>
              <MenuItem value={statusTypes.TO_DO}>{statusTypes.TO_DO}</MenuItem>
              <MenuItem value={statusTypes.IN_PROGRESS}>{statusTypes.IN_PROGRESS}</MenuItem>
              <MenuItem value={statusTypes.TEST}>{statusTypes.TEST}</MenuItem>
              <MenuItem value={statusTypes.DONE}>{statusTypes.DONE}</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            minRows="5"
            {...field}
            style={{ margin: '1rem' }}
          />
        )}
      />

      <Button variant="contained" type="submit" style={{ textTransform: 'none', margin: '1rem' }}>
        Save
      </Button>
    </form>
  );
}
