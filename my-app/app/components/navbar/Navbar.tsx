'use client';
import { Card, Nav, Button, Form } from "react-bootstrap";
const Navbar = () => {
    return (
        <div className="bg-secondary">
            <Card bg='dark' text='light' border='light' className="text-center">
                <Card.Header>Perancangan & Pemrograman Web</Card.Header>
                <Card.Body>
                    <Card.Title>Septian Farisi</Card.Title>
                    <Card.Text>
                        Nim   : 22572001 <br />
                        prodi : Teknik Informatika<br />
                        React-Js Movies.
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='bg-secondary stiky-md-top'>
                <Nav defaultActiveKey="/home" as="ul" className="flex md:flex-row flex-col justify-between p-2">
                    <Nav.Item as="li">
                        <Button variant="secondary" href="/">Home</Button>
                        <Button variant="secondary" href="/movieList">Movies List</Button>
                        <Button variant="secondary" href='/tambah'>Tambah Movies</Button>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Form className="d-flex">
                            <Form.Control
                                // type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success text-white">Search</Button>
                        </Form>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}

export default Navbar