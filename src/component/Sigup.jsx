import React from 'react'
import {Link,Typography,Grid,Paper,Avatar,TextField,Button} from '@mui/material'
export default function Login() {
  const paperStyle={padding:20,height:'80vh',width:500,margin:'20px auto'}
  return (
    <Grid className='Login'>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center' className="mb-4">
        
        <Avatar></Avatar>
        <h>Kayıt Ol</h>
        </Grid>
        <TextField label='Username' placeholder='Kullanıcı Adı' fullWidth required className='mb-4'/>
        <TextField label='Password' placeholder='Parola' type='password' fullWidth required className='mb-5'/>
        <TextField label='Country' placeholder='Ülke' fullWidth required className='mb-5'/>
        <TextField label='City' placeholder='Şehir' type='password' fullWidth required className='mb-5'/>
        <Button className='mb-4' type='submit' color='primary' variant='contained' fullWidth href='/login'>Kayıt Ol</Button>
        {/* <Typography>
          <Link href='#' >
           Parolamı unutdum
          </Link>
        </Typography> */}

        <Typography>Hesabınız varmı?
          <Link href='/login'>
            Giriş Yap
          </Link>
        </Typography>

      
      </Paper>
    </Grid>
  )
}
