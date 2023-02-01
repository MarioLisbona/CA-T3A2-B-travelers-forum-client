import React from 'react'

const ModalConfirmDelete = ({ type, delConfirmed }) => {
  return (
    <>
    <div className="modal fade" data-keyboard="false" data-backdrop="static" id={`ModalDelete${type}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content p-3">
          <div className="modal-header p-0 py-3">
            <h5 className="modal-title" id="exampleModalLongTitle">{`Really delete this ${type} ?`}</h5>
            {/* close modal without saving changes */}
            <button type="button" className="close btn btn-success" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-footer p-0 py-3">
            {/* save changes by calling editCommentModal and close modal */}
            <button 
              type="button" 
              onClick={delConfirmed} 
              className="btn btn-success" 
              data-dismiss="modal">Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ModalConfirmDelete