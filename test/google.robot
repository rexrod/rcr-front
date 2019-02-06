***setting***
Library         Selenium2Library
***Test case***
Open Google
        Open Google
*** Variables ***
#01Welcome Page
${URLwelcome}           https://www.google.com
${BROWSER}              chrome
${PESQUISA}             Teste robot framework

***Keyword***
Open Google
        Open Browser            ${URLwelcome}    ${BROWSER}
        #Input Text              lst-ib           ${PESQUISA}
        Input Text  name = q    Teste    
        Click Button    btnK