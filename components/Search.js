import React from 'react';
import { useState } from 'react';
import ytService from '../services/youtube';
import { Container, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import Video from './Video';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: 'auto',
    display: 'block',
  }
}));

const Search = () => {
  const [ query, setQuery ] = useState('');
  const [ results, setResults ] = useState([]);
  const classes = useStyles();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitting it');
    const qResults = await ytService.makeQuery(query);
    console.log(qResults);
    setResults(qResults);
  };

  const listResults = () => {
    if (!results){
      return null;
    }
    return (
      <Container maxWidth='lg'>
        {results.map((r, i) => {
          return <Video key={i} video={r}/>;
        })}
      </Container>
    );

  };

  return (
    <Container fixed maxWidth='sm'>
      <form className={classes.root} onSubmit={ handleSubmit }>
        <TextField id='outlined-basic' fullWidth label='Search' variant='outlined' onChange={(e) => setQuery(e.target.value)}/>
        <Divider />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          size='large'
          className={classes.button}
          startIcon={<SearchIcon />}
        >
        Search
        </Button>
      </form>
      {listResults()}
    </Container>
  );
};

export default Search;