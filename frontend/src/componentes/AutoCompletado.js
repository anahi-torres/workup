import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Autocomplete
        multiple
        id="tags-standard"
        options={tecnologias.map((option) => option.title)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Elegí tus lenguajes y tecnologías preferidas" placeholder="Ej: Java" />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const tecnologias = [
  { title: 'Javascript' },
  { title: 'Node Js' },
  { title: 'HTML' },
];