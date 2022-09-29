import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoCard from "../VideoCard";
import "./index.scss";
import { getVideos } from "../../slices/videoSlice";

function CardContainer() {
  const { videos } = useSelector((store) => store.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVideos());
  }, []);
  return (
    <Grid container spacing={1} className='card-container'>
      {videos.map((video) => {
        return <VideoCard key={video._id} />;
      })}
    </Grid>
  );
}

export default CardContainer;
