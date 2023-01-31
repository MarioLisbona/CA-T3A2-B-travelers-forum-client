import React, { useEffect, useState } from 'react'


const ModalRegistrationMessage = ({ setRegMessage, setRegSuccess }) => {


  useEffect(() => {
    $(document).ready(function(){
      $("#ModalReg").modal('show');
    })
  }, [setRegMessage, setRegSuccess])


  return (
    <>
    <div className="modal fade" id='ModalReg' tabIndex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          <div className="modal-header p-0 py-3">
            <h5 className="modal-title" id="exampleModalLongTitle">message</h5>
            {/* close modal without saving changes */}
            <button type="button" className="close btn btn-success" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-footer p-0 py-3">
            {/* save changes by calling editCommentModal and close modal */}
            <button type="button" className="btn btn-success" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ModalRegistrationMessage