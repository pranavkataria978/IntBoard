import { Navbar,Button,ButtonGroup,Alignment } from "@blueprintjs/core";
import Link from "next/link";
import classes from './header.module.css';
export default function Header(props) {


    return (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Link href='/'>
                <Button text='INTBOARD' minimal='true' icon='comparison'/>
            </Link>
            
            <Navbar.Divider />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <ButtonGroup>
            <Link href='blog' className='button-design'>
                <Button  text='Blog' icon='predictive-analysis' className={classes.buttonDesign}></Button>
            </Link>
            &nbsp;
            <Link href='projects'>
                <Button text='Projects' icon ='search-around' className={classes.buttonDesign}></Button>
            </Link>
            &nbsp;
            <Link href='workDashboard'>
                <Button text='Work Dashboard' icon ='dashboard' className={classes.buttonDesign}></Button>
            </Link>
           

            </ButtonGroup>
        </Navbar.Group>
    </Navbar>)
}