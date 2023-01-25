import React from 'react'
import NavBar from './NavBar'
import HeroImage from './HeroImage'
import Header from './Header'
import PreviewCard from './PreviewCard'
import Footer from './Footer'
import MemberNavBar from './MemberNavBar'

////////////////////////////////////////////////////////////////////////////////////////////////
// PostForm component
// Use - A form to create a new post
//
// props: 
//       - 
//       - 
//
// components used:
//       - Bootstrap rows and columns with classes applied
////////////////////////////////////////////////////////////////////////////////////////////////

const PostForm = () => {
  return (
    <>
      <form onSubmit={submitForm} className="p-5 bg-light rounded-3 border border-success">
        <div className="row mb-3">
          <label for="inputPostTitle" className="col-sm-2 col-form-label">Post Title</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3"></input>
          </div>
        </div>
        <div className="row mb-3">
          <label for="input-continent-select" className="col-sm-2 col-form-label">Choose a Continent</label>
          <div className="col-sm-10">
            <select className="form-select" id="inputPostContinent">
              <option selected></option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
            </select>
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Tell us your story</legend>
          <div className="col-sm-10">
            <textarea className="form-control" rows="15"></textarea>
          </div>
        </fieldset>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0"></legend>
          <div className="col-sm-10">
            <button type="submit" className="btn btn-success">Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export default PostForm