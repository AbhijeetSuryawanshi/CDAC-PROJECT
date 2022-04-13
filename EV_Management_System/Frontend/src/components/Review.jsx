
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';


import Stack from '@mui/material/Stack';

import { ThumbUp, ReplyAll, Share } from '@mui/icons-material';






export default function ({ name, rating, comment, date }) {
     return (<>

          <Card sx={{
               display: 'flex', padding: 0, margin: 5, borderRadius: 2, border: "2px solid", borderColor: 'whitesmoke', backgroundColor: 'white', '&:hover': {
                    backgroundColor: '#FFB3D4'
               }
          }} raised={false} >
               <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                         <Typography component="div" variant="h1" fontSize={25} fontFamily="Montserrat" fontWeight={500}>
                              {name}
                         </Typography>
                         <Typography variant="subtitle1" color="text.secondary" component="div" fontSize={21} fontFamily="Montserrat" fontWeight={300}>
                              {date}
                         </Typography>

                         <Rating

                              size='laorge'
                              color="#FFC700"
                              readOnly={true}
                              name="simple-controlled"
                              value={rating}
                         />
                         <Typography variant="body1" color="text.primary" component="div" fontSize={21} fontFamily="Montserrat" fontWeight={400} >
                              {comment}
                         </Typography>
                         <br />
                         <Stack direction="row" spacing={2}>
                              <Stack style={{ alignItems: 'center' }} direction="row" spacing={2}>
                                   <ThumbUp />
                                   <p>0 Likes</p>
                              </Stack>

                              <Stack style={{ alignItems: 'center' }} direction="row" spacing={2}>
                                   <ReplyAll />
                                   <p>Reply</p>
                              </Stack>

                              <Stack style={{ alignItems: 'center' }} direction="row" spacing={2}>
                                   <Share />
                                   <p>Share</p>
                              </Stack>
                         </Stack>
                    </CardContent>

               </Box>

          </Card>

     </>)
}