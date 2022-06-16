import {useContext, useState, useEffect} from 'react';
import {EmployeeContext} from './contexts/EmployeeContext';
import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import EditForm from './EditForm';
import './Employeelist.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Employee = ({employee}) => {

    

    const [show, setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [employee])
    console.log(employee.statut)
    const deleteEmployee = async(id) => {
        if(window.confirm("voulez vous vraiment supprimer cet utilisateur"))
        {
            const response = await axios.get(`http://localhost:5000/${id}`);
            if(response.status === 200)
            {
                toast.success(response.data)
                //we add here the function used to bring the users from the backend
            }
        }
        
    } 
    return (
        <>
            <td>{employee.nom}</td>
            <td>{employee.prenom}</td>
            <td>{employee.email}</td>
            <td>{employee.adresse}</td>
            <td  className={`CellWithStatus ${employee.statut}`}>{employee.statut}</td>
            <td>
            <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Consulter
                        </Tooltip>
                    }>
                   <Link to={`/gestionDsComptes/viewuser/${employee.id}`}>
                    <button  className="btn view-button" data-toggle="modal">Consult</button></Link>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Modifier
                        </Tooltip>
                    }>
                    <button onClick={handleShow}  className="btn text-warning btn-act" data-toggle="modal">Modif</button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={`tooltip-top`}>
                            Supprimer
                        </Tooltip>
                    }>
                    <button onClick={() => deleteEmployee(employee.id)}  className="btn text-danger btn-act" data-toggle="modal">Supp</button>
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm theEmployee={employee} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fermer 
                </Button>
        </Modal.Footer>
    </Modal>
        </>
    )
}

export default Employee;