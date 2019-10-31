*** Settings ***
Library       SeleniumLibrary

*** Variables ***
${Browser}    Chrome
${URL}        http://localhost:3000/
${Sleep1}     1s
${Sleep2}     2s
${Sleep5}     5s


*** Test Cases ***
# Functional Tests
TC_001 Checkout user guest
# Checkout with a guest user
    Open Browser                        ${URL}                                                                            ${Browser}
    Maximize Browser Window
    Click Element                       //div[@class='row']//div[1]//div[1]//div[1]//div[2]//div[1]//div[2]//button[1]
    Page should contain                 Product added
    Set Selenium Implicit Wait          ${Sleep1}
    Sleep                               ${Sleep2}
    Click Element                       //div[4]//div[1]//div[1]//div[2]//div[1]//div[2]//button[1]
    Page should contain                 Product added
    Set Selenium Implicit Wait          ${Sleep1}
    Sleep                               ${Sleep2}
    Click Element                       //div[@class='iconButtonWrapper']//div[3]
    Sleep                               ${Sleep2}
    Click Element                       //button[@class='btn-lg btn-intersys btn-block']
    Element Should Be Disabled          //button[@class='btn checkout-btn']
    Input Text                          //input[@placeholder='Enter your name']                                           Andrés Hernández
    Input Text                          //input[@placeholder='Street']                                                    Avenida Providencia
    Input Text                          //input[@placeholder='Street number']                                             125
    Input Text                          //input[@placeholder='Country']                                                   México
    Input Text                          //input[@placeholder='State']                                                     Jalisco
    Input Text                          //input[@placeholder='City']                                                      Guadalajara
    Input Text                          //input[@placeholder='Zip Code']                                                  45037
    Input Text                          //input[@placeholder='Phone']                                                     3311226548
    Input Text                          //input[@placeholder='Email for order confirmation']                              ahernandez@intersysconsulting.com
    Sleep                               ${Sleep2}
    Element Should Be Enabled           //button[@class='btn checkout-btn']
    Click Element                       //button[@class='btn checkout-btn']


TC_002 Checkout card payment
    Click Element                       //input[@id='card']
    Wait Until Page Contains Element    //iframe[@name='stripe_checkout_app']
    Set Selenium Implicit Wait          ${Sleep5}
    Select Frame                        //iframe[@name='stripe_checkout_app']
    Input Text                          //input[@placeholder='Card number']                                               42424242424242424242
    Input Text                          //input[@placeholder='MM / YY']                                                   0821
    Input Text                          //input[@placeholder='CVC']                                                       791
    Input Text                          //input[@placeholder='ZIP Code']                                                  795
    Click Element                       //*[@id="container"]/section/span[2]/div/div/main/form/nav/div/div/div/button
    Unselect Frame
    Page should contain                 Thank you for shopping with us!
    Sleep                               ${Sleep2}
    Close Browser


