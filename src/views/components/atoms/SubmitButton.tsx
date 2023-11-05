import * as React from 'react';
import Button from '@mui/material/Button';

// ボタンのプロパティの型を定義
type SubmitButtonProps ={
  text: string; 
}

// ContainedButton コンポーネントの定義
export default function SubmitButton(props: SubmitButtonProps) {

  return (
    <Button 
      type="submit" 
      variant="contained" 
      color="primary"
      sx={{ 
        width: 'calc(100% - 10px)', 
        margin: '0 5px',
      }}
    >
       {props.text}
    </Button>
  );
}
