import React from 'react';
import {Modal} from 'react-bootstrap'

export default function VideoModal(props) {

      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
          </Modal.Header>
            <Modal.Body>
              {
                  props.children
              }
            </Modal.Body>
        </Modal>
      );
}
