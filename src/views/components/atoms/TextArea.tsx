import * as React from 'react';
import TextField from '@mui/material/TextField';

// ボタンのプロパティの型を定義
type TextAreaProps = {
    text: string; 
    classNames?: string;
    rows?: number;
}

// ContainedButton コンポーネントの定義
export default function TextArea(props: TextAreaProps) {
  return (
    <TextField 
      id="outlined-basic" 
      className={props.classNames} 
      label={props.text} 
      variant="outlined"
      multiline
      rows={props.rows}
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
