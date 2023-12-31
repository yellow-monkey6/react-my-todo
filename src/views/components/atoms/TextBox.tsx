import * as React from 'react';
import TextField from '@mui/material/TextField';

// ボタンのプロパティの型を定義
type TextBoxProps = {
    text: string; 
    classNames?: string;
}

// ContainedButton コンポーネントの定義
export default function TextBox(props: TextBoxProps) {
  return (
    <TextField 
      id="outlined-basic" 
      className={props.classNames} 
      label={props.text} 
      variant="outlined"
      sx={{
        '& label': { color: 'white' },
        '& label.Mui-focused': {
          color: '#1976d2',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
          },
        },
        '& .MuiInputBase-input': {
          color: 'white', 
        },
      }}
    />
  );
}
