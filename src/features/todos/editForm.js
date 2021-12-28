import { useNavigate } from 'react-router-dom';
import { priorLevels, statusTypes } from '../../types';
import React from 'react';
import { connect } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { routes } from '../../constants';
import { todoSave as todoSaveAction } from './todosSlice';

function EditForm(props) {
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

  let navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.priority === '') {
      data.priority = priorLevels.NONE;
    }
    if (data.status === '') {
      data.status = statusTypes.TO_DO;
    }

    props.todoSaveAction({ id: props.initialTodo.id, ...data });

    navigate(routes.HOME, { replace: true });
  };

  let titleHelperText = ' ';
  const titleMaxLength = 100;
  if (errors.title) {
    switch (errors.title.type) {
      case 'required':
        titleHelperText = 'Required field';
        break;
      case 'maxLength':
        titleHelperText = `${titleMaxLength} characters maximum`;
        break;
      default:
        titleHelperText = ' ';
    }
  }

  const descMaxLength = 300;

  return (
    <form className="edit-form edit-form_theme-1" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true, maxLength: titleMaxLength }}
        render={({ field }) => (
          <TextField
            label="Title"
            required
            variant="outlined"
            fullWidth
            size="small"
            {...field}
            error={errors.title ? true : false}
            helperText={titleHelperText}
            style={{ margin: '1rem 1rem 0' }}
          />
        )}
      />

      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <FormControl size="small" style={{ width: '125px', margin: '1rem' }}>
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
            size="small"
            error={errors.storyPoints ? true : false}
            helperText={errors.storyPoints ? 'Range from 1 to 10' : ' '}
            {...field}
            style={{ width: '125px', margin: '1rem 1rem 0' }}
          />
        )}
      />

      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <FormControl size="small" style={{ width: '150px', margin: '1rem' }}>
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
        rules={{ maxLength: descMaxLength }}
        render={({ field }) => (
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            size="small"
            minRows="5"
            error={errors.description ? true : false}
            helperText={errors.description ? `${descMaxLength} characters maximum` : ' '}
            {...field}
            style={{ margin: '1rem 1rem 0' }}
          />
        )}
      />

      <Button variant="contained" type="submit" style={{ margin: '1rem' }}>
        Save
      </Button>
    </form>
  );
}

export default connect(null, { todoSaveAction })(EditForm);
