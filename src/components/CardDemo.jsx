import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardDemo = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 ,marginLeft:6}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8c8qx8GeYzB8ebZL1xhLEBu4lqaDXSqy0jA&usqp=CAU"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
  

        </CardActions>
      </Card>
    </div>
  );
};

export default CardDemo;
