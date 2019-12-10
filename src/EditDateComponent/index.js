//need a form/modal that will update a date idea from a user
import React from 'react';
import {Form, Button, Header, Modal } from 'semantic-ui-react';

const EditDate = (props) => {
        return (
            <Modal textAlign="center" open={props.boolean}>
                <h1>Edit A Date!</h1>
                <Modal.Content>
                <Form onSubmit={props.closeModal}>
                    <Header as="h2">Name:</Header>
                    <Form.Input type="text" name='name' value={props.dateEdit.name} onChange={props.handleEdit}/>
                    <Header as="h2" >Description:</Header>
                    <Form.Input type="text" name='description' value={props.dateEdit.description} onChange={props.handleEdit}/>
                    <Button className="buttonColor" type="submit">Edit Date</Button>
                </Form>
                </Modal.Content>
            </Modal>
        )
}

export default EditDate