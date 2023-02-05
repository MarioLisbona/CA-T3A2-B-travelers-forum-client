import React, { useEffect } from 'react'
import HeroImage from './HeroImage'

const ModalJwtExpired = ({ redirectFunction }) => {

  // useeffect to automatically show the modal
  // if statement prevents the modal being show on mount prior to registration details have been entered
  useEffect(() => {
    // if (!regMessage == '') {
      $(document).ready(function(){
        $("#ModalJWT").modal('show');
      })
    // }
    
  }, [])
  return (
    <>
      <HeroImage heroClass={'landing-page'} />
      {/* Modal  */}
      <div className="modal fade" data-keyboard="false" data-backdrop="static" id='ModalJWT' tabIndex="-1" role="dialog"  aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-3">
            <div className="modal-header p-0 py-3">
              <h5 className="modal-title" id="exampleModalLongTitle">Whoops! Looks like you were logged out. Please log in and try again.</h5>
            </div>
            <div className="modal-footer p-0 py-3">
              {/* on button click,  */}
              <button onClick={() => {redirectFunction("/login")}} type="button" className="btn btn-success" data-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalJwtExpired