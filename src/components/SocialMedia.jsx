import React from 'react'
import instagramIcon from "../assets/icons8-instagram-30.png"
import facebookIcon from "../assets/icons8-facebook-30.png"
import twitterIcon from "../assets/icons8-twitter-30.png"
import pinterestIcon from "../assets/icons8-pinterest-30.png"

////////////////////////////////////////////////////////////////////////////////////////////////
// SocialMedia component
// Use - container for social media icons and links
//
// props: 
//       - 
//
// components used:
//       - Bootstrap elements and styles
////////////////////////////////////////////////////////////////////////////////////////////////

const SocialMedia = () => {
  return (
      <div id="social-media" class="d-flex flex-column mb-3 p-5 my-4 bg-light rounded-3 border border-success">
        <h1 class="mb-3">Social Media</h1>
        <div className="row">
          <div className="col-md-2">
            <a id="instagram" href="https://www.instagram.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                  <img src={instagramIcon}></img>
                </div>
                <div>
                  <p>Instagram</p>
                </div>
              </div>
            </a>
            <a href="https://www.facebook.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                <img src={facebookIcon}></img>
                </div>
                <div>
                  <p>Facebook</p>
                </div>
              </div>
            </a>
            <a href="https://www.twitter.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                <img src={twitterIcon}></img>
                </div>
                <div>
                  <p class="external-link">Twitter</p>
                </div>
              </div>
            </a>
            <a href="https://www.pinterest.com" class="text-reset text-decoration-none" target="_blank">
              <div class="p-2 d-flex flex-row justify-content-start">
                <div class="me-3">
                <img src={pinterestIcon}></img>
                </div>
                <div>
                  <p class="external-link">Pinterest</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default SocialMedia