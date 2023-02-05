# **Manual User Testing**

## Website Displays as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|When app first loads, home page displays navbar correctly|Navbar displays with logo/home button, Browse all destinations, Browse by continent dropdown, About, Login & register|✅    |
|Browse by continent dropdown is displays continent options for all continents|Dropdown menu displays all continents (7 options)|✅    |
|When app first loads, home page displays hero image|Hero image displays in full width|✅    |
|When app first loads, home page displays CTA element|CTA element displays with welcome message and register & login buttons|✅    |
|When app first loads, home page displays 8 latest preview cards|The 8 latest posts are dispalyed as preview cards, ordered by most recently posted|✅    |
|Preview cards display all elements|Preview cards display title, author, continent, time since posted, preview of content and 'Read more' button|✅    |
|'Browse by all Destinations' displays a page with preview cards for all posts|All posts on the site are represented by a preview card with the most recently posted at the top of the page|✅    |
|Selecting a continent from the continent dropdown navigates to the correct page|Selecting a continent navigates to its corresponding page|✅    |
|Continent page displays correct hero image for that continent|Hero image relating to the selected continent is displayed|✅    |
|Continent page displays a relevant welcome message and blurb|Welcome message and blurb relating to the selected continent is displayed|✅    |
|Continent page displays preview cards|All posts in the selected continent are displayed as preview cards with the latest posts displayed first|✅    |
|About navbar link navigates to About page|The about page is correctly displayed with Lorum Ipsum text|✅    |
|'Register' button navigates to Register page|The registration page is displayed when clicking a 'Register' button from any other page or navbar|✅    |
|'Login' button navigates to Login page|The login page is displayed when clicking a 'Login' button from any other page or navbar|✅    |
|Register page displays form and button elements correctly|Register page displays form with username, password, confirm password, 'Sign Up' button and 'Login' button for already registered members|✅    |
|Login page displays form and button elements correctly|Login page displays form with username, password and 'Login' button |✅    |
|Terms of Service footer link|Terms of Service page displays with title 'Terms of use and Conditions' |✅    |
|Privacy Policy footer link|Privacy Policy page displays with title 'View our privacy policies' |✅    |
|Contact Us footer link|Contact Us page displays with title 'Connect with us at the links below' and blurb and social media links |✅    |

---

## Member Registration Functions as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|1 or more empty fields in Register form|'Sign Up' button is greyed out and cannot be clicked|✅    |
|All fields do not have green cheque mark in Register form|'Sign Up' button is greyed out and cannot be clicked|✅    |
|Enter 'Tes' in 'Username' field|Error message displays: '4 to 24 characters, Must begin with a letter, Letters, numbers, underscores, hyphens allowed'|✅    |
|Enter 'TestTestTestTestTestTest1' (25 characters) in 'Username' field|Error message displays: '4 to 24 characters, Must begin with a letter, Letters, numbers, underscores, hyphens allowed'|✅    |
|Enter '1Test' in 'Username' field|Error message displays: '4 to 24 characters, Must begin with a letter, Letters, numbers, underscores, hyphens allowed'|✅    |
|Enter 'TestTest!' in 'Username' field|Error message displays: '4 to 24 characters; Must begin with a letter; Letters, numbers, underscores, hyphens allowed'|✅    |
|Enter 'Test-Test' in 'Username' field|Success green cheque mark displays|✅    |
|Enter 'Test_Test' in 'Username' field|Success green cheque mark displays|✅    |
|Enter 'TestTest1' in 'Username' field|Success green cheque mark displays|✅    |
|Enter 'Pass' in 'Password' field|Error message displays: '8 to 24 characters; Must include uppercase and lowercase letters, a number and a special character; Allowed special characters !@#$%'|✅    |
|Enter 'PasswordPassword12345!@#%' (25 characters) in 'Password' field|Error message displays: '8 to 24 characters; Must include uppercase and lowercase letters, a number and a special character; Allowed special characters !@#$%'|✅    |
|Enter 'Password' in 'Password' field|Error message displays: '8 to 24 characters; Must include uppercase and lowercase letters, a number and a special character; Allowed special characters !@#$%'|✅    |
|Enter 'Password1' in 'Password' field|Error message displays: '8 to 24 characters; Must include uppercase and lowercase letters, a number and a special character; Allowed special characters !@#$%'|✅    |
|Enter 'Password@' in 'Password' field|Error message displays: '8 to 24 characters; Must include uppercase and lowercase letters, a number and a special character; Allowed special characters !@#$%'|✅    |
|Enter 'Password1^' in 'Password' field|Error message displays: '8 to 24 characters; Must include uppercase and lowercase letters, a number and a special character; Allowed special characters !@#$%'|✅    |
|Enter 'Password123@' in 'Password' field|Success green cheque mark displays|✅    |
|Enter '@123Password' in 'Password' field|Success green cheque mark displays|✅    |
|Enter 'Password' in 'Password' field and in 'Confirm Password Field'|Error red cross displays on 'Password' field and success green cheque mark displays on 'Confirm Password' field.|✅    |
|Enter 'Password' in 'Password' field and enter 'Password123@' in 'Confirm Password Field'|Error red cross displays on 'Password' field and on 'Confirm Password' field.|✅    |
|Enter 'Password123@' in 'Password' field and in 'Confirm Password Field'|Success green cheque mark displays on 'Password' field and 'Confirm Password' field and 'Sign Up' button can be clicked.|✅    |
|Enter username already in database with valid 'Password' and 'Confirm Password' fields and click 'Sign Up' button|Error popup window with message 'Registration failed - Username taken'|✅    |
|Enter valid username and password in all fields and click 'Sign Up' button|'Registration Successfful' popup message is displayed and then Login page is displayed with username field populated|✅    |

---

## Member Login Functions as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|1 or more empty fields in Login form|Clicking 'Login' button prompts error message 'Please fill out this form'|✅    |
|Enter 'Tes' (invalid username) in 'Username' field and 'Password1' (invalid/wrong password) in 'Password' field and click 'Login button'|Error popup window with message 'Login failed - Incorrect username or password'|✅    |
|Enter 'Callum1' (valid username) in 'Username' field and 'Password123@' (wrong password) in 'Password' field and click 'Login button'|Error popup window with message 'Login failed - Incorrect username or password'|✅    |
|Enter 'Test' (valid username) in 'Username' field and 'Callum123!' (correct password for different user) in 'Password' field and click 'Login button'|Error popup window with message 'Login failed - Incorrect username or password'|✅    |
|Enter 'Callum1' (valid username) in 'Username' field and 'Callum123!' (correct password for user) in 'Password' field and click 'Login button'|App navigates to home page with welcome message: 'Hi Callum1, welcome to the forum'|✅    |

---

## Member Logged-in State Changes Page Display as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|Logging in as 'TestUser99' changes navbar correctly|'Login' and 'Register' buttons replaced by dropdown menu with 'TestUser99' as title|✅    |
|Logging in as 'TestUser99' changes navbar correctly|Displays dropdown menu with 'TestUser99' as title includes 'My Posts', 'Create A Post', 'About' and 'Logout' options|✅    |
|As 'TestUser99', select 'My Posts' from dropdown navigates to correct page|As 'TestUser99' displays message about creating a post with buttons for 'My Posts' and 'Create A Post'|✅    |
|As 'TestUser99', select 'My Posts' from dropdown navigates to correct page and populates cards|Displays preview cards for posts where the author is 'TestUser99'|✅    |
|As 'TestUser100', select 'My Posts' from dropdown does not populate cards|Display message 'You havn't made any posts yet.' with no preview cards displayed |✅    |
|As 'TestUser99', select 'Create A Post' from dropdown or from 'My Posts' page|Displays post creation page with 'Create a post' message and post creation form|✅    |
|As 'TestUser99', clicking 'Read more' on a preview card displays the post with comment form|Post and comment form display with submit button |✅    |
|As 'TestUser99', clicking 'Log out' from dropdown logs the user out|App redirects to home page with normal non-member functionality and display |✅    |

---

## Posts Create, Edit and Delete as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|As 'TestUser99', click 'Submit' on post creation form with 1 or more empty fields|Message popup asking 'Please fill out this field'|✅    |
|As 'TestUser99', enter 'Test Post' in 'Post Title' field, select 'Asia' from the dropdown, enter 'A test post about asia' in the 'Tell us your story' field and click 'Submit'|The full page post is displayed with matching content with and 'Edit Post' and 'Delete Post' buttons|✅    |
|As 'TestUser100', view the post made by TestUser99 in the previosu test|The full page post is displayed with matching content. No buttons for 'Edit Post' or 'Delete Post' are present|✅    |
|As 'TestUser99', clcik 'Edit Post' on the post made by TestUser99 in the previosu test|Form pops up with fields pre-populated by current post details and 'Save changes' button|✅    |
|As 'TestUser99', enter 'EDIT Test Post' in 'Post Title' field, select 'Africa' from the dropdown, enter 'EDIT A test post about asia' in the 'Tell us your story' field and click 'Save changes'|Full post page changes to reflect changes submitted in the form|✅    |
|As 'TestUser99', clcik 'Delete Post' on the post made by TestUser99 in the previosu test|Message popup asking to confirm deletion|✅    |
|As 'TestUser99', clcik 'Confirm Delete' on message popup form previous test|Post and any comments are deleted and navigates to 'My Posts' page|✅    |
|As 'TestUser99', clcik 'Save changes' on message popup from previous edit post test after session has expired|Popup message 'Whoops! Looks like you were logged out. Please log in and try again.' and redirected to login page|✅    |
|As 'TestUser99', clcik 'Confirm Delete' on message popup from previous delete post test after session has expired|Popup message 'Whoops! Looks like you were logged out. Please log in and try again.' and redirected to login page|✅    |

---

## Comments Create, Edit and Delete as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|As 'TestUser99', click 'Submit' on comment creation form with an empty field|Message popup asking 'Please fill out this field'|✅    |
|As 'TestUser99', enter 'Test Comment' in 'Coimment' field and click 'Submit'|The full page post is displayed with the comment below it with 'Edit Comment' and 'Delete COmment' buttons|✅    |
|As 'TestUser100', view the post made by TestUser99 in the previosu test and view comment made by TestUser99 below the post|The full page post is displayed with comment below it. No buttons for 'Edit Comment' or 'Delete Comment' are present|✅    |
|As 'TestUser99', clcik 'Edit Comment' on the comment made by TestUser99 in the previosu test|Form pops up with comment field pre-populated by current comment details and 'Save changes' button|✅    |
|As 'TestUser99', enter 'EDIT Test Comment' in edit comment popup field and click 'Save changes'|Full post page changes to reflect changes to the comment|✅    |
|As 'TestUser99', clcik 'Delete Comment' on the comment made by TestUser99 in the previosu test|Message popup asking to confirm deletion|✅    |
|As 'TestUser99', clcik 'Confirm Delete' on message popup from previous test|Comments is deleted from the full post page|✅    |
|As 'TestUser99', clcik 'Save changes' on message popup from previous edit comment test after session has expired|Popup message 'Whoops! Looks like you were logged out. Please log in and try again.' and redirected to login page|✅    |
|As 'TestUser99', clcik 'Confirm Delete' on message popup from previous delete comment test after session has expired|Popup message 'Whoops! Looks like you were logged out. Please log in and try again.' and redirected to login page|✅    |

---

## Rating functionality works as expected

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|As 'TestUser99', click 'Submit' after selecting 3 star rating on post|Unrated post rating changes to 3 stars|✅    |
|As 'TestUser99', 'Submit' button does not appear on post already rated|'Submit' button does not render|✅    |
|Rating correctly appears on full page post|Number rating appears to 1 decimal place with star next to it.|✅    |
|Rating correctly appears on preview card|Number rating appears to 1 decimal place with star next to it.|✅    |

## Typical new user workflow

Testing opening app as guest, viewing a preview card, viewing the associated post, clicking 'Register', registering, logging in and being redirected back to the post

|Test  |Expected Outcome   |Test Outcome   |
|----|----|----|
|Initial opening of app|Home page loads with navbar, hero image, correct text and preview cards. User state is guest.|✅    |
|Click 'Read  more' on preview card|Takes guest to full page post of preview card|✅    |
|Comment field asks guest to login or register to comment|Comment form doesn't render, message to login or register renders instead|✅    |
|'Register' button in comment field take user to register form|Register page renders when 'Register' button clicked|✅    |
|'Sign Up' button in register form takes user to login form|Login page renders when 'Sign Up' button clicked and username auto populates|✅    |
|'Login' button in login form takes user back to original post they were viewing before registering|Post renders again with logged in state so comment form is available to user|✅    |
|Member enters 'I'm adding a comment for a test'|Comment is rendered below the post with the member as the author|✅    |
