import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextBox from "../atoms/TextBox";
import TextArea from "../atoms/TextArea";
import SubmitButton from "../atoms/SubmitButton";
import ContainedButton from "../atoms/ContainedButton";
import Typography from '@mui/material/Typography';

// ContainedButton コンポーネントの定義
export default function Layout() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("submit");
    event.preventDefault();
  };

  return (
    <Container 
      >
      <Box sx={{  
        height: "100vh",
      }}>
        <form onSubmit={handleSubmit}>
          <Typography 
            variant="h4" 
            component="h4" 
            gutterBottom
            sx={{
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
          >
            Sample Title
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Stack spacing={2}>
                <TextBox
                  text="Sample Label 01"
                />
                <TextBox
                  text="Sample Label 02"
                />
                <TextArea
                    text="Sample Label 03"
                    rows={4}
                />
                <Stack 
                  direction="row" 
                  spacing={4} 
                  justifyContent="center" 
                  sx={{
                    paddingTop: '20px',
                    paddingBottom: '20px',
                  }}
                >
                  <ContainedButton text="cancel"></ContainedButton>
                  <SubmitButton text="submit" ></SubmitButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
