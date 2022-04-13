import { Button, CardContent, Typography,Card,Stack,Modal,Box} from "@mui/material";
import { Star } from "@mui/icons-material";
import {useState } from 'react';
import RatingScreen from "./RatingScreen";




const style = {
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     width:'80%',
     height:'80%',
     bgcolor: 'background.paper',
     border: '2px solid #000',
     boxShadow: 24,
     p: 4,
   };
export default function({avgRating,totalReviews,title})
{
     

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);
     

     return(<>
                    <Modal
                         open={open}
                         onClose={handleClose}
                         aria-labelledby="modal-modal-title"
                         aria-describedby="modal-modal-description"
                         >
                              <Box sx={style}>
                                   <RatingScreen />
                              </Box>
                    </Modal>
          <Card style={{border:'1px solid gray',backgroundColor:'lightBlue'}}>
               <CardContent>
                    <Typography variant="h4">{title}</Typography>
                    <br/>
                    <Stack direction="row" spacing={2} style={{display:'flex',textAlign:'center'}}>
                         {(totalReviews!=0)?
                         <>
                         <Star style={{fontSize:'40px',color:'yellow'}}/>
                         <Typography variant="h3">{avgRating}</Typography>
                         <Typography variant="body2" sx={{marginTop:'20px'}}>Based on {totalReviews} Reviews </Typography>
                         </>
                         :<Typography variant="h5">Be the first to write a review...</Typography>
                          }
                         <div style={{flexGrow:1}}/>
                         <Button onClick={handleOpen} size="large" variant="contained"  sx={{padding:2,color:'black',backgroundColor: '#ff5722'}}>Write a Review</Button>
                    </Stack>
                    <br/>
               </CardContent>
          </Card>
     </>)

}