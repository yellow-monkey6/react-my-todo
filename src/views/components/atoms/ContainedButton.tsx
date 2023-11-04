import * as React from 'react';
import Button from '@mui/material/Button';

// ボタンのプロパティの型を定義
type ContainedButtonProps ={
  text: string; 
  onClick?: () => void; 
}

// ContainedButton コンポーネントの定義
export default function ContainedButton(props: ContainedButtonProps) {
  return (
    <Button 
      variant="contained" 
      onClick={props.onClick}
      color="secondary"
      sx={{ 
        width: 'calc(100% - 10px)', 
        margin: '0 5px',
      }}
    >
      {props.text}
    </Button>
  );
}
