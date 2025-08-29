*** Settings ***
Resource    ../resources/number_conversion_keywords.robot
Library     XML

*** Test Cases ***
Test Number To Words
    ${response}=    Convert Number To Words    500
    ${result}=    Get Element Text    ${response.content}    .//m:NumberToWordsResult
    Should Be Equal    ${result}    five hundred

Test Number To Dollars
    ${response}=    Convert Number To Dollars    123.45
    ${result}=    Get Element Text    ${response.content}    .//m:NumberToDollarsResult
    Should Be Equal    ${result}    one hundred and twenty three dollars and forty five cents
