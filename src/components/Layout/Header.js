import { Navbar,Button,ButtonGroup,Alignment } from "@blueprintjs/core";
import Link from "next/link";
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
                <Button  text='Blog' icon='predictive-analysis'></Button>
            </Link>
            <Link href='til'>
                <Button text='TIL' icon ='search-around'></Button>
            </Link>
            
            <Link href='workDashboard'>
                <Button text='Work Dashboard' icon ='dashboard'></Button>
            </Link>
           

            </ButtonGroup>
        </Navbar.Group>
    </Navbar>)
}