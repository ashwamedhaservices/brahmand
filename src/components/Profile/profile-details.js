import { Avatar, Container, Stack, Typography } from "@mui/material";
import "./ProfilePage.css";

const  Profile = ({ name }) => {
  return (
    <Container>
      <Stack sx={{ px: 2, py: 2 }} className="k-fdr k-aic">
        {/* <Avatar
          src="assets/illustrations/Ellipse 47.svg"
          alt="Profile Photo"
          sx={{ width: "55px", height: "55px", border: "1px solid #980387", mr: 2 }}
        /> */}
        <Avatar
          sx={{ width: "55px", height: "55px", border: "1px solid #980387", mr: 2, bgcolor: 'var(--theme-background-primary)' }}
        >
          {name && name.split(' ')[0].split('')[0]}
        </Avatar>
      <Typography sx={{ fontSize: '21px', lineHeight: '32px', color: '#000000'}}>{name}</Typography>
      </Stack>
    </Container>
  );
}

export default Profile;
