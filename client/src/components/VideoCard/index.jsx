import { Grid, Paper } from "@mui/material";
import "./index.scss";

function VideoCard() {
  return (
    <Grid item xs={6} sm={4} lg={3} xl={2} className='videoCard-container'>
      <Paper className='paper'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7xoV9KUFt2JC8fWh_LSYV75lFJHOVqNk-ZohGF5yoYQ&s'
          alt=''
        />
      </Paper>
    </Grid>
  );
}

export default VideoCard;
