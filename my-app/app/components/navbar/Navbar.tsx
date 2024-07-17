'use client';
import { Card, Nav, Button } from "react-bootstrap";
const Navbar = () => {
    return (
        <div className="bg-secondary">
            <Card bg='dark' text='light' border='light' className="text-center">
                <Card.Header>Perancangan & Pemrograman Web</Card.Header>
                <Card.Body>
                    <Card.Title>Septian Farisi</Card.Title>
                    <Card.Text className="justify">
                        Nim   : 22572001 <br />
                        prodi : Teknik Informatika<br />
                        React-Js Movies.
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='bg-secondary fixed-md-top z-2'>
                <Nav defaultActiveKey="/home" as="ul" className="flex md:flex-row flex-col justify-between p-2">
                    <Nav.Item as="li">
                        <Button variant="secondary" href="/">Home</Button>
                        <Button variant="secondary" href='/tambah'>Tambah Movies</Button>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default Navbar