import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';
import "./TodoListLayout.css";
import { useState,useEffect  } from "react";


// ContainedButton コンポーネントの定義
export default function TodoListLayout() {

  //ひとまずpublic/data/sampleTodosData.jsonデータより取得する。
  const [rows, setData] = useState([]);
  useEffect(() => {
    fetch('/data/sampleTodosData.json')
      .then(response => response.json())
      .then(rows => setData(rows))
      .catch(error => console.error('Error:', error));
  }, []);

  const CustomDataGrid = styled(DataGrid)({
    '& .MuiToolbar-root ': {
      color: 'white',
    },
    '& .MuiSelect-icon ': {
      color: 'white',
    },
    '& .MuiSvgIcon-root ': {
      color: 'white',
    },
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.05 ,headerAlign: "center",align: "center"},
    { field: "subject", headerName: "件名", flex: 0.2 ,headerAlign: "center" },
    { field: "status", headerName: "ステータス", flex: 0.1 , headerAlign: "center",align: "center" },
    { field: "scheduledStartDate", headerName: "開始予定日", flex: 0.15 ,headerAlign: "center", align: "center"},
    { field: "scheduledCompletedDate", headerName: "完了予定日",flex: 0.15 ,headerAlign: "center",align: "center"},
    { field: "completedDate", headerName: "完了日", flex: 0.15 ,headerAlign: "center", align: "center"},
    {
      field: "actions",
      headerName: "操作",
      flex: 0.2 ,
      headerAlign: "center",
      renderCell: (params) => (
        <strong>
          {/* 編集ボタン */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            // onClick={() => handleEdit(params.row)}
          >
            編集
          </Button>
          {/* 削除ボタン */}
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ marginLeft: 16 }}
            // onClick={() => handleDelete(params.row)}
          >
            削除
          </Button>
        </strong>
      ),
    },
  ];


  // const handleEdit = (row) => {
  //   // 編集ロジック
  //   console.log("編集", row);
  // };
  
  // const handleDelete = (row) => {
  //   // 削除ロジック
  //   console.log("削除", row);
  // };

  return (
    <Container>
      <Box
        sx={{
          height: "100vh",
          marginY: "10px",
        }}
      >
        <form >
          <Typography
            variant="h4"
            component="h4"
            gutterBottom
            sx={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            Todo List
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div>
                <CustomDataGrid
                  className="data-grid"
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  // checkboxSelection
                />
              </div>
            </Grid>
          </Grid>

        </form>
      </Box>
    </Container>
  );
}
