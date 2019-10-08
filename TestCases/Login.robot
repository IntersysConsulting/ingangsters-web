*** Settings ***
Library  SeleniumLibrary

*** Variables ***
${Browser}  Chrome
${URL}  http://localhost:3000/login
${Sleep1}  3s
${Sleep2}  7s

*** Test Cases ***
# Functional Tests
TC_001
# User login (positive)
    Open Browser  ${URL}  ${Browser}
    Maximize Browser Window
    Input Text  //input[@placeholder='email']  a@a.com
    Sleep  2s
    Input Text  //input[@placeholder='password']  1234
    Sleep  2s
    Click Element  //button[@class='btn btn-intersys btn-block my-3']
    Sleep  ${Sleep1}
    Close Browser

TC_002
# User login (negative)
    Open Browser  ${URL}  ${Browser}
    Maximize Browser Window
    Input Text  //input[@placeholder='email']  a@a.com
    Sleep  2s
    Input Text  //input[@placeholder='password']  1243
    Sleep  2s
    Click Element  //button[@class='btn btn-intersys btn-block my-3']
    Sleep  ${Sleep1}
    Close Browser

TC_003
# Eye button
    Open Browser  ${URL}  ${Browser}
    Maximize Browser Window
    Input Text  //input[@placeholder='email']  a@a.com
    Sleep  2s
    Input Text  //input[@placeholder='password']  1243
    Sleep  2s
    Click Element  //*[@id='login-eye-icon']
    Sleep  2s
    Click Element  //button[@class='btn btn-intersys btn-block my-3']
    Sleep  ${Sleep2}
    Close Browser

#TC_004
# Login blank field & Submit button clicked
#    Open Browser  ${URL}  ${Browser}
#    Maximize Browser Window
#    Input Text  //input[@placeholder='email']  ${EMPTY}
#    Input Text  //input[@placeholder='password']  ${EMPTY}
#    Click Element  //button[@class='btn btn-intersys btn-block my-3']
#    Sleep  10s
#    Close Browser

#TC_005
# Forgot password

#TC_006
# Messages for invalid login

#TC_007
# Verify if the data in password field is either visible as asterisk or bullet signs.


#TC_008
# Verify if a user is able to login with a new password only after he/she has changed the password

#TC_009
# Verify if the login page allows to log in simultaneously with different credentials in a different browser

TC_010
# Verify if the ‘Enter’ key of the keyboard is working correctly on the login page.
    Open Browser  ${URL}  ${Browser}
    Maximize Browser Window
    Input Text  //input[@placeholder='email']  a@a.com
    Sleep  2s
    Input Text  //input[@placeholder='password']  1234
    Sleep  2s
    Press Keys  //button[@class='btn btn-intersys btn-block my-3']  \13
    Sleep  ${Sleep1}
    Close Browser

#TC_011
# Verify if a user cannot enter the characters more than the specified range in each field (Username and Password)

#TC_012
# Verify if a user cannot enter the characters more than the specified range in each field (Username and Password)

#TC_013
# Verify the login page by pressing ‘Back button’ of the browser. It should not allow you to enter into the system
# once you log out
#    Open Browser  ${URL}  ${Browser}
#    Maximize Browser Window
#    Input Text  //input[@placeholder='email']  a@a.com
#    Input Text  //input[@placeholder='password']  1234
#    Click Element  //button[@class='btn btn-intersys btn-block my-3']
#    Sleep  ${Sleep1}
#    Close Browser

#TC_014
# Verify the timeout functionality of the login session.(pending)

#TC_015
# Verify if a user should not be allowed to log in with different credentials from the same browser at the same time. (pending)
