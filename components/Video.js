import React from 'react';
import { Card, CardMedia, CardActionArea, CardContent, CardActions, Link } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const Video = ({ video }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='video image'
          height="180"
          image={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h3' component='h3'>
            {video.snippet.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link></Link>
      </CardActions>
    </Card>
  );
};

export default Video;