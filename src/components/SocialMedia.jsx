import React from 'react'

const SocialMedia = () => {
  return (
      <div class="d-flex flex-column mb-3 p-5 my-4 bg-light rounded-3">
        <h1 class="mb-3">Social Media</h1>
        <div className="row">
          <div className="col-md-2">
            <a href="https://www.instagram.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                  <img src="/src/assets/icons8-instagram-30.png"></img>
                </div>
                <div>
                  <p class="text-primary">Instagram</p>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                <img src="/src/assets/icons8-twitter-30.png"></img>
                </div>
                <div>
                  <p class="text-primary">Twitter</p>
                </div>
              </div>
            </a>
            <a href="https://www.instagram.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                <img src="/src/assets/icons8-mail-30.png"></img>
                </div>
                <div>
                  <p class="text-primary">Email</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default SocialMedia