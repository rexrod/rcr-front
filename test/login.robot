***setting***
Library         ExtendedSelenium2Library
***Test case***
Open Google
        Open Google
*** Variables ***
${URLwelcome}           http://localhost:8080/login
${BROWSER}              chrome
${PESQUISA}             Teste robot framework

***Keyword***
Open Google
        Open Browser            ${URLwelcome}    ${BROWSER}
        #Input Text              lst-ib           ${PESQUISA}
        Input Text  id = enroll    teste    
        #Click Button    btnK