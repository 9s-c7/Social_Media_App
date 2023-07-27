import { Checkbox, IconButton } from '@mui/material';
import React, { useState } from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Favorite, FavoriteBorder, Label } from '@mui/icons-material';

function LikeButton() {
   const [liked, setLiked] = useState(0);
   const handleClick = () => {
    setLiked(!liked);
   };
   


   return (
    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
   );
}
export default LikeButton;