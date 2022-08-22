import React, { useContext, useEffect, useState } from 'react';
import {
	Button,
	Container,
	IconButton,
	Typography,
} from '@material-ui/core'
import { ArrowBack } from "@material-ui/icons";
import { Link, Switch, Route, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import PaperContainer from '../../components/PaperContainer';
import AreaItem from '../../components/AreaItem';
import Activities from '../activities';
import { getFields, getActivitiesCompleted } from '../../store/reducers/report';
import { GlobalStateContext } from '../../store';
import { createFormulary, getFormulary, deleteFormularyAnswer } from '../../store/reducers/formulary';
import { Snackbar, Alert, CircularProgress } from '@mui/material';
import ProgressTable from '../../components/ProgressTable';
import ReportHeader from '../../components/ReportHeader';
import DialogModal from '../../components/DialogModal';
import MuiAlert from "@mui/material/Alert";

const VisualizarProgresso = () => {

	const [state, dispatch] = useContext(GlobalStateContext);
	const match = useRouteMatch();
	const params = useParams();
	const history = useHistory();

	const [openModal, setOpenModal] = useState(false);
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState(false)
	const [itemSelected, setItemSelected] = useState("")



	useEffect(() => {
		let answers = (state.formulary.data || {}).dbFormularyAnswers || [];
		getActivitiesCompleted(answers, dispatch);					
	}, [])


	const goBack = () => {
		history.goBack()
	}

	const goToGerarRelatorio = () => {
		history.push("relatorio")
	}

	const SnackAlert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
	});

	const handleCloseSnack = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
		setErrorMessage("");
	};

	const handleCloseSuccess = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setSuccess(false);
	};

	const handleClose = () => {
		setItemSelected("");
		setOpenModal(false);
	};

	const handleDeleteClick = (item) => {
		setItemSelected(item);
		setOpenModal(true);
	}

	const handleClickYes = async () => {		

		try {
			await deleteFormularyAnswer(state.formulary.data.dbFormulary.id, itemSelected, dispatch)
			setSuccess(true);
			setOpenModal(false);
		} catch (error) {
			setErrorMessage(error.response.data.error)
		}

		setItemSelected("");				
		let formulary = await getFormulary(state.formulary.data.dbFormulary.id, dispatch).catch(console.log);
		let answers = (formulary || {}).dbFormularyAnswers || [];
		getActivitiesCompleted(answers, dispatch);					
		
	}

	const handleGerarComprovantes = () => {
		let comprovantes = (state.formulary.data || {}).dbFiles || [];		
	}

	return (
		<Container>
			{state.report.loading && <div style={{ width: "100%", height: "100%", zIndex: 9999, top: 0, left: 0, position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(0,0,0,.3)" }}>
				<CircularProgress />
			</div>}
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<div>
					<IconButton edge="start" aria-label="voltar" onClick={goBack}>
						<ArrowBack />
					</IconButton>
					<Typography variant="button">
						Relatório de Atividades
					</Typography>

				</div>
				<div>
					<Typography variant="subtitle1" >
						Progresso
					</Typography>

				</div>
			</div>

			<div>
				<ReportHeader />
				<div style={{ maxHeight: 450 }}>
					<ProgressTable list={state.report.allActivities} onDeleteClick={handleDeleteClick} />

				</div>

			</div>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
				<Button variant="contained" color="primary" style={{ marginRight: '20px'}} onClick={goToGerarRelatorio}>Gerar Relatório</Button>
				<Button variant="contained" color="primary" onClick={handleGerarComprovantes}>Gerar Comprovantes</Button>
			</div>

			<DialogModal open={openModal} handleClose={handleClose} onClickNo={handleClose} onClickYes={handleClickYes}
				titulo="Excluir Atividade"
				mensagem="Ao realizar a exclusão, todos os dados da atividade serão perdidos. Deseja realmente excluir?" />
			<Snackbar open={open} autoHideDuration={3500} onClose={handleCloseSnack}>
				<SnackAlert onClose={handleCloseSnack} severity="error" sx={{ width: '100%' }}>
					{errorMessage}
				</SnackAlert>
			</Snackbar>
			<Snackbar open={success} autoHideDuration={3500} onClose={handleCloseSuccess}>
				<SnackAlert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
					Item excluído com sucess!
				</SnackAlert>
			</Snackbar>

		</Container>
	);
}

export default VisualizarProgresso
