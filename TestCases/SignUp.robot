*** Settings ***
Library  Selenium2Library

*** Variables ***
${Browser}  Firefox
${URL}  http://localhost:3000
${Sleep1}  7s
${Sleep2}  2s


*** Test Cases ***
TC_001 Main Page
# User login (positive)
    Open Browser  ${URL}  ${Browser}
    Maximize Browser Window
    Click Element  //*[@id="root"]/div/div[1]/nav/div[3]/div[1]/p
    Sleep  ${Sleep2}
    
TC_002 Signup
    Go to  http://localhost:3000/signup
    Input Text  //*[@id="validationFirstName"]  Tester
    Sleep  ${Sleep2}
    Input Text  //*[@id="validationLastName"]  Bot1
    Sleep  ${Sleep2}
    Input Text  //*[@id="validationEmail"]  tester4@mail.com
    Sleep  ${Sleep2}
    Input Text  //*[@id="validationPhone"]  3331234567
    Sleep  ${Sleep2}
    Input Text  //*[@id="validationPassword"]  12345678
    Sleep  ${Sleep2}
    Input Text  //*[@id="validationConfirmPassword"]  12345678
    Sleep  ${Sleep2}
    Select Checkbox  //*[@id="root"]/div/div/div/div/form/div[2]/div/input
    Sleep  ${Sleep2}
    Click Element  //*[@id="root"]/div/div/div/div/form/button
    Sleep  ${Sleep1}
    # Page should contain  Register success.
    Page should not contain  Error!!! The email already exists.
    Close Browser