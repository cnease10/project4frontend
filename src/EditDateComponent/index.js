//need a form/modal that will update a date idea from a user
import React from 'react';
import {Form, Button, Header, Modal } from 'semantic-ui-react';

const EditDog = (props) => {
        return (
            <Modal open={props.openModal}>
                <h1>Edit A Date!</h1>
                <Modal.Content>
                <Form onSubmit={props.handleEdit}>
                    <Header as="h2">Name:</Header>
                    <Form.Input focus type="text" name='name' value={props.dateEdit.name} onChange={props.handleEdit}/>
                    <Header as="h2" >Description:</Header>
                    <Form.Input focus type="text" name='description' value={props.dateEdit.description} onChange={props.handleEdit}/>
                    <Button type="submit">Edit Date</Button>
                </Form>
                </Modal.Content>
            </Modal>
        )
}

export default EditDog