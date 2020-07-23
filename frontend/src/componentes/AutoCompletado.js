import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags(props) {
  const classes = useStyles();

  const onChangeTecnologias = (event, values, reason) =>{
    props.handleTecnologias(values);
    console.log(values);
  }

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
        onChange={ onChangeTecnologias }
        renderInput={(params) => (
          <TextField {...params} variant="standard" label="Elegí tus lenguajes y tecnologías preferidas" placeholder="Ej: Java" />
        )}
      />

    </div>
  );
}

const tecnologias = [
  { title: 'Javascript' },
  { title: 'Node Js' },
  { title: 'HTML' },
];