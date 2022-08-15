import * as React from 'react';
import { styled } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useHistory } from "react-router-dom";
import { Button, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import { Assessment } from '@material-ui/icons';
import { VisibilityOutlined } from '@material-ui/icons';
import { Edit } from '@material-ui/icons';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  cursor: 'pointer',
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function FormulariesTable({list}) {

  const history = useHistory();

  const handleClickEdit = (solicitacaoId) => {
    history.push(`/relatorio-de-atividades/${solicitacaoId}`)
  }

  const handleClickViewProgress = (solicitacaoId) => {    
    history.push(`/relatorio-de-atividades/${solicitacaoId}/progresso`)
  }

  const handleClickReport = (solicitacaoId) => {		
    history.push(`/relatorio-de-atividades/${solicitacaoId}/relatorio`)
	}

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" >Tipo</StyledTableCell>
            <StyledTableCell align="left" >Status</StyledTableCell>
            <StyledTableCell align="left" >Data&nbsp;de&nbsp;Criação</StyledTableCell>
            <StyledTableCell align="left" >Início Interstício</StyledTableCell>
            <StyledTableCell align="center" >Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            
              <StyledTableRow key={row.id}>
                <StyledTableCell align="left">{row.type}</StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">{new Date(row.createdAt).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell align="left">{new Date(row.from).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton edge="start" aria-label="Editar" onClick={() => handleClickEdit(row.id)}>
							      <Edit />
						      </IconButton>                                  
                  <IconButton edge="start" aria-label="Visualizar Progresso" onClick={() => handleClickViewProgress(row.id)}>
							      <VisibilityOutlined />
						      </IconButton>  
                  <IconButton edge="start" aria-label="Gerar Relatório" onClick={() => handleClickReport(row.id)}>
							      <Assessment />
						      </IconButton>                                       
                  <IconButton edge="start" aria-label="Deletar">
							      <Delete />
						      </IconButton>                                
                </StyledTableCell>
              </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}