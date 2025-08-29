*** Settings ***
Library    RequestsLibrary
Library    XML

*** Variables ***
${BASE_URL}    https://www.dataaccess.com/webservicesserver/NumberConversion.wso

*** Keywords ***
Convert Number To Words
    [Arguments]    ${number}
    ${body}=    Catenate    SEPARATOR=\n
    ...    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
    ...       <soapenv:Header/>
    ...       <soapenv:Body>
    ...          <web:NumberToWords>
    ...             <web:ubiNum>${number}</web:ubiNum>
    ...          </web:NumberToWords>
    ...       </soapenv:Body>
    ...    </soapenv:Envelope>
    ${headers}=    Create Dictionary    Content-Type=text/xml
    ${response}=    POST    ${BASE_URL}    data=${body}    headers=${headers}
    RETURN    ${response}

Convert Number To Dollars
    [Arguments]    ${number}
    ${body}=    Catenate    SEPARATOR=\n
    ...    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.dataaccess.com/webservicesserver/">
    ...       <soapenv:Header/>
    ...       <soapenv:Body>
    ...          <web:NumberToDollars>
    ...             <web:dNum>${number}</web:dNum>.
    ...          </web:NumberToDollars>
    ...       </soapenv:Body>
    ...    </soapenv:Envelope>
    ${headers}=    Create Dictionary    Content-Type=text/xml
    ${response}=    POST    ${BASE_URL}    data=${body}    headers=${headers}
    RETURN    ${response}
